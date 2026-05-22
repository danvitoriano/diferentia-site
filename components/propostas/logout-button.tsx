"use client";

export function LogoutButton() {
  return (
    <button
      type="button"
      className="rounded-lg px-3 py-1.5 text-sm text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
      onClick={async () => {
        await fetch("/api/propostas/logout", { method: "POST" });
        window.location.href = "/propostas/login";
      }}
    >
      Sair
    </button>
  );
}
