import { notFound } from "next/navigation";
import { PropostasNav } from "@/components/propostas/propostas-nav";
import { Breadcrumbs } from "@/components/propostas/breadcrumbs";
import { DetalheNav } from "@/components/propostas/detalhe-nav";
import { DetalhePager } from "@/components/propostas/detalhe-pager";
import { MarkdownContent } from "@/components/propostas/markdown-content";
import { getCourse, getDetalheMarkdown, listDetalheFiles } from "@/lib/propostas/content";

export default async function DetalheFilePage({
  params,
}: {
  params: Promise<{ slug: string; file: string }>;
}) {
  const { slug, file } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  let md: { content: string; title: string };
  try {
    md = getDetalheMarkdown(slug, file);
  } catch {
    notFound();
  }

  const files = listDetalheFiles(slug);

  return (
    <>
      <PropostasNav />
      <div className="mw-hero-band mw-hero-band-compact">
        <div className="mw-page-wrap pb-6 pt-8">
          <Breadcrumbs
            items={[
              { label: "Trilha", href: "/propostas/oceana" },
              { label: course.title, href: `/propostas/oceana/${slug}` },
              { label: "Roteiro", href: `/propostas/oceana/${slug}/detalhe` },
              { label: md.title },
            ]}
          />
          <h1 className="mt-4 mw-display-small">{md.title}</h1>
        </div>
      </div>
      <main className="mw-page-body mw-page-wrap">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="mw-editorial-content max-w-none">
            <MarkdownContent content={md.content} />
            <DetalhePager courseSlug={slug} files={files} currentSlug={file} />
          </article>
          {files.length > 0 ? (
            <div className="lg:sticky lg:top-24 lg:self-start">
              <DetalheNav
                courseSlug={slug}
                courseTitle={course.title}
                files={files}
                currentSlug={file}
              />
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
}
