import type { ReactNode } from 'react'

interface SectionShellProps {
  id?: string
  labelledBy: string
  numLabel: string
  children: ReactNode
  className?: string
  innerClassName?: string
}

/**
 * Standard section frame: numeral label in the left margin column, content on cols 3–12.
 */
export function SectionShell({
  id,
  labelledBy,
  numLabel,
  children,
  className = '',
  innerClassName = '',
}: SectionShellProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`section-pad ${className}`}>
      <div className="container-page grid gap-x-8 gap-y-6 md:grid-cols-12">
        <p className="label md:col-span-2 md:pt-3">{numLabel}</p>
        <div className={`md:col-span-10 ${innerClassName}`}>{children}</div>
      </div>
    </section>
  )
}
