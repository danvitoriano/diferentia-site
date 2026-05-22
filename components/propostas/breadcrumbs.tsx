import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Navegação" className="mw-body-medium">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 ? (
                <span style={{ color: "var(--md-sys-color-outline)" }} aria-hidden>
                  /
                </span>
              ) : null}
              {item.href && (!isLast || items.length === 1) ? (
                <Link
                  href={item.href}
                  className="no-underline"
                  style={{ color: "var(--md-sys-color-primary)", fontWeight: 500 }}
                >
                  {item.label}
                </Link>
              ) : (
                <span style={isLast ? { fontWeight: 500, color: "var(--md-sys-color-on-surface)" } : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
