import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@modules/common/components/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { localizedField } from "@lib/util/localize"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
  locale?: string | null
}

const ProductInfo = ({ product, locale = null }: ProductInfoProps) => {
  const subtitle = localizedField(product, "subtitle", locale)
  const description = localizedField(product, "description", locale)
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading
          level="h2"
          className="text-3xl leading-10 text-ui-fg-base"
          data-testid="product-title"
        >
          {product.title}
        </Heading>

        {subtitle && (
          <Text
            className="-mt-2 text-medium font-medium text-qps-muted"
            data-testid="product-subtitle"
          >
            {subtitle}
          </Text>
        )}

        <Text
          className="text-medium text-ui-fg-subtle whitespace-pre-line"
          data-testid="product-description"
        >
          {description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
