"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from "./logout-button";

export function PropostasNav() {
  const pathname = usePathname();
  const onTrilha =
    pathname === "/propostas/oceana" || pathname.startsWith("/propostas/oceana/");

  return (
    <header className="mw-top-app-bar">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/propostas/oceana" className="mw-brand-link">
          <span className="mw-title-medium">
            Diferentia<span className="mw-brand-dot">.</span>
          </span>
          <span className="mw-body-medium">Proposta Oceana</span>
        </Link>
        <nav className="flex items-center gap-2" aria-label="Menu principal">
          <Link
            href="/propostas/oceana"
            className={onTrilha ? "mw-nav-pill mw-nav-pill-active" : "mw-nav-pill"}
          >
            Trilha
          </Link>
          <LogoutButton />
        </nav>
      </div>
    </header>
  );
}
