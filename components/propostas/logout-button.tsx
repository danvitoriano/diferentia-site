"use client";

export function LogoutButton() {
  return (
    <button
      type="button"
      className="text-[#9090B0] hover:text-[#E8B84B]"
      onClick={async () => {
        await fetch("/api/propostas/logout", { method: "POST" });
        window.location.href = "/propostas/login";
      }}
    >
      Sair
    </button>
  );
}
