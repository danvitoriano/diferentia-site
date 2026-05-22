#!/usr/bin/env node
/**
 * Copia entregas por área (exemplos-oceana.md) de cursos-oceana para o portal.
 * Roteiro (detalhe/) e guia-areas não são expostos à Oceana.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.resolve(__dirname, "..");
const CO =
  process.env.CURSOS_OCEANA_PATH ||
  path.resolve(SITE, "../cursos-oceana");
const CONTENT = path.join(SITE, "content/propostas/oceana");

/** slug no portal → pasta local do curso */
const CURSO_DIRS = {
  introdutorio: "curso-claude-introdutorio",
  "cowork-demonstrativo": "curso-cowork",
  "cowork-workshop": "curso-cowork-workshop",
  "vibe-coders": "curso-claude-code",
  "claude-code-avancado": "curso-claude-code-avancado",
  "decisoes-criticas": "curso-decisoes-criticas",
  "computer-use": "curso-computer-use",
};

function copyIfExists(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn("skip (missing):", src);
    return false;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log("copied", path.relative(SITE, dest));
  return true;
}

console.log("Sync from", CO, "→", CONTENT);

for (const [slug, dir] of Object.entries(CURSO_DIRS)) {
  const base = path.join(CO, dir);
  copyIfExists(
    path.join(base, "exemplos-oceana.md"),
    path.join(CONTENT, slug, "exemplos-oceana.md")
  );
}

console.log("Done. trilha.json e resumo.md continuam editados em content/propostas/oceana.");
