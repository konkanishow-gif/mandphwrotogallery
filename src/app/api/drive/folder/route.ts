import { NextRequest, NextResponse } from "next/server";
import { PhotoItem, SubfolderItem } from "@/data/driveCatalog";

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
  const folderId = searchParams.get("id");

  if (!folderId) {
    return NextResponse.json({ error: "Missing folder id" }, { status: 400 });
  }

  try {
    const html = await scrapeDriveFolder(folderId);
    let directPhotos = parsePhotosFromHtml(html);
    const subFolders = parseFoldersFromHtml(html);

    let allPhotos = [...directPhotos];
    const subfolderItems: SubfolderItem[] = [];

    // If folder contains subfolders (like Marathon Day 01-13 or Symposium Sessions)
    if (subFolders.length > 0) {
      await Promise.all(
        subFolders.map(async (sf) => {
          try {
            const sfHtml = await scrapeDriveFolder(sf.id);
            const sfPhotos = parsePhotosFromHtml(sfHtml);
            subfolderItems.push({
              id: sf.id,
              name: sf.name,
              slug: slugify(sf.name),
              shortTitle: sf.name.split("|")[0].trim(),
              photoCount: sfPhotos.length,
              coverPhoto: sfPhotos[0] || null,
              photos: sfPhotos,
            });
            allPhotos.push(...sfPhotos);
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
        })
      );
    }

    return NextResponse.json({
      folderId,
      photos: allPhotos,
      photoCount: allPhotos.length,
      hasSubfolders: subfolderItems.length > 0,
      subfolderCount: subfolderItems.length,
      subfolders: subfolderItems,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Live folder fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch live folder photos", details: String(error) },
      { status: 500 }
    );
  }
}
