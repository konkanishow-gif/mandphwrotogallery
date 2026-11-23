import { ALBUMS_DATA } from "@/data/driveCatalog";
import AlbumDetailClient from "./AlbumDetailClient";

export function generateStaticParams() {
  return ALBUMS_DATA.map((album) => ({
    slug: album.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <AlbumDetailClient initialSlug={slug} />;
}
