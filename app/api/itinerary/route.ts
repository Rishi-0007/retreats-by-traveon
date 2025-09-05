import { NextRequest, NextResponse } from "next/server";

// NOTE: Stub endpoint. Replace with real PDF generation.
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug") || "package";
  const pdfContent = `PDF itinerary for ${slug} will be generated here.`;
  return new NextResponse(pdfContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": `attachment; filename="${slug}-itinerary.txt"`,
    },
  });
}
