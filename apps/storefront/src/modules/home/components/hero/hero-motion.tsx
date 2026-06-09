"use client"

import { fadeUp, qpsMotion, scaleIn } from "@modules/common/components/motion"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Heading } from "@modules/common/components/ui"
import { useReducedMotion } from "motion/react"
import * as m from "motion/react-m"

type HeroMotionProps = {
  title: string
  subtitle: string
  cta: string
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

export default function HeroMotion({ title, subtitle, cta }: HeroMotionProps) {
  const shouldReduceMotion = useReducedMotion()

  const cardReveal = shouldReduceMotion
    ? { opacity: 1, y: 0, rotate: 0 }
    : { opacity: 1, y: 0, rotate: 2 }

  return (
    <section className="relative overflow-hidden border-b border-qps-line bg-qps-paper">
      <div className="absolute inset-0 pointer-events-none">
        <m.div
          className="absolute -right-28 top-16 h-80 w-80 rounded-full bg-qps-signal/15 blur-3xl"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...qpsMotion.soft, delay: 0.2 }}
        />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-qps-steel/10 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-px w-[42rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-qps-steel/60 to-transparent" />
      </div>

      <div className="content-container relative grid min-h-[82vh] items-center gap-12 py-16 small:grid-cols-[1.03fr_0.97fr] small:py-24">
        <m.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <m.p
            variants={fadeUp}
            className="mb-5 inline-flex rounded-full border border-qps-line bg-qps-surface/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-qps-muted shadow-sm"
          >
            Swiss precision storefront
          </m.p>
          <m.div variants={fadeUp}>
            <Heading
              level="h1"
              className="text-[44px] font-semibold leading-[0.92] tracking-[-0.06em] text-qps-ink small:text-[88px]"
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
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-qps-ink px-7 text-sm font-semibold uppercase tracking-[0.14em] text-qps-paper transition-colors hover:bg-qps-signal-dark focus:outline-none focus:ring-2 focus:ring-qps-signal focus:ring-offset-2 focus:ring-offset-qps-paper"
            >
              {cta}
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/store"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-qps-line bg-qps-surface/70 px-7 text-sm font-semibold uppercase tracking-[0.14em] text-qps-ink transition-colors hover:border-qps-ink focus:outline-none focus:ring-2 focus:ring-qps-steel focus:ring-offset-2 focus:ring-offset-qps-paper"
            >
              View catalog
            </LocalizedClientLink>
          </m.div>

          <m.dl
            variants={container}
            className="mt-12 grid max-w-2xl grid-cols-3 gap-3 text-left"
          >
            {[
              ["01", "Curated catalog"],
              ["CH", "CHF checkout"],
              ["24h", "Launch rhythm"],
            ].map(([value, label]) => (
              <m.div
                key={value}
                variants={scaleIn}
                className="rounded-large border border-qps-line bg-qps-surface/65 p-4 shadow-sm"
              >
                <dt className="text-xl font-semibold tracking-[-0.03em] text-qps-ink">
                  {value}
                </dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.16em] text-qps-muted">
                  {label}
                </dd>
              </m.div>
            ))}
          </m.dl>
        </m.div>

        <m.div
          className="relative min-h-[460px] small:min-h-[640px]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...qpsMotion.soft, delay: 0.22 }}
        >
          <m.div
            className="absolute inset-x-8 top-6 h-[82%] rounded-[2rem] border border-qps-line bg-qps-surface shadow-[0_32px_90px_rgba(17,19,21,0.12)]"
            initial={shouldReduceMotion ? false : { opacity: 0, rotate: 0 }}
            animate={cardReveal}
            transition={{ ...qpsMotion.soft, delay: 0.32 }}
          />
          <div className="absolute inset-0 rounded-[2rem] border border-qps-line bg-[radial-gradient(circle_at_28%_22%,rgb(var(--qps-signal)/0.20),transparent_34%),linear-gradient(145deg,rgb(var(--qps-surface)),rgb(var(--qps-paper)))] p-5 shadow-[0_24px_80px_rgba(17,19,21,0.10)]">
            <div className="flex h-full flex-col justify-between rounded-[1.35rem] border border-qps-line bg-qps-paper/80 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-qps-muted">
                <span>QPS Launch Board</span>
                <span>Live</span>
              </div>
              <m.div
                className="mx-auto grid h-64 w-64 place-items-center rounded-full border border-qps-line bg-qps-surface shadow-inner small:h-80 small:w-80"
                animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative grid h-48 w-48 place-items-center rounded-full border border-qps-line small:h-60 small:w-60">
                  <div className="absolute inset-6 rounded-full border border-dashed border-qps-steel/60" />
                  <span className="text-6xl font-semibold tracking-[-0.08em] text-qps-ink small:text-8xl">
                    QPS
                  </span>
                </div>
              </m.div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-large border border-qps-line bg-qps-surface p-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-qps-muted">
                    Storefront
                  </p>
                  <p className="mt-2 text-lg font-semibold text-qps-ink">
                    Editorial grid
                  </p>
                </div>
                <div className="rounded-large border border-qps-line bg-qps-ink p-4 text-qps-paper">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-qps-paper/60">
                    Commerce
                  </p>
                  <p className="mt-2 text-lg font-semibold">CHF ready</p>
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
