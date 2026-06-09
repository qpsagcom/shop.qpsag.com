"use client"

import { useEffect, useState } from "react"

const themes = [
  { id: "light", label: "Light", swatch: "bg-[#FCFDFF]" },
  { id: "dark", label: "Dark", swatch: "bg-[#000000]" },
] as const

type ThemeId = (typeof themes)[number]["id"]

const storageKey = "qps-theme"

function applyTheme(theme: ThemeId) {
  const root = document.documentElement

  if (theme === "light") {
    root.removeAttribute("data-qps-theme")
  } else {
    root.setAttribute("data-qps-theme", theme)
  }
}

export default function ColorSwitch() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>("light")

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey) as ThemeId | null
    const nextTheme = themes.some((theme) => theme.id === savedTheme)
      ? savedTheme
      : "light"

    setActiveTheme(nextTheme)
    applyTheme(nextTheme)
  }, [])

  const updateTheme = (theme: ThemeId) => {
    setActiveTheme(theme)
    applyTheme(theme)
    window.localStorage.setItem(storageKey, theme)
  }

  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-qps-muted">
        Mode
      </p>
      <div
        className="mt-3 inline-flex rounded-full border border-qps-line bg-qps-surface p-1 shadow-sm"
        role="radiogroup"
        aria-label="Storefront color mode"
      >
        {themes.map((theme) => {
          const isActive = activeTheme === theme.id

          return (
            <button
              key={theme.id}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => updateTheme(theme.id)}
              className="flex min-h-10 items-center gap-2 rounded-full px-4 text-xs font-semibold text-qps-muted transition-colors hover:text-qps-ink focus:outline-none focus:ring-2 focus:ring-qps-signal data-[active=true]:bg-qps-signal data-[active=true]:text-qps-paper"
              data-active={isActive}
            >
              <span
                className={`h-4 w-4 rounded-full border border-qps-line ${theme.swatch}`}
                aria-hidden="true"
              />
              {theme.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
