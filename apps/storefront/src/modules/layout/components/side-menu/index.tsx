"use client"

import { Popover, PopoverPanel } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { qpsMotion } from "@modules/common/components/motion"
import { Text } from "@modules/common/components/ui"
import QpsLogo from "@modules/layout/components/qps-logo"
import NavLanguageSwitcher from "@modules/layout/components/nav-language-switcher"
import { Locale } from "@lib/data/locales"
import { AnimatePresence, useReducedMotion } from "motion/react"
import * as m from "motion/react-m"
import { t, TranslationKey } from "@lib/i18n/translations"

const MENU_ITEMS = [
  { nameKey: "menu_home" as TranslationKey, href: "/", eyebrowKey: "menu_home_eyebrow" as TranslationKey, descKey: "menu_home_desc" as TranslationKey },
  { nameKey: "menu_store" as TranslationKey, href: "/store", eyebrowKey: "menu_store_eyebrow" as TranslationKey, descKey: "menu_store_desc" as TranslationKey },
  { nameKey: "nav_account" as TranslationKey, href: "/account", eyebrowKey: "menu_account_eyebrow" as TranslationKey, descKey: "menu_account_desc" as TranslationKey },
] as const

const SECTORS = ["Pharma", "Biotech", "Food Tech", "GxP"]

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  locales: Locale[] | null
  currentLocale: string | null
}

const SideMenu = ({ locales, currentLocale }: SideMenuProps) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative flex h-full items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-200 ease-out focus:outline-none hover:text-qps-ink"
                >
                  {t("nav_menu", currentLocale)}
                </Popover.Button>
              </div>

              <AnimatePresence>
                {open && (
                  <>
                    <m.div
                      className="fixed inset-0 z-[50] bg-qps-ink/55 pointer-events-auto"
                      onClick={close}
                      data-testid="side-menu-backdrop"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={qpsMotion.quick}
                    />
                    <m.div
                      className="fixed left-3 top-3 z-[51] h-[calc(100dvh-1.5rem)] w-[calc(100vw-1.5rem)] max-w-[460px] text-sm text-qps-ink"
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, x: -24 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, x: -24 }
                      }
                      transition={qpsMotion.soft}
                    >
                      <PopoverPanel static className="flex h-full flex-col">
                        <div
                          data-testid="nav-menu-popup"
                          className="flex h-full flex-col overflow-y-auto overscroll-contain rounded-[1.25rem] border border-qps-line bg-qps-surface p-6 shadow-[0_32px_90px_rgba(0,0,0,0.22)]"
                        >
                          <div className="flex items-start justify-between gap-6">
                            <QpsLogo />
                            <button
                              data-testid="close-menu-button"
                              onClick={close}
                              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-qps-line bg-qps-paper/60 transition-colors hover:bg-qps-signal hover:text-[rgb(var(--qps-signal-text))]"
                              aria-label="Close menu"
                            >
                              <XMark />
                            </button>
                          </div>

                          <ul className="mt-10 flex flex-col gap-3">
                            {MENU_ITEMS.map((item, index) => (
                              <m.li
                                key={item.href}
                                initial={
                                  shouldReduceMotion
                                    ? { opacity: 0 }
                                    : { opacity: 0, x: -10 }
                                }
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  ...qpsMotion.quick,
                                  delay: 0.05 + index * 0.04,
                                }}
                              >
                                <LocalizedClientLink
                                  href={item.href}
                                  className="group block rounded-[0.75rem] border border-qps-line bg-qps-paper/60 p-4 transition-colors hover:border-qps-signal/70 hover:bg-qps-signal/10"
                                  onClick={close}
                                  data-testid={`${item.href.replace("/", "") || "home"}-link`}
                                >
                                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-qps-muted">
                                    {t(item.eyebrowKey, currentLocale)}
                                  </span>
                                  <span className="mt-2 flex items-center justify-between gap-4">
                                    <span className="text-2xl font-semibold leading-8 tracking-[-0.04em] text-qps-ink transition-colors group-hover:text-qps-signal">
                                      {t(item.nameKey, currentLocale)}
                                    </span>
                                    <ArrowRightMini className="shrink-0 text-qps-muted transition-transform group-hover:translate-x-1 group-hover:text-qps-signal" />
                                  </span>
                                  <span className="mt-1 block text-sm leading-5 text-qps-graphite">
                                    {t(item.descKey, currentLocale)}
                                  </span>
                                </LocalizedClientLink>
                              </m.li>
                            ))}
                          </ul>

                          <div className="mt-auto flex flex-col gap-y-6 border-t border-qps-line pt-6">
                            <div className="grid grid-cols-2 gap-3 text-[11px] uppercase tracking-[0.16em] text-qps-muted">
                              {SECTORS.map((sector) => (
                                <div
                                  key={sector}
                                  className="rounded-large border border-qps-line bg-qps-paper/60 p-3"
                                >
                                  {sector}
                                </div>
                              ))}
                            </div>

                            {!!locales?.length && (
                              <div className="flex items-center justify-between gap-4">
                                <span className="text-sm text-qps-graphite">
                                  {t("menu_language", currentLocale)}
                                </span>
                                <NavLanguageSwitcher
                                  locales={locales}
                                  currentLocale={currentLocale}
                                />
                              </div>
                            )}

                            <Text className="txt-compact-small text-qps-muted">
                              © {new Date().getFullYear()} QPS AG. All rights reserved.
                            </Text>
                          </div>
                        </div>
                      </PopoverPanel>
                    </m.div>
                  </>
                )}
              </AnimatePresence>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
