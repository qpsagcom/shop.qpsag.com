import { ProductStatus } from "@medusajs/framework/utils"

/**
 * Shared QPS catalog definition.
 *
 * This is the single source of truth for the QPS shop categories and products.
 * It is consumed both by the initial data seed (fresh environments) and by the
 * `seed-qps-catalog` exec script (already-seeded environments).
 *
 * NOTE: Prices are placeholders. Update the real prices and product images in
 * the Medusa admin once they are available.
 */

const STOREFRONT_BASE_URL = "https://shop.qpsag.com"

export const QPS_CATEGORY_HANDLES = {
  robotics: "robotics",
  hoodsBooths: "inspection-hoods-booths",
} as const

export type QpsCategoryHandle =
  (typeof QPS_CATEGORY_HANDLES)[keyof typeof QPS_CATEGORY_HANDLES]

export type QpsCategory = {
  name: string
  handle: QpsCategoryHandle
  description: string
}

export const QPS_CATEGORIES: QpsCategory[] = [
  {
    name: "Robotics",
    handle: QPS_CATEGORY_HANDLES.robotics,
    description:
      "Cognitive robots, collaborative platforms, and AI-driven robotic assistants for automated, repeatable inspection and handling processes.",
  },
  {
    name: "Inspection Hoods & Booths",
    handle: QPS_CATEGORY_HANDLES.hoodsBooths,
    description:
      "Manual inspection hoods and booths with controlled lighting for reliable, reproducible visual inspection.",
  },
]

export type QpsProduct = {
  title: string
  handle: string
  description: string
  category: QpsCategoryHandle
  image: string
  /** Placeholder prices in major currency units. Update in the admin. */
  prices: { eur: number; usd: number; chf: number }
}

const ROBOTICS_IMAGE = `${STOREFRONT_BASE_URL}/blueprint/blueprint-humanoid.webp`
const HOODS_IMAGE = `${STOREFRONT_BASE_URL}/blueprint/blueprint-inspection.webp`

// Placeholder price bands (major units). Clearly flagged for later replacement.
const ROBOT_PRICE = { eur: 49000, usd: 53000, chf: 47000 }
const BOOTH_PRICE = { eur: 9500, usd: 9900, chf: 9200 }

/**
 * NEURA Robotics range — https://neura-robotics.com/
 */
const ROBOTICS_PRODUCTS: QpsProduct[] = [
  {
    title: "MAiRA",
    handle: "maira",
    description:
      "MAiRA is a cognitive, AI-powered collaborative robot. With integrated sensing and onboard intelligence it perceives its environment, makes decisions, and carries out complex manipulation and inspection tasks without conventional programming.",
    category: QPS_CATEGORY_HANDLES.robotics,
    image: ROBOTICS_IMAGE,
    prices: ROBOT_PRICE,
  },
  {
    title: "LARA",
    handle: "lara",
    description:
      "LARA (Lightweight Agile Robotic Assistant) is a versatile collaborative robot for precise, repeatable automation. Compact and easy to deploy, it handles assembly, handling, and inspection tasks safely alongside human operators.",
    category: QPS_CATEGORY_HANDLES.robotics,
    image: ROBOTICS_IMAGE,
    prices: ROBOT_PRICE,
  },
  {
    title: "MAV",
    handle: "mav",
    description:
      "MAV is a mobile robotic platform that combines autonomous navigation with cognitive capabilities to transport goods and perform tasks across dynamic production and logistics environments.",
    category: QPS_CATEGORY_HANDLES.robotics,
    image: ROBOTICS_IMAGE,
    prices: ROBOT_PRICE,
  },
  {
    title: "MiPA",
    handle: "mipa",
    description:
      "MiPA is an intelligent robotic assistant built to support people at work, in service settings, and at home. It understands its surroundings and adapts to a wide range of everyday and operational tasks.",
    category: QPS_CATEGORY_HANDLES.robotics,
    image: ROBOTICS_IMAGE,
    prices: ROBOT_PRICE,
  },
  {
    title: "4NE1",
    handle: "4ne1",
    description:
      "4NE1 is a production-ready humanoid robot. Built to move like us and engineered to work with us, it delivers human-like fluidity with breakthrough AI perception and steps in across industrial workflows and everyday assistance.",
    category: QPS_CATEGORY_HANDLES.robotics,
    image: ROBOTICS_IMAGE,
    prices: ROBOT_PRICE,
  },
]

/**
 * Quantum Packaging Technologies inspection hoods & booths —
 * https://www.quantumptinc.com/hoods-booths
 */
const HOODS_BOOTHS_PRODUCTS: QpsProduct[] = [
  {
    title: "NANO XP",
    handle: "nano-xp",
    description:
      "Compact benchtop inspection hood with controlled, glare-free lighting for small-batch manual visual inspection.",
    category: QPS_CATEGORY_HANDLES.hoodsBooths,
    image: HOODS_IMAGE,
    prices: BOOTH_PRICE,
  },
  {
    title: "MICRO M",
    handle: "micro-m",
    description:
      "Space-saving manual inspection hood delivering uniform, calibrated illumination for reliable defect detection.",
    category: QPS_CATEGORY_HANDLES.hoodsBooths,
    image: HOODS_IMAGE,
    prices: BOOTH_PRICE,
  },
  {
    title: "CITADEL MINI",
    handle: "citadel-mini",
    description:
      "Compact inspection booth in the CITADEL line, combining controlled lighting with an ergonomic station for manual visual inspection.",
    category: QPS_CATEGORY_HANDLES.hoodsBooths,
    image: HOODS_IMAGE,
    prices: BOOTH_PRICE,
  },
  {
    title: "CITADEL SX",
    handle: "citadel-sx",
    description:
      "CITADEL SX inspection booth with calibrated lighting and a controlled environment for consistent, reproducible visual inspection.",
    category: QPS_CATEGORY_HANDLES.hoodsBooths,
    image: HOODS_IMAGE,
    prices: BOOTH_PRICE,
  },
  {
    title: "CITADEL SXC",
    handle: "citadel-sxc",
    description:
      "CITADEL SXC inspection booth offering controlled lighting and configurable inspection conditions for demanding quality workflows.",
    category: QPS_CATEGORY_HANDLES.hoodsBooths,
    image: HOODS_IMAGE,
    prices: BOOTH_PRICE,
  },
  {
    title: "CITADEL SX+",
    handle: "citadel-sx-plus",
    description:
      "CITADEL SX+ inspection booth with enhanced lighting control and ergonomics for high-throughput manual visual inspection.",
    category: QPS_CATEGORY_HANDLES.hoodsBooths,
    image: HOODS_IMAGE,
    prices: BOOTH_PRICE,
  },
  {
    title: "CITADEL XT V2",
    handle: "citadel-xt-v2",
    description:
      "CITADEL XT V2 is a larger inspection booth providing controlled lighting and a stable inspection environment for larger samples and batches.",
    category: QPS_CATEGORY_HANDLES.hoodsBooths,
    image: HOODS_IMAGE,
    prices: BOOTH_PRICE,
  },
  {
    title: "CITADEL XT+ V2",
    handle: "citadel-xt-plus-v2",
    description:
      "CITADEL XT+ V2 inspection booth with extended capacity and refined lighting control for reproducible, high-volume visual inspection.",
    category: QPS_CATEGORY_HANDLES.hoodsBooths,
    image: HOODS_IMAGE,
    prices: BOOTH_PRICE,
  },
  {
    title: "CITADEL XD",
    handle: "citadel-xd",
    description:
      "CITADEL XD inspection booth engineered for controlled lighting and consistent inspection conditions in demanding production settings.",
    category: QPS_CATEGORY_HANDLES.hoodsBooths,
    image: HOODS_IMAGE,
    prices: BOOTH_PRICE,
  },
  {
    title: "SHADOW M3",
    handle: "shadow-m3",
    description:
      "SHADOW M3 inspection hood providing glare-controlled, uniform lighting for accurate manual visual inspection.",
    category: QPS_CATEGORY_HANDLES.hoodsBooths,
    image: HOODS_IMAGE,
    prices: BOOTH_PRICE,
  },
  {
    title: "SHADOW M2",
    handle: "shadow-m2",
    description:
      "SHADOW M2 inspection hood delivering controlled illumination and an ergonomic station for reliable defect detection.",
    category: QPS_CATEGORY_HANDLES.hoodsBooths,
    image: HOODS_IMAGE,
    prices: BOOTH_PRICE,
  },
  {
    title: "SHADOW HD",
    handle: "shadow-hd",
    description:
      "SHADOW HD inspection hood with high-definition lighting control for precise, reproducible visual inspection.",
    category: QPS_CATEGORY_HANDLES.hoodsBooths,
    image: HOODS_IMAGE,
    prices: BOOTH_PRICE,
  },
]

export const QPS_PRODUCTS: QpsProduct[] = [
  ...ROBOTICS_PRODUCTS,
  ...HOODS_BOOTHS_PRODUCTS,
]

/** Handles of the original Medusa demo data that should be removed. */
export const DEMO_PRODUCT_HANDLES = [
  "t-shirt",
  "sweatshirt",
  "sweatpants",
  "shorts",
]
export const DEMO_CATEGORY_NAMES = ["Shirts", "Sweatshirts", "Pants", "Merch"]

type BuildProductsOptions = {
  salesChannelId: string
  shippingProfileId: string
  categoryIdByHandle: Record<string, string>
  products?: QpsProduct[]
}

/**
 * Builds the `createProductsWorkflow` input for the given catalog products.
 * Each product has a single "Standard" variant with no managed inventory.
 */
export function buildProductsInput({
  salesChannelId,
  shippingProfileId,
  categoryIdByHandle,
  products = QPS_PRODUCTS,
}: BuildProductsOptions) {
  return products.map((product) => ({
    title: product.title,
    handle: product.handle,
    description: product.description,
    status: ProductStatus.PUBLISHED,
    shipping_profile_id: shippingProfileId,
    category_ids: [categoryIdByHandle[product.category]].filter(Boolean),
    images: [{ url: product.image }],
    options: [
      {
        title: "Variant",
        values: ["Standard"],
      },
    ],
    variants: [
      {
        title: "Standard",
        sku: product.handle.toUpperCase(),
        manage_inventory: false,
        options: {
          Variant: "Standard",
        },
        prices: [
          { currency_code: "eur", amount: product.prices.eur },
          { currency_code: "usd", amount: product.prices.usd },
          { currency_code: "chf", amount: product.prices.chf },
        ],
      },
    ],
    sales_channels: [{ id: salesChannelId }],
  }))
}
