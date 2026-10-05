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
 * Fade-up once on scroll (opacity + 16px, ~500ms). Under prefers-reduced-motion the
 * element is shown immediately. SSR/first render matches on both server and client.
 */
export function Reveal({ children, as = 'div', className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion()
  const Tag = tags[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={reduce ? { opacity: 1, y: 0, transition: { duration: 0 } } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </Tag>
  )
}
