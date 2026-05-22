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
    <div className="propostas-theme flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <div className="card-surface w-full max-w-md rounded-2xl p-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-600">
          Área restrita
        </p>
        <h1 className="text-2xl font-bold text-gray-900">Proposta Oceana</h1>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          Informe login e senha para acessar a trilha de capacitação.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="user" className="mb-1 block text-sm font-medium text-gray-700">
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
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none ring-violet-500 focus:border-violet-500 focus:ring-2"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
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
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none ring-violet-500 focus:border-violet-500 focus:ring-2"
            />
          </div>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-violet-600 py-2.5 font-medium text-white transition hover:bg-violet-700 disabled:opacity-60"
          >
            {loading ? "Entrando…" : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="propostas-theme min-h-screen bg-white" />}>
      <LoginForm />
    </Suspense>
  );
}
