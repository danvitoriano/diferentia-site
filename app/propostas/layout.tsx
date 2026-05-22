import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Propostas | Diferentia",
};

export default function PropostasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="propostas-theme min-h-screen bg-white text-gray-900 antialiased">
      {children}
    </div>
  );
}
