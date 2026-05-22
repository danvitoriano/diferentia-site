import Link from "next/link";
import type { TrilhaCourse } from "@/lib/propostas/types";

export function CourseCard({ course, step }: { course: TrilhaCourse; step?: number }) {
  return (
    <Link href={`/propostas/oceana/${course.slug}`} className="md-card group flex h-full flex-col p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {step != null ? (
          <span className="md-list-item-number h-7 w-7 text-xs">{step}</span>
        ) : null}
        {course.moduleNumber ? (
          <span className="md-label-medium text-[var(--md-sys-color-tertiary)]">
            Módulo {String(course.moduleNumber).padStart(2, "0")}
          </span>
        ) : null}
        {course.status === "em-definicao" ? (
          <span className="md-chip md-chip-assist">Em definição</span>
        ) : null}
      </div>
      <h3 className="md-title-medium group-hover:text-[var(--md-sys-color-primary)]">
        {course.title}
      </h3>
      <p className="mt-2 flex-1 md-body-medium">{course.subtitle}</p>
      <p className="mt-4 md-label-medium text-[var(--md-sys-color-primary)]">{course.duration}</p>
      <span className="mt-3 md-body-medium text-[var(--md-sys-color-primary)]">
        Ver programa e entregas por área →
      </span>
    </Link>
  );
}
