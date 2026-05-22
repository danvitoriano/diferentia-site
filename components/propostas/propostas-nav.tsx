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
        <Link href="/propostas/oceana" className="flex items-baseline gap-2 no-underline">
          <span className="mw-title-medium">
            Diferentia<span style={{ color: "var(--md-sys-color-primary)" }}>.</span>
          </span>
          <span className="mw-body-medium">Proposta Oceana</span>
        </Link>
        <nav className="flex items-center gap-1" aria-label="Menu principal">
          {onTrilha ? (
            <md-filled-tonal-button disabled>Trilha</md-filled-tonal-button>
          ) : (
            <Link href="/propostas/oceana" className="no-underline">
              <md-text-button>Trilha</md-text-button>
            </Link>
          )}
          <LogoutButton />
        </nav>
      </div>
    </header>
  );
}
