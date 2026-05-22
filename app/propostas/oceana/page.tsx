import { PropostasNav } from "@/components/propostas/propostas-nav";
import { CourseCard } from "@/components/propostas/course-card";
import { getTrilha, getCoursesForDisplay } from "@/lib/propostas/content";

export default function OceanaTrilhaPage() {
  const trilha = getTrilha();
  const courses = getCoursesForDisplay();

  return (
    <>
      <PropostasNav />
      <div className="mw-hero-band">
        <div className="mx-auto max-w-5xl px-4 pb-6 pt-8 sm:px-6">
          <p className="mw-label-large">Agentes de IA · mercado de capitais</p>
          <h1 className="mt-3 mw-display-small">{trilha.title}</h1>
          <p className="mt-4 max-w-2xl mw-body-large">{trilha.description}</p>
        </div>
      </div>
      <main className="mw-page-body mx-auto max-w-5xl px-4 pb-12 sm:px-6">
        <div className="mw-info-box">
          <h2 className="mw-title-medium">Como navegar</h2>
          <ol className="mt-3 space-y-2 mw-body-medium" style={{ paddingLeft: "1.25rem", margin: 0 }}>
            <li>
              <strong style={{ color: "var(--md-sys-color-on-surface)" }}>1.</strong> Escolha um
              módulo abaixo para ver o programa (objetivos, carga e estrutura das sessões).
            </li>
            <li>
              <strong style={{ color: "var(--md-sys-color-on-surface)" }}>2.</strong> Na mesma
              página, veja{" "}
              <strong style={{ color: "var(--md-sys-color-on-surface)" }}>
                O que cada área recebe
              </strong>
              : entregas adaptadas por perfil (analistas, operações, jurídico, comercial,
              administrativo).
            </li>
          </ol>
        </div>

        <section className="mt-8">
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
