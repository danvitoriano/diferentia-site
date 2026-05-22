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
      <div className="card-surface w-full max-w-md rounded-2xl p-8">
        <p className="mb-1 text-xs font-medium uppercase tracking-widest text-[#E8B84B]">
          Área restrita
        </p>
        <h1 className="text-2xl font-bold text-[#F0F0FA]">Proposta Oceana</h1>
        <p className="mt-2 text-sm text-[#9090B0]">
          Informe login e senha para acessar a trilha de capacitação.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="user" className="mb-1 block text-sm text-[#9090B0]">
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
              className="w-full rounded-lg border border-[#1E1E2E] bg-[#0F0F1A] px-3 py-2 text-[#F0F0FA] outline-none focus:border-[#7C6FF7]"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm text-[#9090B0]">
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
              className="w-full rounded-lg border border-[#1E1E2E] bg-[#0F0F1A] px-3 py-2 text-[#F0F0FA] outline-none focus:border-[#7C6FF7]"
            />
          </div>
          {error ? <p className="text-sm text-red-400">{error}</p> : null}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#7C6FF7] py-2.5 font-medium text-white transition hover:bg-[#6a5ce6] disabled:opacity-60"
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
    <Suspense fallback={<div className="min-h-screen bg-[#080810]" />}>
      <LoginForm />
    </Suspense>
  );
}
