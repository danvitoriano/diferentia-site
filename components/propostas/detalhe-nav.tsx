import Link from "next/link";
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
    <aside className="md-nav-rail">
      <p className="md-label-large">Índice do roteiro</p>
      <p className="mt-1 md-title-medium">{courseTitle}</p>
      <ol className="mt-4 space-y-1">
        {files.map((f, i) => {
          const active = f.slug === currentSlug;
          return (
            <li key={f.slug}>
              <Link
                href={`${base}/${f.slug}`}
                className={`md-nav-rail-link ${active ? "md-nav-rail-link-active" : ""}`}
              >
                <span className="shrink-0 tabular-nums opacity-70">{i + 1}.</span>
                <span>{f.title}</span>
              </Link>
            </li>
          );
        })}
      </ol>
      <Link href={base} className="md-text-button mt-4 inline-block px-0">
        Ver lista completa
      </Link>
    </aside>
  );
}
