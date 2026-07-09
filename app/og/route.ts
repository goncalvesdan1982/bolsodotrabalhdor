import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.redirect(new URL('/og-image.png', process.env.SITE_URL || 'https://www.bolsodotrabalhador.online'), 308)
}
