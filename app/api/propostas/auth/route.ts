import { NextResponse } from "next/server";
import { validateCredentials, isSafeNextPath } from "@/lib/propostas/auth";
import { createSessionToken, sessionCookieOptions } from "@/lib/propostas/session";

export async function POST(request: Request) {
  let body: { user?: string; password?: string; next?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const user = body.user?.trim() ?? "";
  const password = body.password ?? "";

  if (!validateCredentials(user, password)) {
    return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
  }

  const token = await createSessionToken();
  const response = NextResponse.json({ ok: true, next: isSafeNextPath(body.next) });
  const opts = sessionCookieOptions(token);
  response.cookies.set(opts.name, opts.value, {
    httpOnly: opts.httpOnly,
    secure: opts.secure,
    sameSite: opts.sameSite,
    path: opts.path,
    maxAge: opts.maxAge,
  });
  return response;
}
