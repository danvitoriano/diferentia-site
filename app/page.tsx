"use client";

import type { ReactNode } from "react";
import { useState, useTransition } from "react";

// ─────────────────────────────────────────────
// ICONS (SVG — evita emojis na UI)
// ─────────────────────────────────────────────
function IconLightning({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconClipboard({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  );
}

function IconLock({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function IconCog({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function IconTarget({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconLaptop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M3 7h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
      <path d="M1 19h22" />
    </svg>
  );
}

function IconMessage({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function IconRepeat({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

function IconSignal({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 18v-4M9 18v-7M13 18V8M17 18v-3" />
    </svg>
  );
}

function IconHandshake({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L5 10" />
      <path d="M7 11.5v3a2 2 0 0 0 2 2h3.5" />
      <path d="M9 16v4" />
      <path d="M12 14v2" />
      <path d="M13 8.5v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V11" />
      <path d="M19 10l-2.5-2.5a2 2 0 0 0-2.8 0L14 10" />
    </svg>
  );
}

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

const ICON_PROBLEM = "w-8 h-8 shrink-0 text-[#7C6FF7]";
const ICON_TAB = "w-4 h-4 shrink-0";
const ICON_COMMUNITY = "w-6 h-6 shrink-0 text-[#7C6FF7] mt-0.5";

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
          <a href="#cursos" className="hover:text-white transition-colors">
            Cursos
          </a>
          <a href="#comunidade" className="hover:text-white transition-colors">
            Comunidade
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
          Metodologia proprietária de Agentic AI · mercado financeiro
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          <span className="text-gradient">Agentic AI que o mercado</span>
          <br />
          <span className="text-white">financeiro sabe usar.</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg md:text-xl text-[#9090B0] leading-relaxed mb-10">
          A Diferentia transforma times de fundos, gestoras e fintechs em
          equipes que operam com Agentic AI — do diagnóstico de maturidade à
          autonomia operacional.
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
        <div className="mt-20 grid w-full max-w-6xl grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4 md:gap-6 mx-auto items-stretch">
          {[
            { value: "4 fases", label: "Metodologia estruturada" },
            { value: "10 sem.", label: "Da adoção à autonomia" },
            { value: "100%", label: "Aplicado ao setor financeiro" },
            { value: "0% genérico", label: "Cada empresa é um caso" },
          ].map((m) => (
            <div
              key={m.label}
              className="flex h-full min-w-0 flex-col rounded-xl border border-[#1E1E2E] bg-[#0F0F1A]/60 p-5 text-left"
            >
              <div className="mb-1 text-2xl font-bold tracking-tight text-white md:whitespace-nowrap">
                {m.value}
              </div>
              <div className="text-xs leading-snug text-[#A8A8C8]">{m.label}</div>
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
  const problems: { icon: ReactNode; title: string; body: string }[] = [
    {
      icon: <IconLightning className={ICON_PROBLEM} />,
      title: "Ferramentas sem direção",
      body: "Empresas adotam ChatGPT e outras IAs sem metodologia. O resultado é uso superficial, frustração e nenhuma mudança real no processo.",
    },
    {
      icon: <IconClipboard className={ICON_PROBLEM} />,
      title: "Treinamentos genéricos",
      body: "Capacitações desconectadas da realidade do setor financeiro não geram adoção. O time assiste, volta para a mesa e continua como antes.",
    },
    {
      icon: <IconLock className={ICON_PROBLEM} />,
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
              <div className="mb-5">{p.icon}</div>
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
// CURSOS
// ─────────────────────────────────────────────
type Course = {
  id: string;
  trilha: string;
  nome: string;
  formato: string;
  duracao: string;
  publico: string;
  nivel: string;
  entregavel: string;
  status: "Disponível" | "Em breve";
};

const COURSES: Course[] = [
  { id: "00", trilha: "Operacional", nome: "IA para lideranças", formato: "Online · Grupo", duracao: "1h", publico: "Executivos", nivel: "Executivo", entregavel: "Checklist de decisões e política mínima de adoção", status: "Em breve" },
  { id: "01", trilha: "Operacional", nome: "Fundamentos de IA e Claude", formato: "Online · Ind.", duracao: "2h", publico: "Todos", nivel: "Iniciante", entregavel: "Contexto configurado + 3 prompts padrão", status: "Disponível" },
  { id: "02", trilha: "Operacional", nome: "Prompt engineering para o trabalho", formato: "Online · Ind./Grupo", duracao: "2h", publico: "Todos", nivel: "Iniciante / Intermediário", entregavel: "Biblioteca de prompts reutilizáveis do time", status: "Disponível" },
  { id: "03", trilha: "Operacional", nome: "Pesquisa, arquivos e multimodal", formato: "Online · Ind./Grupo", duracao: "1h30", publico: "Todos", nivel: "Intermediário", entregavel: "Exercício com documento real + checklist de validação", status: "Disponível" },
  { id: "04", trilha: "Operacional", nome: "Claude Design", formato: "Online · Ind./Grupo", duracao: "2h", publico: "Todos", nivel: "Intermediário", entregavel: "Protótipo funcional ou variações de uma tela real", status: "Disponível" },
  { id: "04B", trilha: "Operacional", nome: "Governança e compliance com IA", formato: "Online · Ind./Grupo", duracao: "1h30", publico: "Todos", nivel: "Intermediário", entregavel: "Política de uso do time + checklist de conformidade", status: "Em breve" },
  { id: "05", trilha: "Operacional", nome: "Conectores, MCP e automações", formato: "Presencial · Ind./Grupo", duracao: "2h", publico: "Todos", nivel: "Intermediário", entregavel: "Mapa de 3 oportunidades com quick wins priorizados", status: "Disponível" },
  { id: "06", trilha: "Operacional", nome: "Claude Cowork — skills, agentes e tarefas", formato: "Presencial · Ind./Grupo", duracao: "2h", publico: "Todos", nivel: "Intermediário / Avançado", entregavel: "1 skill do time + 1 rotina agendada no ar", status: "Disponível" },
  { id: "07", trilha: "Operacional", nome: "Sessão prática — fluxos e automações", formato: "Presencial · Ind.", duracao: "3h", publico: "Todos", nivel: "Avançado", entregavel: "1–2 automações em processos reais + base v.1", status: "Disponível" },
  { id: "08", trilha: "Operacional", nome: "Sessão coletiva de compartilhamento", formato: "Pres./Online · Grupo", duracao: "2h", publico: "Todos", nivel: "Todos os níveis", entregavel: "Biblioteca coletiva — base de conhecimento do time", status: "Disponível" },
  { id: "E1", trilha: "Especialização", nome: "IA para análise de investimentos", formato: "Presencial · Grupo", duracao: "3h", publico: "Analistas equity, research, setorial", nivel: "Intermediário", entregavel: "Template de análise + prompts padrão do time", status: "Em breve" },
  { id: "E2", trilha: "Especialização", nome: "IA para análise de crédito", formato: "Presencial · Grupo", duracao: "3h", publico: "Analistas de crédito", nivel: "Intermediário", entregavel: "Template de parecer + checklist de risco", status: "Em breve" },
  { id: "E3", trilha: "Especialização", nome: "IA para cientistas de dados", formato: "Pres./Online · Grupo", duracao: "4h", publico: "Cientistas de dados, analistas com Python", nivel: "Avançado", entregavel: "Script integrando Claude a pipeline ou fonte de dados real", status: "Em breve" },
  { id: "09", trilha: "Dev", nome: "Claude Code para devs", formato: "Pres./Online · Grupo", duracao: "3h", publico: "Devs", nivel: "Intermediário", entregavel: "Tarefa multiarquivo com validação (tests / lint / review)", status: "Disponível" },
  { id: "10", trilha: "Dev", nome: "Monitorador de ativos da B3", formato: "Ao vivo · Grupo", duracao: "4h30", publico: "Devs", nivel: "Intermediário", entregavel: "App no ar · repositório · gravação · templates CI/CD e E2E", status: "Disponível" },
  { id: "11", trilha: "Dev", nome: "Agentes autônomos e orquestração", formato: "Pres./Online · Grupo", duracao: "4h", publico: "Devs", nivel: "Avançado", entregavel: "Agente funcional com ao menos uma tool integrada", status: "Em breve" },
];

const NIVEL_COLORS: Record<string, string> = {
  "Iniciante": "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  "Iniciante / Intermediário": "bg-sky-500/15 text-sky-400 border-sky-500/20",
  "Intermediário": "bg-sky-500/15 text-sky-400 border-sky-500/20",
  "Intermediário / Avançado": "bg-amber-500/15 text-amber-400 border-amber-500/20",
  "Avançado": "bg-amber-500/15 text-amber-400 border-amber-500/20",
  "Executivo": "bg-violet-500/15 text-violet-400 border-violet-500/20",
  "Todos os níveis": "bg-[#1E1E2E] text-[#9595B8] border-[#1E1E2E]",
};

const TRILHA_META: Record<string, { desc: string; icon: ReactNode }> = {
  Todos: {
    icon: <IconClipboard className={ICON_TAB} />,
    desc: "Catálogo completo — filtre por trilha para ver só o que importa para o seu time.",
  },
  Operacional: {
    icon: <IconCog className={ICON_TAB} />,
    desc: "Para todos os perfis — do iniciante ao avançado",
  },
  Especialização: {
    icon: <IconTarget className={ICON_TAB} />,
    desc: "Módulos específicos para cada função do setor financeiro",
  },
  Dev: {
    icon: <IconLaptop className={ICON_TAB} />,
    desc: "Para desenvolvedores e times técnicos",
  },
};

function Courses() {
  const [activeTab, setActiveTab] = useState<string>("Operacional");
  const trilhas = ["Todos", "Operacional", "Especialização", "Dev"];
  const filtered =
    activeTab === "Todos" ? COURSES : COURSES.filter((c) => c.trilha === activeTab);

  return (
    <section id="cursos" className="py-28 relative">
      <div className="mx-auto max-w-6xl px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7C6FF7] mb-4 block">
            Catálogo de treinamentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            Módulos sob medida
            <br />
            <span className="text-[#9090B0]">para cada perfil do time</span>
          </h2>
          <p className="mx-auto max-w-xl text-[#9090B0] text-base leading-relaxed">
            Cada empresa monta sua trilha com base no diagnóstico. Você escolhe os módulos que fazem sentido para o seu contexto — não um pacote fechado.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {trilhas.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeTab === t
                  ? "bg-[#7C6FF7] text-white shadow-lg shadow-[#7C6FF7]/20"
                  : "border border-[#1E1E2E] text-[#9090B0] hover:border-[#7C6FF7]/40 hover:text-white"
              }`}
            >
              {TRILHA_META[t].icon}
              {t}
            </button>
          ))}
        </div>

        {/* Descrição da trilha ativa */}
        <p className="text-center text-sm text-[#7C7C98] mb-8">
          {TRILHA_META[activeTab].desc}
        </p>

        {/* Grid de cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((c) => (
            <div
              key={c.id}
              className={`group relative flex flex-col rounded-2xl border bg-[#0F0F1A] p-6 transition-all ${
                c.status === "Em breve"
                  ? "border-[#1E1E2E] opacity-70"
                  : "border-[#1E1E2E] hover:border-[#7C6FF7]/40"
              }`}
            >
              {/* Header do card */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="text-xs font-mono font-bold text-[#7A7A98] bg-[#080810] border border-[#1E1E2E] rounded-md px-2 py-1 shrink-0">
                  {c.id}
                </span>
                <span
                  className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${
                    c.status === "Disponível"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      : "bg-[#1E1E2E] text-[#7A7A98] border-[#1E1E2E]"
                  }`}
                >
                  {c.status}
                </span>
              </div>

              {/* Título */}
              <h3 className="text-base font-semibold text-white leading-snug mb-3 flex-1">
                {c.nome}
              </h3>

              {/* Entregável */}
              <p className="text-xs text-[#9AA0C8] leading-relaxed mb-5 border-l-2 border-[#2E3045] pl-3">
                {c.entregavel}
              </p>

              {/* Metadados */}
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${NIVEL_COLORS[c.nivel] ?? "bg-[#1E1E2E] text-[#9595B8] border-[#1E1E2E]"}`}>
                  {c.nivel}
                </span>
                <span className="text-[10px] font-medium px-2.5 py-1 rounded-full border border-[#1E1E2E] bg-[#080810] text-[#9595B8]">
                  {c.duracao}
                </span>
                <span className="text-[10px] font-medium px-2.5 py-1 rounded-full border border-[#1E1E2E] bg-[#080810] text-[#9595B8]">
                  {c.formato}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA rodapé */}
        <div className="mt-12 text-center">
          <p className="text-[#9090B0] text-sm mb-5">
            O diagnóstico define quais módulos fazem sentido para a sua empresa.
          </p>
          <a
            href="#contato"
            className="inline-flex rounded-full bg-[#7C6FF7] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#5B54D6] transition-all hover:shadow-lg hover:shadow-[#7C6FF7]/25"
          >
            Montar minha trilha
          </a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// COMUNIDADE
// ─────────────────────────────────────────────
function Community() {
  const perks: { icon: ReactNode; title: string; body: string }[] = [
    {
      icon: <IconMessage className={ICON_COMMUNITY} />,
      title: "Tire dúvidas em tempo real",
      body: "Canal dedicado para perguntas sobre ferramentas, prompts e automações. Respostas de quem já resolveu o mesmo problema no setor financeiro — não de uma IA genérica.",
    },
    {
      icon: <IconRepeat className={ICON_COMMUNITY} />,
      title: "Troca de casos reais",
      body: "Membros compartilham automações que funcionaram, fluxos que economizaram horas e erros que valem mais que qualquer treinamento teórico.",
    },
    {
      icon: <IconSignal className={ICON_COMMUNITY} />,
      title: "Curadoria semanal de IA",
      body: "O mundo da IA muda toda semana. Na comunidade você recebe curadoria filtrada para o mercado financeiro — sem o ruído de quem não conhece o setor.",
    },
    {
      icon: <IconHandshake className={ICON_COMMUNITY} />,
      title: "Network exclusivo do setor",
      body: "Fundos, gestoras, fintechs e advisors discutindo IA no mesmo espaço. Um nível de conversa que não existe em nenhum fórum aberto.",
    },
  ];

  const platforms = [
    {
      name: "Discord",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
        </svg>
      ),
      desc: "Discussões técnicas organizadas por tema",
      tag: "Principal",
    },
    {
      name: "WhatsApp",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      ),
      desc: "Alertas rápidos e updates do setor",
      tag: "Ativo",
    },
    {
      name: "Telegram",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      desc: "Conteúdo curado e recursos semanais",
      tag: "Em breve",
    },
  ];

  return (
    <section id="comunidade" className="py-28 relative overflow-hidden">
      {/* Glow central */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,111,247,0.12), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7C6FF7] mb-4 block">
            Comunidade
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            Você não vai estar sozinho
            <br />
            <span className="text-[#9090B0]">depois do treinamento</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#9090B0] text-lg leading-relaxed">
            Quem entra na Diferentia tem acesso a uma comunidade exclusiva do
            setor financeiro. É onde os casos reais são trocados, as dúvidas
            são respondidas e o conhecimento continua crescendo.
          </p>
        </div>

        {/* Cards de benefícios */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {perks.map((p) => (
            <div
              key={p.title}
              className="flex gap-5 rounded-2xl border border-[#1E1E2E] bg-[#0F0F1A] p-7 hover:border-[#7C6FF7]/30 transition-colors"
            >
              {p.icon}
              <div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-[#9090B0] text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Plataformas + CTA */}
        <div className="rounded-2xl border border-[#7C6FF7]/20 bg-gradient-to-br from-[#0F0F1A] to-[#0D0D18] p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                Onde a comunidade acontece
              </h3>
              <p className="text-[#9090B0] text-sm mb-8">
                Escolha a plataforma que faz mais sentido para o seu fluxo.
                Você pode estar em todas ao mesmo tempo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {platforms.map((pl) => (
                  <div
                    key={pl.name}
                    className="flex items-start gap-3 rounded-xl border border-[#1E1E2E] bg-[#080810]/80 px-5 py-4 flex-1"
                  >
                    <span className="text-[#9090B0] mt-0.5">{pl.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-sm font-semibold text-white">
                          {pl.name}
                        </span>
                        <span
                          className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                            pl.tag === "Em breve"
                              ? "bg-[#1E1E2E] text-[#4A4A6A]"
                              : pl.tag === "Principal"
                              ? "bg-[#7C6FF7]/15 text-[#c5c0ff]"
                              : "bg-[#E8B84B]/15 text-[#E8B84B]"
                          }`}
                        >
                          {pl.tag}
                        </span>
                      </div>
                      <p className="text-[#4A4A6A] text-xs">{pl.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 text-center md:text-left">
              <div className="inline-flex flex-col items-center md:items-start gap-4">
                <div className="rounded-full border border-[#E8B84B]/30 bg-[#E8B84B]/10 px-4 py-1.5 text-xs font-semibold text-[#E8B84B] uppercase tracking-wider">
                  Membros fundadores
                </div>
                <p className="text-[#9090B0] text-sm leading-relaxed max-w-[200px]">
                  Vagas limitadas para quem entra agora e ajuda a moldar a comunidade.
                </p>
                <a
                  href="#contato"
                  className="rounded-full bg-[#7C6FF7] px-7 py-3 text-sm font-semibold text-white hover:bg-[#5B54D6] transition-all hover:shadow-lg hover:shadow-[#7C6FF7]/25 whitespace-nowrap"
                >
                  Quero fazer parte
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// CONTATO
// ─────────────────────────────────────────────
function Contact() {
  const initialForm = {
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  };
  const [showSuccessBadge, setShowSuccessBadge] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const [form, setForm] = useState(initialForm);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        const res = await fetch("/api/contact", {
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
            Agende um diagnóstico gratuito e alinhe com a gente onde sua equipe
            está hoje e o que faz sentido como próximo passo.
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
                Mensagem recebida — retornaremos em até 24 horas.
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
                placeholder="Nome da empresa"
                className="w-full rounded-lg border border-[#1E1E2E] bg-[#080810] px-4 py-3 text-sm text-white placeholder:text-[#4A4A6A] focus:border-[#7C6FF7] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#9090B0] mb-2">
                Telefone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+55 (11) 99999-9999"
                autoComplete="tel"
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

            {error && (
              <p className="text-xs text-red-400 text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full rounded-full bg-[#7C6FF7] py-3.5 text-sm font-semibold text-white hover:bg-[#5B54D6] transition-all hover:shadow-lg hover:shadow-[#7C6FF7]/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "Enviando..." : "Agendar diagnóstico gratuito"}
            </button>
        </form>
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
        <Courses />
        <Results />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
