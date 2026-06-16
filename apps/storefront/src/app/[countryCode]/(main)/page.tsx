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
    "ROVIS robots, test sets, inspection boxes, and software for robotic visual inspection in pharma, biotech, and food tech.",
}

const workflowSteps = [
  {
    step: "01",
    title: "ROVIS",
    eyebrow: "Robotic Visual Inspection",
    body: "Robot-based visual inspection for stable, repeatable, and fully documentable inspection workflows.",
    image: "/blueprint/blueprint-rovis-cell.webp",
    imageAlt: "Technical drawing of the ROVIS robotics cell",
    figure: "Fig. 01 — ROVIS Cell",
  },
  {
    step: "02",
    title: "Test Sets",
    eyebrow: "Inspection Quality",
    body: "Defect test sets, samples, and references for training, qualification, and confident decisions.",
    image: "/blueprint/blueprint-vials-trio.webp",
    imageAlt: "Technical drawing of vials for defect test sets",
    figure: "Fig. 03 — Defect Samples",
  },
  {
    step: "03",
    title: "Software",
    eyebrow: "Workflow Control",
    body: "Digital inspection processes, evaluation, and integration into existing production and quality workflows.",
    image: "/blueprint/blueprint-inspection.webp",
    imageAlt: "Technical drawing of a vial inspection station",
    figure: "Fig. 04 — Inspection Detail",
  },
  {
    step: "04",
    title: "Inspection Boxes",
    eyebrow: "Controlled Inspection",
    body: "Controlled inspection stations for visual inspection, sample management, and reproducible working conditions.",
    image: "/blueprint/blueprint-vials.webp",
    imageAlt: "Technical drawing of vials and closure caps",
    figure: "Fig. 05 — Sample Handling",
  },
] as const

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
              "ROVIS and robotics building blocks for repeatable inspection processes in regulated production.",
            ],
            [
              "Test Sets for Visual Inspection",
              "Reference samples, defect samples, and training material for confident inspection decisions.",
            ],
            [
              "GxP-Aligned Delivery",
              "Engineering, qualification, and compliance thinking from QPS Engineering AG.",
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
        <div className="content-container grid gap-10 small:grid-cols-[0.75fr_1.25fr] small:items-start">
          <ScrollReveal className="small:sticky small:top-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-qps-muted">
              Industrial Robotics Procurement
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-qps-ink small:text-6xl">
              A clear stack for robotic visual inspection.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-qps-graphite">
              QPS combines ROVIS, test sets, software, and controlled
              inspection stations into a procurement picture that fits
              regulated production processes.
            </p>
            <figure className="mt-8 overflow-hidden rounded-[1.25rem] border border-qps-line bg-qps-surface">
              <div className="flex items-center justify-between border-b border-dashed border-qps-line px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-qps-muted">
                <span>Fig. 00 — Production Line</span>
                <span className="text-qps-signal">QPS Engineering</span>
              </div>
              <img
                src="/blueprint/blueprint-facility.webp"
                alt="Technische Zeichnung einer pharmazeutischen Produktionslinie"
                loading="lazy"
                className="blueprint-img w-full object-cover"
              />
            </figure>
          </ScrollReveal>

          <div className="relative grid gap-3">
            <div className="pointer-events-none absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-qps-signal via-qps-line to-transparent small:block" />
            {workflowSteps.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.06} variant="slide-left">
                <article className="group relative overflow-hidden rounded-[1.5rem] border border-qps-line bg-qps-surface p-5 shadow-[0_18px_60px_rgba(17,19,21,0.06)] transition duration-300 hover:-translate-y-1 hover:border-qps-signal/60">
                  <div className="flex gap-5 small:items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-qps-line bg-qps-paper text-[11px] font-semibold tracking-[0.18em] text-qps-signal transition-colors group-hover:border-qps-signal">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-qps-muted">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-qps-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-qps-graphite">
                        {item.body}
                      </p>
                    </div>
                    <figure className="hidden w-44 shrink-0 overflow-hidden rounded-[1rem] border border-qps-line bg-qps-paper small:block">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        loading="lazy"
                        className="blueprint-img h-28 w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <figcaption className="border-t border-dashed border-qps-line px-2 py-1.5 text-center text-[9px] font-semibold uppercase tracking-[0.16em] text-qps-muted">
                        {item.figure}
                      </figcaption>
                    </figure>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-qps-line bg-qps-paper py-14 small:py-20">
        <div className="content-container">
          <ScrollReveal variant="scale">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-qps-line bg-qps-surface shadow-[0_24px_80px_rgba(17,19,21,0.07)]">
              <img
                src="/blueprint/blueprint-lab.webp"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="blueprint-img absolute inset-0 h-full w-full object-cover object-right"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-qps-surface via-qps-surface/85 to-qps-surface/15" />
              <div className="relative max-w-2xl px-6 py-12 small:px-12 small:py-20">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-qps-signal">
                  QPS Robotics Lab — Stein, Switzerland
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-[1.02] tracking-[-0.05em] text-qps-ink small:text-5xl">
                  Robotics, inspection, and process environment as one system.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-qps-graphite">
                  From the isolator through the inspection line to the humanoid
                  robot: QPS develops and integrates the building blocks that
                  are available individually in the shop — tailored to
                  regulated production.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-qps-muted">
                  <span>Blueprint Series / 2026</span>
                  <span className="hidden h-1 w-1 rounded-full bg-qps-signal xsmall:inline-block" />
                  <span>we serve humanity.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="bg-qps-paper py-12 small:py-24">
        <div className="content-container mb-4 small:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-qps-muted">
            Robotics Range
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-qps-ink small:text-5xl">
            Robotics for reliable visual inspection: ROVIS, robots, test sets, software, and inspection boxes.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-qps-graphite">
            The shop becomes the procurement point for QPS robotics around
            visual inspection, inspector training, robotic visual inspection,
            and quality-related process support.
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
                Range temporarily unavailable
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-qps-ink">
                The robotics products will load as soon as the store API
                responds again.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-qps-graphite">
                The home page stays available so that ROVIS, robots, test sets,
                inspection boxes, and QPS expertise remain visible even during a
                temporary API disruption.
              </p>
            </div>
          </div>
        )}
      </div>

      <section className="relative overflow-hidden bg-qps-ink py-16 text-qps-paper small:py-24">
        <img
          src="/blueprint/blueprint-facility.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="blueprint-img-on-ink pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.16]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05070a] via-[#05070a]/72 to-[#05070a]/40" />
        <div className="content-container relative grid gap-8 small:grid-cols-[1.2fr_0.8fr] small:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-qps-paper/55">
              Ready for regulated workflows
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.06em] small:text-6xl">
              From ROVIS to defect test sets: the shop becomes the first
              address for robotics and visual inspection with QPS Engineering
              know-how.
            </h2>
          </div>
          <div className="rounded-[1.5rem] border border-qps-paper/15 bg-qps-paper/8 p-6">
            <p className="text-sm leading-6 text-qps-paper/70">
              The goal is a range that is immediately understandable: what it
              solves, where it is used, and how it makes your inspection
              processes more reproducible.
            </p>
            <div className="mt-6 flex flex-col gap-3 xsmall:flex-row">
              <LocalizedClientLink
                href="/store"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold uppercase tracking-[0.14em] text-[#05070a] transition-colors hover:bg-qps-signal hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                View robotics range
              </LocalizedClientLink>
              <a
                href="mailto:info@qpsag.com"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-qps-paper/20 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-qps-paper transition-colors hover:border-qps-signal hover:text-qps-signal focus:outline-none focus:ring-2 focus:ring-qps-paper/50"
              >
                Contact QPS
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
