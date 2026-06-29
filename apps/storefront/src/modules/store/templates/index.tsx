import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import Breadcrumb from "@modules/common/components/breadcrumb"
import { listCategories } from "@lib/data/categories"

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

  const allCategories = await listCategories({
    fields: "id, handle, name, *parent_category",
  }).catch(() => [])

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
      />
      <div className="w-full">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "All Products" }]}
        />
        <div className="mb-8 text-2xl-semi">
          <h1 data-testid="store-page-title">All products</h1>
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
