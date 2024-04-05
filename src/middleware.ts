import { NextResponse, type NextRequest } from "next/server"
import { defaultSettings, settingsKeys } from "@/lib"

export function middleware(req: NextRequest) {
  // console.log('pathname:', req.nextUrl.pathname)

  const res = NextResponse.next()

  const cookies = req.cookies.getAll()

  const hasSavedPartySize = settingsKeys.partySize in cookies
  const hasSavedHungerLevel = settingsKeys.hungerLevel in cookies

  if (!hasSavedPartySize) {
    res.cookies.set(
      settingsKeys.partySize, 
      JSON.stringify(defaultSettings.partySize)
    )
  }

  if (!hasSavedHungerLevel) {
    res.cookies.set(
      settingsKeys.hungerLevel, 
      JSON.stringify(defaultSettings.hungerLevel)
    )
  }

  return res
}

export const config = {
  matcher: '/'
}