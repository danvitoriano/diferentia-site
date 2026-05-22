import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MaterialWebRoot } from "@/components/propostas/material-web-root";
import "./mw-layout.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-propostas",
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Propostas | Diferentia",
};

export default function PropostasLayout({ children }: { children: React.ReactNode }) {
  return (
    <MaterialWebRoot className={`${inter.className} ${inter.variable}`}>
      {children}
    </MaterialWebRoot>
  );
}
