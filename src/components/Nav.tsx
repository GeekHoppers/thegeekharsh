import { useEffect, useRef, useState } from 'react'
import { site } from '../content/site'
import { OliveDot } from './OliveDot'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile menu: scroll lock, Esc to close, focus trap, restore focus.
  useEffect(() => {
    if (!open) return
    const toggle = toggleRef.current
    const overlay = overlayRef.current
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusables = () =>
      Array.from(overlay?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [])
    focusables()[0]?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab') return
      const items = [...focusables(), ...(toggle ? [toggle] : [])]
      const first = items[0]
      const last = items[items.length - 1]
      if (!first || !last) return
      const active = document.activeElement
      if (e.shiftKey && active === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      toggle?.focus()
    }
  }, [open])

  const { links, cta } = site.nav

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-bg transition-colors duration-300 ${
        scrolled && !open ? 'border-hairline' : 'border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a
          href="#main"
          className="font-display text-[0.95rem] font-medium tracking-[0.04em]"
          aria-label="THE GEEK HARSH — back to top"
        >
          {site.wordmark}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-u flex min-h-[44px] items-center text-sm">
              <span>
                {l.label}
                {l.gh && <OliveDot />}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={cta.href}
            className="btn hidden min-h-[44px] bg-ink px-5 py-2 text-sm text-bg hover:bg-ink/85 md:inline-flex"
          >
            {cta.label}
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="relative z-[60] -mr-2 flex h-11 w-11 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" className="relative block h-3 w-6">
              <span
                className={`absolute left-0 h-[2px] w-6 bg-ink transition-transform duration-200 ${
                  open ? 'top-[5px] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-6 bg-ink transition-transform duration-200 ${
                  open ? 'top-[5px] -rotate-45' : 'top-[10px]'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          ref={overlayRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 top-16 z-50 flex flex-col overflow-y-auto bg-bg px-5 pb-10 pt-6 md:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="border-t border-hairline">
              {links.map((l) => (
                <li key={l.href} className="border-b border-hairline">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[44px] items-center py-4 font-display text-[clamp(2rem,10vw,3.25rem)] font-medium leading-none tracking-tight"
                  >
                    <span>
                      {l.label}
                      {l.gh && <OliveDot />}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={cta.href}
            onClick={() => setOpen(false)}
            className="btn mt-10 w-full bg-ink text-bg"
          >
            {cta.label}
          </a>
        </div>
      )}
    </header>
  )
}
