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

const heroImageUrl =
  "/qps-hero-lab.jpeg"

export default function HeroMotion({ title, subtitle, cta }: HeroMotionProps) {
  const shouldReduceMotion = useReducedMotion()

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
            QxTec robotics systems
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
              ["GxP", "Regulated industry"],
              ["AI", "Vision systems"],
              ["CH", "Swiss engineering"],
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
            className="absolute inset-0 overflow-hidden rounded-[2rem] border border-qps-line bg-qps-surface shadow-[0_28px_90px_rgba(0,0,0,0.14)]"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...qpsMotion.soft, delay: 0.32 }}
          >
            <img
              src={heroImageUrl}
              alt="QPS Engineering industrial robotics and process technology environment"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgb(var(--qps-paper)/0.92)_0%,rgb(var(--qps-paper)/0.52)_42%,rgb(0_0_0/0.18)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-qps-ink/70 to-transparent" />

            <div className="absolute left-5 right-5 top-5 flex items-center justify-between rounded-full border border-qps-line bg-qps-surface px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-qps-muted">
              <span>Regulated Lab</span>
              <span>QPS AG</span>
            </div>

            <m.div
              className="absolute bottom-5 left-5 max-w-[18rem] rounded-[1.35rem] border border-qps-line bg-qps-surface p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...qpsMotion.soft, delay: 0.44 }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-qps-signal">
                Pharma Robotics
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-7 tracking-[-0.04em] text-qps-ink">
                Testsets, ROVIS und Robotik
              </h2>
              <p className="mt-3 text-sm leading-6 text-qps-graphite">
                Produkte und Systeme für Inspection, Qualifizierung und
                regulierte Industrieprozesse.
              </p>
            </m.div>

            <m.div
              className="absolute bottom-5 right-5 hidden w-48 rounded-[1.2rem] border border-qps-paper/15 bg-qps-ink p-4 text-qps-paper shadow-[0_18px_60px_rgba(0,0,0,0.24)] xsmall:block"
              initial={shouldReduceMotion ? false : { opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...qpsMotion.soft, delay: 0.52 }}
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-qps-paper/55">
                Focus
              </p>
              <p className="mt-2 text-lg font-semibold">Visual Inspection</p>
              <p className="mt-3 text-sm leading-5 text-qps-paper/65">
                Defect samples, robotic systems and software workflows.
              </p>
            </m.div>
          </m.div>
        </m.div>
      </div>
    </section>
  )
}
