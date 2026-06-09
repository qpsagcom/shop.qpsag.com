import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "QPS AG Shop | Industrial Robotics & Inspection",
  description:
    "Industrial robotics, visual inspection and measurement technology for pharma, biotech and food technology.",
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
              "Robotic systems",
              "Industrial automation platforms for regulated production environments.",
            ],
            [
              "Visual inspection",
              "Reference containers, defect sets, training tools and qualification support.",
            ],
            [
              "GxP ready",
              "Engineering, validation and compliance thinking from QPS Engineering AG.",
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
              QPS Engineering AG
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-qps-ink small:text-6xl">
              Engineering what life-science needs next.
            </h2>
          </div>
          <div className="grid gap-4 xsmall:grid-cols-2">
            {[
              [
                "Pharma, Biotech, Food Tech",
                "Der Shop bündelt Produkte und Systeme für Industrien, in denen Präzision, Wiederholbarkeit und Compliance entscheidend sind.",
              ],
              [
                "Robotics with engineering context",
                "Nicht nur Komponenten: QPS verbindet Robotik, Machine Vision, Measurement und Auswahl/Integration zu belastbaren Lösungen.",
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
            ["01", "Robotic Visual Inspection", "Automatisierte Prüfprozesse für regulierte Produktionslinien."],
            ["02", "Robotic Systems", "Robotik-Plattformen und End-of-line Automation für Industrieprozesse."],
            ["03", "Selection & Integration", "Auswahl, Integration und Qualifizierung passend zum Prozess."],
            ["04", "Measurement Technology", "Material ID, Roughness, LUX, Temperature und Noise Measurement."],
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

      <section className="relative overflow-hidden bg-qps-paper py-16 small:py-28">
        <div className="pointer-events-none absolute right-0 top-12 h-80 w-80 rounded-full bg-qps-signal/12 blur-3xl" />
        <div className="content-container relative">
          <div className="mb-8 grid gap-6 small:grid-cols-[0.95fr_1.05fr] small:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-qps-muted">
                Robotics stack
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-qps-ink small:text-6xl">
                Beschaffung für Automatisierung, Prüfung und Qualität.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-qps-graphite">
              Der Shop soll nicht wie ein generischer Katalog wirken, sondern
              wie ein technisches Beschaffungs-Cockpit für QPS-nahe Robotics,
              Visual Inspection und Measurement-Komponenten.
            </p>
          </div>

          <div className="grid gap-4 small:grid-cols-6">
            {[
              {
                title: "Robotic Inspection Cells",
                body: "Systeme und Bausteine für automatisierte Sichtprüfung in regulierten Produktionsumgebungen.",
                meta: "QxTec / Vision",
                className: "small:col-span-3 small:row-span-2",
              },
              {
                title: "Defect Test Sets",
                body: "Referenzmuster, Trainingsmaterial und Qualifizierungsunterstützung für Visual Inspection.",
                meta: "QLabs",
                className: "small:col-span-3",
              },
              {
                title: "Measurement Technology",
                body: "Material ID, Oberflächenrauheit, LUX, Temperatur und Noise Level für Prozesskontrolle.",
                meta: "QMeasure",
                className: "small:col-span-2",
              },
              {
                title: "Selection & Integration",
                body: "Technische Auswahl und Integration passend zu Prozess, Risiko und Compliance.",
                meta: "Engineering",
                className: "small:col-span-2",
              },
              {
                title: "GxP Context",
                body: "Produkte und Systeme mit Validierung, Qualifizierung und Dokumentation im Blick.",
                meta: "Compliance",
                className: "small:col-span-2",
              },
            ].map((item) => (
              <article
                key={item.title}
                className={`group rounded-[1.6rem] border border-qps-line bg-qps-surface/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.06)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-qps-signal/70 hover:shadow-[0_30px_100px_rgba(0,0,0,0.10)] ${item.className}`}
              >
                <div className="flex min-h-full flex-col justify-between gap-8">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-qps-signal">
                      {item.meta}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-qps-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-qps-graphite">
                      {item.body}
                    </p>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-qps-paper">
                    <div className="h-full w-2/3 rounded-full bg-qps-signal transition-all duration-300 group-hover:w-full" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-qps-paper py-12 small:py-24">
        <div className="content-container mb-4 small:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-qps-muted">
            Curated catalog
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-qps-ink small:text-5xl">
            Robotics, Inspection und Measurement Technology für industrielle Anwendungen.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-qps-graphite">
            Der Shop wird zum Beschaffungspunkt für QPS-nahe Systeme,
            Referenzprodukte und Technologiebausteine rund um industrielle
            Robotik, Visual Inspection und Prozessqualität.
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
                Robotics catalog temporarily unavailable
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-qps-ink">
                Die Robotics-Produkte werden geladen, sobald die Store API
                wieder antwortet.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-qps-graphite">
                Die Startseite bleibt erreichbar, damit QPS-Kompetenzen und
                Anwendungsfelder auch bei temporärer API-Störung sichtbar
                bleiben.
              </p>
            </div>
          </div>
        )}
      </div>

      <section className="bg-qps-ink py-16 text-qps-paper small:py-24">
        <div className="content-container grid gap-8 small:grid-cols-[1.2fr_0.8fr] small:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-qps-paper/55">
              Built for regulated operations
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.06em] small:text-6xl">
              Vom Defect Test Set bis zur Robotic Inspection Cell: der Shop
              wird auf industrielle Beschaffung ausgerichtet.
            </h2>
          </div>
          <div className="rounded-[1.5rem] border border-qps-paper/15 bg-qps-paper/8 p-6">
            <p className="text-sm leading-6 text-qps-paper/70">
              Nächster Inhaltsfokus: echte Robotics-Produkte, technische
              Daten, Qualifizierungsbezug und klare Anfrage- oder Kaufpfade.
            </p>
            <LocalizedClientLink
              href="/store"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-qps-paper px-6 text-sm font-semibold uppercase tracking-[0.14em] text-qps-ink transition-colors hover:bg-qps-signal hover:text-qps-paper focus:outline-none focus:ring-2 focus:ring-qps-paper/70"
            >
              Robotics Sortiment ansehen
            </LocalizedClientLink>
          </div>
        </div>
      </section>
    </>
  )
}
