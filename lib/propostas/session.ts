export const SESSION_COOKIE = "propostas_session";
const SESSION_MAX_AGE_SEC = 60 * 60 * 24 * 7;

function getSecret(): string {
  const secret = process.env.PROPOSTAS_SESSION_SECRET;
  if (!secret || secret.length < 16) {
    throw new Error("PROPOSTAS_SESSION_SECRET must be set (min 16 chars)");
  }
  return secret;
}

function bufferToBase64Url(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmacSign(message: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(message)
  );
  return bufferToBase64Url(sig);
}

export async function createSessionToken(): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_SEC;
  const payload = JSON.stringify({ exp, role: "propostas" });
  const payloadB64 = btoa(payload).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  const sig = await hmacSign(payloadB64, getSecret());
  return `${payloadB64}.${sig}`;
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token || !token.includes(".")) return false;
  const [payloadB64, sig] = token.split(".");
  if (!payloadB64 || !sig) return false;
  try {
    const expected = await hmacSign(payloadB64, getSecret());
    if (sig.length !== expected.length) return false;
    let diff = 0;
    for (let i = 0; i < sig.length; i++) diff |= sig.charCodeAt(i) ^ expected.charCodeAt(i);
    if (diff !== 0) return false;
    const json = atob(payloadB64.replace(/-/g, "+").replace(/_/g, "/"));
    const payload = JSON.parse(json) as { exp?: number };
    if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) return false;
    return true;
  } catch {
    return false;
  }
}

export function sessionCookieOptions(token: string) {
  const secure = process.env.NODE_ENV === "production";
  return {
    name: SESSION_COOKIE,
    value: token,
    httpOnly: true,
    secure,
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_MAX_AGE_SEC,
  };
}
