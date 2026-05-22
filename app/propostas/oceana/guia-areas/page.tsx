import { PropostasNav } from "@/components/propostas/propostas-nav";
import { MarkdownContent } from "@/components/propostas/markdown-content";
import { getGuiaAreasMarkdown } from "@/lib/propostas/content";
import Link from "next/link";

export default function GuiaAreasPage() {
  const content = getGuiaAreasMarkdown();
  return (
    <>
      <PropostasNav />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Link href="/propostas/oceana" className="text-sm text-[#7C6FF7] hover:underline">
          ← Voltar à trilha
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-[#F0F0FA]">Guia por área</h1>
        <p className="mt-2 text-[#9090B0]">
          Como adaptar exercícios e demos para cada perfil da Oceana.
        </p>
        <div className="mt-8">
          <MarkdownContent content={content} />
        </div>
      </main>
    </>
  );
}
