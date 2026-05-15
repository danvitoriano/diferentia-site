import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

export const ogAlt =
  "Diferentia — metodologia de IA para fundos, gestoras e fintechs";

async function loadLocalFont(file: string): Promise<ArrayBuffer> {
  const buffer = await readFile(
    path.join(process.cwd(), "assets/fonts", file)
  );
  return Uint8Array.from(buffer).buffer;
}

export async function createOgImageResponse() {
  const [interSemi, interBold, interExtra] = await Promise.all([
    loadLocalFont("inter-latin-600-normal.woff"),
    loadLocalFont("inter-latin-700-normal.woff"),
    loadLocalFont("inter-latin-800-normal.woff"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#080810",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: "50%",
            transform: "translateX(-50%)",
            width: 900,
            height: 500,
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(124,111,247,0.35), transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(124,111,247,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,111,247,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 24,
            border: "1px solid rgba(30,30,46,0.9)",
            borderRadius: 24,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 40,
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid rgba(124,111,247,0.35)",
              backgroundColor: "rgba(124,111,247,0.12)",
              alignSelf: "flex-start",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#7C6FF7",
              }}
            />
            <span
              style={{
                fontSize: 18,
                fontFamily: "Inter",
                fontWeight: 600,
                color: "#c5c0ff",
                letterSpacing: "0.02em",
              }}
            >
              Metodologia para o setor financeiro
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                fontSize: 52,
                fontFamily: "Inter",
                fontWeight: 800,
                color: "#F0F0FA",
                letterSpacing: "-0.03em",
              }}
            >
              Diferentia
            </span>
            <span
              style={{
                fontSize: 52,
                fontFamily: "Inter",
                fontWeight: 800,
                color: "#7C6FF7",
              }}
            >
              .
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              maxWidth: 920,
            }}
          >
            <span
              style={{
                fontSize: 56,
                fontFamily: "Inter",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#7C6FF7",
              }}
            >
              IA que o mercado
            </span>
            <span
              style={{
                fontSize: 56,
                fontFamily: "Inter",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#F0F0FA",
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
              fontWeight: 600,
              color: "#9090B0",
              lineHeight: 1.45,
              maxWidth: 720,
              margin: 0,
            }}
          >
            Do diagnóstico de maturidade à autonomia operacional — fundos,
            gestoras e fintechs.
          </p>
          <span
            style={{
              fontSize: 20,
              fontFamily: "Inter",
              fontWeight: 700,
              color: "#E8B84B",
              letterSpacing: "0.04em",
            }}
          >
            diferentia.com.br
          </span>
        </div>
      </div>
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
