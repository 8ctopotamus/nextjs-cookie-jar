import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  // console.log('pathname:', req.nextUrl.pathname)
  const res = NextResponse.next()
  
  
  const cookie = req.cookies.get('userZip')


  console.log('saved cookie: ', cookie)

  return 
}

// @key - we'd need matchers for the routes where we want to use cookies /shop/:path*, /inventory/:path*, /land-homes/:path*, etc
// https://nextjs.org/docs/pages/building-your-application/routing/middleware#matching-paths
export const config = {
  matcher: '/' // matching the home route for now
}