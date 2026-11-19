import { NextRequest, NextResponse } from "next/server";
import { ALBUMS_DATA, AlbumItem, PhotoItem, SubfolderItem, EVENT_DETAILS } from "@/data/driveCatalog";

// In-memory cache for live scraped catalog
let cachedCatalog: AlbumItem[] | null = null;
let lastCacheTime = 0;
const CACHE_TTL = 12 * 1000; // 12-second live auto-sync refresh

function extractCleanId(sskOrStr: string): string {
  const parts = sskOrStr.split(":");
  const last = parts[parts.length - 1];
  return last.replace(/-\d+-\d+$/, "");
}

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
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch Drive folder ${folderId}: ${response.status}`);
  }
  return await response.text();
}

function parseFoldersFromHtml(html: string): Array<{ name: string; id: string }> {
  const folderRegex =
    /aria-label="([^"]+)\s+Shared folder"[^>]*ssk=['"]([^'"]+)/g;
  const folders: Array<{ name: string; id: string }> = [];
  const seenIds = new Set<string>();

  let match;
  while ((match = folderRegex.exec(html)) !== null) {
    const rawName = match[1];
    const rawSsk = match[2];
    const cleanName = rawName
      .replace(/&amp;/g, "&")
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"')
      .trim();
    const cleanId = extractCleanId(rawSsk);

    if (cleanId && !seenIds.has(cleanId)) {
      seenIds.add(cleanId);
      folders.push({ name: cleanName, id: cleanId });
    }
  }
  return folders;
}

function parsePhotosFromHtml(html: string): PhotoItem[] {
  const photoRegex =
    /aria-label="([^"]+\.(?:JPG|jpg|PNG|png|JPEG|jpeg|WEBP|webp))\s+Image\s+Shared"[^>]*ssk=['"]([^'"]+)/g;
  const photos: PhotoItem[] = [];
  const seenIds = new Set<string>();

  let match;
  while ((match = photoRegex.exec(html)) !== null) {
    const rawName = match[1];
    const rawSsk = match[2];
    const cleanId = extractCleanId(rawSsk);

    if (cleanId && !seenIds.has(cleanId)) {
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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const forceRefresh =
    searchParams.get("refresh") === "true" ||
    searchParams.get("refresh") === "1" ||
    searchParams.get("autosync") === "1";

  const now = Date.now();
  if (!forceRefresh && cachedCatalog && now - lastCacheTime < CACHE_TTL) {
    const totalPhotos = cachedCatalog.reduce((sum, a) => sum + (a.photoCount || a.photos.length), 0);
    return NextResponse.json({
      albums: cachedCatalog,
      totalPhotos,
      totalAlbums: cachedCatalog.length,
      source: "cache",
      event: {
        ...EVENT_DETAILS,
        totalPhotosCount: totalPhotos,
        totalPhotos,
        totalAlbums: cachedCatalog.length,
      },
      count: cachedCatalog.length,
      updatedAt: new Date(lastCacheTime).toISOString(),
    });
  }

  try {
    const rootHtml = await scrapeDriveFolder(EVENT_DETAILS.rootDriveFolderId);
    const driveFolders = parseFoldersFromHtml(rootHtml);

    // Map baseline known root albums by ID
    const albumMap = new Map<string, AlbumItem>();
    for (const album of ALBUMS_DATA) {
      albumMap.set(album.id, { ...album });
    }

    // Concurrently inspect every root folder in Google Drive
    await Promise.all(
      driveFolders.map(async (driveFolder) => {
        const existing = albumMap.get(driveFolder.id);

        try {
          const subHtml = await scrapeDriveFolder(driveFolder.id);
          const directPhotos = parsePhotosFromHtml(subHtml);
          const subFolders = parseFoldersFromHtml(subHtml);

          if (existing) {
            // Update name in case it changed in Google Drive
            existing.name = driveFolder.name;
            existing.shortTitle = driveFolder.name.replace(/^\d+\s*-\s*/, "").split("(")[0].trim();

            // If direct photos are found in Google Drive, update album photos live!
            if (directPhotos.length > 0) {
              existing.photos = directPhotos;
              existing.photoCount = directPhotos.length;
              existing.coverPhoto = directPhotos[0] || existing.coverPhoto;
              existing.hasLivePhotos = true;
            }

            // If folder has subfolders in Google Drive (like Marathon or Symposium)
            if (subFolders.length > 0) {
              existing.hasSubfolders = true;
              existing.subfolderCount = subFolders.length;
              // If existing subfolder objects are present, preserve them; otherwise create stubs
              if (!existing.subfolders || existing.subfolders.length === 0) {
                existing.subfolders = subFolders.map((sf) => ({
                  id: sf.id,
                  name: sf.name,
                  slug: slugify(sf.name),
                  shortTitle: sf.name.split("|")[0].trim(),
                  photoCount: 0,
                  coverPhoto: null,
                  photos: [],
                }));
              }
            }
          } else {
            // Brand new folder created in Google Drive!
            const subfolderItems: SubfolderItem[] = [];
            const allPhotos = [...directPhotos];

            // If new folder has subfolders, fetch them
            for (const sf of subFolders) {
              try {
                const sfHtml = await scrapeDriveFolder(sf.id);
                const sfPhotos = parsePhotosFromHtml(sfHtml);
                allPhotos.push(...sfPhotos);
                subfolderItems.push({
                  id: sf.id,
                  name: sf.name,
                  slug: slugify(sf.name),
                  shortTitle: sf.name.split("|")[0].trim(),
                  photoCount: sfPhotos.length,
                  coverPhoto: sfPhotos[0] || null,
                  photos: sfPhotos,
                });
              } catch {
                subfolderItems.push({
                  id: sf.id,
                  name: sf.name,
                  slug: slugify(sf.name),
                  shortTitle: sf.name.split("|")[0].trim(),
                  photoCount: 0,
                  coverPhoto: null,
                  photos: [],
                });
              }
            }

            const newAlbum: AlbumItem = {
              id: driveFolder.id,
              name: driveFolder.name,
              slug: slugify(driveFolder.name),
              shortTitle: driveFolder.name.replace(/^\d+\s*-\s*/, "").split("(")[0].trim(),
              category: "Live Updates",
              date: "Nov 2026",
              location: "Kalaangann, Mangalore",
              photographer: "Mandd Sobhann Media Cell",
              description: `Live synchronized album from Google Drive folder: ${driveFolder.name}`,
              driveFolderUrl: `https://drive.google.com/drive/folders/${driveFolder.id}`,
              photoCount: allPhotos.length,
              hasSubfolders: subfolderItems.length > 0,
              subfolderCount: subfolderItems.length,
              subfolders: subfolderItems,
              coverPhoto: allPhotos[0] || null,
              photos: allPhotos,
              isDriveConnected: true,
              year: 2026,
              hasLivePhotos: allPhotos.length > 0,
            };

            albumMap.set(driveFolder.id, newAlbum);
          }
        } catch (err) {
          console.warn(`Error scanning folder ${driveFolder.id} (${driveFolder.name}):`, err);
        }
      })
    );

    const liveCatalog = Array.from(albumMap.values());
    cachedCatalog = liveCatalog;
    lastCacheTime = now;

    const totalPhotos = liveCatalog.reduce((sum, a) => sum + (a.photoCount || a.photos.length), 0);

    return NextResponse.json({
      albums: liveCatalog,
      totalPhotos,
      totalAlbums: liveCatalog.length,
      source: "live_drive",
      event: {
        ...EVENT_DETAILS,
        totalPhotosCount: totalPhotos,
        totalPhotos,
        totalAlbums: liveCatalog.length,
      },
      count: liveCatalog.length,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Live Drive sync error:", error);
    const fallbackTotal = ALBUMS_DATA.reduce((sum, a) => sum + a.photoCount, 0);
    return NextResponse.json({
      albums: ALBUMS_DATA,
      totalPhotos: fallbackTotal,
      totalAlbums: ALBUMS_DATA.length,
      source: "fallback_static",
      event: {
        ...EVENT_DETAILS,
        totalPhotosCount: fallbackTotal,
        totalPhotos: fallbackTotal,
        totalAlbums: ALBUMS_DATA.length,
      },
      error: String(error),
      updatedAt: new Date().toISOString(),
    });
  }
}
