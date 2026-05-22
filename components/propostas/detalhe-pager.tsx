import Link from "next/link";
import type { DetalheFile } from "@/lib/propostas/types";

export function DetalhePager({
  courseSlug,
  files,
  currentSlug,
}: {
  courseSlug: string;
  files: DetalheFile[];
  currentSlug: string;
}) {
  const idx = files.findIndex((f) => f.slug === currentSlug);
  if (idx < 0) return null;

  const prev = files[idx - 1];
  const next = files[idx + 1];
  const base = `/propostas/oceana/${courseSlug}/detalhe`;

  if (!prev && !next) return null;

  return (
    <nav aria-label="Módulos anterior e próximo" className="mw-pager">
      {prev ? (
        <Link href={`${base}/${prev.slug}`} className="mw-pager-link">
          <md-outlined-button style={{ width: "100%", minHeight: "4rem" }}>
            ← {prev.title}
          </md-outlined-button>
        </Link>
      ) : (
        <div className="hidden sm:block sm:max-w-[48%]" />
      )}
      {next ? (
        <Link href={`${base}/${next.slug}`} className="mw-pager-link" style={{ marginLeft: "auto" }}>
          <md-outlined-button style={{ width: "100%", minHeight: "4rem" }}>
            {next.title} →
          </md-outlined-button>
        </Link>
      ) : null}
    </nav>
  );
}
