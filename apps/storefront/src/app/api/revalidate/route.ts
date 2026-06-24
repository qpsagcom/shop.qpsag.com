import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

const SECRET = process.env.REVALIDATE_SECRET

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const secret = searchParams.get("secret")

  if (SECRET && secret !== SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 })
  }

  // Revalidate all pages that show products
  revalidatePath("/", "layout")

  return NextResponse.json({ revalidated: true })
}
