import { PhotoItem, AlbumItem, EVENT_DETAILS } from "@/data/driveCatalog";

/**
 * WhatsApp Click-to-Chat URL generator
 * Format: https://api.whatsapp.com/send?text=ENCODED_TEXT
 */

export function sharePhotoOnWhatsApp(photo: PhotoItem, album: AlbumItem) {
  const currentOrigin =
    typeof window !== "undefined" ? window.location.origin : "https://konkani-music-photos.techharmonix.com";

  const message = `🎶 *${EVENT_DETAILS.title}* (${EVENT_DETAILS.dates})
🏛️ *Organized by:* ${EVENT_DETAILS.organizer}
📁 *Album:* ${album.name}
📸 *Photograph:* ${photo.name}

✨ Check out this beautiful photograph from the 1st World Konkani Music Mega Convention!

🔗 *View & Download Full HD Photo:*
${photo.previewUrl}

🌐 *Visit Official Photo Archive:*
${currentOrigin}/album/${album.slug}

_Powered by Google Drive & Techharmonix_`;

  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function shareAlbumOnWhatsApp(album: AlbumItem) {
  const currentOrigin =
    typeof window !== "undefined" ? window.location.origin : "https://konkani-music-photos.techharmonix.com";

  const message = `✨ *${album.name}*
🎶 *${EVENT_DETAILS.title}*
📍 *Venue:* ${album.location}
📅 *Date:* ${album.date}
📸 *Collection:* ${album.photoCount} High-Resolution Photographs
🏛️ *Presented by:* ${EVENT_DETAILS.organizer}

Explore all official high-definition photographs, preview moments, and download photos directly:
🔗 ${currentOrigin}/album/${album.slug}

_Official Photography Library by Techharmonix_`;

  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function shareSelectedPhotosOnWhatsApp(
  selectedPhotos: PhotoItem[],
  album: AlbumItem
) {
  const currentOrigin =
    typeof window !== "undefined" ? window.location.origin : "https://konkani-music-photos.techharmonix.com";

  const photoLinks = selectedPhotos
    .slice(0, 3)
    .map((p, i) => `${i + 1}. ${p.name}: ${p.previewUrl}`)
    .join("\n");

  const moreCount = selectedPhotos.length > 3 ? `\n...and ${selectedPhotos.length - 3} more photos!` : "";

  const message = `📸 *Selected ${selectedPhotos.length} Photos from ${album.name}*
🎶 *${EVENT_DETAILS.title}*
🏛️ *Mandd Sobhann - Mangalore*

Here are the selected high-resolution photographs:
${photoLinks}${moreCount}

🔗 *View Full Collection:*
${currentOrigin}/album/${album.slug}

_Shared via Official Event Photo Library_`;

  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
