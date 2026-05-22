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
  const prerequisiteTitles = course.prerequisites
    .map((pre) => getCourse(pre)?.title)
    .filter((title): title is string => Boolean(title));

  return (
    <>
      <PropostasNav />
      <div className="mw-hero-band mw-hero-band-compact">
        <div className="mw-page-wrap pb-6 pt-8">
          <Breadcrumbs items={[{ label: "Trilha", href: "/propostas/oceana" }]} />
          <header className="mt-6 max-w-3xl">
            <h1 className="mw-display-small">{course.title}</h1>
            <p className="mt-3 mw-body-large">{course.subtitle}</p>
            {(course.duration || course.audience || course.delivery) ? (
              <p className="mt-4 flex flex-wrap items-center gap-2">
                {course.duration ? (
                  <span className="mw-module-tag">{course.duration}</span>
                ) : null}
                {course.audience ? (
                  <span className="mw-module-tag">{course.audience}</span>
                ) : null}
                {course.delivery ? (
                  <span className="mw-body-medium" style={{ color: "var(--md-sys-color-on-surface-variant)" }}>
                    {course.delivery}
                  </span>
                ) : null}
              </p>
            ) : null}
            {prerequisiteTitles.length > 0 ? (
              <p className="mt-4 mw-body-medium">
                <span className="font-medium" style={{ color: "var(--md-sys-color-on-surface)" }}>
                  Pré-requisito obrigatório:{" "}
                </span>
                {prerequisiteTitles.join(" · ")}
              </p>
            ) : null}
          </header>
        </div>
      </div>
      <main className="mw-page-body mw-page-wrap">
        <div className="mw-editorial-content">
          <MarkdownContent content={resumo} variant="programa" />

          {showExemplos ? (
            <section className="mt-14 pt-2">
              <p className="mw-label-large">Por perfil</p>
              <h2 className="mt-2 mw-title-large">O que cada área recebe</h2>
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
