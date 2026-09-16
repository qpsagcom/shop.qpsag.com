/**
 * Returns the German variant of a field stored in `metadata.<field>_de`
 * when the active locale is German, otherwise the original value.
 *
 * Product and category content lives in Medusa in English; translations
 * are kept alongside in metadata so they can be edited in the admin.
 */
type Localizable = {
  metadata?: Record<string, unknown> | null
} & Record<string, any>

export const isGerman = (locale: string | null | undefined) =>
  (locale ?? "en").toLowerCase().startsWith("de")

export function localizedField(
  entity: Localizable | null | undefined,
  field: string,
  locale: string | null | undefined
): string | undefined {
  if (!entity) return undefined
  if (isGerman(locale)) {
    const translated = entity.metadata?.[`${field}_de`]
    if (typeof translated === "string" && translated.trim()) {
      return translated
    }
  }
  const base = entity[field]
  return typeof base === "string" ? base : undefined
}
