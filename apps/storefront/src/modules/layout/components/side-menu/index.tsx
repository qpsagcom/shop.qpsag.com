"use client"

import { Popover, PopoverPanel } from "@headlessui/react"
import useToggleState from "@lib/hooks/use-toggle-state"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { qpsMotion } from "@modules/common/components/motion"
import { Text, clx } from "@modules/common/components/ui"
import QpsLogo from "@modules/layout/components/qps-logo"
import CountrySelect from "../country-select"
import LanguageSelect from "../language-select"
import { Locale } from "@lib/data/locales"
import { AnimatePresence, useReducedMotion } from "motion/react"
import * as m from "motion/react-m"

const SideMenuItems = [
  {
    name: "Home",
    href: "/",
    eyebrow: "Start",
    description: "Robotics and visual inspection",
  },
  {
    name: "Robotics Store",
    href: "/store",
    eyebrow: "Range",
    description: "ROVIS, robots, test sets, and software",
  },
  {
    name: "Account",
    href: "/account",
    eyebrow: "Procurement",
    description: "Orders and addresses",
  },
  {
    name: "Cart",
    href: "/cart",
    eyebrow: "Checkout",
    description: "Review your selection and request",
  },
] as const

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  locales: Locale[] | null
  currentLocale: string | null
}

const SideMenu = ({ regions, locales, currentLocale }: SideMenuProps) => {
  const countryToggleState = useToggleState()
  const languageToggleState = useToggleState()
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
                  <span className="h-1.5 w-1.5 rounded-full bg-qps-signal" />
                  Menu
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
                          className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-qps-line bg-qps-surface p-6 shadow-[0_32px_90px_rgba(0,0,0,0.22)]"
                        >
                          <div className="pointer-events-none absolute -right-20 top-12 h-56 w-56 rounded-full bg-qps-signal/20 blur-3xl" />
                          <div className="relative flex items-start justify-between gap-6" id="xmark">
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
                          <ul className="relative mt-12 flex flex-col gap-3">
                            {SideMenuItems.map((item, index) => (
                              <m.li
                                key={item.name}
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
                                  className="group block rounded-[1.1rem] border border-qps-line bg-qps-paper/60 p-4 transition-colors hover:border-qps-signal/70 hover:bg-qps-signal/10"
                                  onClick={close}
                                  data-testid={`${item.name.toLowerCase().replace(/\s+/g, "-")}-link`}
                                >
                                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-qps-muted">
                                    {item.eyebrow}
                                  </span>
                                  <span className="mt-2 flex items-center justify-between gap-4">
                                    <span className="text-2xl font-semibold leading-8 tracking-[-0.04em] text-qps-ink transition-colors group-hover:text-qps-signal">
                                      {item.name}
                                    </span>
                                    <ArrowRightMini className="shrink-0 text-qps-muted transition-transform group-hover:translate-x-1 group-hover:text-qps-signal" />
                                  </span>
                                  <span className="mt-1 block text-sm leading-5 text-qps-graphite">
                                    {item.description}
                                  </span>
                                </LocalizedClientLink>
                              </m.li>
                            ))}
                          </ul>
                          <div className="relative flex flex-col gap-y-6 border-t border-qps-line pt-6">
                            <div className="grid grid-cols-2 gap-3 text-[11px] uppercase tracking-[0.16em] text-qps-muted">
                              <div className="rounded-large border border-qps-line bg-qps-paper/60 p-3">
                                Pharma
                              </div>
                              <div className="rounded-large border border-qps-line bg-qps-paper/60 p-3">
                                Biotech
                              </div>
                              <div className="rounded-large border border-qps-line bg-qps-paper/60 p-3">
                                Food Tech
                              </div>
                              <div className="rounded-large border border-qps-line bg-qps-paper/60 p-3">
                                GxP
                              </div>
                            </div>
                            {!!locales?.length && (
                              <div
                                className="flex justify-between"
                                onMouseEnter={languageToggleState.open}
                                onMouseLeave={languageToggleState.close}
                              >
                                <LanguageSelect
                                  toggleState={languageToggleState}
                                  locales={locales}
                                  currentLocale={currentLocale}
                                />
                                <ArrowRightMini
                                  className={clx(
                                    "transition-transform duration-150",
                                    languageToggleState.state
                                      ? "-rotate-90"
                                      : ""
                                  )}
                                />
                              </div>
                            )}
                            <div
                              className="flex justify-between"
                              onMouseEnter={countryToggleState.open}
                              onMouseLeave={countryToggleState.close}
                            >
                              {regions && (
                                <CountrySelect
                                  toggleState={countryToggleState}
                                  regions={regions}
                                />
                              )}
                              <ArrowRightMini
                                className={clx(
                                  "transition-transform duration-150",
                                  countryToggleState.state ? "-rotate-90" : ""
                                )}
                              />
                            </div>
                            <Text className="flex justify-between txt-compact-small">
                              © {new Date().getFullYear()} QPS AG. All rights
                              reserved.
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
