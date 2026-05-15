import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://diferentia.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Diferentia — IA para o Mercado Financeiro",
  description:
    "Metodologia de adoção de IA para fundos, gestoras e fintechs. Do diagnóstico à autonomia operacional.",
  openGraph: {
    title: "Diferentia — IA para o Mercado Financeiro",
    description:
      "Metodologia de adoção de IA para fundos, gestoras e fintechs.",
    type: "website",
    locale: "pt_BR",
    siteName: "Diferentia",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Diferentia — IA para o Mercado Financeiro",
    description:
      "Metodologia de adoção de IA para fundos, gestoras e fintechs.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
