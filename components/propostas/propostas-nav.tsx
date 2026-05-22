"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from "./logout-button";

export function PropostasNav() {
  const pathname = usePathname();
  const onTrilha =
    pathname === "/propostas/oceana" || pathname.startsWith("/propostas/oceana/");

  return (
    <header className="md-top-app-bar sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/propostas/oceana" className="flex items-baseline gap-2">
          <span className="md-title-medium">
            Diferentia<span style={{ color: "var(--md-sys-color-primary)" }}>.</span>
          </span>
          <span className="md-body-medium">Proposta Oceana</span>
        </Link>
        <nav className="flex items-center gap-1" aria-label="Menu principal">
          <Link
            href="/propostas/oceana"
            className={`md-nav-item ${onTrilha ? "md-nav-item-active" : ""}`}
          >
            Trilha
          </Link>
          <LogoutButton />
        </nav>
      </div>
    </header>
  );
}
