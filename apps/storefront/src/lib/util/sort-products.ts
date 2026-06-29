import { HttpTypes } from "@medusajs/types"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

interface MinPricedProduct extends HttpTypes.StoreProduct {
  _minPrice?: number
}

/**
 * Helper function to sort products by price until the store API supports sorting by price
 * @param products
 * @param sortBy
 * @returns products sorted by price
 */
export function sortProducts(
  products: HttpTypes.StoreProduct[],
  sortBy: SortOptions
): HttpTypes.StoreProduct[] {
  const sortedProducts = [...products] as MinPricedProduct[]

  if (sortBy === "created_at") {
    sortedProducts.sort((a, b) => {
      return (
        new Date(b.created_at!).getTime() - new Date(a.created_at!).getTime()
      )
    })
  }

  if (sortBy === "category") {
    sortedProducts.sort((a, b) => {
      const aCategory = a.categories?.[0]?.name ?? ""
      const bCategory = b.categories?.[0]?.name ?? ""
      return aCategory.localeCompare(bCategory)
    })
  }

  return sortedProducts
}
