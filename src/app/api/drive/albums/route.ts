import { NextResponse } from "next/server";
import { ALBUMS_DATA, EVENT_DETAILS } from "@/data/driveCatalog";

export async function GET() {
  return NextResponse.json({
    event: EVENT_DETAILS,
    albums: ALBUMS_DATA,
  });
}
