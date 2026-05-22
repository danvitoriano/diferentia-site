import Link from "next/link";
import { notFound } from "next/navigation";
import { PropostasNav } from "@/components/propostas/propostas-nav";
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
        <Link href="/propostas/oceana" className="text-sm text-[#7C6FF7] hover:underline">
          ← Voltar à trilha
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-[#F0F0FA]">{course.title}</h1>
        <p className="mt-2 text-[#9090B0]">{course.subtitle}</p>
        <p className="mt-1 text-sm text-[#E8B84B]">{course.duration}</p>

        <div className="mt-8">
          <MarkdownContent content={resumo} />
        </div>

        {detalhe.length > 0 ? (
          <div className="mt-10 rounded-xl border border-[#1E1E2E] bg-[#0F0F1A]/80 p-6">
            <h2 className="text-lg font-semibold text-[#F0F0FA]">Roteiro completo</h2>
            <p className="mt-1 text-sm text-[#9090B0]">
              Conteúdo detalhado para facilitadores (módulos e sessões).
            </p>
            <ul className="mt-4 space-y-2">
              {detalhe.map((f) => (
                <li key={f.slug}>
                  <Link
                    href={`/propostas/oceana/${slug}/detalhe/${f.slug}`}
                    className="text-[#7C6FF7] hover:underline"
                  >
                    {f.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={`/propostas/oceana/${slug}/detalhe`}
              className="mt-4 inline-block text-sm font-medium text-[#E8B84B] hover:underline"
            >
              Ver todos os módulos →
            </Link>
          </div>
        ) : null}
      </main>
    </>
  );
}
