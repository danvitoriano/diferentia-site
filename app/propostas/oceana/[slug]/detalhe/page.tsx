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
      <div className="mw-hero-band mw-hero-band-compact">
        <div className="mx-auto max-w-5xl px-4 pb-4 pt-6 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Trilha", href: "/propostas/oceana" },
              { label: course.title, href: `/propostas/oceana/${slug}` },
              { label: "Roteiro" },
            ]}
          />
          <h1 className="mt-4 mw-display-small">Roteiro: {course.title}</h1>
          <p className="mt-2 mw-body-large">
            Selecione um módulo ou sessão para abrir o conteúdo completo.
          </p>
        </div>
      </div>
      <main className="mw-page-body mx-auto max-w-5xl px-4 pb-12 sm:px-6">
        {files.length === 0 ? (
          <div className="mw-info-box mt-4">
            <p className="mw-body-medium" style={{ textAlign: "center", margin: 0 }}>
              Roteiro em preparação.
            </p>
          </div>
        ) : (
          <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
            <ul className="mw-roteiro-list">
              {files.map((f, i) => (
                <li key={f.slug}>
                  <Link
                    href={`/propostas/oceana/${slug}/detalhe/${f.slug}`}
                    className="mw-roteiro-item"
                  >
                    <span className="mw-step-badge">{i + 1}</span>
                    <span className="mw-roteiro-item-title">{f.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="lg:sticky lg:top-24 lg:self-start">
              <DetalheNav courseSlug={slug} courseTitle={course.title} files={files} />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
