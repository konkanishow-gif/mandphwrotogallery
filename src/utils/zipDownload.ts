import JSZip from "jszip";
import confetti from "canvas-confetti";
import { PhotoItem } from "@/data/driveCatalog";

export interface ZipProgressState {
  isDownloading: boolean;
  progressPercent: number;
  currentFileName: string;
  totalFiles: number;
  completedFiles: number;
  error?: string;
}

export async function downloadPhotosAsZip(
  photos: PhotoItem[],
  zipName: string,
  onProgress?: (state: ZipProgressState) => void
): Promise<void> {
  if (!photos || photos.length === 0) return;

  const zip = new JSZip();
  const folder = zip.folder(zipName.replace(/[^a-zA-Z0-9_-]/g, "_")) || zip;

  let completed = 0;
  const total = photos.length;

  onProgress?.({
    isDownloading: true,
    progressPercent: 5,
    currentFileName: "Initializing package...",
    totalFiles: total,
    completedFiles: 0,
  });

  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    onProgress?.({
      isDownloading: true,
      progressPercent: Math.round(((i + 1) / (total + 1)) * 90),
      currentFileName: photo.name,
      totalFiles: total,
      completedFiles: completed,
    });

    try {
      // Use previewUrl or fullUrl
      const downloadTarget = photo.fullUrl || photo.previewUrl;
      const resp = await fetch(downloadTarget, { mode: "cors" });
      if (!resp.ok) {
        throw new Error(`Failed to fetch ${photo.name}: ${resp.statusText}`);
      }
      const blob = await resp.blob();
      folder.file(photo.name, blob);
      completed++;
    } catch (err) {
      console.warn(`Direct fetch failed for ${photo.name}, attempting fallback...`, err);
      // Fallback: create a descriptive text descriptor or fallback data in zip
      folder.file(
        `${photo.name}.url.txt`,
        `High-resolution Photo Link:\n${photo.fullUrl}\nGoogle Drive ID: ${photo.id}`
      );
      completed++;
    }
  }

  onProgress?.({
    isDownloading: true,
    progressPercent: 95,
    currentFileName: "Compressing ZIP archive...",
    totalFiles: total,
    completedFiles: completed,
  });

  const zipBlob = await zip.generateAsync({
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: { level: 6 },
  });

  // Trigger browser download
  const blobUrl = URL.createObjectURL(zipBlob);
  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = `${zipName.replace(/\s+/g, "_")}.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(blobUrl);

  onProgress?.({
    isDownloading: false,
    progressPercent: 100,
    currentFileName: "Download Complete!",
    totalFiles: total,
    completedFiles: completed,
  });

  // Trigger celebration confetti
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
    });
  } catch {
    // Ignore if canvas is not supported
  }
}
