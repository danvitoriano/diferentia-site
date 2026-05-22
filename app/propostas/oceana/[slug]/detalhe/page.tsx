import Link from "next/link";
import { notFound } from "next/navigation";
import { PropostasNav } from "@/components/propostas/propostas-nav";
import { getCourse, listDetalheFiles } from "@/lib/propostas/content";

export default async function DetalheIndexPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  const files = listDetalheFiles(slug);

  return (
    <>
      <PropostasNav />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Link href={`/propostas/oceana/${slug}`} className="text-sm text-[#7C6FF7] hover:underline">
          ← Resumo do curso
        </Link>
        <h1 className="mt-4 text-2xl font-bold text-[#F0F0FA]">
          Roteiro: {course.title}
        </h1>
        {files.length === 0 ? (
          <p className="mt-6 text-[#9090B0]">Roteiro em preparação.</p>
        ) : (
          <ul className="mt-8 space-y-3">
            {files.map((f) => (
              <li key={f.slug}>
                <Link
                  href={`/propostas/oceana/${slug}/detalhe/${f.slug}`}
                  className="text-lg text-[#7C6FF7] hover:underline"
                >
                  {f.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
