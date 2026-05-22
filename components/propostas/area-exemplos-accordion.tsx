import { parseAreaSections } from "@/lib/propostas/parse-area-sections";
import { MarkdownContent } from "./markdown-content";

export function AreaExemplosAccordion({ content }: { content: string }) {
  const { intro, sections } = parseAreaSections(content);

  if (sections.length === 0) {
    return <MarkdownContent content={content} />;
  }

  return (
    <div className="md-area-accordion">
      {intro ? (
        <div className="mb-5">
          <MarkdownContent content={intro} />
        </div>
      ) : null}
      {sections.map((section) => (
        <details key={section.title} className="md-expansion-panel">
          <summary className="md-expansion-panel-summary">
            <span className="md-expansion-panel-title">{section.title}</span>
          </summary>
          <div className="md-expansion-panel-content">
            <MarkdownContent content={section.body} />
          </div>
        </details>
      ))}
    </div>
  );
}
