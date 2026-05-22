import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Propostas | Diferentia",
};

export default function PropostasLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#080810] text-[#F0F0FA]">{children}</div>;
}
