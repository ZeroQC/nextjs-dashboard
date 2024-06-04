import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  console.log(searchParams)
  return new Response('ddd', { status: 201 })
  // return Response.json({ searchParams })
}