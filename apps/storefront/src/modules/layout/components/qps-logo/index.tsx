"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

type QpsLogoProps = {
  href?: string
  compact?: boolean
  className?: string
}

export default function QpsLogo({
  href = "/",
  compact = false,
  className = "",
}: QpsLogoProps) {
  return (
    <LocalizedClientLink
      href={href}
      className={`group inline-flex items-center gap-3 ${className}`}
      data-testid="nav-store-link"
      aria-label="QPS AG Shop"
    >
      <img
        src="/qps-logo-black.webp"
        alt=""
        className="theme-light-only h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.025]"
        loading="eager"
      />
      <img
        src="/qps-logo-white.webp"
        alt=""
        className="theme-dark-only h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.025]"
        loading="eager"
      />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-sm font-semibold tracking-[-0.03em] text-qps-ink transition-colors group-hover:text-qps-signal">
            QPS AG
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-qps-muted">
            Robotics Shop
          </span>
        </span>
      )}
    </LocalizedClientLink>
  )
}
