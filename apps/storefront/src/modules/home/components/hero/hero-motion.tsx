"use client"

import { fadeUp, qpsMotion, scaleIn } from "@modules/common/components/motion"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Heading } from "@modules/common/components/ui"
import { useReducedMotion } from "motion/react"
import * as m from "motion/react-m"
import { t } from "@lib/i18n/translations"

type HeroMotionProps = {
  title: string
  subtitle: string
  cta: string
  ctaSecondary: string
  locale?: string
}

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.09,
    },
  },
}

const heroImageUrl = "/qps-hero-rovis.jpg"

export default function HeroMotion({ title, subtitle, cta, ctaSecondary, locale = "en" }: HeroMotionProps) {
  const shouldReduceMotion = useReducedMotion()

  const pills = [
    t("hero_pill_1", locale),
    t("hero_pill_2", locale),
    t("hero_pill_3", locale),
    t("hero_pill_4", locale),
  ]

  return (
    <section className="relative overflow-hidden border-b border-qps-line bg-qps-paper">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[42rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-qps-steel/60 to-transparent" />

      <div className="content-container relative grid min-h-[78vh] items-center gap-12 py-14 small:grid-cols-[1.03fr_0.97fr] small:py-20">
        <m.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <m.div variants={fadeUp}>
            <Heading
              level="h1"
              className="text-[44px] font-semibold leading-[0.95] tracking-[-0.05em] text-qps-ink small:text-7xl"
            >
              {title}
            </Heading>
          </m.div>
          <m.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-7 text-qps-graphite small:text-xl small:leading-8"
          >
            {subtitle}
          </m.p>

          <m.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 xsmall:flex-row"
          >
            <LocalizedClientLink
              href="/store"
              className="qps-btn-ink inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full px-7 text-sm font-semibold uppercase tracking-[0.14em] transition-colors focus:outline-none focus:ring-2 focus:ring-qps-signal focus:ring-offset-2 focus:ring-offset-qps-paper"
            >
              {cta}
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full border border-qps-line px-7 text-sm font-semibold uppercase tracking-[0.14em] text-qps-ink transition-colors hover:border-qps-signal hover:text-qps-signal focus:outline-none focus:ring-2 focus:ring-qps-signal focus:ring-offset-2 focus:ring-offset-qps-paper"
            >
              {ctaSecondary}
            </LocalizedClientLink>
          </m.div>

          <m.ul
            variants={container}
            className="mt-12 grid max-w-2xl grid-cols-1 gap-3 text-left xsmall:grid-cols-2"
          >
            {pills.map((label) => (
              <m.li
                key={label}
                variants={scaleIn}
                className="rounded-large border border-qps-line bg-qps-surface/65 px-4 py-3 text-sm font-semibold tracking-[-0.01em] text-qps-ink shadow-sm"
              >
                {label}
              </m.li>
            ))}
          </m.ul>
        </m.div>

        <m.div
          className="relative min-h-[420px] small:min-h-[600px]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...qpsMotion.soft, delay: 0.22 }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[1.25rem] border border-qps-line bg-qps-surface shadow-[0_28px_90px_rgba(0,0,0,0.14)]">
            <img
              src={heroImageUrl}
              alt="RAVI-720 robotic visual inspection cell by QPS Engineering"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#05070a]/60 to-transparent" />

            <m.div
              className="absolute bottom-5 left-5 right-5 max-w-[20rem] rounded-[0.75rem] border border-qps-paper/15 bg-qps-ink p-5 text-qps-paper shadow-[0_18px_60px_rgba(0,0,0,0.24)]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...qpsMotion.soft, delay: 0.44 }}
            >
              <p className="text-xl font-semibold tracking-[-0.02em]">RAVI-720</p>
              <p className="mt-2 text-sm leading-6 text-qps-paper/70">
                {t("hero_focus_body", locale)}
              </p>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
