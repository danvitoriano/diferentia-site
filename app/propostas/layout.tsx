import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { MaterialWebRoot } from "@/components/propostas/material-web-root";
import "./mw-layout.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-propostas",
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Propostas | Diferentia",
};

export default function PropostasLayout({ children }: { children: React.ReactNode }) {
  return (
    <MaterialWebRoot className={`${roboto.className} ${roboto.variable}`}>
      {children}
    </MaterialWebRoot>
  );
}
