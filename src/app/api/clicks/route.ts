import { NextResponse } from "next/server";
import { getAllClickCounts } from "@/lib/clicks";

export async function GET() {
  const counts = await getAllClickCounts();
  return NextResponse.json(counts);
}
