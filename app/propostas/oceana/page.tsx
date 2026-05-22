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
        <div className="mw-page-wrap pb-8 pt-10">
          <p className="mw-label-large">Agentes de IA · mercado financeiro</p>
          <h1 className="mt-4 mw-display-small">{trilha.title}</h1>
          <p className="mt-5 max-w-2xl mw-body-large">{trilha.description}</p>
        </div>
      </div>
      <main className="mw-page-body mw-page-wrap">
        <section className="mt-12">
          <h2 className="sr-only">Módulos da trilha</h2>
          <div className="mw-module-card-grid">
            {courses.map((course, i) => (
              <CourseCard key={course.slug} course={course} step={i + 1} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
