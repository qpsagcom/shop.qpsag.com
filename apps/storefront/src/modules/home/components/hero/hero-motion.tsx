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

const heroImageUrl = "/qps-hero-cleanroom.webp"

const inspectionCycle = ["Position", "Inspect", "Document"] as const

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
            QxTec Robotics Systems
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
              className="qps-btn-ink inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-semibold uppercase tracking-[0.14em] transition-colors focus:outline-none focus:ring-2 focus:ring-qps-signal focus:ring-offset-2 focus:ring-offset-qps-paper"
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

          <m.ul
            variants={container}
            className="mt-12 grid max-w-2xl grid-cols-1 gap-3 text-left xsmall:grid-cols-2"
          >
            {[
              "Robotic solutions",
              "AI business systems",
              "Visual Inspection solutions",
              "Defect Test Sets",
              "Engineering and validation services",
              "Measurement and certification",
            ].map((label) => (
              <m.li
                key={label}
                variants={scaleIn}
                className="flex items-center gap-3 rounded-large border border-qps-line bg-qps-surface/65 px-4 py-3 shadow-sm"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-qps-signal" />
                <span className="text-sm font-semibold tracking-[-0.01em] text-qps-ink">
                  {label}
                </span>
              </m.li>
            ))}
          </m.ul>
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
            <m.img
              src={heroImageUrl}
              alt="QPS Engineering industrial robotics and process technology environment"
              className="h-full w-full object-cover"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { scale: [1, 1.025, 1], x: [0, -4, 0] }
              }
              transition={{
                duration: 16,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgb(var(--qps-paper)/0.55)_0%,rgb(var(--qps-paper)/0.18)_42%,rgb(0_0_0/0.10)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#05070a]/65 to-transparent" />

            <div className="absolute left-5 right-5 top-5 flex items-center justify-between rounded-full border border-qps-line bg-qps-surface px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-qps-muted">
              <span className="flex items-center gap-2">
                <m.span
                  className="h-1.5 w-1.5 rounded-full bg-qps-signal"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: [0.45, 1, 0.45], scale: [1, 1.35, 1] }
                  }
                  transition={{
                    duration: 2.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
                Robotic Solutions
              </span>
              <span>QPS AG</span>
            </div>

            <m.div
              className="absolute bottom-5 left-5 max-w-[18rem] rounded-[1.35rem] border border-qps-line bg-qps-surface p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...qpsMotion.soft, delay: 0.44 }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-qps-signal">
                Industrial Robotics
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-7 tracking-[-0.04em] text-qps-ink">
                Test sets and inspection boxes
              </h2>
              <p className="mt-3 text-sm leading-6 text-qps-graphite">
                Accessories and references for visual inspection,
                qualification, and reproducible inspection processes.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {inspectionCycle.map((step, index) => (
                  <m.span
                    key={step}
                    className="rounded-full border border-qps-line bg-qps-paper px-2.5 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-qps-muted"
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: [0, -2, 0],
                            borderColor: [
                              "rgb(var(--qps-line))",
                              "rgb(var(--qps-signal))",
                              "rgb(var(--qps-line))",
                            ],
                          }
                    }
                    transition={{
                      duration: 2.8,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: index * 0.32,
                    }}
                  >
                    {step}
                  </m.span>
                ))}
              </div>
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
              <p className="mt-2 text-lg font-semibold">ROVIS</p>
              <p className="mt-3 text-sm leading-5 text-qps-paper/65">
                The QPS robot for visual inspection in regulated environments.
              </p>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-qps-paper/55">
                <m.span
                  className="h-2 w-2 rounded-full bg-qps-signal"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: [0.4, 1, 0.4], scale: [1, 1.25, 1] }
                  }
                  transition={{
                    duration: 1.8,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
                Cycle ready
              </div>
            </m.div>
          </m.div>
        </m.div>
      </div>
    </section>
  )
}
