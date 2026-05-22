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
    <nav
      aria-label="Módulos anterior e próximo"
      className="mt-12 flex flex-col gap-3 border-t border-[var(--md-sys-color-outline-variant)] pt-8 sm:flex-row sm:justify-between"
    >
      {prev ? (
        <Link href={`${base}/${prev.slug}`} className="md-card group flex-1 p-4 sm:max-w-[48%]">
          <span className="md-label-medium">← Anterior</span>
          <span className="mt-1 block md-title-medium group-hover:text-[var(--md-sys-color-primary)]">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block sm:max-w-[48%]" />
      )}
      {next ? (
        <Link
          href={`${base}/${next.slug}`}
          className="md-card group flex-1 p-4 sm:max-w-[48%] sm:text-right"
        >
          <span className="md-label-medium">Próximo →</span>
          <span className="mt-1 block md-title-medium group-hover:text-[var(--md-sys-color-primary)]">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
