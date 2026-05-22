import Link from "next/link";
import type { TrilhaCourse } from "@/lib/propostas/types";

export function CourseCard({ course, step }: { course: TrilhaCourse; step?: number }) {
  return (
    <Link href={`/propostas/oceana/${course.slug}`} className="mw-module-card">
      <div className="mw-module-card-inner">
        <div className="mw-module-card-meta">
          {step != null ? <span className="mw-step-badge">{step}</span> : null}
          {course.moduleNumber ? (
            <span className="mw-module-tag">
              Módulo {String(course.moduleNumber).padStart(2, "0")}
            </span>
          ) : null}
          {course.status === "em-definicao" ? (
            <span className="mw-module-tag mw-module-tag-muted">Em definição</span>
          ) : null}
        </div>
        <h3 className="mw-title-medium">{course.title}</h3>
        <p className="mw-body-medium mw-module-card-subtitle">{course.subtitle}</p>
        <p className="mw-module-card-duration">{course.duration}</p>
        <span className="mw-module-card-cta">Ver programa e entregas por área →</span>
      </div>
    </Link>
  );
}
