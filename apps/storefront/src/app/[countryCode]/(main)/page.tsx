import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "QPS AG Shop | Swiss Precision Commerce",
  description:
    "Premium storefront for QPS AG with a fast Medusa and Next.js commerce experience.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const [region, collectionsResult] = await Promise.all([
    getRegion(countryCode).catch(() => null),
    listCollections({
      fields: "id, handle, title",
    }).catch(() => ({ collections: [] })),
  ])

  const collections = collectionsResult.collections

  return (
    <>
      <Hero />
      <section className="border-b border-qps-line bg-qps-ink text-qps-paper">
        <div className="content-container grid gap-6 py-8 small:grid-cols-3 small:py-12">
          {[
            [
              "Swiss region",
              "Localized CH storefront with region-aware catalog, CHF pricing and fast checkout.",
            ],
            [
              "Quiet confidence",
              "Clear product cards, calm motion and no noisy discount mechanics.",
            ],
            [
              "Headless core",
              "Medusa keeps catalog, cart and checkout flexible for the next launch phase.",
            ],
          ].map(([title, body]) => (
            <article key={title} className="border-l border-qps-paper/20 pl-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-qps-paper">
                {title}
              </h2>
              <p className="mt-2 max-w-sm text-sm leading-6 text-qps-paper/65">
                {body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-qps-paper py-16 small:py-28">
        <div className="content-container grid gap-8 small:grid-cols-[0.82fr_1.18fr] small:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-qps-muted">
              Storefront direction
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-qps-ink small:text-6xl">
              Ein digitaler Verkaufsraum, der wie ein präzises Instrument
              wirkt.
            </h2>
          </div>
          <div className="grid gap-4 xsmall:grid-cols-2">
            {[
              [
                "Editorial, not generic",
                "Die Startseite führt wie ein Magazin: klare Hierarchie, starke Produktflächen und genug Ruhe für Vertrauen.",
              ],
              [
                "Conversion without pressure",
                "CTAs bleiben sichtbar, aber nicht laut. Add-to-cart und Checkout sollen schnell, verständlich und stressfrei sein.",
              ],
            ].map(([title, body]) => (
              <article
                key={title}
                className="rounded-[1.5rem] border border-qps-line bg-qps-surface/75 p-6 shadow-[0_18px_60px_rgba(17,19,21,0.06)]"
              >
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-qps-ink">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-qps-graphite">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-qps-line bg-qps-surface/70 py-14 small:py-20">
        <div className="content-container grid gap-5 small:grid-cols-4">
          {[
            ["01", "Discover", "Collections und Kategorien geben Orientierung."],
            ["02", "Inspect", "Produktseiten erklären Preis, Varianten und Bestand klar."],
            ["03", "Commit", "Cart-Feedback bestätigt sofort und blockiert nicht."],
            ["04", "Checkout", "Stripe, Region und Versand bleiben nachvollziehbar."],
          ].map(([step, title, body]) => (
            <article
              key={step}
              className="rounded-[1.25rem] border border-qps-line bg-qps-paper p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-qps-signal">
                {step}
              </p>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-qps-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-qps-muted">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="bg-qps-paper py-12 small:py-24">
        <div className="content-container mb-4 small:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-qps-muted">
            Curated catalog
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-qps-ink small:text-5xl">
            Dynamische Medusa-Collections, kuratiert wie ein Premium-Sortiment.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-qps-graphite">
            Jede Collection bekommt genug Raum für Bild, Preis und Titel. Das
            Raster bleibt ruhig, damit die Produkte hochwertiger wirken.
          </p>
        </div>
        {collections.length > 0 && region ? (
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        ) : (
          <div className="content-container">
            <div className="rounded-[1.5rem] border border-qps-line bg-qps-surface/75 p-8 shadow-[0_18px_60px_rgba(17,19,21,0.06)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-qps-signal">
                Catalog temporarily unavailable
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-qps-ink">
                Die kuratierten Produkte werden geladen, sobald die Store API
                wieder antwortet.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-qps-graphite">
                Die Startseite bleibt erreichbar und der Checkout-Fluss wird
                nicht durch einen temporären Backend-Fehler blockiert.
              </p>
            </div>
          </div>
        )}
      </div>

      <section className="bg-qps-ink py-16 text-qps-paper small:py-24">
        <div className="content-container grid gap-8 small:grid-cols-[1.2fr_0.8fr] small:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-qps-paper/55">
              Ready for refinement
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.06em] small:text-6xl">
              Der Shop ist jetzt bereit für echte Produkte, finale Inhalte und
              Launch-Tests.
            </h2>
          </div>
          <div className="rounded-[1.5rem] border border-qps-paper/15 bg-qps-paper/8 p-6">
            <p className="text-sm leading-6 text-qps-paper/70">
              Nächster UX-Fokus: Produktdetailseite, Warenkorb und Checkout mit
              realen Produkten durchtesten und inhaltlich schärfen.
            </p>
            <LocalizedClientLink
              href="/store"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-qps-paper px-6 text-sm font-semibold uppercase tracking-[0.14em] text-qps-ink transition-colors hover:bg-qps-signal hover:text-qps-paper focus:outline-none focus:ring-2 focus:ring-qps-paper/70"
            >
              Sortiment ansehen
            </LocalizedClientLink>
          </div>
        </div>
      </section>
    </>
  )
}
