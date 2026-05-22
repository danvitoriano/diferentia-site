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
    <aside className="rounded-xl border border-gray-200 bg-gray-50 p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        Índice do roteiro
      </p>
      <p className="mt-1 text-sm font-medium text-gray-900">{courseTitle}</p>
      <ol className="mt-4 space-y-1">
        {files.map((f, i) => {
          const active = f.slug === currentSlug;
          return (
            <li key={f.slug}>
              <Link
                href={`${base}/${f.slug}`}
                className={`flex gap-2 rounded-lg px-2 py-1.5 text-sm transition ${
                  active
                    ? "bg-violet-100 font-medium text-violet-900"
                    : "text-gray-700 hover:bg-white hover:text-violet-700"
                }`}
              >
                <span className="shrink-0 tabular-nums text-gray-400">{i + 1}.</span>
                <span>{f.title}</span>
              </Link>
            </li>
          );
        })}
      </ol>
      <Link
        href={base}
        className="mt-4 inline-block text-xs font-medium text-violet-600 hover:underline"
      >
        Ver lista completa
      </Link>
    </aside>
  );
}
