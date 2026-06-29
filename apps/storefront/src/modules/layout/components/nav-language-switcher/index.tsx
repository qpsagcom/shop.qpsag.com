"use client"

import { updateLocale } from "@lib/data/locale-actions"
import { Locale } from "@lib/data/locales"
import { useRouter } from "next/navigation"
import { useTransition } from "react"

export default function NavLanguageSwitcher({
  locales,
  currentLocale,
}: {
  locales: Locale[] | null
  currentLocale: string | null
}) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleSwitch = (code: string) => {
    startTransition(async () => {
      await updateLocale(code)
      router.refresh()
    })
  }

  if (!locales?.length) return null

  return (
    <div className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
      {locales.map((locale, i) => (
        <span key={locale.code} className="flex items-center gap-1">
          {i > 0 && <span className="text-qps-line mx-0.5">|</span>}
          <button
            onClick={() => handleSwitch(locale.code)}
            disabled={isPending}
            className={
              (currentLocale ?? "en").toLowerCase() === locale.code.toLowerCase()
                ? "text-qps-ink cursor-default"
                : "text-qps-muted transition-colors hover:text-qps-ink"
            }
          >
            {locale.code.split("-")[0].toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )
}
