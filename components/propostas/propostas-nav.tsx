"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from "./logout-button";

const links = [
  { href: "/propostas/oceana", label: "Trilha", match: (p: string) => p === "/propostas/oceana" },
  {
    href: "/propostas/oceana/guia-areas",
    label: "Guia por área",
    match: (p: string) => p.startsWith("/propostas/oceana/guia-areas"),
  },
] as const;

export function PropostasNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link href="/propostas/oceana" className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900">
            Diferentia<span className="text-violet-600">.</span>
          </span>
          <span className="text-sm font-normal text-gray-500">Proposta Oceana</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-2" aria-label="Menu principal">
          {links.map(({ href, label, match }) => {
            const active = match(pathname);
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                  active
                    ? "bg-violet-100 text-violet-800"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <LogoutButton />
        </nav>
      </div>
    </header>
  );
}
