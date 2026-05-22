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
            <h1 className="md-headline-small">Roteiro: {course.title}</h1>
            <p className="mt-2 md-body-large">Selecione um módulo ou sessão para abrir o conteúdo completo.</p>
            {files.length === 0 ? (
              <p className="mt-8 md-card-outlined p-6 md-body-medium text-center">
                Roteiro em preparação.
              </p>
            ) : (
              <ol className="mt-8 space-y-3">
                {files.map((f, i) => (
                  <li key={f.slug}>
                    <Link
                      href={`/propostas/oceana/${slug}/detalhe/${f.slug}`}
                      className="md-list-item"
                    >
                      <span className="md-list-item-number">{i + 1}</span>
                      <span className="md-title-medium text-[var(--md-sys-color-primary)]">
                        {f.title}
                      </span>
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
