"use client";

import { useState } from "react";
import { parseAreaSections } from "@/lib/propostas/parse-area-sections";
import { MarkdownContent } from "./markdown-content";

export function AreaExemplosAccordion({ content }: { content: string }) {
  const { intro, sections } = parseAreaSections(content);
  const [openTitles, setOpenTitles] = useState<Set<string>>(() => new Set());

  if (sections.length === 0) {
    return <MarkdownContent content={content} />;
  }

  function toggle(title: string) {
    setOpenTitles((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  }

  return (
    <div>
      {intro ? (
        <div className="mb-5">
          <MarkdownContent content={intro} />
        </div>
      ) : null}
      <div className="flex flex-col gap-3">
        {sections.map((section) => {
          const isOpen = openTitles.has(section.title);
          return (
            <div key={section.title} className="mw-area-block">
              <md-elevated-card>
                <md-list className="mw-area-list">
                  <md-list-item
                    type="button"
                    headline={section.title}
                    onClick={() => toggle(section.title)}
                  >
                    <md-icon slot="end">{isOpen ? "expand_less" : "expand_more"}</md-icon>
                  </md-list-item>
                </md-list>
                {isOpen ? (
                  <div className="mw-area-panel-content">
                    <MarkdownContent content={section.body} />
                  </div>
                ) : null}
              </md-elevated-card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
