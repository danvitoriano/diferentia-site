import { readFile } from "node:fs/promises";
import path from "node:path";
import type { ReactNode } from "react";
import { ImageResponse } from "next/og";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

export const ogAlt =
  "Diferentia: metodologia de Agentic AI para fundos, gestoras e fintechs";

const theme = {
  bg: "#FFFFFF",
  ink: "#15151A",
  ink2: "#54545E",
  ink3: "#9A9AA4",
  rule: "#EAEAEE",
  rule2: "#15151A",
  purple: "#5B49E0",
  gold: "#AC8228",
};

async function loadLocalFont(file: string): Promise<ArrayBuffer> {
  const buffer = await readFile(
    path.join(process.cwd(), "assets/fonts", file)
  );
  return Uint8Array.from(buffer).buffer;
}

export const instrutorasOgAlt =
  "DiferentIA: Curso para Instrutoras de IA. Vire instrutora de IA e ensine o que o mercado mais quer aprender.";

function OgEyebrow({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
      <div style={{ width: 26, height: 2, backgroundColor: theme.purple }} />
      <span
        style={{
          fontSize: 16,
          fontFamily: "Inter",
          fontWeight: 600,
          color: theme.ink2,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function OgBrand() {
  return (
    <div style={{ display: "flex", alignItems: "baseline", marginBottom: 24 }}>
      <span
        style={{
          fontSize: 48,
          fontFamily: "Inter",
          fontWeight: 700,
          color: theme.ink,
          letterSpacing: "-0.02em",
        }}
      >
        Diferentia
      </span>
      <span
        style={{
          fontSize: 48,
          fontFamily: "Inter",
          fontWeight: 700,
          color: theme.purple,
        }}
      >
        .
      </span>
    </div>
  );
}

function OgShell({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        backgroundColor: theme.bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 72,
          right: 72,
          height: 1.5,
          backgroundColor: theme.rule2,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 72,
          right: 72,
          height: 1,
          backgroundColor: theme.rule,
        }}
      />
      {children}
    </div>
  );
}

export async function createInstrutorasOgImageResponse() {
  const [interSemi, interBold, interExtra] = await Promise.all([
    loadLocalFont("inter-latin-600-normal.woff"),
    loadLocalFont("inter-latin-700-normal.woff"),
    loadLocalFont("inter-latin-800-normal.woff"),
  ]);

  return new ImageResponse(
    (
      <OgShell>
        <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}>
          <OgEyebrow label="Braço social · DiferentIA" />
          <OgBrand />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              maxWidth: 900,
            }}
          >
            <span
              style={{
                fontSize: 58,
                fontFamily: "Inter",
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                color: theme.ink,
              }}
            >
              Vire instrutora de IA
            </span>
            <span
              style={{
                fontSize: 58,
                fontFamily: "Inter",
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                color: theme.purple,
              }}
            >
              e ensine o que o mercado
            </span>
            <span
              style={{
                fontSize: 58,
                fontFamily: "Inter",
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                color: theme.ink,
              }}
            >
              mais quer aprender.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontSize: 22,
              fontFamily: "Inter",
              fontWeight: 500,
              color: theme.ink2,
              lineHeight: 1.45,
              maxWidth: 720,
              margin: 0,
            }}
          >
            Claude, agentes de IA e uma nova carreira. Lista de espera aberta.
          </p>
          <span
            style={{
              fontSize: 18,
              fontFamily: "Inter",
              fontWeight: 600,
              color: theme.gold,
              letterSpacing: "0.04em",
            }}
          >
            diferentia.com.br/instrutoras
          </span>
        </div>
      </OgShell>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Inter", data: interSemi, weight: 600, style: "normal" },
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
        { name: "Inter", data: interExtra, weight: 800, style: "normal" },
      ],
    }
  );
}

export async function createOgImageResponse() {
  const [interSemi, interBold, interExtra] = await Promise.all([
    loadLocalFont("inter-latin-600-normal.woff"),
    loadLocalFont("inter-latin-700-normal.woff"),
    loadLocalFont("inter-latin-800-normal.woff"),
  ]);

  return new ImageResponse(
    (
      <OgShell>
        <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}>
          <OgEyebrow label="Agentic AI · mercado financeiro" />
          <OgBrand />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              maxWidth: 920,
            }}
          >
            <span
              style={{
                fontSize: 62,
                fontFamily: "Inter",
                fontWeight: 800,
                lineHeight: 0.98,
                letterSpacing: "-0.03em",
                color: theme.ink,
              }}
            >
              Agentic AI que o mercado
            </span>
            <span
              style={{
                fontSize: 62,
                fontFamily: "Inter",
                fontWeight: 800,
                lineHeight: 0.98,
                letterSpacing: "-0.03em",
                color: theme.purple,
              }}
            >
              financeiro sabe usar.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontSize: 22,
              fontFamily: "Inter",
              fontWeight: 500,
              color: theme.ink2,
              lineHeight: 1.45,
              maxWidth: 720,
              margin: 0,
            }}
          >
            Do diagnóstico de maturidade à autonomia operacional: fundos,
            gestoras e fintechs.
          </p>
          <span
            style={{
              fontSize: 18,
              fontFamily: "Inter",
              fontWeight: 600,
              color: theme.gold,
              letterSpacing: "0.04em",
            }}
          >
            diferentia.com.br
          </span>
        </div>
      </OgShell>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Inter", data: interSemi, weight: 600, style: "normal" },
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
        { name: "Inter", data: interExtra, weight: 800, style: "normal" },
      ],
    }
  );
}
