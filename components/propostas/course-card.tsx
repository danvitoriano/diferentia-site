import Link from "next/link";
import type { TrilhaCourse } from "@/lib/propostas/types";

export function CourseCard({ course, step }: { course: TrilhaCourse; step?: number }) {
  return (
    <Link href={`/propostas/oceana/${course.slug}`} className="mw-course-card">
      <md-elevated-card>
        <div className="mw-course-card-inner">
          <div className="flex flex-wrap items-center gap-2">
            {step != null ? <span className="mw-step-badge">{step}</span> : null}
            {course.moduleNumber ? (
              <md-assist-chip label={`Módulo ${String(course.moduleNumber).padStart(2, "0")}`} />
            ) : null}
            {course.status === "em-definicao" ? (
              <md-assist-chip label="Em definição" />
            ) : null}
          </div>
          <h3 className="mw-title-medium">{course.title}</h3>
          <p className="mw-body-medium flex-1">{course.subtitle}</p>
          <p className="mw-label-large">{course.duration}</p>
          <span className="mw-body-medium" style={{ color: "var(--md-sys-color-primary)" }}>
            Ver programa e entregas por área →
          </span>
        </div>
      </md-elevated-card>
    </Link>
  );
}
