"use client"

import { qpsMotion } from "@modules/common/components/motion"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useReducedMotion } from "motion/react"
import * as m from "motion/react-m"

export default function ProductPreviewMotionCard({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <m.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.012 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.992 }}
      transition={qpsMotion.quick}
      className="h-full"
    >
      <LocalizedClientLink
        href={href}
        className="group block h-full rounded-[1.5rem] border border-qps-line bg-qps-surface p-3 shadow-[0_18px_50px_rgba(17,19,21,0.06)] transition-[border-color,box-shadow] duration-200 hover:border-qps-signal/50 hover:shadow-[0_24px_70px_rgba(17,19,21,0.11)] focus:outline-none focus:ring-2 focus:ring-qps-signal focus:ring-offset-2 focus:ring-offset-qps-paper"
      >
        {children}
      </LocalizedClientLink>
    </m.div>
  )
}
