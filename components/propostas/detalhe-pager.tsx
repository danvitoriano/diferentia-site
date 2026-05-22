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
      className="mt-12 flex flex-col gap-3 border-t border-gray-200 pt-8 sm:flex-row sm:justify-between"
    >
      {prev ? (
        <Link
          href={`${base}/${prev.slug}`}
          className="group rounded-lg border border-gray-200 bg-white px-4 py-3 transition hover:border-violet-300 hover:shadow-sm sm:max-w-[48%]"
        >
          <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
            ← Anterior
          </span>
          <span className="mt-1 block text-sm font-medium text-gray-900 group-hover:text-violet-700">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block sm:max-w-[48%]" />
      )}
      {next ? (
        <Link
          href={`${base}/${next.slug}`}
          className="group rounded-lg border border-gray-200 bg-white px-4 py-3 text-left transition hover:border-violet-300 hover:shadow-sm sm:max-w-[48%] sm:text-right"
        >
          <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Próximo →
          </span>
          <span className="mt-1 block text-sm font-medium text-gray-900 group-hover:text-violet-700">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
