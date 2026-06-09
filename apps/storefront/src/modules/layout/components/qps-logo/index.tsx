"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

const qpsLogoUrl =
  "https://qpsag.com/wp-content/uploads/2024/10/QPS_Logo_gesamt_v03_QPS-kleinamasmall-5.png"

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
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-qps-line bg-qps-surface p-1.5 shadow-sm transition-transform duration-200 group-hover:scale-105">
        <img
          src={qpsLogoUrl}
          alt=""
          className="h-full w-full object-contain"
          loading="eager"
        />
      </span>
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
