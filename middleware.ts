import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/propostas/session";

const LOGIN = "/propostas/login";
const OCEANA_PREFIX = "/propostas/oceana";

function isLocalPropostasBypass(): boolean {
  return (
    process.env.NODE_ENV === "development" &&
    process.env.PROPOSTAS_SKIP_AUTH === "true"
  );
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith(OCEANA_PREFIX)) {
    return NextResponse.next();
  }

  if (isLocalPropostasBypass()) {
    return NextResponse.next();
  }

  const isRestricted =
    pathname.includes("/detalhe") || pathname === "/propostas/oceana/guia-areas";
  if (isRestricted) {
    return NextResponse.redirect(new URL("/propostas/oceana", request.url));
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
