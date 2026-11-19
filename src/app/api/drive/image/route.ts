import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const sz = searchParams.get("sz") || "1000";

  if (!id) {
    return NextResponse.json({ error: "Missing image id" }, { status: 400 });
  }

  // Try Google Drive thumbnail and download endpoints
  const endpoints = [
    `https://drive.google.com/thumbnail?id=${id}&sz=w${sz}`,
    `https://lh3.googleusercontent.com/d/${id}=s${sz}`,
    `https://drive.google.com/uc?export=view&id=${id}`,
  ];

  for (const url of endpoints) {
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        cache: "force-cache",
      });

      if (response.ok) {
        const contentType = response.headers.get("content-type") || "image/jpeg";
        const buffer = await response.arrayBuffer();

        return new NextResponse(buffer, {
          status: 200,
          headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
          },
        });
      }
    } catch {
      // Try next endpoint
    }
  }

  return NextResponse.json({ error: "Image not available" }, { status: 502 });
}
