import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diferentia — IA para o Mercado Financeiro",
  description:
    "Metodologia de adoção de IA para fundos, gestoras e fintechs. Do diagnóstico à autonomia operacional.",
  openGraph: {
    title: "Diferentia",
    description:
      "Metodologia de adoção de IA para o mercado financeiro.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
