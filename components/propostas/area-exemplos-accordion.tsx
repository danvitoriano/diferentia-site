"use client";

import { parseAreaSections } from "@/lib/propostas/parse-area-sections";
import { MarkdownContent } from "./markdown-content";

export function AreaExemplosAccordion({ content }: { content: string }) {
  const { intro, sections } = parseAreaSections(content);

  if (sections.length === 0) {
    return <MarkdownContent content={content} />;
  }

  return (
    <div>
      {intro ? (
        <div className="mb-5">
          <MarkdownContent content={intro} />
        </div>
      ) : null}
      <div className="mw-expansion-group">
        {sections.map((section) => (
          <details key={section.title} className="mw-expansion">
            <summary className="mw-expansion-summary">
              <span className="mw-expansion-title">{section.title}</span>
              <span className="mw-expansion-icon material-symbols-outlined" aria-hidden>
                expand_more
              </span>
            </summary>
            <div className="mw-expansion-body">
              <MarkdownContent content={section.body} />
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
