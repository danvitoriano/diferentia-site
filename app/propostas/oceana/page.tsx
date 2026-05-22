import { PropostasNav } from "@/components/propostas/propostas-nav";
import { CourseCard } from "@/components/propostas/course-card";
import { getTrilha, getLayerLabel } from "@/lib/propostas/content";
import type { PropostasLayer } from "@/lib/propostas/types";

export default function OceanaTrilhaPage() {
  const trilha = getTrilha();
  const layerOrder: PropostasLayer[] = ["nucleo", "code", "workshop"];

  let globalStep = 0;

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
              <strong className="text-gray-900">1.</strong> Escolha um curso abaixo para ver o
              resumo (objetivos, carga e público).
            </li>
            <li>
              <strong className="text-gray-900">2.</strong> No resumo, acesse o{" "}
              <strong className="text-gray-900">roteiro completo</strong> com módulos e sessões para
              facilitadores.
            </li>
            <li>
              <strong className="text-gray-900">3.</strong> Use{" "}
              <strong className="text-gray-900">Guia por área</strong> no menu para adaptar
              exercícios a cada perfil da Oceana.
            </li>
          </ol>
        </div>

        {layerOrder.map((layerId) => {
          const courses = trilha.courses.filter((c) => c.layer === layerId);
          if (courses.length === 0) return null;

          const layerDescriptions: Record<PropostasLayer, string> = {
            nucleo: "Sequência recomendada para a maioria do time.",
            code: "Para quem quer construir ferramentas no terminal (opcional).",
            workshop: "Laboratório hands-on de um dia (opcional).",
          };

          return (
            <section key={layerId} className="mt-14">
              <div className="border-b border-gray-200 pb-3">
                <h2 className="text-xl font-semibold text-gray-900">
                  {getLayerLabel(layerId)}
                </h2>
                <p className="mt-1 text-sm text-gray-500">{layerDescriptions[layerId]}</p>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {courses.map((course) => {
                  globalStep += 1;
                  return (
                    <CourseCard key={course.slug} course={course} step={globalStep} />
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
