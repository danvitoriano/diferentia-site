"use client";

import { useEffect, useRef } from "react";
import "@/lib/propostas/register-material-web";
import { applyPropostasMaterialTheme } from "@/lib/propostas/apply-material-theme";

export function MaterialWebRoot({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rootRef.current) {
      applyPropostasMaterialTheme(rootRef.current);
    }
  }, []);

  return (
    <div ref={rootRef} className={`propostas-mw min-h-screen antialiased ${className}`.trim()}>
      {children}
    </div>
  );
}
