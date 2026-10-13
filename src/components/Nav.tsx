import { useEffect, useRef, useState } from 'react'
import { m } from 'framer-motion'
import { Link, useRouter } from '../router'
import { site } from '../content/site'

export function Nav() {
  const { path } = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  // Header border indicator on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ScrollSpy on landing page (/): detects which section is currently centered in viewport
  useEffect(() => {
    if (path !== '/') return

    const sectionIds = ['geek-hoppers', 'about', 'engineering', 'research', 'contact']

    const checkActiveSection = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      // Reference line at ~35% of viewport height below top
      const triggerY = scrollY + Math.min(240, viewportHeight * 0.35)

      let current: string | null = null
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.offsetTop
        const height = el.offsetHeight
        if (triggerY >= top && triggerY < top + height) {
          current = id
          break
        }
      }
      setActiveSection(current)
    }

    checkActiveSection()
    window.addEventListener('scroll', checkActiveSection, { passive: true })
    window.addEventListener('resize', checkActiveSection, { passive: true })
    return () => {
      window.removeEventListener('scroll', checkActiveSection)
      window.removeEventListener('resize', checkActiveSection)
    }
  }, [path])

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
        <Link
          to="/"
          className="font-display text-[0.95rem] font-medium tracking-[0.04em] text-ink"
          aria-label="THE GEEK HARSH — Home"
        >
          {site.wordmark}
        </Link>

        {/* Primary Desktop Navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {links.map((l) => {
            const isDedicatedPage = path === l.href
            const sectionName = l.href.replace('/', '')
            const isScrolledSection = path === '/' && activeSection === sectionName

            if (isDedicatedPage) {
              // Page-active animation: sleek, high-contrast dark capsule with layout transition
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className="relative flex min-h-[44px] items-center"
                >
                  <m.span
                    layoutId="nav-page-active"
                    className="inline-flex items-center gap-1.5 rounded-sm bg-ink px-3 py-1 text-xs font-medium uppercase tracking-wider text-bg shadow-none"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    <span>{l.label}</span>
                  </m.span>
                </Link>
              )
            }

            // Scroll-active or standard state:
            // When scrolled to this section on the landing page, the hover-style underline activates!
            return (
              <Link
                key={l.href}
                to={l.href}
                className={`link-u flex min-h-[44px] items-center text-sm transition-colors ${
                  isScrolledSection ? 'link-u-scroll-active font-medium text-ink' : 'text-ink/80 hover:text-ink'
                }`}
              >
                <span>{l.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* CTA and Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to={cta.href}
            className={`btn hidden min-h-[44px] px-5 py-2 text-sm md:inline-flex ${
              path === cta.href
                ? 'bg-accent text-ink hover:bg-accent/90'
                : 'bg-ink text-bg hover:bg-ink/85'
            }`}
          >
            {cta.label}
          </Link>
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

      {/* Mobile Menu Overlay */}
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
              {links.map((l) => {
                const isDedicatedPage = path === l.href
                return (
                  <li key={l.href} className="border-b border-hairline">
                    <Link
                      to={l.href}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-[52px] items-center justify-between py-4 font-display text-[clamp(2rem,10vw,3.25rem)] font-medium leading-none tracking-tight ${
                        isDedicatedPage ? 'text-accent' : 'text-ink'
                      }`}
                    >
                      <span>{l.label}</span>
                      {isDedicatedPage && (
                        <span className="text-sm font-sans uppercase tracking-widest text-muted">
                          [Active Page]
                        </span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <Link
            to={cta.href}
            onClick={() => setOpen(false)}
            className="btn mt-10 w-full bg-ink text-bg"
          >
            {cta.label}
          </Link>
        </div>
      )}
    </header>
  )
}
