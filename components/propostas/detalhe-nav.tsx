import type { DetalheFile } from "@/lib/propostas/types";

export function DetalheNav({
  courseSlug,
  courseTitle,
  files,
  currentSlug,
}: {
  courseSlug: string;
  courseTitle: string;
  files: DetalheFile[];
  currentSlug?: string;
}) {
  if (files.length === 0) return null;

  const base = `/propostas/oceana/${courseSlug}/detalhe`;

  return (
    <aside className="mw-sidebar">
      <p className="mw-label-large" style={{ margin: 0 }}>
        Índice do roteiro
      </p>
      <p className="mw-title-medium" style={{ marginTop: "0.25rem" }}>
        {courseTitle}
      </p>
      <nav className="mt-3 flex flex-col gap-0.5" aria-label="Índice do roteiro">
        {files.map((f, i) => {
          const active = f.slug === currentSlug;
          return (
            <a
              key={f.slug}
              href={`${base}/${f.slug}`}
              className={active ? "mw-sidebar-link mw-sidebar-link-active" : "mw-sidebar-link"}
            >
              {i + 1}. {f.title}
            </a>
          );
        })}
      </nav>
      <a href={base} className="mw-label-large" style={{ display: "inline-block", marginTop: "0.75rem" }}>
        Ver lista completa
      </a>
    </aside>
  );
}
