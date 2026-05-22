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
        <div className="mw-page-wrap pb-6 pt-8">
          <Breadcrumbs
            items={[
              { label: "Trilha", href: "/propostas/oceana" },
              { label: course.title },
            ]}
          />
          <header className="mt-6 max-w-3xl">
            <h1 className="mw-display-small">{course.title}</h1>
            <p className="mt-3 mw-body-large">{course.subtitle}</p>
            <p className="mt-4">
              <span className="mw-module-tag">{course.duration}</span>
            </p>
          </header>
        </div>
      </div>
      <main className="mw-page-body mw-page-wrap">
        <div className="mw-editorial-content">
          <MarkdownContent content={resumo} />

          {showExemplos ? (
            <section className="mt-14 pt-2">
              <p className="mw-label-large">Por perfil</p>
              <h2 className="mt-2 mw-title-large">O que cada área recebe</h2>
              <p className="mt-3 mw-body-medium">
                O programa é comum a toda a Oceana. Abaixo, o que muda por perfil
                {["vibe-coders", "claude-code-avancado", "workshop-claude-code"].includes(slug)
                  ? " (TI e desenvolvimento, e áreas de negócio que usam o terminal)."
                  : " (analistas, operações, jurídico, comercial e administrativo)."}
              </p>
              <div className="mt-8">
                <AreaExemplosAccordion content={exemplos} />
              </div>
            </section>
          ) : null}
        </div>
      </main>
    </>
  );
}
