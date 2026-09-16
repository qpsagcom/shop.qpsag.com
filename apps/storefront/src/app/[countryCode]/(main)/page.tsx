import { Metadata } from "next"

import CategoryRail from "@modules/home/components/featured-products/category-rail"
import Hero from "@modules/home/components/hero"
import { listCategories } from "@lib/data/categories"
import { getRegion } from "@lib/data/regions"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ScrollReveal from "@modules/common/components/motion/scroll-reveal"
import { getTranslator } from "@lib/i18n/translations"
import { getLocale as getLocaleCookie } from "@lib/data/locale-actions"

export const metadata: Metadata = {
  title: "QPS AG Shop | Industrial Robotics & RAVI-720",
  description:
    "RAVI-720 robots, test sets, inspection boxes, and software for robotic visual inspection in pharma, biotech, and food tech.",
}

const STEP_IMAGES = [
  {
    image: "/blueprint/blueprint-vials-trio.webp",
    imageAlt: "Technical drawing of vials for defect test sets",
    figure: "Defect Samples",
  },
  {
    image: "/blueprint/blueprint-inspection.webp",
    imageAlt: "Technical drawing of a vial inspection station",
    figure: "Inspection Detail",
  },
  {
    image: "/blueprint/blueprint-rovis-cell.webp",
    imageAlt: "Technical drawing of the RAVI-720 robotics cell",
    figure: "RAVI-720 Cell",
  },
  {
    image: "/blueprint/blueprint-vials.webp",
    imageAlt: "Technical drawing of vials and closure caps",
    figure: "Sample Handling",
  },
] as const

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params

  const [region, categories, locale] = await Promise.all([
    getRegion(countryCode).catch(() => null),
    listCategories({
      fields: "id, handle, name, metadata, *parent_category",
    }).catch(() => []),
    getLocaleCookie(),
  ])

  const translate = getTranslator(locale)

  const topLevelCategories = categories.filter((c) => !c.parent_category)

  // Display order: defect test sets, visual inspection, robotic automation, AI systems
  const workflowSteps = [
    {
      step: "01",
      title: translate("home_step4_title"),
      eyebrow: translate("home_step4_eyebrow"),
      body: translate("home_step4_body"),
      ...STEP_IMAGES[0],
    },
    {
      step: "02",
      title: translate("home_step3_title"),
      eyebrow: translate("home_step3_eyebrow"),
      body: translate("home_step3_body"),
      ...STEP_IMAGES[1],
    },
    {
      step: "03",
      title: translate("home_step1_title"),
      eyebrow: translate("home_step1_eyebrow"),
      body: translate("home_step1_body"),
      ...STEP_IMAGES[2],
    },
    {
      step: "04",
      title: translate("home_step2_title"),
      eyebrow: translate("home_step2_eyebrow"),
      body: translate("home_step2_body"),
      ...STEP_IMAGES[3],
    },
  ]

  const features = [
    [translate("home_feature1_title"), translate("home_feature1_body")],
    [translate("home_feature2_title"), translate("home_feature2_body")],
    [translate("home_feature3_title"), translate("home_feature3_body")],
  ] as const

  return (
    <>
      <Hero />
      <section className="border-b border-qps-line bg-qps-ink text-qps-paper">
        <div className="content-container grid gap-6 py-8 small:grid-cols-3 small:py-12">
          {features.map(([title, body], index) => (
            <ScrollReveal key={title} delay={index * 0.05}>
              <article className="border-l border-qps-paper/20 pl-5">
                <h2 className="text-base font-semibold tracking-[-0.01em] text-qps-paper">
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
            <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-qps-ink small:text-6xl">
              {translate("home_discover_heading")}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-qps-graphite">
              {translate("home_discover_body")}
            </p>
            <figure className="mt-8 overflow-hidden rounded-[1.25rem] border border-qps-line bg-qps-surface">
              <img
                src="/blueprint/blueprint-facility.webp"
                alt="Technische Zeichnung einer pharmazeutischen Produktionslinie"
                loading="lazy"
                className="blueprint-img w-full object-cover"
              />
            </figure>
          </ScrollReveal>

          <div className="relative grid gap-3">
            {workflowSteps.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.06} variant="slide-left">
                <article className="group relative overflow-hidden rounded-[1.25rem] border border-qps-line bg-qps-surface p-5 shadow-[0_18px_60px_rgba(17,19,21,0.06)] transition duration-300 hover:border-qps-signal/60">
                  <div className="flex gap-5 small:items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-qps-line bg-qps-paper text-[11px] font-semibold tracking-[0.18em] text-qps-signal transition-colors group-hover:border-qps-signal">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold tracking-[-0.05em] text-qps-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-qps-graphite">
                        {item.body}
                      </p>
                    </div>
                    <figure className="hidden w-44 shrink-0 overflow-hidden rounded-[0.75rem] border border-qps-line bg-qps-paper small:block">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        loading="lazy"
                        className="blueprint-img h-28 w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </figure>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-qps-paper py-12 small:py-24">
        <div className="content-container mb-4 small:mb-10">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-qps-ink small:text-5xl">
            {translate("home_range_heading")}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-qps-graphite">
            {translate("home_range_body")}
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-qps-graphite">
            {translate("home_range_body2")}
          </p>
        </div>
        {topLevelCategories.length > 0 && region ? (
          <ul className="flex flex-col">
            {topLevelCategories.map((category) => (
              <li key={category.id}>
                <CategoryRail category={category} region={region} locale={locale} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="content-container">
            <div className="rounded-[1.25rem] border border-qps-line bg-qps-surface/75 p-8 shadow-[0_18px_60px_rgba(17,19,21,0.06)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-qps-signal">
                {translate("home_range_error_eyebrow")}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-qps-ink">
                {translate("home_range_error_heading")}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-qps-graphite">
                {translate("home_range_error_body")}
              </p>
            </div>
          </div>
        )}
      </div>

      <section className="border-b border-qps-line bg-qps-paper py-14 small:py-20">
        <div className="content-container">
          <ScrollReveal variant="scale">
            <div className="relative overflow-hidden rounded-[1.25rem] border border-qps-line bg-qps-surface shadow-[0_24px_80px_rgba(17,19,21,0.07)]">
              <img
                src="/blueprint/blueprint-lab.webp"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="blueprint-img absolute inset-0 h-full w-full object-cover object-right"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-qps-surface via-qps-surface/85 to-qps-surface/15" />
              <div className="relative max-w-2xl px-6 py-12 small:px-12 small:py-20">
                <h2 className="text-3xl font-semibold leading-[1.02] tracking-[-0.05em] text-qps-ink small:text-5xl">
                  {translate("home_lab_heading")}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-qps-graphite">
                  {translate("home_lab_body")}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-qps-ink py-16 text-qps-paper small:py-24">
        <img
          src="/blueprint/blueprint-facility.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="blueprint-img-on-ink pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.16]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05070a] via-[#05070a]/72 to-[#05070a]/40" />
        <div className="content-container relative max-w-3xl">
          <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.05em] small:text-5xl">
            {translate("home_cta_heading")}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-qps-paper/70">
            {translate("home_cta_body")}
          </p>
          <div className="mt-8 flex flex-col gap-3 xsmall:flex-row">
            <LocalizedClientLink
              href="/store"
              className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full bg-white px-7 text-sm font-semibold uppercase tracking-[0.14em] text-[#05070a] transition-colors hover:bg-qps-signal hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              {translate("home_cta_primary")}
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full border border-qps-paper/25 px-7 text-sm font-semibold uppercase tracking-[0.14em] text-qps-paper transition-colors hover:border-qps-signal hover:text-qps-signal focus:outline-none focus:ring-2 focus:ring-qps-paper/50"
            >
              {translate("home_cta_secondary_btn")}
            </LocalizedClientLink>
          </div>
        </div>
      </section>
    </>
  )
}
