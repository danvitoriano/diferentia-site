import { applyTheme, argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";

/** Roxo Diferentia: seed para tema M3 (Material Theme Builder / color utilities). */
const PROPOSTAS_SEED = "#5b4aa8";

export function applyPropostasMaterialTheme(target: HTMLElement): void {
  const theme = themeFromSourceColor(argbFromHex(PROPOSTAS_SEED));
  applyTheme(theme, { target, dark: false });
}
