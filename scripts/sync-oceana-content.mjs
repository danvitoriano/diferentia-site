#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.resolve(__dirname, "..");
const CO =
  process.env.CURSOS_OCEANA_PATH ||
  path.resolve(SITE, "../cursos-oceana");
const CONTENT = path.join(SITE, "content/propostas/oceana");

function ghFile(repo, filePath) {
  const b64 = execSync(
    `gh api repos/diferentia/${repo}/contents/${filePath} -q .content`,
    { encoding: "utf8" }
  ).trim().replace(/^"|"$/g, "");
  return Buffer.from(b64, "base64").toString("utf8");
}

function writeDetalhe(slug, filename, raw, title) {
  const dir = path.join(CONTENT, slug, "detalhe");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, filename),
    `---\ntitle: ${title}\n---\n\n${raw}`
  );
}

// trilha.json - keep in sync with app or regenerate minimal
console.log("Sync from", CO);
// ... run full sync logic - user can re-run python or extend
console.log("Use: python3 sync helper or commit content/ as source of truth");
