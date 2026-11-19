import { NextRequest, NextResponse } from "next/server";
import { EVENT_DETAILS } from "@/data/driveCatalog";

export async function GET(request: NextRequest) {
  try {
    const origin = request.nextUrl.origin;
    const res = await fetch(`${origin}/api/drive/catalog?refresh=1`, {
      cache: "no-store",
    });
    const data = await res.json();

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      rootFolderId: EVENT_DETAILS.rootDriveFolderId,
      totalAlbums: data?.totalAlbums || data?.albums?.length || 0,
      totalPhotos: data?.totalPhotos || 0,
      albums: data?.albums || [],
      status: "Synchronized live with Google Drive",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to auto-sync" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  return GET(request);
}
