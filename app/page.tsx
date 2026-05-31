"use client";

import { useEffect, useState, useTransition } from "react";
import { ParallaxMedia } from "@/components/home/parallax-media";
import { useParallaxMedia } from "@/hooks/use-parallax-media";

// ───────────────────────────────────────────────
// Dados (mesmo conteúdo, fácil de editar)
// ───────────────────────────────────────────────
const NAV: [string, string][] = [
  ["#problema", "O problema"],
  ["#metodologia", "Metodologia"],
  ["#resultados", "Resultados"],
  ["#cursos", "Cursos"],
  ["#comunidade", "Comunidade"],
];

const METRICS: [string, string][] = [
  ["4 fases", "Metodologia estruturada"],
  ["10 sem.", "Da adoção à autonomia"],
  ["100%", "Setor financeiro"],
  ["0% genérico", "Cada empresa é um caso"],
];

const PROBLEMS = [
  { n: "01", title: "Ferramentas sem direção", body: "Empresas adotam ChatGPT e outras IAs sem metodologia. O resultado é uso superficial, frustração e nenhuma mudança real no processo." },
  { n: "02", title: "Treinamentos genéricos", body: "Capacitações desconectadas da realidade do setor financeiro não geram adoção. O time assiste, volta para a mesa e continua como antes." },
  { n: "03", title: "Tecnologia sem adoção", body: "Investir em IA sem preparar a equipe é queimar dinheiro. A tecnologia só gera retorno quando as pessoas integram ao fluxo real de trabalho." },
];

const METHOD = [
  { n: "01", title: "Diagnóstico de maturidade", body: "Mapeamos processos, nível da equipe e oportunidades de automação reais. Nada é assumido: tudo é medido.", tag: "Questionário · entrevistas · análise de stack" },
  { n: "02", title: "Roadmap personalizado", body: "Definimos quais ferramentas e automações têm maior impacto para o seu contexto específico. Prioridade por retorno real.", tag: "Por pessoa · por processo · por área" },
  { n: "03", title: "Capacitação prática", body: "Sessões focadas em uso real, não teoria. O time aprende fazendo, com casos do próprio trabalho como material.", tag: "Individuais · coletivas · desafio prático" },
  { n: "04", title: "Autonomia e escala", body: "A equipe sai capaz de identificar e implementar novas automações de forma independente. O objetivo é dispensar a Diferentia.", tag: "Base de conhecimento · biblioteca de processos" },
];

const RESULT_METRICS: [string, string][] = [
  ["10 semanas", "do zero ao uso diário"],
  ["100% financeiro", "casos do próprio setor"],
  ["Base própria", "fica com a empresa"],
];

/** Fotos editoriais (Unsplash). Parâmetros fixam crop e qualidade no CDN. */
const HOME_MEDIA = {
  hero: {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=85",
    alt: "Mesa de trabalho com laptop e documentos de análise",
    credit: { name: "Scott Graham", href: "https://unsplash.com/@homajomo" },
  },
  results: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=85",
    alt: "Equipe colaborando em reunião com notebooks",
    credit: { name: "Headway", href: "https://unsplash.com/@headwayio" },
  },
} as const;

type Course = { code: string; name: string; format: string; dur: string; level: string; trilha: string; soon?: boolean };
const COURSES: Course[] = [
  { code: "00", name: "IA para lideranças", format: "Online · Grupo", dur: "1h", level: "Executivo", trilha: "Operacional", soon: true },
  { code: "01", name: "Fundamentos de IA e Claude", format: "Online · Ind.", dur: "2h", level: "Iniciante", trilha: "Operacional" },
  { code: "02", name: "Prompt engineering para o trabalho", format: "Online · Grupo", dur: "2h", level: "Iniciante", trilha: "Operacional" },
  { code: "03", name: "Pesquisa, arquivos e multimodal", format: "Online · Grupo", dur: "1h30", level: "Intermediário", trilha: "Operacional" },
  { code: "04", name: "Claude Design", format: "Online · Grupo", dur: "2h", level: "Intermediário", trilha: "Operacional" },
  { code: "04B", name: "Governança e compliance com IA", format: "Online · Grupo", dur: "1h30", level: "Intermediário", trilha: "Operacional", soon: true },
  { code: "05", name: "Conectores, MCP e automações", format: "Presencial", dur: "2h", level: "Intermediário", trilha: "Operacional" },
  { code: "06", name: "Claude Cowork: skills e agentes", format: "Presencial", dur: "2h", level: "Avançado", trilha: "Operacional" },
  { code: "07", name: "Sessão prática: fluxos e automações", format: "Presencial · Ind.", dur: "3h", level: "Avançado", trilha: "Operacional" },
  { code: "08", name: "Sessão coletiva de compartilhamento", format: "Pres./Online", dur: "2h", level: "Todos", trilha: "Operacional" },
  { code: "E1", name: "IA para análise de investimentos", format: "Presencial · Grupo", dur: "3h", level: "Intermediário", trilha: "Especialização", soon: true },
  { code: "E2", name: "IA para análise de crédito", format: "Presencial · Grupo", dur: "3h", level: "Intermediário", trilha: "Especialização", soon: true },
  { code: "E3", name: "IA para cientistas de dados", format: "Pres./Online", dur: "4h", level: "Avançado", trilha: "Especialização", soon: true },
  { code: "09", name: "Claude Code para devs", format: "Pres./Online", dur: "3h", level: "Intermediário", trilha: "Dev" },
  { code: "10", name: "Monitorador de ativos da B3", format: "Ao vivo · Grupo", dur: "4h30", level: "Intermediário", trilha: "Dev" },
  { code: "11", name: "Agentes autônomos e orquestração", format: "Pres./Online", dur: "4h", level: "Avançado", trilha: "Dev", soon: true },
];
const FILTERS = ["Todos", "Operacional", "Especialização", "Dev"];

const PERKS = [
  { title: "Dúvidas em tempo real", body: "Canal dedicado para perguntas sobre ferramentas, prompts e automações. Respostas de quem já resolveu o mesmo problema no setor financeiro." },
  { title: "Troca de casos reais", body: "Membros compartilham automações que funcionaram, fluxos que economizaram horas e erros que valem mais que qualquer teoria." },
  { title: "Curadoria semanal", body: "O mundo da IA muda toda semana. Aqui a curadoria chega filtrada para o mercado financeiro, sem o ruído de quem não conhece o setor." },
  { title: "Network do setor", body: "Fundos, gestoras, fintechs e advisors discutindo IA no mesmo espaço. Um nível de conversa que não existe em fórum aberto." },
];

const PLATFORMS: { label: string; soon?: boolean }[] = [
  { label: "Discord · principal" },
  { label: "WhatsApp · ativo" },
  { label: "Telegram · em breve", soon: true },
];

// Marca de revelação no scroll (idêntica à da versão HTML)
function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Home() {
  useScrollReveal();
  useParallaxMedia();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const [filter, setFilter] = useState("Todos");
  const courses = filter === "Todos" ? COURSES : COURSES.filter((c) => c.trilha === filter);

  const [status, setStatus] = useState<{ type: "ok" | "err"; msg: string } | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !email) return setStatus({ type: "err", msg: "Preencha nome e e-mail para continuar." });
    if (!emailOk) return setStatus({ type: "err", msg: "Confira o e-mail informado." });

    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, company, message }),
        });
        if (!res.ok) {
          const data = (await res.json().catch(() => ({}))) as { error?: string };
          setStatus({ type: "err", msg: data.error ?? "Erro ao enviar. Tente novamente." });
          return;
        }
        setStatus({ type: "ok", msg: "Mensagem recebida. Retornamos em até 24 horas." });
        form.reset();
      } catch {
        setStatus({ type: "err", msg: "Erro de conexão. Tente novamente." });
      }
    });
  }

  return (
    <>
      {/* HEADER */}
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="wrap wrap-narrow nav">
          <div className="brand">Diferentia<span className="dot">.</span></div>
          <nav className="nav-links">
            {NAV.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <a href="#contato" className="btn btn-solid btn-sm">
            Agendar diagnóstico <span className="arr">→</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap wrap-narrow">
          <div className="hero-grid">
            <div className="hero-left">
              <span className="eyebrow reveal"><i></i>Agentic AI · mercado financeiro</span>
              <h1 className="display-xl hero-title reveal" style={{ transitionDelay: ".06s" }}>
                Agentic AI que o mercado financeiro sabe usar<span className="dot">.</span>
              </h1>
              <p className="lead hero-lead reveal" style={{ transitionDelay: ".12s" }}>
                Transformamos times de fundos, gestoras e fintechs em equipes que operam com IA,
                do diagnóstico de maturidade à autonomia operacional.
              </p>
              <div className="hero-actions reveal" style={{ transitionDelay: ".18s" }}>
                <a href="#contato" className="btn btn-solid">Agendar diagnóstico <span className="arr">→</span></a>
                <a href="#metodologia" className="link-arrow"><span>Ver metodologia</span> <span className="arr">→</span></a>
              </div>
            </div>
            <div className="hero-right">
              <ParallaxMedia speed={0.35}>
                <img
                  src={HOME_MEDIA.hero.src}
                  alt={HOME_MEDIA.hero.alt}
                  width={1920}
                  height={1280}
                  loading="eager"
                  decoding="async"
                />
              </ParallaxMedia>
              <span className="hero-cap">
                <a href={HOME_MEDIA.hero.credit.href} target="_blank" rel="noopener noreferrer">
                  {HOME_MEDIA.hero.credit.name}
                </a>
                {" · "}
                <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
                  Unsplash
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTRICAS */}
      <section>
        <div className="wrap wrap-narrow">
          <div className="metrics">
            {METRICS.map(([val, lab], i) => (
              <div key={lab} className="metric reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="m-val">{val}</div>
                <div className="m-lab">{lab}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section" id="problema">
        <div className="wrap">
          <div className="wrap-narrow">
            <div className="section-head reveal">
              <span className="eyebrow"><i></i>O problema</span>
              <h2 className="section-title">Por que a IA ainda não funcionou para a sua empresa</h2>
            </div>
          </div>
        </div>
        <div className="section-rule" aria-hidden="true" />
        <div className="wrap">
          <div className="wrap-narrow">
            <div className="problem-grid">
              {PROBLEMS.map((p, i) => (
                <article key={p.n} className="prob reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="p-num">{p.n}</div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="section" id="metodologia">
        <div className="wrap">
          <div className="method-grid">
            <aside className="method-aside reveal">
              <div className="inner">
                <span className="eyebrow"><i></i>Metodologia</span>
                <h2>Do diagnóstico à autonomia</h2>
                <div className="m-count">4 fases</div>
              </div>
            </aside>
            <div className="method-rows">
              {METHOD.map((m) => (
                <div key={m.n} className="m-row reveal">
                  <div className="m-idx">{m.n}</div>
                  <div>
                    <h3>{m.title}</h3>
                    <p>{m.body}</p>
                    <span className="m-tag">{m.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="section" id="resultados">
        <div className="wrap">
          <div className="results-grid">
            <div className="results-media">
              <ParallaxMedia speed={0.35}>
                <img
                  src={HOME_MEDIA.results.src}
                  alt={HOME_MEDIA.results.alt}
                  width={1920}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                />
              </ParallaxMedia>
              <span className="hero-cap">
                <a href={HOME_MEDIA.results.credit.href} target="_blank" rel="noopener noreferrer">
                  {HOME_MEDIA.results.credit.name}
                </a>
                {" · "}
                <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
                  Unsplash
                </a>
              </span>
            </div>
            <div className="results-body">
              <span className="eyebrow reveal"><i></i>Resultados</span>
              <blockquote className="quote reveal" style={{ transitionDelay: ".06s" }}>
                <span className="mk">&ldquo;</span>Não foi um treinamento. Foi uma mudança de mentalidade. Hoje a equipe identifica oportunidades de automação por conta própria.
              </blockquote>
              <div className="quote-attrib reveal" style={{ transitionDelay: ".12s" }}>Gestão de fundos · São Paulo, 2025</div>
              <div className="result-metrics reveal" style={{ transitionDelay: ".16s" }}>
                {RESULT_METRICS.map(([val, lab]) => (
                  <div key={lab}>
                    <div className="rm-val">{val}</div>
                    <div className="rm-lab">{lab}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURSOS */}
      <section className="section" id="cursos">
        <div className="wrap">
          <div className="wrap-narrow">
            <div className="courses-head">
              <div className="reveal">
                <span className="eyebrow"><i></i>Catálogo</span>
                <h2 className="section-title" style={{ marginTop: 18 }}>Módulos sob medida</h2>
              </div>
              <div className="filter reveal">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    className={`filter-btn${filter === f ? " active" : ""}`}
                    onClick={() => setFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="section-rule" aria-hidden="true" />
        <div className="wrap">
          <div className="wrap-narrow">
            <div className="ctable reveal">
              <div className="ctable-head">
                <span>Cód</span><span>Módulo</span><span className="ch-format">Formato</span>
                <span className="ch-dur">Duração</span><span className="ch-level">Nível</span><span>Status</span>
              </div>
              {courses.map((c) => (
                <div key={c.code} className={`crow${c.soon ? " soon" : ""}`}>
                  <div className="c-code">{c.code}</div>
                  <div className="c-name">{c.name}</div>
                  <div className="c-meta c-format">{c.format}</div>
                  <div className="c-meta c-dur">{c.dur}</div>
                  <div className="c-meta c-level">{c.level}</div>
                  <div className={`c-status${c.soon ? " off" : ""}`}>
                    <span className="d"></span>{c.soon ? "Em breve" : "Disponível"}
                  </div>
                </div>
              ))}
            </div>
            <div className="courses-cta reveal">
              <a href="#contato" className="link-arrow"><span>Montar minha trilha</span> <span className="arr">→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* COMUNIDADE */}
      <section className="section" id="comunidade">
        <div className="wrap">
          <div className="wrap-narrow">
            <div className="section-head reveal">
              <span className="eyebrow"><i></i>Comunidade</span>
              <h2 className="section-title">Você não fica sem apoio depois do treinamento</h2>
            </div>
            <div className="community-grid reveal">
              {PERKS.map((p) => (
                <article key={p.title} className="perk">
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              ))}
            </div>
            <div className="community-foot reveal">
              <div className="platforms">
                {PLATFORMS.map((pl) => (
                  <span key={pl.label} className={`plat${pl.soon ? " soon" : ""}`}>
                    <span className="d"></span>{pl.label}
                  </span>
                ))}
              </div>
              <a href="#contato" className="btn btn-solid">Quero fazer parte <span className="arr">→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="section" id="contato">
        <div className="wrap">
          <div className="contact-grid">
            <aside className="contact-aside reveal">
              <span className="eyebrow"><i></i>Contato</span>
              <h2>Vamos conversar?</h2>
              <p>Agende um diagnóstico gratuito e veja onde sua equipe está hoje e o que faz sentido como próximo passo.</p>
            </aside>
            <div className="contact-form reveal">
              <form onSubmit={handleSubmit} noValidate>
                {status && (
                  <div className={`form-status show ${status.type}`}>{status.msg}</div>
                )}
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="f-name">Nome</label>
                    <input id="f-name" name="name" type="text" placeholder="Seu nome" />
                  </div>
                  <div className="field">
                    <label htmlFor="f-email">E-mail</label>
                    <input id="f-email" name="email" type="email" placeholder="voce@empresa.com" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="f-company">Empresa</label>
                  <input id="f-company" name="company" type="text" placeholder="Nome da empresa" />
                </div>
                <div className="field">
                  <label htmlFor="f-msg">Mensagem</label>
                  <textarea id="f-msg" name="message" placeholder="Conte um pouco sobre o time e o momento da empresa." />
                </div>
                <button type="submit" className="btn btn-solid" disabled={isPending}>
                  {isPending ? "Enviando…" : <>Enviar mensagem <span className="arr">→</span></>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand">Diferentia<span className="dot">.</span></div>
              <p>Metodologia de adoção de Agentic AI para fundos, gestoras e fintechs.</p>
            </div>
            <div className="footer-col">
              <h4>Produto</h4>
              <a href="#metodologia">Metodologia</a>
              <a href="#cursos">Cursos</a>
              <a href="#resultados">Resultados</a>
            </div>
            <div className="footer-col">
              <h4>Comunidade</h4>
              <a href="#comunidade">Discord</a>
              <a href="#comunidade">WhatsApp</a>
              <a href="/instrutoras">Seja uma instrutora</a>
            </div>
            <div className="footer-col">
              <h4>Contato</h4>
              <a href="#contato">Agendar diagnóstico</a>
              <a href="#contato">E-mail</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Diferentia</span>
            <span>Feito para o mercado financeiro</span>
          </div>
        </div>
      </footer>
    </>
  );
}
