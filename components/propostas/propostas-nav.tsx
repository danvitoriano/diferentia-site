import Link from "next/link";
import { LogoutButton } from "./logout-button";

export function PropostasNav() {
  return (
    <header className="border-b border-[#1E1E2E] bg-[#080810]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/propostas/oceana" className="text-lg font-semibold text-[#F0F0FA]">
          Diferentia<span className="text-[#7C6FF7]">.</span>
          <span className="ml-2 text-sm font-normal text-[#9090B0]">Proposta Oceana</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/propostas/oceana" className="text-[#9090B0] hover:text-[#F0F0FA]">
            Trilha
          </Link>
          <Link href="/propostas/oceana/guia-areas" className="text-[#9090B0] hover:text-[#F0F0FA]">
            Guia por área
          </Link>
          <LogoutButton />
        </nav>
      </div>
    </header>
  );
}
