import Link from "next/link";
import type { TrilhaCourse } from "@/lib/propostas/types";

export function CourseCard({ course }: { course: TrilhaCourse }) {
  return (
    <Link
      href={`/propostas/oceana/${course.slug}`}
      className="card-surface block rounded-xl p-5 transition hover:border-[#7C6FF7]/50"
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        {course.moduleNumber ? (
          <span className="text-xs font-medium uppercase tracking-wide text-[#E8B84B]">
            Módulo {String(course.moduleNumber).padStart(2, "0")}
          </span>
        ) : null}
        {course.optional ? (
          <span className="rounded bg-[#1E1E2E] px-2 py-0.5 text-xs text-[#9090B0]">Opcional</span>
        ) : null}
        {course.status === "em-definicao" ? (
          <span className="rounded bg-[#1E1E2E] px-2 py-0.5 text-xs text-[#9090B0]">Em definição</span>
        ) : null}
      </div>
      <h3 className="text-lg font-semibold text-[#F0F0FA]">{course.title}</h3>
      <p className="mt-1 text-sm text-[#9090B0]">{course.subtitle}</p>
      <p className="mt-3 text-sm text-[#7C6FF7]">{course.duration}</p>
    </Link>
  );
}
