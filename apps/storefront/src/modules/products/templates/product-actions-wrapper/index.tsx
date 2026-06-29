import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import ProductActions from "@modules/products/components/product-actions"
import { getLocale } from "@lib/data/locale-actions"

export default async function ProductActionsWrapper({
  id,
  region,
}: {
  id: string
  region: HttpTypes.StoreRegion
}) {
  const [product, locale] = await Promise.all([
    listProducts({ queryParams: { id: [id] }, regionId: region.id })
      .then(({ response }) => response.products[0]),
    getLocale(),
  ])

  if (!product) {
    return null
  }

  return <ProductActions product={product} region={region} locale={locale ?? "en"} />
}
