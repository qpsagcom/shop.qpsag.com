"use client"

import { LazyMotion, MotionConfig, domAnimation } from "motion/react"
import type { Variants } from "motion/react"

export const qpsEase = [0.16, 1, 0.3, 1] as const

export const qpsMotion = {
  soft: {
    duration: 0.55,
    ease: qpsEase,
  },
  quick: {
    duration: 0.24,
    ease: qpsEase,
  },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: qpsMotion.soft,
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: qpsMotion.soft,
  },
}

export function QpsMotionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </MotionConfig>
  )
}
