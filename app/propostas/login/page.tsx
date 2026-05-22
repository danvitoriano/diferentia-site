"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function LoginForm() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/propostas/oceana";
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/propostas/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, password, next }),
      });
      const data = (await res.json()) as { error?: string; next?: string };
      if (!res.ok) {
        setError(data.error ?? "Erro ao entrar");
        return;
      }
      window.location.href = data.next ?? "/propostas/oceana";
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="md-card w-full max-w-md p-8">
        <p className="md-label-large">Área restrita</p>
        <h1 className="mt-2 md-headline-small">Proposta Oceana</h1>
        <p className="mt-2 md-body-large">
          Informe login e senha para acessar a trilha de capacitação.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="user" className="md-label">
              Usuário
            </label>
            <input
              id="user"
              name="user"
              type="text"
              autoComplete="username"
              required
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="md-text-field"
            />
          </div>
          <div>
            <label htmlFor="password" className="md-label">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="md-text-field"
            />
          </div>
          {error ? <p className="md-error-text">{error}</p> : null}
          <button type="submit" disabled={loading} className="md-filled-button w-full">
            {loading ? "Entrando…" : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center md-body-medium">
          Carregando…
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
