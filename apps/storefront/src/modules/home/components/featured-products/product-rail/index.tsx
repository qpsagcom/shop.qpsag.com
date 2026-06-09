import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@modules/common/components/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection.id,
      fields: "*variants.calculated_price",
    },
  })

  if (!pricedProducts) {
    return null
  }

  return (
    <div className="content-container py-10 small:py-16">
      <div className="mb-8 flex flex-col gap-4 border-t border-qps-line pt-8 small:flex-row small:items-end small:justify-between">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-qps-muted">
            Collection
          </p>
          <Text className="text-2xl font-semibold tracking-[-0.04em] text-qps-ink small:text-4xl">
            {collection.title}
          </Text>
        </div>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          View collection
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-1 gap-5 xsmall:grid-cols-2 small:grid-cols-3 small:gap-7">
        {pricedProducts &&
          pricedProducts.map((product) => (
            <li key={product.id}>
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
      </ul>
    </div>
  )
}
