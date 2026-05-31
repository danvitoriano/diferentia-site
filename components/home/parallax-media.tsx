import type { ReactNode } from "react";

type ParallaxMediaProps = {
  /** 0 = fundo quase fixo, 1 = sem parallax (padrão Squarespace ~0.5). */
  speed?: number;
  className?: string;
  children: ReactNode;
};

export function ParallaxMedia({ speed = 0.35, className, children }: ParallaxMediaProps) {
  const mediaClass = ["parallax-media", className].filter(Boolean).join(" ");

  return (
    <div className={mediaClass} data-speed={String(speed)}>
      {children}
    </div>
  );
}
