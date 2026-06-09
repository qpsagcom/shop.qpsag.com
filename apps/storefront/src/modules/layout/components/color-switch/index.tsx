"use client"

import { useEffect, useState } from "react"

const themes = [
  { id: "paper", label: "Paper", swatch: "bg-[#FAF8F3]" },
  { id: "graphite", label: "Graphite", swatch: "bg-[#111315]" },
  { id: "alpine", label: "Alpine", swatch: "bg-[#F1F7F1]" },
] as const

type ThemeId = (typeof themes)[number]["id"]

const storageKey = "qps-theme"

function applyTheme(theme: ThemeId) {
  const root = document.documentElement

  if (theme === "paper") {
    root.removeAttribute("data-qps-theme")
  } else {
    root.setAttribute("data-qps-theme", theme)
  }
}

export default function ColorSwitch() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>("paper")

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey) as ThemeId | null
    const nextTheme = themes.some((theme) => theme.id === savedTheme)
      ? savedTheme
      : "paper"

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
        Color system
      </p>
      <div
        className="mt-3 inline-flex rounded-full border border-qps-line bg-qps-surface p-1 shadow-sm"
        role="radiogroup"
        aria-label="Storefront color theme"
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
              className="flex min-h-10 items-center gap-2 rounded-full px-3 text-xs font-semibold text-qps-muted transition-colors hover:text-qps-ink focus:outline-none focus:ring-2 focus:ring-qps-signal data-[active=true]:bg-qps-ink data-[active=true]:text-qps-paper"
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
