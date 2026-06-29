import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { getLocale } from "@lib/data/locale-actions"
import { getTranslator } from "@lib/i18n/translations"
import { Text, clx } from "@modules/common/components/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ColorSwitch from "@modules/layout/components/color-switch"
import QpsLogo from "@modules/layout/components/qps-logo"

export default async function Footer() {
  const [collections, productCategories, currentLocale] = await Promise.all([
    listCollections({ fields: "*products" })
      .then((r) => r.collections)
      .catch(() => []),
    listCategories().catch(() => []),
    getLocale(),
  ])

  const translate = getTranslator(currentLocale)

  return (
    <footer className="w-full border-t border-qps-line bg-qps-paper">
      <div className="content-container flex flex-col w-full">
        <div className="grid gap-12 py-16 small:grid-cols-[1fr_1.2fr] small:py-24">
          {/* Brand */}
          <div className="max-w-md">
            <QpsLogo />
            <p className="mt-4 text-sm leading-6 text-qps-graphite">
              {translate("footer_tagline")}
            </p>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-qps-muted">
              shop.qpsag.com
            </p>
            <div className="mt-8">
              <ColorSwitch />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-small-regular md:gap-x-16 sm:grid-cols-3">
            <div className="flex flex-col gap-y-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-qps-ink">
                {translate("footer_contact")}
              </span>
              <div className="grid gap-4 text-sm text-qps-muted">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-qps-graphite">
                    Backoffice Phone
                  </p>
                  <a
                    className="mt-1 block transition-colors hover:text-qps-ink"
                    href="tel:+41562819114"
                  >
                    +41 56 281 91 14
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-qps-graphite">
                    Email
                  </p>
                  <a
                    className="mt-1 block transition-colors hover:text-qps-ink"
                    href="mailto:info@qpsag.com"
                  >
                    info@qpsag.com
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-qps-graphite">
                    {translate("footer_location")}
                  </p>
                  <p className="mt-1 leading-6">
                    Schaffhauserstrasse 30
                    <br />
                    4332 Stein, Switzerland
                  </p>
                </div>
              </div>
            </div>

            {/* Kategorien */}
            {productCategories && productCategories.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-qps-ink">
                  {translate("footer_categories")}
                </span>
                <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
                  {productCategories.slice(0, 6).map((c) => {
                    if (c.parent_category) return null
                    const children = c.category_children?.map((child) => ({
                      name: child.name,
                      handle: child.handle,
                      id: child.id,
                    })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-sm text-qps-muted"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "transition-colors hover:text-qps-ink",
                            children && "font-semibold text-qps-graphite"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children.map((child) => (
                              <li key={child.id}>
                                <LocalizedClientLink
                                  className="transition-colors hover:text-qps-ink"
                                  href={`/categories/${child.handle}`}
                                  data-testid="category-link"
                                >
                                  {child.name}
                                </LocalizedClientLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {/* Kollektionen */}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-qps-ink">
                  {translate("footer_collections")}
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-sm text-qps-muted",
                    {
                      "grid-cols-2": (collections.length || 0) > 3,
                    }
                  )}
                >
                  {collections.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="transition-colors hover:text-qps-ink"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Unternehmen */}
            <div className="flex flex-col gap-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-qps-ink">
                {translate("footer_company")}
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-sm text-qps-muted">
                <li>
                  <LocalizedClientLink
                    className="transition-colors hover:text-qps-ink"
                    href="/impressum"
                  >
                    {translate("footer_imprint")}
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    className="transition-colors hover:text-qps-ink"
                    href="/datenschutz"
                  >
                    {translate("footer_privacy")}
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mb-10 flex w-full justify-between border-t border-qps-line pt-6 text-qps-muted">
          <Text className="txt-compact-small text-qps-muted">
            © {new Date().getFullYear()} QPS AG. {translate("footer_copyright")}
          </Text>
        </div>
      </div>
    </footer>
  )
}
