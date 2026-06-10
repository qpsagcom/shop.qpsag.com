"use client"

import { qpsMotion } from "@modules/common/components/motion"
import { useReducedMotion } from "motion/react"
import * as m from "motion/react-m"
import type { ReactNode } from "react"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: "fade-up" | "scale" | "slide-left"
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const initialByVariant = {
    "fade-up": { opacity: 0, y: 18 },
    scale: { opacity: 0, scale: 0.97 },
    "slide-left": { opacity: 0, x: 18 },
  }[variant]

  return (
    <m.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 0 } : initialByVariant}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ ...qpsMotion.soft, delay }}
    >
      {children}
    </m.div>
  )
}
