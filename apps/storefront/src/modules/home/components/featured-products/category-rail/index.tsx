import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@modules/common/components/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function CategoryRail({
  category,
  region,
}: {
  category: HttpTypes.StoreProductCategory
  region: HttpTypes.StoreRegion
}) {
  const pricedProducts = await listProducts({
    regionId: region.id,
    queryParams: {
      category_id: category.id,
      fields: "*variants.calculated_price",
    },
  })
    .then(({ response }) => response.products)
    .catch(() => [])

  if (!pricedProducts?.length) {
    return null
  }

  return (
    <div className="content-container py-10 small:py-16">
      <div className="mb-8 flex flex-col gap-4 border-t border-qps-line pt-8 small:flex-row small:items-end small:justify-between">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-qps-muted">
            Category
          </p>
          <Text className="text-2xl font-semibold tracking-[-0.04em] text-qps-ink small:text-4xl">
            {category.name}
          </Text>
        </div>
        <InteractiveLink href={`/categories/${category.handle}`}>
          View category
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-1 gap-5 xsmall:grid-cols-2 small:grid-cols-3 small:gap-7">
        {pricedProducts.map((product) => (
          <li key={product.id}>
            <ProductPreview product={product} region={region} isFeatured />
          </li>
        ))}
      </ul>
    </div>
  )
}
