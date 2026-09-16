import { notFound } from "next/navigation"
import { Suspense } from "react"

import InteractiveLink from "@modules/common/components/interactive-link"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Breadcrumb from "@modules/common/components/breadcrumb"
import { HttpTypes } from "@medusajs/types"
import { listCategories } from "@lib/data/categories"
import { getLocale } from "@lib/data/locale-actions"
import { localizedField } from "@lib/util/localize"

export default async function CategoryTemplate({
  category,
  sortBy,
  page,
  countryCode,
}: {
  category: HttpTypes.StoreProductCategory
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "category"

  if (!category || !countryCode) notFound()

  const [allCategories, locale] = await Promise.all([
    listCategories({ fields: "id, handle, name, metadata, *parent_category" }).catch(() => []),
    getLocale(),
  ])
  const topLevelCategories = allCategories
    .filter((c) => !c.parent_category)
    .map((c) => ({ ...c, name: localizedField(c, "name", locale) ?? c.name }))
  const categoryName = localizedField(category, "name", locale) ?? category.name
  const categoryDescription = localizedField(category, "description", locale)

  const parents = [] as HttpTypes.StoreProductCategory[]

  const getParents = (category: HttpTypes.StoreProductCategory) => {
    if (category.parent_category) {
      parents.push(category.parent_category)
      getParents(category.parent_category)
    }
  }

  getParents(category)

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...parents
      .slice()
      .reverse()
      .map((p) => ({
        label: localizedField(p, "name", locale) ?? p.name,
        href: `/categories/${p.handle}`,
      })),
    { label: categoryName },
  ]


  return (
    <div
      className="flex flex-col small:flex-row small:items-start py-6 content-container"
      data-testid="category-container"
    >
      <RefinementList
        sortBy={sort}
        categories={topLevelCategories}
        selectedCategoryId={category.id}
        locale={locale ?? "en"}
        data-testid="category-filter"
      />
      <div className="w-full">
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex flex-row mb-8 text-2xl-semi gap-4">
          <h1 data-testid="category-page-title">{categoryName}</h1>
        </div>
        {categoryDescription && (
          <div className="mb-8 text-base-regular">
            <p>{categoryDescription}</p>
          </div>
        )}
        {category.category_children && (
          <div className="mb-8 text-base-large">
            <ul className="grid grid-cols-1 gap-2">
              {category.category_children?.map((c) => (
                <li key={c.id}>
                  <InteractiveLink href={`/categories/${c.handle}`}>
                    {c.name}
                  </InteractiveLink>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Suspense
          fallback={
            <SkeletonProductGrid
              numberOfProducts={category.products?.length ?? 8}
            />
          }
        >
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            categoryId={category.id}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}
