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

        <header className="mt-6 border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{course.title}</h1>
          <p className="mt-2 text-lg text-gray-600">{course.subtitle}</p>
          <p className="mt-2 inline-flex rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-800">
            {course.duration}
          </p>
        </header>

        <div className="mt-8">
          <MarkdownContent content={resumo} />
        </div>

        {showExemplos ? (
          <section className="mt-12 border-t border-gray-200 pt-10">
            <h2 className="text-xl font-semibold text-gray-900">Exemplos para a Oceana</h2>
            <p className="mt-2 text-sm text-gray-600">
              Prompts e casos de uso adaptados ao contexto da Oceana. Use na preparação ou durante
              as sessões.
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
