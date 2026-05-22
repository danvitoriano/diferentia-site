import { PropostasNav } from "@/components/propostas/propostas-nav";
import { Breadcrumbs } from "@/components/propostas/breadcrumbs";
import { MarkdownContent } from "@/components/propostas/markdown-content";
import { getGuiaAreasMarkdown } from "@/lib/propostas/content";

export default function GuiaAreasPage() {
  const content = getGuiaAreasMarkdown();
  return (
    <>
      <PropostasNav />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Trilha", href: "/propostas/oceana" },
            { label: "Guia por área" },
          ]}
        />
        <header className="mt-6 border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Guia por área</h1>
          <p className="mt-2 text-lg text-gray-600">
            Como adaptar exercícios e demos para cada perfil da Oceana.
          </p>
        </header>
        <div className="mt-8">
          <MarkdownContent content={content} />
        </div>
      </main>
    </>
  );
}
