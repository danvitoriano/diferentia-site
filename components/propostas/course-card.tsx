import Link from "next/link";
import type { TrilhaCourse } from "@/lib/propostas/types";

export function CourseCard({ course, step }: { course: TrilhaCourse; step?: number }) {
  return (
    <Link
      href={`/propostas/oceana/${course.slug}`}
      className="card-surface group flex h-full flex-col rounded-xl p-5 transition hover:border-violet-300 hover:shadow-md"
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {step != null ? (
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
            {step}
          </span>
        ) : null}
        {course.moduleNumber ? (
          <span className="text-xs font-semibold uppercase tracking-wide text-amber-700">
            Módulo {String(course.moduleNumber).padStart(2, "0")}
          </span>
        ) : null}
        {course.optional ? (
          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
            Opcional
          </span>
        ) : null}
        {course.status === "em-definicao" ? (
          <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-800">
            Em definição
          </span>
        ) : null}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-violet-700">
        {course.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{course.subtitle}</p>
      <p className="mt-4 text-sm font-medium text-violet-600">{course.duration}</p>
      <span className="mt-3 text-xs font-medium text-gray-400 group-hover:text-violet-600">
        Ver resumo do curso →
      </span>
    </Link>
  );
}
