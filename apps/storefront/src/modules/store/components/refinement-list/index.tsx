"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { EllipseMiniSolid } from "@medusajs/icons"

import { SortOptions } from "./sort-products"
import { t } from "@lib/i18n/translations"

type Category = {
  id: string
  name: string
  handle: string
}

type RefinementListProps = {
  sortBy: SortOptions
  categories?: Category[]
  selectedCategoryId?: string
  locale?: string
  "data-testid"?: string
}

const RefinementList = ({
  sortBy,
  categories,
  selectedCategoryId,
  locale = "en",
  "data-testid": dataTestId,
}: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Category filters always land on the store page of the current country.
  const storePath = useCallback(() => {
    const countryCode = pathname.split("/")[1]
    return countryCode ? `/${countryCode}/store` : "/store"
  }, [pathname])

  const setQueryParams = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set(name, value)
    params.delete("page")
    router.push(`${storePath()}?${params.toString()}`)
  }

  const clearCategory = () => {
    router.push(storePath())
  }

  return (
    <div
      className="flex small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[220px] small:ml-[1.675rem]"
      data-testid={dataTestId}
    >
      {!!categories?.length && (
        <div className="flex flex-col gap-y-3">
          <span className="txt-compact-small-plus text-ui-fg-muted">
            {t("store_categories", locale)}
          </span>
          <ul className="flex flex-col gap-y-2">
            <li>
              <button
                onClick={clearCategory}
                className={`flex items-center gap-x-2 txt-compact-small transition-colors hover:text-ui-fg-base ${
                  !selectedCategoryId
                    ? "text-ui-fg-base font-semibold"
                    : "text-ui-fg-subtle"
                }`}
              >
                {!selectedCategoryId && <EllipseMiniSolid className="shrink-0" />}
                {t("store_all_products", locale)}
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => setQueryParams("categoryId", cat.id)}
                  className={`flex items-center gap-x-2 txt-compact-small transition-colors hover:text-ui-fg-base text-left ${
                    selectedCategoryId === cat.id
                      ? "text-ui-fg-base font-semibold"
                      : "text-ui-fg-subtle"
                  }`}
                >
                  {selectedCategoryId === cat.id && (
                    <EllipseMiniSolid className="shrink-0" />
                  )}
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default RefinementList
