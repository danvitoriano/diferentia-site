import Link from "next/link";
import { notFound } from "next/navigation";
import { PropostasNav } from "@/components/propostas/propostas-nav";
import { MarkdownContent } from "@/components/propostas/markdown-content";
import { getCourse, getDetalheMarkdown } from "@/lib/propostas/content";

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

  return (
    <>
      <PropostasNav />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Link
          href={`/propostas/oceana/${slug}/detalhe`}
          className="text-sm text-[#7C6FF7] hover:underline"
        >
          ← Índice do roteiro
        </Link>
        <h1 className="mt-4 text-2xl font-bold text-[#F0F0FA]">{md.title}</h1>
        <div className="mt-8">
          <MarkdownContent content={md.content} />
        </div>
      </main>
    </>
  );
}
