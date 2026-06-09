import { Text } from "@modules/common/components/ui"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import ProductPreviewMotionCard from "./motion-card"

export default async function ProductPreview({
  product,
  isFeatured,
  region: _region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <ProductPreviewMotionCard href={`/products/${product.handle}`}>
      <div data-testid="product-wrapper" className="h-full">
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
          isFeatured={isFeatured}
          className="rounded-[1.1rem] bg-qps-paper shadow-none"
        />
        <div className="mt-4 flex items-start justify-between gap-4 px-1 pb-1 txt-compact-medium">
          <Text
            className="line-clamp-2 text-sm font-semibold leading-5 text-qps-ink"
            data-testid="product-title"
          >
            {product.title}
          </Text>
          <div className="shrink-0 font-semibold tabular-nums text-qps-graphite">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </ProductPreviewMotionCard>
  )
}
