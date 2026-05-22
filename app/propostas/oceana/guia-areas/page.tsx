import { PropostasNav } from "@/components/propostas/propostas-nav";
import { Breadcrumbs } from "@/components/propostas/breadcrumbs";
import { MarkdownContent } from "@/components/propostas/markdown-content";
import { getGuiaAreasMarkdown } from "@/lib/propostas/content";

export default function GuiaAreasPage() {
  const content = getGuiaAreasMarkdown();
  return (
    <>
      <PropostasNav />
      <div className="mw-hero-band mw-hero-band-compact">
        <div className="mx-auto max-w-3xl px-4 pb-4 pt-6 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Trilha", href: "/propostas/oceana" },
              { label: "Guia por área" },
            ]}
          />
          <header className="mt-4">
            <h1 className="mw-display-small">Guia por área</h1>
            <p className="mt-2 mw-body-large">
              Como adaptar exercícios e demos para cada perfil da Oceana.
            </p>
          </header>
        </div>
      </div>
      <main className="mw-page-body mx-auto max-w-3xl px-4 pb-12 sm:px-6">
        <div className="mt-2">
          <MarkdownContent content={content} />
        </div>
      </main>
    </>
  );
}
