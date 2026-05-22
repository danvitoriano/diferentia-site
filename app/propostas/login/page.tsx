"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useRef, useState } from "react";

function LoginForm() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/propostas/oceana";
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const form = formRef.current;
      const user = (
        form?.querySelector('md-outlined-text-field[name="user"]') as HTMLElement & {
          value: string;
        }
      )?.value;
      const password = (
        form?.querySelector('md-outlined-text-field[name="password"]') as HTMLElement & {
          value: string;
        }
      )?.value;

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
      <div className="mw-login-card">
        <p className="mw-label-large">Área restrita</p>
        <h1 className="mw-display-small" style={{ marginTop: "0.5rem", fontSize: "1.5rem" }}>
          Proposta Oceana
        </h1>
        <p className="mw-body-large" style={{ marginTop: "0.5rem" }}>
          Informe login e senha para acessar a trilha de capacitação.
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="mw-form-stack">
          <md-outlined-text-field label="Usuário" name="user" required />
          <md-outlined-text-field label="Senha" name="password" type="password" required />
          {error ? <p className="mw-error-text">{error}</p> : null}
          <md-filled-button type="submit" disabled={loading} style={{ width: "100%" }}>
            {loading ? "Entrando…" : "Entrar"}
          </md-filled-button>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center mw-body-medium">
          Carregando…
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
