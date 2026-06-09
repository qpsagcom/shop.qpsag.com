"use client"

import { Popover, PopoverPanel } from "@headlessui/react"
import useToggleState from "@lib/hooks/use-toggle-state"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { qpsMotion } from "@modules/common/components/motion"
import { Text, clx } from "@modules/common/components/ui"
import CountrySelect from "../country-select"
import LanguageSelect from "../language-select"
import { Locale } from "@lib/data/locales"
import { AnimatePresence, useReducedMotion } from "motion/react"
import * as m from "motion/react-m"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Account: "/account",
  Cart: "/cart",
}

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
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base"
                >
                  Menu
                </Popover.Button>
              </div>

              <AnimatePresence>
                {open && (
                  <>
                    <m.div
                      className="fixed inset-0 z-[50] bg-qps-ink/20 backdrop-blur-sm pointer-events-auto"
                      onClick={close}
                      data-testid="side-menu-backdrop"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={qpsMotion.quick}
                    />
                    <m.div
                      className="absolute inset-x-0 z-[51] m-2 h-[calc(100vh-1rem)] w-full pr-4 text-sm text-ui-fg-on-color backdrop-blur-2xl sm:w-1/3 sm:min-w-min sm:pr-0 2xl:w-1/4"
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
                          className="flex h-full flex-col justify-between rounded-[1.4rem] border border-qps-paper/10 bg-qps-ink/88 p-6 shadow-[0_32px_90px_rgba(17,19,21,0.32)]"
                        >
                          <div className="flex justify-end" id="xmark">
                            <button
                              data-testid="close-menu-button"
                              onClick={close}
                              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-qps-paper/15 transition-colors hover:bg-qps-paper/10"
                            >
                              <XMark />
                            </button>
                          </div>
                          <ul className="flex flex-col gap-6 items-start justify-start">
                            {Object.entries(SideMenuItems).map(
                              ([name, href]) => {
                                return (
                                  <li key={name}>
                                    <LocalizedClientLink
                                      href={href}
                                      className="text-3xl leading-10 hover:text-ui-fg-disabled"
                                      onClick={close}
                                      data-testid={`${name.toLowerCase()}-link`}
                                    >
                                      {name}
                                    </LocalizedClientLink>
                                  </li>
                                )
                              }
                            )}
                          </ul>
                          <div className="flex flex-col gap-y-6">
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
