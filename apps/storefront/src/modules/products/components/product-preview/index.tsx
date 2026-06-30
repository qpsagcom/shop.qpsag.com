import { Text } from "@modules/common/components/ui"
import { HttpTypes } from "@medusajs/types"
import Thumbnail from "../thumbnail"
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
        <div className="mt-2 px-1 pb-1">
          <Text
            className="line-clamp-1 text-xs font-semibold leading-5 text-qps-ink"
            data-testid="product-title"
          >
            {product.title}
          </Text>
        </div>
      </div>
    </ProductPreviewMotionCard>
  )
}
