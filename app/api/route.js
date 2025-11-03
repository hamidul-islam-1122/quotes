import { NextResponse } from "next/server";

export async function POST() {
  console.log("✅ API route hit!");
  const res = await fetch(" https://catfact.ninja/fact");
  const data = await res.json();
  const quote = Array.isArray(data) ? data[0] : data;
  return NextResponse.json(quote);
}
