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
        <p className="md-label-large">Agentes de IA · mercado de capitais</p>
        <h1 className="mt-2 md-headline-large">{trilha.title}</h1>
        <p className="mt-4 max-w-2xl md-body-large">{trilha.description}</p>

        <div className="mt-8 md-card-outlined p-5 sm:p-6">
          <h2 className="md-title-medium">Como navegar</h2>
          <ol className="mt-3 space-y-2 md-body-medium">
            <li>
              <strong className="text-[var(--md-sys-color-on-surface)]">1.</strong> Escolha um
              módulo abaixo para ver o programa (objetivos, carga e estrutura das sessões).
            </li>
            <li>
              <strong className="text-[var(--md-sys-color-on-surface)]">2.</strong> Na mesma
              página, veja{" "}
              <strong className="text-[var(--md-sys-color-on-surface)]">
                O que cada área recebe
              </strong>
              : entregas adaptadas por perfil (analistas, operações, jurídico, comercial,
              administrativo).
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
