import { Fragment } from 'react'
import type { ReactNode } from 'react'

interface OliveDotProps {
  /** Adds a thin white ring so the dot stays visible on dark backgrounds. */
  ring?: boolean
}

/** Tiny olive marker shown beside Geek Hoppers mentions outside its own section. */
export function OliveDot({ ring = false }: OliveDotProps) {
  return (
    <span
      aria-hidden="true"
      className={`ml-[0.35em] inline-block h-[0.4em] min-h-[6px] w-[0.4em] min-w-[6px] translate-y-[-0.1em] rounded-full bg-olive align-middle ${
        ring ? 'ring-1 ring-white/70' : ''
      }`}
    />
  )
}

/** Inserts an OliveDot after every "Geek Hoppers" in a plain string. */
export function withGh(text: string, ring = false): ReactNode {
  const parts = text.split('Geek Hoppers')
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <>
          Geek Hoppers
          
        </>
      )}
    </Fragment>
  ))
}
