export type AreaSection = {
  title: string;
  body: string;
};

/**
 * Divide markdown de exemplos-oceana em intro + seções por heading ## (área).
 */
export function parseAreaSections(markdown: string): {
  intro: string;
  sections: AreaSection[];
} {
  const parts = markdown.split(/\n(?=## )/);
  let intro = "";
  const sections: AreaSection[] = [];

  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("## ")) {
      const newline = trimmed.indexOf("\n");
      const titleLine = newline === -1 ? trimmed : trimmed.slice(0, newline);
      const title = titleLine.replace(/^##\s+/, "").trim();
      const body =
        newline === -1
          ? ""
          : trimmed
              .slice(newline + 1)
              .replace(/^\s*---\s*$/gm, "")
              .trim();
      sections.push({ title, body });
    } else {
      const cleaned = trimmed.replace(/\n---\s*$/g, "").trim();
      intro = intro ? `${intro}\n\n${cleaned}` : cleaned;
    }
  }

  return { intro, sections };
}
