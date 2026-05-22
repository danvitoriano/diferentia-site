const PROPOSTAS_PREFIX = "/propostas";

export function isSafeNextPath(next: string | null | undefined): string {
  if (!next || !next.startsWith(PROPOSTAS_PREFIX)) return "/propostas/oceana";
  if (next.startsWith("//") || next.includes("://")) return "/propostas/oceana";
  return next;
}

export function validateCredentials(user: string, password: string): boolean {
  const expectedUser = process.env.PROPOSTAS_AUTH_USER;
  const expectedPassword = process.env.PROPOSTAS_AUTH_PASSWORD;
  if (!expectedUser || !expectedPassword) return false;
  return user === expectedUser && password === expectedPassword;
}
