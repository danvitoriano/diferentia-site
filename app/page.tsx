"use client";

import { useState } from "react";

// ─────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────
function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1E1E2E]/60 bg-[#080810]/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight text-white">
          Diferentia
          <span className="text-[#7C6FF7]">.</span>
        </span>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#9090B0]">
          <a href="#problema" className="hover:text-white transition-colors">
            O problema
          </a>
          <a href="#metodologia" className="hover:text-white transition-colors">
            Metodologia
          </a>
          <a href="#resultados" className="hover:text-white transition-colors">
            Resultados
          </a>
        </nav>
        <a
          href="#contato"
          className="rounded-full bg-[#7C6FF7] px-5 py-2 text-sm font-medium text-white hover:bg-[#5B54D6] transition-colors"
        >
          Agendar diagnóstico
        </a>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Glow de fundo */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(124,111,247,0.18), transparent)",
        }}
      />
      {/* Grid decorativo */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#7C6FF7 1px, transparent 1px), linear-gradient(90deg, #7C6FF7 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#7C6FF7]/30 bg-[#7C6FF7]/10 px-4 py-1.5 text-xs font-medium text-[#c5c0ff] mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7C6FF7] animate-pulse" />
          Metodologia proprietária para o setor financeiro
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          <span className="text-gradient">IA que o mercado</span>
          <br />
          <span className="text-white">financeiro sabe usar.</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg md:text-xl text-[#9090B0] leading-relaxed mb-10">
          A Diferentia transforma times de fundos, gestoras e fintechs em
          equipes que operam com inteligência artificial — do diagnóstico de
          maturidade à autonomia operacional.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contato"
            className="rounded-full bg-[#7C6FF7] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#5B54D6] transition-all hover:shadow-lg hover:shadow-[#7C6FF7]/25"
          >
            Agendar diagnóstico gratuito
          </a>
          <a
            href="#metodologia"
            className="rounded-full border border-[#1E1E2E] px-8 py-3.5 text-sm font-medium text-[#9090B0] hover:border-[#7C6FF7]/40 hover:text-white transition-all"
          >
            Ver metodologia
          </a>
        </div>

        {/* Métricas rápidas */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "4 fases", label: "Metodologia estruturada" },
            { value: "10 sem.", label: "Da adoção à autonomia" },
            { value: "100%", label: "Aplicado ao setor financeiro" },
            { value: "0 genérico", label: "Cada empresa é um caso" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-[#1E1E2E] bg-[#0F0F1A]/60 p-5 text-left"
            >
              <div className="text-2xl font-bold text-white mb-1">{m.value}</div>
              <div className="text-xs text-[#9090B0]">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PROBLEMA
// ─────────────────────────────────────────────
function Problem() {
  const problems = [
    {
      icon: "⚡",
      title: "Ferramentas sem direção",
      body: "Empresas adotam ChatGPT e outras IAs sem metodologia. O resultado é uso superficial, frustração e nenhuma mudança real no processo.",
    },
    {
      icon: "📋",
      title: "Treinamentos genéricos",
      body: "Capacitações desconectadas da realidade do setor financeiro não geram adoção. O time assiste, volta para a mesa e continua como antes.",
    },
    {
      icon: "🔒",
      title: "Tecnologia sem adoção",
      body: "Investir em IA sem preparar a equipe é queimar dinheiro. A tecnologia só gera retorno quando as pessoas sabem integrá-la ao fluxo real de trabalho.",
    },
  ];

  return (
    <section id="problema" className="py-28 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7C6FF7] mb-4 block">
            O problema
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Por que a IA ainda não funcionou
            <br />
            <span className="text-[#9090B0]">para a sua empresa</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[#1E1E2E] bg-[#0F0F1A] p-8 hover:border-[#7C6FF7]/30 transition-colors"
            >
              <div className="text-3xl mb-5">{p.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {p.title}
              </h3>
              <p className="text-[#9090B0] text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// METODOLOGIA
// ─────────────────────────────────────────────
function Method() {
  const steps = [
    {
      n: "01",
      title: "Diagnóstico de maturidade",
      body: "Mapeamos processos, nível da equipe e oportunidades de automação reais. Nada é assumido — tudo é medido.",
      detail: "Questionário + entrevistas individuais + análise de stack",
    },
    {
      n: "02",
      title: "Roadmap personalizado",
      body: "Definimos quais ferramentas e automações têm maior impacto para o seu contexto específico. Prioridade por retorno real.",
      detail: "Plano de ação por pessoa + por processo + por área",
    },
    {
      n: "03",
      title: "Capacitação prática",
      body: "Sessões focadas em uso real, não teoria. O time aprende fazendo — com casos do próprio trabalho como material.",
      detail: "Sessões individuais + coletivas + desafio prático",
    },
    {
      n: "04",
      title: "Autonomia e escala",
      body: "A equipe sai capaz de identificar e implementar novas automações de forma independente. O objetivo é dispensar a Diferentia.",
      detail: "Base de conhecimento interna + biblioteca de processos",
    },
  ];

  return (
    <section id="metodologia" className="py-28 relative">
      {/* Glow lateral */}
      <div
        aria-hidden
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,111,247,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7C6FF7] mb-4 block">
            Metodologia
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Do diagnóstico à autonomia
            <br />
            <span className="text-[#9090B0]">em 4 fases</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group rounded-2xl border border-[#1E1E2E] bg-[#0F0F1A] p-8 hover:border-[#7C6FF7]/40 transition-all hover:bg-[#0F0F1A]"
            >
              <div className="flex items-start gap-5">
                <span className="text-4xl font-extrabold text-[#1E1E2E] group-hover:text-[#7C6FF7]/20 transition-colors select-none">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[#9090B0] text-sm leading-relaxed mb-4">
                    {s.body}
                  </p>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#7C6FF7]/10 border border-[#7C6FF7]/20 px-3 py-1 text-xs text-[#c5c0ff]">
                    {s.detail}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// RESULTADOS
// ─────────────────────────────────────────────
function Results() {
  const outcomes = [
    {
      metric: "10 semanas",
      label: "para equipes saírem do zero ao uso diário de IA",
    },
    {
      metric: "100% financeiro",
      label: "casos práticos e automações do próprio setor",
    },
    {
      metric: "Base própria",
      label: "de processos automatizados que fica com a empresa",
    },
  ];

  return (
    <section id="resultados" className="py-28 relative">
      <div className="mx-auto max-w-6xl px-6">
        {/* Quote em destaque */}
        <div className="rounded-2xl border border-[#7C6FF7]/20 bg-gradient-to-br from-[#0F0F1A] to-[#0D0D18] p-10 md:p-14 mb-16 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(124,111,247,0.12) 0%, transparent 70%)",
            }}
          />
          <div className="text-4xl text-[#7C6FF7] mb-6 font-serif">"</div>
          <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed max-w-3xl mb-8">
            O programa não entregou um treinamento. Entregou uma mudança de
            mentalidade. Hoje nossa equipe identifica oportunidades de automação
            sozinha.
          </blockquote>
          <cite className="not-italic">
            <span className="text-white font-medium text-sm">Gestora de fundos</span>
            <span className="text-[#9090B0] text-sm"> — São Paulo, 2025</span>
          </cite>
        </div>

        {/* Métricas de resultado */}
        <div className="grid md:grid-cols-3 gap-6">
          {outcomes.map((o) => (
            <div
              key={o.metric}
              className="rounded-2xl border border-[#1E1E2E] bg-[#0F0F1A] p-8 text-center"
            >
              <div className="text-gradient-gold text-2xl font-bold mb-3">
                {o.metric}
              </div>
              <p className="text-[#9090B0] text-sm leading-relaxed">{o.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// CONTATO
// ─────────────────────────────────────────────
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: integrar com backend / Resend / Make
    setSent(true);
  }

  return (
    <section id="contato" className="py-28 relative">
      <div
        aria-hidden
        className="absolute right-0 bottom-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,111,247,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto max-w-2xl px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7C6FF7] mb-4 block">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-[#9090B0]">
            Agende um diagnóstico gratuito. Em 30 minutos você vai entender
            exatamente onde sua equipe está e qual é o próximo passo.
          </p>
        </div>

        {sent ? (
          <div className="rounded-2xl border border-[#7C6FF7]/30 bg-[#7C6FF7]/10 p-10 text-center">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Mensagem recebida
            </h3>
            <p className="text-[#9090B0] text-sm">
              Retornaremos em até 24 horas.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#1E1E2E] bg-[#0F0F1A] p-8 space-y-5"
          >
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
                  className="w-full rounded-lg border border-[#1E1E2E] bg-[#080810] px-4 py-3 text-sm text-white placeholder:text-[#4A4A6A] focus:border-[#7C6FF7] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#9090B0] mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="voce@empresa.com"
                  className="w-full rounded-lg border border-[#1E1E2E] bg-[#080810] px-4 py-3 text-sm text-white placeholder:text-[#4A4A6A] focus:border-[#7C6FF7] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#9090B0] mb-2">
                Empresa
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Nome do fundo ou gestora"
                className="w-full rounded-lg border border-[#1E1E2E] bg-[#080810] px-4 py-3 text-sm text-white placeholder:text-[#4A4A6A] focus:border-[#7C6FF7] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#9090B0] mb-2">
                O que você quer resolver?
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Descreva brevemente o contexto da sua equipe..."
                className="w-full rounded-lg border border-[#1E1E2E] bg-[#080810] px-4 py-3 text-sm text-white placeholder:text-[#4A4A6A] focus:border-[#7C6FF7] focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#7C6FF7] py-3.5 text-sm font-semibold text-white hover:bg-[#5B54D6] transition-all hover:shadow-lg hover:shadow-[#7C6FF7]/25"
            >
              Agendar diagnóstico gratuito
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-[#1E1E2E] py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-lg font-bold text-white">
          Diferentia<span className="text-[#7C6FF7]">.</span>
        </span>
        <p className="text-xs text-[#4A4A6A]">
          © 2026 Diferentia. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 text-xs text-[#4A4A6A]">
          <a href="#problema" className="hover:text-[#9090B0] transition-colors">
            Sobre
          </a>
          <a href="#contato" className="hover:text-[#9090B0] transition-colors">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Method />
        <Results />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
