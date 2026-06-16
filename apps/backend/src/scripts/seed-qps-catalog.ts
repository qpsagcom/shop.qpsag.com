import { MedusaContainer } from "@medusajs/framework"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import {
  createProductCategoriesWorkflow,
  createProductsWorkflow,
  deleteProductCategoriesWorkflow,
  deleteProductsWorkflow,
} from "@medusajs/medusa/core-flows"

import {
  buildProductsInput,
  DEMO_CATEGORY_NAMES,
  DEMO_PRODUCT_HANDLES,
  QPS_CATEGORIES,
  QPS_PRODUCTS,
} from "../data/qps-catalog"

/**
 * Replaces the Medusa demo catalog with the QPS catalog.
 *
 * - Removes the demo products (t-shirt, sweatshirt, sweatpants, shorts) and the
 *   demo categories (Shirts, Sweatshirts, Pants, Merch).
 * - Creates the "Robotics" and "Inspection Hoods & Booths" categories.
 * - Creates the NEURA robotics products and the Quantum hoods & booths products.
 *
 * The script is idempotent: it only deletes demo data that still exists and only
 * creates categories/products that are missing, so it is safe to run repeatedly.
 *
 * Run with: `npx medusa exec ./src/scripts/seed-qps-catalog.ts`
 */
export default async function seedQpsCatalog({
  container,
}: {
  container: MedusaContainer
}) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  // The new catalog is created first; the demo data is only removed once the
  // new products exist, so a failure during creation never leaves the store
  // empty.

  // 1. Ensure the QPS categories exist.
  const { data: existingCategories } = await query.graph({
    entity: "product_category",
    fields: ["id", "handle"],
    filters: { handle: QPS_CATEGORIES.map((c) => c.handle) },
  })

  const categoryIdByHandle: Record<string, string> = {}
  for (const category of existingCategories) {
    categoryIdByHandle[category.handle] = category.id
  }

  const categoriesToCreate = QPS_CATEGORIES.filter(
    (c) => !categoryIdByHandle[c.handle]
  )

  if (categoriesToCreate.length) {
    logger.info(
      `Creating ${categoriesToCreate.length} categor(y/ies): ${categoriesToCreate
        .map((c) => c.name)
        .join(", ")}`
    )
    const { result: createdCategories } =
      await createProductCategoriesWorkflow(container).run({
        input: {
          product_categories: categoriesToCreate.map((c) => ({
            name: c.name,
            handle: c.handle,
            description: c.description,
            is_active: true,
          })),
        },
      })
    for (const category of createdCategories) {
      categoryIdByHandle[category.handle] = category.id
    }
  } else {
    logger.info("All QPS categories already exist.")
  }

  // 2. Resolve the default sales channel and shipping profile.
  const { data: salesChannels } = await query.graph({
    entity: "sales_channel",
    fields: ["id", "name"],
  })
  const defaultSalesChannel =
    salesChannels.find((sc) => sc.name === "Default Sales Channel") ??
    salesChannels[0]

  if (!defaultSalesChannel) {
    throw new Error("No sales channel found. Cannot create products.")
  }

  const { data: shippingProfiles } = await query.graph({
    entity: "shipping_profile",
    fields: ["id"],
  })
  const shippingProfile = shippingProfiles[0]

  if (!shippingProfile) {
    throw new Error("No shipping profile found. Cannot create products.")
  }

  // 3. Create the QPS products that don't already exist.
  const { data: existingProducts } = await query.graph({
    entity: "product",
    fields: ["id", "handle"],
    filters: { handle: QPS_PRODUCTS.map((p) => p.handle) },
  })
  const existingHandles = new Set(existingProducts.map((p) => p.handle))

  const productsToCreate = QPS_PRODUCTS.filter(
    (p) => !existingHandles.has(p.handle)
  )

  if (productsToCreate.length) {
    logger.info(`Creating ${productsToCreate.length} QPS product(s)...`)
    await createProductsWorkflow(container).run({
      input: {
        products: buildProductsInput({
          salesChannelId: defaultSalesChannel.id,
          shippingProfileId: shippingProfile.id,
          categoryIdByHandle,
          products: productsToCreate,
        }),
      },
    })
  } else {
    logger.info("All QPS products already exist.")
  }

  // 4. Remove the demo products (only after the new catalog exists).
  const { data: demoProducts } = await query.graph({
    entity: "product",
    fields: ["id", "handle"],
    filters: { handle: DEMO_PRODUCT_HANDLES },
  })

  if (demoProducts.length) {
    logger.info(
      `Deleting ${demoProducts.length} demo product(s): ${demoProducts
        .map((p) => p.handle)
        .join(", ")}`
    )
    await deleteProductsWorkflow(container).run({
      input: { ids: demoProducts.map((p) => p.id) },
    })
  } else {
    logger.info("No demo products found. Skipping product deletion.")
  }

  // 5. Remove the demo categories.
  const { data: demoCategories } = await query.graph({
    entity: "product_category",
    fields: ["id", "name"],
    filters: { name: DEMO_CATEGORY_NAMES },
  })

  if (demoCategories.length) {
    logger.info(
      `Deleting ${demoCategories.length} demo categor(y/ies): ${demoCategories
        .map((c) => c.name)
        .join(", ")}`
    )
    await deleteProductCategoriesWorkflow(container).run({
      input: demoCategories.map((c) => c.id),
    })
  } else {
    logger.info("No demo categories found. Skipping category deletion.")
  }

  logger.info("Finished seeding QPS catalog.")
}
