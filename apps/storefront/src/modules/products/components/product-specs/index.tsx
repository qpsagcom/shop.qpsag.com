import { HttpTypes } from "@medusajs/types"
import { t } from "@lib/i18n/translations"

type Spec = {
  label: string
  label_de?: string
  value: string
  value_de?: string
}

type Highlight = {
  text: string
  text_de?: string
  image?: string
}

type ProductSpecsProps = {
  product: HttpTypes.StoreProduct
  locale?: string
}

function parseJsonField<T>(raw: unknown): T[] {
  if (!raw) return []
  if (Array.isArray(raw)) return raw as T[]
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw)
      return Array.isArray(parsed) ? (parsed as T[]) : []
    } catch {
      return []
    }
  }
  return []
}

const pick = (locale: string, base?: string, de?: string) =>
  locale === "de" && de ? de : base

const ProductSpecs = ({ product, locale = "en" }: ProductSpecsProps) => {
  const metadata = (product.metadata ?? {}) as Record<string, unknown>
  const specs = parseJsonField<Spec>(metadata.specs).filter(
    (s) => s?.label && s?.value
  )
  const highlights = parseJsonField<Highlight>(metadata.highlights).filter(
    (h) => h?.text
  )
  const detects = parseJsonField<Highlight>(metadata.detects).filter(
    (d) => d?.text
  )

  if (!specs.length && !highlights.length && !detects.length) {
    return null
  }

  const renderList = (items: Highlight[], title: string, spaced: boolean) => (
    <>
      <h3
        className={`text-[11px] font-semibold uppercase tracking-[0.18em] text-qps-muted ${
          spaced ? "mt-12" : ""
        }`}
      >
        {title}
      </h3>
      <ul className="mt-4 grid grid-cols-1 gap-3 xsmall:grid-cols-2 small:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.text}
            className={`flex items-start gap-3 rounded-large border border-qps-line bg-qps-surface/65 shadow-sm ${
              item.image ? "p-2 pr-4" : "px-4 py-3"
            }`}
          >
            {item.image ? (
              <img
                src={item.image}
                alt=""
                loading="lazy"
                width={64}
                height={64}
                className="h-16 w-16 shrink-0 rounded-rounded border border-qps-line bg-white object-cover"
              />
            ) : (
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-qps-signal" />
            )}
            <span
              className={`text-sm font-medium tracking-[-0.01em] text-qps-ink ${
                item.image ? "self-center" : ""
              }`}
            >
              {pick(locale, item.text, item.text_de)}
            </span>
          </li>
        ))}
      </ul>
    </>
  )

  return (
    <section className="border-t border-qps-line bg-qps-paper">
      <div className="content-container py-12 small:py-16">
        {specs.length > 0 && (
          <>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-qps-muted">
              {t("product_specs_eyebrow", locale)}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.01em] text-qps-ink small:text-3xl">
              {t("product_specs_title", locale)}
            </h2>
            <dl className="mt-8 grid grid-cols-2 gap-3 xsmall:grid-cols-3 small:grid-cols-4">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-large border border-qps-line bg-qps-surface/65 px-5 py-4 shadow-sm"
                >
                  <dt className="text-[11px] font-semibold uppercase leading-tight tracking-[0.14em] text-qps-muted">
                    {pick(locale, spec.label, spec.label_de)}
                  </dt>
                  <dd className="mt-2 text-xl font-semibold tabular-nums tracking-[-0.01em] text-qps-ink">
                    {pick(locale, spec.value, spec.value_de)}
                  </dd>
                </div>
              ))}
            </dl>
          </>
        )}

        {detects.length > 0 &&
          renderList(detects, t("product_detects_title", locale), !!specs.length)}

        {highlights.length > 0 &&
          renderList(
            highlights,
            t("product_highlights_title", locale),
            !!specs.length || !!detects.length
          )}

        {typeof metadata.spec_note === "string" && metadata.spec_note && (
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-qps-muted">
            {pick(
              locale,
              metadata.spec_note as string,
              typeof metadata.spec_note_de === "string"
                ? (metadata.spec_note_de as string)
                : undefined
            )}
          </p>
        )}
      </div>
    </section>
  )
}

export default ProductSpecs
