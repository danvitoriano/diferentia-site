import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./propostas-theme.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Propostas | Diferentia",
};

export default function PropostasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`propostas-theme ${roboto.className} min-h-screen antialiased`}>
      {children}
    </div>
  );
}
