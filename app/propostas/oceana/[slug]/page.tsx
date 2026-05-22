import { notFound } from "next/navigation";
import { PropostasNav } from "@/components/propostas/propostas-nav";
import { Breadcrumbs } from "@/components/propostas/breadcrumbs";
import { MarkdownContent } from "@/components/propostas/markdown-content";
import { AreaExemplosAccordion } from "@/components/propostas/area-exemplos-accordion";
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
      <div className="mw-hero-band mw-hero-band-compact">
        <div className="mx-auto max-w-3xl px-4 pb-4 pt-6 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Trilha", href: "/propostas/oceana" },
              { label: course.title },
            ]}
          />
          <header className="mt-4">
            <h1 className="mw-display-small">{course.title}</h1>
            <p className="mt-2 mw-body-large">{course.subtitle}</p>
            <p className="mt-3">
              <md-assist-chip label={course.duration} />
            </p>
          </header>
        </div>
      </div>
      <main className="mw-page-body mx-auto max-w-3xl px-4 pb-12 sm:px-6">
        <div className="mt-2">
          <MarkdownContent content={resumo} />
        </div>

        {showExemplos ? (
          <section className="mt-12 pt-4">
            <h2 className="mw-title-large">O que cada área recebe</h2>
            <p className="mt-2 mw-body-medium">
              O programa é comum a toda a Oceana. Abaixo, o que muda por perfil
              {["vibe-coders", "claude-code-avancado", "workshop-claude-code"].includes(slug)
                ? " (TI e desenvolvimento, e áreas de negócio que usam o terminal)."
                : " (analistas, operações, jurídico, comercial e administrativo)."}
            </p>
            <div className="mt-6">
              <AreaExemplosAccordion content={exemplos} />
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
