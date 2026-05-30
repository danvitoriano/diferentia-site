import type { Metadata } from "next";
import Link from "next/link";
import { CopyButton } from "@/components/captacao/copy-button";
import {
  getCaptacaoMaterials,
  WAITLIST_URL,
} from "@/lib/captacao/instrutoras";

export const metadata: Metadata = {
  title: "Materiais de captação | Instrutoras de IA",
  robots: { index: false, follow: false },
};

export default function MateriaisPage() {
  const materials = getCaptacaoMaterials();

  return (
    <div className="min-h-screen bg-[#080810] text-[#F0F0FA]">
      <header className="border-b border-[#1E1E2E]/60 bg-[#080810]/80 backdrop-blur-md">
        <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between gap-4">
          <Link
            href="/instrutoras"
            className="text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
          >
            Diferentia
            <span className="text-[#7C6FF7]">.</span>
          </Link>
          <Link
            href="/instrutoras"
            className="text-xs text-[#9090B0] hover:text-white transition-colors"
          >
            ← Lista de espera
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7C6FF7] mb-3 block">
            Uso interno
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Materiais de captação
          </h1>
          <p className="text-[#9090B0] text-sm leading-relaxed">
            Textos para Instagram e LinkedIn. Link da lista de espera:{" "}
            <a
              href={WAITLIST_URL}
              className="text-[#7C6FF7] hover:underline break-all"
            >
              {WAITLIST_URL}
            </a>
          </p>
        </div>

        <div className="space-y-8">
          {materials.map((material) => (
            <section
              key={material.id}
              className="rounded-2xl border border-[#1E1E2E] bg-[#0F0F1A] p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="text-lg font-semibold text-white">
                  {material.title}
                </h2>
                <CopyButton text={material.body} />
              </div>
              <p className="text-[#9090B0] leading-relaxed whitespace-pre-wrap">
                {material.body}
              </p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
