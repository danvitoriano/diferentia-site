import { notFound } from "next/navigation";
import { PropostasNav } from "@/components/propostas/propostas-nav";
import { Breadcrumbs } from "@/components/propostas/breadcrumbs";
import { MarkdownContent } from "@/components/propostas/markdown-content";
import {
  getCourse,
  getResumoMarkdown,
  hasExemplosOceana,
  getExemplosOceanaMarkdown,
} from "@/lib/propostas/content";

export default async function CursoResumoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const resumo = getResumoMarkdown(slug);
  const showExemplos = hasExemplosOceana(slug);
  const exemplos = showExemplos ? getExemplosOceanaMarkdown(slug) : "";

  return (
    <>
      <PropostasNav />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Trilha", href: "/propostas/oceana" },
            { label: course.title },
          ]}
        />

        <header className="mt-6 border-b border-[var(--md-sys-color-outline-variant)] pb-6">
          <h1 className="md-headline-medium">{course.title}</h1>
          <p className="mt-2 md-body-large text-[length:1.125rem] leading-7">
            {course.subtitle}
          </p>
          <p className="mt-3">
            <span className="md-chip md-chip-filled">{course.duration}</span>
          </p>
        </header>

        <div className="mt-8">
          <MarkdownContent content={resumo} />
        </div>

        {showExemplos ? (
          <section className="mt-12 border-t border-[var(--md-sys-color-outline-variant)] pt-10">
            <h2 className="md-title-large">O que cada área recebe</h2>
            <p className="mt-2 md-body-medium">
              O programa é comum a toda a Oceana. Abaixo, o que muda por perfil
              {["vibe-coders", "claude-code-avancado", "workshop-claude-code"].includes(slug)
                ? " (TI e desenvolvimento, e áreas de negócio que usam o terminal)."
                : " (analistas, operações, jurídico, comercial e administrativo)."}
            </p>
            <div className="mt-6">
              <MarkdownContent content={exemplos} />
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
