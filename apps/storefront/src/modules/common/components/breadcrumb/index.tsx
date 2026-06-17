import LocalizedClientLink from "@modules/common/components/localized-client-link"

export type BreadcrumbItem = {
  label: string
  href?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-qps-muted">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && (
              <span className="text-qps-line" aria-hidden="true">
                /
              </span>
            )}
            {item.href ? (
              <LocalizedClientLink
                href={item.href}
                className="transition-colors hover:text-qps-ink"
              >
                {item.label}
              </LocalizedClientLink>
            ) : (
              <span className="text-qps-ink" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
