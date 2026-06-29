import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import Breadcrumb from "@modules/common/components/breadcrumb"
import { listCategories } from "@lib/data/categories"
import { getLocale } from "@lib/data/locale-actions"
import { getTranslator } from "@lib/i18n/translations"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = async ({
  sortBy,
  page,
  countryCode,
  categoryId,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
  categoryId?: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  const [allCategories, locale] = await Promise.all([
    listCategories({ fields: "id, handle, name, *parent_category" }).catch(() => []),
    getLocale(),
  ])

  const translate = getTranslator(locale)
  const topLevelCategories = allCategories.filter((c) => !c.parent_category)

  return (
    <div
      className="flex flex-col small:flex-row small:items-start py-6 content-container"
      data-testid="category-container"
    >
      <RefinementList
        sortBy={sort}
        categories={topLevelCategories}
        selectedCategoryId={categoryId}
        locale={locale ?? "en"}
      />
      <div className="w-full">
        <Breadcrumb
          items={[{ label: translate("store_breadcrumb_home"), href: "/" }, { label: translate("store_all_products") }]}
        />
        <div className="mb-8 text-2xl-semi">
          <h1 data-testid="store-page-title">{translate("store_page_title")}</h1>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            countryCode={countryCode}
            categoryId={categoryId}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate
