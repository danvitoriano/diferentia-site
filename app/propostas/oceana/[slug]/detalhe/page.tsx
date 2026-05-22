import Link from "next/link";
import { notFound } from "next/navigation";
import { PropostasNav } from "@/components/propostas/propostas-nav";
import { Breadcrumbs } from "@/components/propostas/breadcrumbs";
import { DetalheNav } from "@/components/propostas/detalhe-nav";
import { getCourse, listDetalheFiles } from "@/lib/propostas/content";

export default async function DetalheIndexPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  const files = listDetalheFiles(slug);

  return (
    <>
      <PropostasNav />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Trilha", href: "/propostas/oceana" },
            { label: course.title, href: `/propostas/oceana/${slug}` },
            { label: "Roteiro" },
          ]}
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Roteiro: {course.title}</h1>
            <p className="mt-2 text-gray-600">
              Selecione um módulo ou sessão para abrir o conteúdo completo.
            </p>
            {files.length === 0 ? (
              <p className="mt-8 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6 text-gray-500">
                Roteiro em preparação.
              </p>
            ) : (
              <ol className="mt-8 space-y-3">
                {files.map((f, i) => (
                  <li key={f.slug}>
                    <Link
                      href={`/propostas/oceana/${slug}/detalhe/${f.slug}`}
                      className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 transition hover:border-violet-300 hover:shadow-sm"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-800">
                        {i + 1}
                      </span>
                      <span className="text-base font-medium text-violet-700">{f.title}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            )}
          </div>
          {files.length > 0 ? (
            <div className="lg:sticky lg:top-24 lg:self-start">
              <DetalheNav courseSlug={slug} courseTitle={course.title} files={files} />
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
}
