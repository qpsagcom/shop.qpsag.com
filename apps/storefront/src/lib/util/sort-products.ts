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
    const rankOf = (p: HttpTypes.StoreProduct) => {
      const rank = (p.categories?.[0] as { rank?: number } | undefined)?.rank
      return typeof rank === "number" ? rank : Number.MAX_SAFE_INTEGER
    }
    sortedProducts.sort((a, b) => {
      const byRank = rankOf(a) - rankOf(b)
      if (byRank !== 0) return byRank
      return (a.title ?? "").localeCompare(b.title ?? "")
    })
  }

  return sortedProducts
}
