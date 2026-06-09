"use client"

import { qpsMotion } from "@modules/common/components/motion"
import { useReducedMotion } from "motion/react"
import * as m from "motion/react-m"
import type { ReactNode } from "react"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <m.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ ...qpsMotion.soft, delay }}
    >
      {children}
    </m.div>
  )
}
