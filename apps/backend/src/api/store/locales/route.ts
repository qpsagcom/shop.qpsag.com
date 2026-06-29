import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

const SUPPORTED_LOCALES = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
]

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  res.json({ locales: SUPPORTED_LOCALES })
}
