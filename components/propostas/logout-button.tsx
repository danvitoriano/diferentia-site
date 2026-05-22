"use client";

export function LogoutButton() {
  return (
    <md-text-button
      onClick={async () => {
        await fetch("/api/propostas/logout", { method: "POST" });
        window.location.href = "/propostas/login";
      }}
    >
      Sair
    </md-text-button>
  );
}
