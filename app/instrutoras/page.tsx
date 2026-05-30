"use client";

import Link from "next/link";
import { useState, useTransition } from "react";

function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

const PROFILE_OPTIONS = [
  { value: "", label: "Selecione uma opção" },
  { value: "tecnologia", label: "Trabalho com tecnologia" },
  { value: "outra_area", label: "Venho de outra área" },
  { value: "estudante", label: "Sou estudante" },
  { value: "ja_dou_aula", label: "Já dou aula de algo" },
] as const;

const inputClass =
  "w-full rounded-lg border border-[#1E1E2E] bg-[#080810] px-4 py-3 text-sm text-white placeholder:text-[#4A4A6A] focus:border-[#7C6FF7] focus:outline-none transition-colors";

export default function InstrutorasPage() {
  const initialForm = {
    name: "",
    email: "",
    contact: "",
    profile: "",
    motivation: "",
  };
  const [showSuccessBadge, setShowSuccessBadge] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const [form, setForm] = useState(initialForm);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setShowSuccessBadge(false);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setShowSuccessBadge(false);
    startTransition(async () => {
      try {
        const res = await fetch("/api/waitlist/instrutoras", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          setError(data.error ?? "Erro ao enviar. Tente novamente.");
          return;
        }
        setForm(initialForm);
        setShowSuccessBadge(true);
      } catch {
        setError("Erro de conexão. Tente novamente.");
      }
    });
  }

  return (
    <div className="min-h-screen bg-[#080810] text-[#F0F0FA]">
      <header className="border-b border-[#1E1E2E]/60 bg-[#080810]/80 backdrop-blur-md">
        <div className="mx-auto max-w-2xl px-6 py-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
          >
            Diferentia
            <span className="text-[#7C6FF7]">.</span>
          </Link>
        </div>
      </header>

      <main className="relative py-16 md:py-24">
        <div
          aria-hidden
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,111,247,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative mx-auto max-w-2xl px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7C6FF7] mb-4 block">
              Braço social · DiferentIA
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Vire instrutora de IA e ensine o que o mercado mais quer aprender
            </h1>
            <p className="text-lg text-[#c5c0ff] mb-6 leading-relaxed">
              Um curso da DiferentIA para mulheres que querem dominar o Claude e
              os agentes de IA e transformar isso numa nova carreira, mesmo
              começando do zero.
            </p>
            <p className="text-[#9090B0] leading-relaxed">
              A IA agêntica criou uma profissão que quase ninguém ocupou ainda:
              a de quem sabe ensinar essas ferramentas de verdade. A gente vai
              te mostrar o caminho completo, de aprender a usar o Claude e
              construir agentes até dar aula, criar conteúdo e se posicionar
              como referência. Inicialmente para mulheres, porque essa porta
              precisa abrir para quem costuma ficar de fora dela. As vagas da
              primeira turma serão limitadas e quem está na lista entra primeiro.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#1E1E2E] bg-[#0F0F1A] p-8 space-y-5"
          >
            {showSuccessBadge && (
              <div
                role="status"
                className="flex justify-center sm:justify-start"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300">
                  <IconCheck className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                  Você entrou na lista. Avisaremos sobre a live e a primeira
                  turma.
                </span>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-[#9090B0] mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#9090B0] mb-2">
                  Melhor email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="voce@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#9090B0] mb-2">
                WhatsApp ou Instagram
              </label>
              <input
                type="text"
                name="contact"
                required
                value={form.contact}
                onChange={handleChange}
                placeholder="+55 (11) 99999-9999 ou @seuinstagram"
                className={inputClass}
              />
              <p className="mt-1.5 text-xs text-[#4A4A6A]">
                Para avisar sobre a live e a abertura da turma.
              </p>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#9090B0] mb-2">
                O que você faz hoje
              </label>
              <select
                name="profile"
                required
                value={form.profile}
                onChange={handleChange}
                className={`${inputClass} ${form.profile === "" ? "text-[#4A4A6A]" : ""}`}
              >
                {PROFILE_OPTIONS.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.value === ""}
                    className="bg-[#0F0F1A] text-white"
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#9090B0] mb-2">
                Por que você quer virar instrutora de IA{" "}
                <span className="text-[#4A4A6A] font-normal">(opcional)</span>
              </label>
              <textarea
                name="motivation"
                value={form.motivation}
                onChange={handleChange}
                rows={3}
                placeholder="Conte em poucas palavras..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {error && (
              <p className="text-xs text-red-400 text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full rounded-full bg-[#7C6FF7] py-3.5 text-sm font-semibold text-white hover:bg-[#5B54D6] transition-all hover:shadow-lg hover:shadow-[#7C6FF7]/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "Enviando..." : "Entrar na lista de espera"}
            </button>
          </form>
        </div>
      </main>

      <footer className="border-t border-[#1E1E2E]/60 py-8">
        <p className="text-center text-xs text-[#4A4A6A]">
          © {new Date().getFullYear()} Diferentia
        </p>
      </footer>
    </div>
  );
}
