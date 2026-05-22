import Link from "next/link";
import { notFound } from "next/navigation";
import { PropostasNav } from "@/components/propostas/propostas-nav";
import { Breadcrumbs } from "@/components/propostas/breadcrumbs";
import { MarkdownContent } from "@/components/propostas/markdown-content";
import { getCourse, getResumoMarkdown, listDetalheFiles } from "@/lib/propostas/content";

export default async function CursoResumoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const resumo = getResumoMarkdown(slug);
  const detalhe = listDetalheFiles(slug);

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

        {detalhe.length > 0 ? (
          <section className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-semibold text-gray-900">Roteiro completo</h2>
            <p className="mt-1 text-sm text-gray-600">
              Conteúdo detalhado para facilitadores — módulos e sessões, na ordem sugerida.
            </p>
            <ol className="mt-5 space-y-2">
              {detalhe.map((f, i) => (
                <li key={f.slug}>
                  <Link
                    href={`/propostas/oceana/${slug}/detalhe/${f.slug}`}
                    className="flex gap-3 rounded-lg border border-transparent px-3 py-2 text-gray-800 transition hover:border-violet-200 hover:bg-white"
                  >
                    <span className="shrink-0 font-semibold tabular-nums text-violet-600">
                      {i + 1}.
                    </span>
                    <span className="text-violet-700 hover:underline">{f.title}</span>
                  </Link>
                </li>
              ))}
            </ol>
            <Link
              href={`/propostas/oceana/${slug}/detalhe`}
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-violet-600 hover:underline"
            >
              Ver índice do roteiro →
            </Link>
          </section>
        ) : null}
      </main>
    </>
  );
}
