import { applyTheme, argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";

/** Índigo Diferentia: seed M3; tokens finais em BRAND_OVERRIDES (fundo branco). */
const PROPOSTAS_SEED = "#7C6FF7";

/** Paleta editorial (proposta Oceana): branco, texto escuro, dourado em labels, índigo em links. */
const BRAND_OVERRIDES: Record<string, string> = {
  "--diferentia-gold": "#E8B84B",
  "--diferentia-indigo": "#7C6FF7",
  "--md-sys-color-surface": "#FFFFFF",
  "--md-sys-color-surface-dim": "#FAFAFA",
  "--md-sys-color-surface-bright": "#FFFFFF",
  "--md-sys-color-surface-container-lowest": "#FFFFFF",
  "--md-sys-color-surface-container-low": "#F8F9FA",
  "--md-sys-color-surface-container": "#F1F3F4",
  "--md-sys-color-surface-container-high": "#E8EAED",
  "--md-sys-color-on-surface": "#1A1A1A",
  "--md-sys-color-on-surface-variant": "#5F6368",
  "--md-sys-color-outline": "#DADCE0",
  "--md-sys-color-outline-variant": "#E8EAED",
  "--md-sys-color-primary": "#7C6FF7",
  "--md-sys-color-on-primary": "#FFFFFF",
  "--md-sys-color-primary-container": "#F3F1FF",
  "--md-sys-color-on-primary-container": "#3D355C",
  "--md-sys-color-secondary-container": "#FAF6EB",
  "--md-sys-color-on-secondary-container": "#5C4A1A",
  "--md-sys-color-tertiary-container": "#F8F9FA",
};

export function applyPropostasMaterialTheme(target: HTMLElement): void {
  const theme = themeFromSourceColor(argbFromHex(PROPOSTAS_SEED));
  applyTheme(theme, { target, dark: false });
  for (const [key, value] of Object.entries(BRAND_OVERRIDES)) {
    target.style.setProperty(key, value);
  }
}
