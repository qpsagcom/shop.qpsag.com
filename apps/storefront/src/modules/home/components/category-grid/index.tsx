import { listProducts } from "@lib/data/products"
import { getTranslator } from "@lib/i18n/translations"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

type CategoryGridProps = {
  categories: HttpTypes.StoreProductCategory[]
  region: HttpTypes.StoreRegion
  locale: string | null
}

type Tile = {
  category: HttpTypes.StoreProductCategory
  count: number
  cover: string | null
}

async function loadTile(
  category: HttpTypes.StoreProductCategory,
  region: HttpTypes.StoreRegion
): Promise<Tile | null> {
  const { response } = await listProducts({
    regionId: region.id,
    queryParams: { category_id: category.id, limit: 1, fields: "thumbnail" },
  }).catch(() => ({ response: { products: [], count: 0 } }))

  if (!response.count) return null

  return {
    category,
    count: response.count,
    cover: response.products[0]?.thumbnail ?? null,
  }
}

export default async function CategoryGrid({
  categories,
  region,
  locale,
}: CategoryGridProps) {
  const translate = getTranslator(locale)
  const tiles = (
    await Promise.all(categories.map((c) => loadTile(c, region)))
  ).filter((t): t is Tile => t !== null)

  if (!tiles.length) return null

  // First two tiles span half the row, the rest share the second row.
  const span = (index: number) =>
    index < 2 ? "small:col-span-3" : tiles.length === 3 ? "small:col-span-6" : "small:col-span-2"

  return (
    <div className="content-container">
      <ul className="grid grid-cols-1 gap-4 xsmall:grid-cols-2 small:grid-cols-6 small:gap-5">
        {tiles.map((tile, index) => {
          const label =
            tile.count === 1
              ? translate("home_products_one")
              : translate("home_products_many")

          return (
            <li key={tile.category.id} className={`xsmall:col-span-1 ${span(index)}`}>
              <LocalizedClientLink
                href={`/categories/${tile.category.handle}`}
                className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-qps-line bg-qps-surface shadow-[0_18px_60px_rgba(17,19,21,0.06)] transition-colors hover:border-qps-signal/60 focus:outline-none focus:ring-2 focus:ring-qps-signal focus:ring-offset-2 focus:ring-offset-qps-paper"
              >
                <div
                  className={`relative w-full bg-white ${
                    index < 2 ? "aspect-[16/10]" : "aspect-[16/11]"
                  }`}
                >
                  {tile.cover && (
                    <Image
                      src={tile.cover}
                      alt={tile.category.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 640px"
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-qps-line px-5 py-4">
                  <div>
                    <p className="text-lg font-semibold tracking-[-0.02em] text-qps-ink">
                      {tile.category.name}
                    </p>
                    <p className="mt-0.5 text-sm text-qps-muted">
                      {tile.count} {label}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-qps-signal">
                    {translate("home_view_category")}
                  </span>
                </div>
              </LocalizedClientLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
