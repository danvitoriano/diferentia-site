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
        <div className="mw-page-wrap pb-6 pt-8">
          <Breadcrumbs
            items={[
              { label: "Trilha", href: "/propostas/oceana" },
              { label: "Guia por área" },
            ]}
          />
          <header className="mt-6 max-w-3xl">
            <h1 className="mw-display-small">Guia por área</h1>
            <p className="mt-3 mw-body-large">
              Como adaptar exercícios e demos para cada perfil da Oceana.
            </p>
          </header>
        </div>
      </div>
      <main className="mw-page-body mw-page-wrap">
        <div className="mw-editorial-shell">
          <div className="mw-editorial-content">
            <MarkdownContent content={content} />
          </div>
          <div className="mw-editorial-rail" aria-hidden="true" />
        </div>
      </main>
    </>
  );
}
