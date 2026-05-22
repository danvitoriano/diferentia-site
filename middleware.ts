import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/propostas/session";

const LOGIN = "/propostas/login";
const OCEANA_PREFIX = "/propostas/oceana";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/propostas/oceana")) {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  let valid = false;
  try {
    valid = await verifySessionToken(token);
  } catch {
    valid = false;
  }

  if (valid) {
    return NextResponse.next();
  }

  const loginUrl = new URL(LOGIN, request.url);
  loginUrl.searchParams.set("next", pathname + request.nextUrl.search);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/propostas/oceana", "/propostas/oceana/:path*"],
};
