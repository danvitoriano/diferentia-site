import Link from "next/link";
import type { TrilhaCourse } from "@/lib/propostas/types";

export function CourseCard({ course, step }: { course: TrilhaCourse; step?: number }) {
  return (
    <Link href={`/propostas/oceana/${course.slug}`} className="mw-module-card-link">
      <md-elevated-card className="mw-module-card">
        <div className="mw-module-card-top">
          <div className="mw-module-card-meta">
            {step != null ? (
              <span className="mw-module-card-step" aria-hidden>
                {String(step).padStart(2, "0")}
              </span>
            ) : null}
            <div className="mw-module-card-chips">
              {course.moduleNumber ? (
                <span className="mw-module-chip">
                  Módulo {String(course.moduleNumber).padStart(2, "0")}
                </span>
              ) : null}
              {course.status === "em-definicao" ? (
                <span className="mw-module-chip mw-module-chip-muted">Em definição</span>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mw-module-card-content">
          <h3 className="mw-module-card-headline">{course.title}</h3>
          <p className="mw-module-card-subhead">{course.subtitle}</p>
        </div>

        <md-divider className="mw-module-card-divider" />

        <div className="mw-module-card-actions">
          <span className="mw-module-card-duration">{course.duration}</span>
          <span className="mw-module-card-action">
            Ver programa
            <span className="material-symbols-outlined mw-module-card-action-icon" aria-hidden>
              arrow_forward
            </span>
          </span>
        </div>
      </md-elevated-card>
    </Link>
  );
}
