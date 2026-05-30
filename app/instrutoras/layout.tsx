import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://diferentia.com.br";

const title = "DiferentIA: Curso para Instrutoras de IA";
const description =
  "Um curso da DiferentIA para mulheres que querem dominar o Claude e os agentes de IA e transformar isso numa nova carreira, mesmo começando do zero.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: "Diferentia",
    url: `${siteUrl}/instrutoras`,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function InstrutorasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
