import { m, useReducedMotion } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  as?: 'div' | 'p' | 'h2' | 'h3' | 'li' | 'span'
  className?: string
  delay?: number
}

const tags = {
  div: m.div,
  p: m.p,
  h2: m.h2,
  h3: m.h3,
  li: m.li,
  span: m.span,
} satisfies Record<string, ElementType>

/**
 * Fade-up once on scroll (opacity + 16px, ~500ms).
 * On SSR and when prefers-reduced-motion is active, content is rendered fully visible
 * (initial={false}) so search crawlers, answer engines, and LLMs never encounter hidden content.
 */
export function Reveal({ children, as = 'div', className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion()
  const Tag = tags[as]
  const isServer = typeof window === 'undefined'

  return (
    <Tag
      className={className}
      initial={isServer || reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px 40px 0px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </Tag>
  )
}
