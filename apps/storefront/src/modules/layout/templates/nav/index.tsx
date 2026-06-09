import { Suspense } from "react"

import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import QpsLogo from "@modules/layout/components/qps-logo"
import SideMenu from "@modules/layout/components/side-menu"
import { getTranslator } from "@lib/i18n/translations"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions()
      .then((regions: StoreRegion[]) => regions)
      .catch(() => null),
    listLocales(),
    getLocale(),
  ])

  const translate = getTranslator(currentLocale)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b border-qps-line bg-qps-paper/92 duration-200 backdrop-blur-xl">
        <nav className="content-container txt-xsmall-plus flex items-center justify-between w-full h-full text-small-regular text-qps-muted">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <QpsLogo />
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="transition-colors hover:text-qps-ink"
                href="/account"
                data-testid="nav-account-link"
              >
                {translate("nav_account")}
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="flex gap-2 transition-colors hover:text-qps-ink"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  {translate("nav_cart")} (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
