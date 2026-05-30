"use client";

import Link from "next/link";
import { useEffect, useState, useTransition } from "react";

const PROFILE_OPTIONS = [
  { value: "", label: "Selecione uma opção" },
  { value: "tecnologia", label: "Trabalho com tecnologia" },
  { value: "outra_area", label: "Venho de outra área" },
  { value: "estudante", label: "Sou estudante" },
  { value: "ja_dou_aula", label: "Já dou aula de algo" },
] as const;

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

export default function InstrutorasPage() {
  useScrollReveal();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const initialForm = {
    name: "",
    email: "",
    contact: "",
    profile: "",
    motivation: "",
  };
  const [status, setStatus] = useState<{ type: "ok" | "err"; msg: string } | null>(null);
  const [isPending, startTransition] = useTransition();
  const [form, setForm] = useState(initialForm);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setStatus(null);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    startTransition(async () => {
      try {
        const res = await fetch("/api/waitlist/instrutoras", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) {
          const data = (await res.json().catch(() => ({}))) as { error?: string };
          setStatus({ type: "err", msg: data.error ?? "Erro ao enviar. Tente novamente." });
          return;
        }
        setForm(initialForm);
        setStatus({
          type: "ok",
          msg: "Você entrou na lista. Avisaremos sobre a live e a primeira turma.",
        });
      } catch {
        setStatus({ type: "err", msg: "Erro de conexão. Tente novamente." });
      }
    });
  }

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="wrap nav">
          <Link href="/" className="brand">
            Diferentia<span className="dot">.</span>
          </Link>
        </div>
      </header>

      <section className="section">
        <div className="wrap instrutoras-wrap">
          <div className="section-head instrutoras-head reveal">
            <span className="eyebrow"><i></i>Braço social · DiferentIA</span>
            <h1 className="section-title">
              Vire instrutora de IA e ensine o que o mercado mais quer aprender
            </h1>
            <p className="lead instrutoras-lead">
              Um curso da DiferentIA para mulheres que querem dominar o Claude e
              os agentes de IA e transformar isso numa nova carreira, mesmo
              começando do zero.
            </p>
            <p className="instrutoras-copy">
              A IA agêntica criou uma profissão que quase ninguém ocupou ainda:
              a de quem sabe ensinar essas ferramentas de verdade. A gente vai
              te mostrar o caminho completo, de aprender a usar o Claude e
              construir agentes até dar aula, criar conteúdo e se posicionar
              como referência. Inicialmente para mulheres, porque essa porta
              precisa abrir para quem costuma ficar de fora dela. As vagas da
              primeira turma serão limitadas e quem está na lista entra primeiro.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="instrutoras-form reveal">
            {status && (
              <div className={`form-status show ${status.type}`}>{status.msg}</div>
            )}

            <div className="field-row">
              <div className="field">
                <label htmlFor="i-name">Nome</label>
                <input
                  id="i-name"
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                />
              </div>
              <div className="field">
                <label htmlFor="i-email">Melhor e-mail</label>
                <input
                  id="i-email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="voce@email.com"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="i-contact">WhatsApp ou Instagram</label>
              <input
                id="i-contact"
                type="text"
                name="contact"
                required
                value={form.contact}
                onChange={handleChange}
                placeholder="+55 (11) 99999-9999 ou @seuinstagram"
              />
              <p className="field-hint">Para avisar sobre a live e a abertura da turma.</p>
            </div>

            <div className="field">
              <label htmlFor="i-profile">O que você faz hoje</label>
              <select
                id="i-profile"
                name="profile"
                required
                value={form.profile}
                onChange={handleChange}
              >
                {PROFILE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="i-motivation">
                Por que você quer virar instrutora de IA{" "}
                <span className="field-optional">(opcional)</span>
              </label>
              <textarea
                id="i-motivation"
                name="motivation"
                value={form.motivation}
                onChange={handleChange}
                placeholder="Conte em poucas palavras..."
              />
            </div>

            <button type="submit" className="btn btn-solid instrutoras-submit" disabled={isPending}>
              {isPending ? "Enviando…" : <>Entrar na lista de espera <span className="arr">→</span></>}
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-bottom instrutoras-footer-bottom">
            <span>© {new Date().getFullYear()} Diferentia</span>
            <span>Feito para o mercado financeiro</span>
          </div>
        </div>
      </footer>
    </>
  );
}
