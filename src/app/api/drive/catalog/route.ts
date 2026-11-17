import { NextResponse } from "next/server";
import { ALBUMS_DATA, AlbumItem, PhotoItem, EVENT_DETAILS } from "@/data/driveCatalog";

// In-memory cache for live scraped catalog
let cachedCatalog: AlbumItem[] | null = null;
let lastCacheTime = 0;
const CACHE_TTL = 60 * 1000; // 1 minute live refresh

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}

async function scrapeDriveFolder(folderId: string): Promise<string> {
  const url = `https://drive.google.com/drive/folders/${folderId}?usp=sharing`;
  const response = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
    next: { revalidate: 60 },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch Drive folder ${folderId}: ${response.status}`);
  }
  return await response.text();
}

function parseFoldersFromHtml(html: string): Array<{ name: string; id: string }> {
  const folderRegex = /aria-label="([^"]+)\s+Shared folder"[^>]*ssk=['"][^'"]*?:([A-Za-z0-9_-]{20,})/g;
  const folders: Array<{ name: string; id: string }> = [];
  const seenIds = new Set<string>();

  let match;
  while ((match = folderRegex.exec(html)) !== null) {
    const rawName = match[1];
    const rawId = match[2];
    const cleanName = rawName
      .replace(/&amp;/g, "&")
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"')
      .trim();
    const cleanId = rawId.split("-")[0];

    if (!seenIds.has(cleanId)) {
      seenIds.add(cleanId);
      folders.push({ name: cleanName, id: cleanId });
    }
  }
  return folders;
}

function parsePhotosFromHtml(html: string): PhotoItem[] {
  const photoRegex = /aria-label="([^"]+\.(?:JPG|jpg|PNG|png|JPEG|jpeg))\s+Image\s+Shared"[^>]*ssk=['"][^'"]*?:([A-Za-z0-9_-]{20,})/g;
  const photos: PhotoItem[] = [];
  const seenIds = new Set<string>();

  let match;
  while ((match = photoRegex.exec(html)) !== null) {
    const rawName = match[1];
    const rawId = match[2];
    const cleanId = rawId.split("-")[0];

    if (!seenIds.has(cleanId)) {
      seenIds.add(cleanId);
      photos.push({
        id: cleanId,
        name: rawName,
        thumbUrl: `https://lh3.googleusercontent.com/d/${cleanId}=s800`,
        previewUrl: `https://lh3.googleusercontent.com/d/${cleanId}=s1920`,
        fullUrl: `https://lh3.googleusercontent.com/d/${cleanId}=s0`,
        downloadUrl: `https://drive.google.com/uc?export=download&id=${cleanId}`,
        aspectRatio: "3/2",
      });
    }
  }
  return photos;
}

export async function GET() {
  const now = Date.now();
  if (cachedCatalog && now - lastCacheTime < CACHE_TTL) {
    return NextResponse.json({
      albums: cachedCatalog,
      source: "cache",
      event: EVENT_DETAILS,
    });
  }

  try {
    const rootHtml = await scrapeDriveFolder(EVENT_DETAILS.rootDriveFolderId);
    const driveFolders = parseFoldersFromHtml(rootHtml);

    // Merge with known curated albums
    const liveCatalog: AlbumItem[] = [];

    // First process existing albums in ALBUMS_DATA
    for (const existingAlbum of ALBUMS_DATA) {
      liveCatalog.push(existingAlbum);
    }

    // Now check if any new folders were created on Google Drive that aren't yet in ALBUMS_DATA
    for (const driveFolder of driveFolders) {
      const alreadyExists = liveCatalog.some(
        (a) => a.id === driveFolder.id || a.name.toLowerCase() === driveFolder.name.toLowerCase()
      );

      if (!alreadyExists) {
        // Automatically fetch newly created folder's photos
        let newPhotos: PhotoItem[] = [];
        try {
          const subHtml = await scrapeDriveFolder(driveFolder.id);
          newPhotos = parsePhotosFromHtml(subHtml);
        } catch {
          newPhotos = [];
        }

        const newAlbum: AlbumItem = {
          id: driveFolder.id,
          slug: slugify(driveFolder.name),
          name: driveFolder.name,
          shortTitle: driveFolder.name.replace(/^\d+\s*-\s*/, ""),
          category: "Live Updates",
          date: "Nov 2026",
          location: "Kalaangann, Mangalore",
          photographer: "Mandd Sobhann Media Cell",
          description: `Live synchronized album from Google Drive folder: ${driveFolder.name}`,
          driveFolderUrl: `https://drive.google.com/drive/folders/${driveFolder.id}`,
          photoCount: newPhotos.length,
          coverPhoto: newPhotos[0] || null,
          photos: newPhotos,
          isDriveConnected: true,
          year: 2026,
          hasLivePhotos: newPhotos.length > 0,
        };

        liveCatalog.push(newAlbum);
      }
    }

    cachedCatalog = liveCatalog;
    lastCacheTime = now;

    return NextResponse.json({
      albums: liveCatalog,
      source: "live_drive",
      event: EVENT_DETAILS,
      count: liveCatalog.length,
    });
  } catch (error) {
    console.error("Live Drive sync error:", error);
    // Fallback safely to compiled ALBUMS_DATA
    return NextResponse.json({
      albums: ALBUMS_DATA,
      source: "fallback_static",
      event: EVENT_DETAILS,
      error: String(error),
    });
  }
}
