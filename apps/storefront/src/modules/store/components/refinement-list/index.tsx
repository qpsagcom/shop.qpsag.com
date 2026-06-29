"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { EllipseMiniSolid } from "@medusajs/icons"

import SortProducts, { SortOptions } from "./sort-products"

type Category = {
  id: string
  name: string
  handle: string
}

type RefinementListProps = {
  sortBy: SortOptions
  categories?: Category[]
  selectedCategoryId?: string
  "data-testid"?: string
}

const RefinementList = ({
  sortBy,
  categories,
  selectedCategoryId,
  "data-testid": dataTestId,
}: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      params.delete("page")
      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  const clearCategory = () => {
    const params = new URLSearchParams(searchParams)
    params.delete("categoryId")
    params.delete("page")
    const query = params.toString()
    router.push(query ? `${pathname}?${query}` : pathname)
  }

  return (
    <div className="flex small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[220px] small:ml-[1.675rem]">
      <SortProducts
        sortBy={sortBy}
        setQueryParams={setQueryParams}
        data-testid={dataTestId}
      />

      {!!categories?.length && (
        <div className="flex flex-col gap-y-3">
          <span className="txt-compact-small-plus text-ui-fg-muted">
            Categories
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
                All Products
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
