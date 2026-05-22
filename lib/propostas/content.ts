import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { DetalheFile, TrilhaCourse, TrilhaData } from "./types";

const CONTENT_ROOT = path.join(process.cwd(), "content/propostas/oceana");

export function getTrilha(): TrilhaData {
  const raw = fs.readFileSync(path.join(CONTENT_ROOT, "trilha.json"), "utf8");
  return JSON.parse(raw) as TrilhaData;
}

export function getCourse(slug: string): TrilhaCourse | undefined {
  return getTrilha().courses.find((c) => c.slug === slug);
}

export function getResumoMarkdown(slug: string): string {
  return fs.readFileSync(path.join(CONTENT_ROOT, slug, "resumo.md"), "utf8");
}

export function getGuiaAreasMarkdown(): string {
  return fs.readFileSync(path.join(CONTENT_ROOT, "guia-areas.md"), "utf8");
}

export function hasExemplosOceana(slug: string): boolean {
  return fs.existsSync(path.join(CONTENT_ROOT, slug, "exemplos-oceana.md"));
}

export function getExemplosOceanaMarkdown(slug: string): string {
  const filePath = path.join(CONTENT_ROOT, slug, "exemplos-oceana.md");
  if (!fs.existsSync(filePath)) {
    throw new Error(`exemplos-oceana.md not found for ${slug}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

/** Ordem de exibição na trilha (todos os cursos, sem agrupar por camada). */
export function getCoursesForDisplay(): TrilhaCourse[] {
  return [...getTrilha().courses].sort((a, b) => {
    const na = a.moduleNumber ?? 99;
    const nb = b.moduleNumber ?? 99;
    if (na !== nb) return na - nb;
    return a.title.localeCompare(b.title, "pt-BR");
  });
}

export function listDetalheFiles(slug: string): DetalheFile[] {
  const detalheDir = path.join(CONTENT_ROOT, slug, "detalhe");
  if (!fs.existsSync(detalheDir)) return [];
  return fs
    .readdirSync(detalheDir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((filename) => {
      const raw = fs.readFileSync(path.join(detalheDir, filename), "utf8");
      const { data } = matter(raw);
      const title = typeof data.title === "string" ? data.title : filename.replace(/\.md$/, "");
      return { slug: filename.replace(/\.md$/, ""), title, filename };
    });
}

export function getDetalheMarkdown(courseSlug: string, fileSlug: string) {
  const filePath = path.join(CONTENT_ROOT, courseSlug, "detalhe", `${fileSlug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const title = typeof data.title === "string" ? data.title : fileSlug;
  return { content, title };
}

export function getLayerLabel(layerId: string): string {
  return getTrilha().layers.find((l) => l.id === layerId)?.label ?? layerId;
}
