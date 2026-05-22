"use client";

export function LogoutButton() {
  return (
    <button
      type="button"
      className="md-text-button"
      onClick={async () => {
        await fetch("/api/propostas/logout", { method: "POST" });
        window.location.href = "/propostas/login";
      }}
    >
      Sair
    </button>
  );
}
