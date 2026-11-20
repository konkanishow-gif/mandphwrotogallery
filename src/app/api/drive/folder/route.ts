import { NextRequest, NextResponse } from "next/server";
import { ALBUMS_DATA, PhotoItem, SubfolderItem } from "@/data/driveCatalog";

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
        thumbUrl: `https://lh3.googleusercontent.com/d/${cleanId}=s400`,
        previewUrl: `https://lh3.googleusercontent.com/d/${cleanId}=w1600`,
        fullUrl: `https://lh3.googleusercontent.com/d/${cleanId}=w2400`,
        downloadUrl: `https://drive.google.com/uc?export=download&id=${cleanId}`,
        aspectRatio: "3/2",
      });
    }
  }
  return photos;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const folderId = searchParams.get("id");

  if (!folderId) {
    return NextResponse.json({ error: "Missing folder id" }, { status: 400 });
  }

  // Find baseline album or subfolder from master catalog
  let baselineAlbum = ALBUMS_DATA.find((a) => a.id === folderId);
  let baselinePhotos: PhotoItem[] = [];

  if (baselineAlbum) {
    baselinePhotos = baselineAlbum.photos || [];
  } else {
    // Search subfolders
    for (const a of ALBUMS_DATA) {
      if (a.subfolders) {
        const sf = a.subfolders.find((s) => s.id === folderId);
        if (sf) {
          baselinePhotos = sf.photos || [];
          break;
        }
      }
    }
  }

  try {
    const html = await scrapeDriveFolder(folderId);
    const scrapedPhotos = parsePhotosFromHtml(html);

    // Merge any brand new photos without ever discarding the complete catalog photos
    const existingIds = new Set(baselinePhotos.map((p) => p.id));
    const newPhotos = scrapedPhotos.filter((p) => !existingIds.has(p.id));
    const mergedPhotos = newPhotos.length > 0 ? [...newPhotos, ...baselinePhotos] : baselinePhotos;

    return NextResponse.json({
      folderId,
      photos: mergedPhotos,
      photoCount: mergedPhotos.length,
      hasSubfolders: baselineAlbum?.hasSubfolders || false,
      subfolderCount: baselineAlbum?.subfolderCount || 0,
      subfolders: baselineAlbum?.subfolders || [],
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    // Fall back safely to master catalog photos
    return NextResponse.json({
      folderId,
      photos: baselinePhotos,
      photoCount: baselinePhotos.length,
      hasSubfolders: baselineAlbum?.hasSubfolders || false,
      subfolderCount: baselineAlbum?.subfolderCount || 0,
      subfolders: baselineAlbum?.subfolders || [],
      updatedAt: new Date().toISOString(),
      fallback: true,
    });
  }
}
