import { NextResponse } from "next/server";
import { incrementClickCount } from "@/lib/clicks";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const count = await incrementClickCount(id);
  return NextResponse.json({ id, count });
}
