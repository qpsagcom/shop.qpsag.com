import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ScrollReveal from "@modules/common/components/motion/scroll-reveal"

export const metadata: Metadata = {
  title: "QPS AG Shop | Industrial Robotics & ROVIS",
  description:
    "ROVIS-Roboter, Testsets, Inspektionsboxen und Software für robotergestützte visuelle Inspektion in Pharma, Biotech und Food Tech.",
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
              "Industrial Robotics",
              "ROVIS und Robotik-Bausteine für wiederholbare Prüfprozesse in regulierter Produktion.",
            ],
            [
              "Testsets für visuelle Inspektion",
              "Referenzmuster, Defect Samples und Trainingsmaterial für sichere Prüfentscheidungen.",
            ],
            [
              "GxP-nahe Umsetzung",
              "Engineering, Qualifizierung und Compliance-Denken von QPS Engineering AG.",
            ],
          ].map(([title, body], index) => (
            <ScrollReveal key={title} delay={index * 0.05}>
              <article className="border-l border-qps-paper/20 pl-5">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-qps-paper">
                  {title}
                </h2>
                <p className="mt-2 max-w-sm text-sm leading-6 text-qps-paper/65">
                  {body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-qps-paper py-16 small:py-28">
        <div className="content-container grid gap-8 small:grid-cols-[0.82fr_1.18fr] small:items-end">
          <ScrollReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-qps-muted">
              QPS Engineering AG
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-qps-ink small:text-6xl">
              Robotics, die visuelle Inspektion reproduzierbar macht.
            </h2>
          </ScrollReveal>
          <div className="grid gap-4 xsmall:grid-cols-2">
            {[
              [
                "Für Pharma, Biotech und Food Tech",
                "QPS fokussiert auf Industrien, in denen Prüfqualität, Wiederholbarkeit und Dokumentation entscheidend sind.",
              ],
              [
                "Robotics mit Engineering-Kontext",
                "ROVIS, Roboter, Testsets, Inspektionsboxen und Software werden mit Qualifizierungs- und Integrationswissen gedacht.",
              ],
            ].map(([title, body], index) => (
              <ScrollReveal key={title} delay={0.08 + index * 0.05} variant="scale">
                <article className="rounded-[1.5rem] border border-qps-line bg-qps-surface/75 p-6 shadow-[0_18px_60px_rgba(17,19,21,0.06)] transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-qps-ink">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-qps-graphite">
                    {body}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-qps-line bg-qps-surface/70 py-14 small:py-20">
        <div className="content-container grid gap-5 small:grid-cols-4">
          {[
            ["01", "ROVIS Roboter", "Roboter für visuelle Inspektion mit wiederholbaren Prüfabläufen."],
            ["02", "Testsets & Samples", "Defect Test Sets und Referenzmuster für visuelle Inspektion."],
            ["03", "Inspektionsboxen", "Kontrollierte Prüfplätze für Training, Muster und manuelle Sichtprüfung."],
            ["04", "Software & Integration", "Digitale Workflows, AI-Lösungen und QPS Engineering Support."],
          ].map(([step, title, body], index) => (
            <ScrollReveal key={step} delay={index * 0.045} variant="scale">
              <article className="rounded-[1.25rem] border border-qps-line bg-qps-paper p-5 transition-transform duration-300 hover:-translate-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-qps-signal">
                  {step}
                </p>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-qps-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-qps-muted">{body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-qps-paper py-16 small:py-28">
        <div className="pointer-events-none absolute right-0 top-12 h-80 w-80 rounded-full bg-qps-signal/12 blur-3xl" />
        <div className="content-container relative">
          <ScrollReveal className="mb-8 grid gap-6 small:grid-cols-[0.95fr_1.05fr] small:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-qps-muted">
                QPS Shop Sortiment
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-qps-ink small:text-6xl">
                Robotics-Sortiment für visuelle Inspektion.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-qps-graphite">
              Wählen Sie Robotik und ergänzende Produkte, die visuelle Prüfung
              planbarer machen: ROVIS als Roboter für visuelle Inspektion,
              Testsets für Inspektionsqualität, Software und Inspektionsboxen
              für den operativen Einsatz.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 small:grid-cols-6">
            {[
              {
                title: "ROVIS",
                body: "ROVIS ist der QPS-Roboter für visuelle Inspektion: konzipiert für automatisierte, stabile und dokumentierbare Prüfabläufe.",
                meta: "Robotic Visual Inspection",
                className: "small:col-span-3 small:row-span-2",
              },
              {
                title: "Roboter",
                body: "Robotik-Plattformen und Automationsbausteine für wiederholbare Prüf- und Handlingprozesse in regulierter Produktion.",
                meta: "QxTec",
                className: "small:col-span-3",
              },
              {
                title: "Testsets",
                body: "Defect Test Sets & Samples für visuelle Inspektion, Training und Qualifizierung. Ideal, um Prüfergebnisse reproduzierbar abzusichern.",
                meta: "Visual Inspection",
                className: "small:col-span-2",
              },
              {
                title: "Software",
                body: "Softwaremodule und AI-basierte Workflows für Prüfprozesse, Auswertung, Dokumentation und Integration in bestehende Abläufe.",
                meta: "Digital",
                className: "small:col-span-2",
              },
              {
                title: "Inspektionsboxen",
                body: "Prüf- und Inspektionsboxen für kontrollierte Sichtprüfung, Training, Musterverwaltung und standardisierte Arbeitsplätze.",
                meta: "Inspection Tools",
                className: "small:col-span-2",
              },
            ].map((item, index) => (
              <ScrollReveal
                key={item.title}
                delay={index * 0.04}
                className={item.className}
                variant={index === 0 ? "scale" : "fade-up"}
              >
                <article className="group h-full rounded-[1.6rem] border border-qps-line bg-qps-surface p-6 shadow-[0_24px_80px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:border-qps-signal/70 hover:shadow-[0_30px_100px_rgba(0,0,0,0.10)]">
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
                  <div className="flex items-center justify-between border-t border-qps-line pt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-qps-muted">
                    <span>QPS</span>
                    <span>Shop ready</span>
                  </div>
                </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-qps-paper py-12 small:py-24">
        <div className="content-container mb-4 small:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-qps-muted">
            Robotics Sortiment
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-qps-ink small:text-5xl">
            Robotik für sichere Sichtprüfung: ROVIS, Roboter, Testsets, Software und Inspektionsboxen.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-qps-graphite">
            Der Shop wird zum Beschaffungspunkt für QPS-nahe Robotik rund um
            visuelle Inspektion, Prüfertraining, robotergestützte Sichtprüfung
            und qualitätsnahe Prozessunterstützung.
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
                Sortiment temporär nicht verfügbar
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-qps-ink">
                Die Robotics-Produkte werden geladen, sobald die Store API
                wieder antwortet.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-qps-graphite">
                Die Startseite bleibt erreichbar, damit ROVIS, Roboter,
                Testsets, Inspektionsboxen und QPS-Kompetenzen auch bei
                temporärer API-Störung sichtbar bleiben.
              </p>
            </div>
          </div>
        )}
      </div>

      <section className="bg-qps-ink py-16 text-qps-paper small:py-24">
        <div className="content-container grid gap-8 small:grid-cols-[1.2fr_0.8fr] small:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-qps-paper/55">
              Bereit für regulierte Abläufe
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.06em] small:text-6xl">
              Von ROVIS bis Defect Test Sets: der Shop wird zur ersten Adresse
              für Robotics und visuelle Inspektion mit QPS Engineering Know-how.
            </h2>
          </div>
          <div className="rounded-[1.5rem] border border-qps-paper/15 bg-qps-paper/8 p-6">
            <p className="text-sm leading-6 text-qps-paper/70">
              Ziel ist ein Sortiment, das sofort verständlich ist: was es
              löst, wo es eingesetzt wird und wie es Ihre Prüfprozesse
              reproduzierbarer macht.
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
