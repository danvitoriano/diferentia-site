import fs from "fs";
import path from "path";

const CONTENT_ROOT = path.join(process.cwd(), "content/captacao/instrutoras");

export type CaptacaoMaterial = {
  id: "instagram" | "linkedin";
  title: string;
  body: string;
};

const MATERIALS: { id: CaptacaoMaterial["id"]; title: string; file: string }[] =
  [
    { id: "instagram", title: "Convite da live: Instagram", file: "instagram.md" },
    { id: "linkedin", title: "Convite da live: LinkedIn", file: "linkedin.md" },
  ];

export function getCaptacaoMaterials(): CaptacaoMaterial[] {
  return MATERIALS.map(({ id, title, file }) => ({
    id,
    title,
    body: fs.readFileSync(path.join(CONTENT_ROOT, file), "utf8").trim(),
  }));
}

export const WAITLIST_URL =
  process.env.NEXT_PUBLIC_SITE_URL
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/instrutoras`
    : "https://diferentia.com.br/instrutoras";
