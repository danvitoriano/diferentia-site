import { PropostasNav } from "@/components/propostas/propostas-nav";
import { CourseCard } from "@/components/propostas/course-card";
import { getTrilha, getLayerLabel } from "@/lib/propostas/content";
import type { PropostasLayer } from "@/lib/propostas/types";

export default function OceanaTrilhaPage() {
  const trilha = getTrilha();
  const layerOrder: PropostasLayer[] = ["nucleo", "code", "workshop"];

  return (
    <>
      <PropostasNav />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-widest text-[#E8B84B]">
          Trilha de adoção de IA
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gradient">{trilha.title}</h1>
        <p className="mt-4 max-w-2xl text-[#9090B0]">{trilha.description}</p>

        {layerOrder.map((layerId) => {
          const courses = trilha.courses.filter((c) => c.layer === layerId);
          if (courses.length === 0) return null;
          return (
            <section key={layerId} className="mt-12">
              <h2 className="text-lg font-semibold text-[#F0F0FA]">
                {getLayerLabel(layerId)}
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {courses.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
