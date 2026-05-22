import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./propostas-theme.css";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Propostas | Diferentia",
};

export default function PropostasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`propostas-theme ${robotoFlex.className} min-h-screen antialiased`}>
      {children}
    </div>
  );
}
