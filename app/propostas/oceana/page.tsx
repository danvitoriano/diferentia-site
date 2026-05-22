import { PropostasNav } from "@/components/propostas/propostas-nav";
import { CourseCard } from "@/components/propostas/course-card";
import { getTrilha, getCoursesForDisplay } from "@/lib/propostas/content";

export default function OceanaTrilhaPage() {
  const trilha = getTrilha();
  const courses = getCoursesForDisplay();

  return (
    <>
      <PropostasNav />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-600">
          Agentes de IA · mercado de capitais
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gradient">{trilha.title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
          {trilha.description}
        </p>

        <div className="mt-8 rounded-xl border border-violet-100 bg-violet-50/60 p-5 sm:p-6">
          <h2 className="text-sm font-semibold text-gray-900">Como navegar</h2>
          <ol className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700">
            <li>
              <strong className="text-gray-900">1.</strong> Escolha um módulo abaixo para ver o
              programa (objetivos, carga e estrutura das sessões).
            </li>
            <li>
              <strong className="text-gray-900">2.</strong> Na mesma página, role até{" "}
              <strong className="text-gray-900">Exemplos para a Oceana</strong>: prompts e casos
              prontos para usar no dia a dia do time.
            </li>
          </ol>
        </div>

        <section className="mt-10">
          <h2 className="sr-only">Módulos da trilha</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {courses.map((course, i) => (
              <CourseCard key={course.slug} course={course} step={i + 1} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
