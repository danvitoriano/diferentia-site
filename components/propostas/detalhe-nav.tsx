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
    <md-elevated-card style={{ display: "block", padding: "1rem", borderRadius: "1rem" }}>
      <p className="mw-label-large" style={{ margin: 0 }}>
        Índice do roteiro
      </p>
      <p className="mw-title-medium" style={{ marginTop: "0.25rem" }}>
        {courseTitle}
      </p>
      <md-list style={{ marginTop: "0.5rem", padding: 0 }}>
        {files.map((f, i) => (
          <md-list-item
            key={f.slug}
            type="link"
            href={`${base}/${f.slug}`}
            headline={`${i + 1}. ${f.title}`}
            selected={f.slug === currentSlug}
          />
        ))}
      </md-list>
      <a href={base} className="mw-label-large" style={{ display: "inline-block", marginTop: "0.75rem" }}>
        Ver lista completa
      </a>
    </md-elevated-card>
  );
}
