import { useState, useEffect } from 'react'
import { Link, useRouter } from '../router'
import { useTheme } from '../theme/ThemeContext'
import { SITE_METADATA } from '../content/siteData'
import { gmailComposeUrl } from '../utils/gmail'

interface NavLinkItem {
  label: string
  href: string
}

const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Research', href: '/research' },
  { label: 'Writing', href: '/writing' },
  { label: 'Contact', href: '/contact' },
]

function SunIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

function MoonIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function MenuIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function CloseIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export function Nav() {
  const { path } = useRouter()
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [prevPath, setPrevPath] = useState(path)

  if (prevPath !== path) {
    setPrevPath(path)
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const isLinkActive = (href: string) => {
    if (href === '/') return path === '/'
    return path === href || path.startsWith(`${href}/`)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-surface/85 backdrop-blur-md border-b border-outline-variant">
        <div className="max-w-[1160px] mx-auto px-gutter-mobile lg:px-gutter h-16 flex items-center justify-between gap-space-md">
          {/* Brand Left */}
          <div className="flex items-center gap-space-sm">
            <Link to="/" className="flex items-center gap-space-sm group" aria-label="The Geek Harsh">
              <span aria-hidden="true" className="w-8 h-8 rounded-lg bg-surface-container border border-outline-variant flex items-center justify-center font-display-hero font-bold text-primary text-[13px] tracking-tight group-hover:border-primary transition-colors">
                GH
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors font-medium">
                The Geek Harsh<span className="text-primary font-bold">.</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href)
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`font-body-sm text-body-sm px-2.5 py-1 rounded-lg transition-colors ${
                    active
                      ? 'text-primary font-medium bg-surface-container'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Discreet Geek Hoppers link per user instruction */}
            <a
              href={SITE_METADATA.geekHoppersUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Geek Hoppers official website (opens in new tab)"
              className="font-body-sm text-[0.8125rem] text-outline hover:text-primary px-2.5 py-1 transition-colors inline-flex items-center gap-1 ml-1"
            >
              <span>Geek Hoppers</span>
              <span className="text-[0.7rem] leading-none">↗</span>
            </a>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-space-xs sm:gap-space-sm">
            {/* Color Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              suppressHydrationWarning
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all active:scale-90 hover:rotate-45"
            >
              {theme === 'dark' ? (
                <SunIcon className="w-5 h-5 text-primary" />
              ) : (
                <MoonIcon className="w-5 h-5 text-on-surface" />
              )}
            </button>

            {/* View Résumé Button */}
            <Link
              to="/resume"
              className="hidden sm:inline-flex items-center justify-center px-space-md py-1.5 border border-outline-variant hover:border-secondary hover:bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-xl transition-all shadow-sm"
            >
              View résumé
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="xl:hidden w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="xl:hidden fixed inset-0 top-16 z-40 bg-surface/95 backdrop-blur-xl border-b border-outline-variant p-space-lg flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200"
        >
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href)
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-headline-md font-display-hero py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    active
                      ? 'text-primary font-semibold bg-surface-container'
                      : 'text-on-surface hover:text-primary hover:bg-surface-container-low'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-primary" />}
                </Link>
              )
            })}

            <div className="pt-space-sm border-t border-outline-variant/60 mt-space-sm">
              <a
                href={SITE_METADATA.geekHoppersUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-md text-on-surface-variant hover:text-primary py-2 px-3 flex items-center justify-between"
              >
                <span>Geek Hoppers ↗</span>
                <span className="font-meta-tag text-meta-tag uppercase text-outline">Company</span>
              </a>
            </div>
          </nav>

          <div className="pt-space-md border-t border-outline-variant flex flex-col gap-space-sm mt-space-lg">
            <div className="flex items-center justify-between py-2 px-1">
              <span className="font-body-sm text-on-surface">Color appearance</span>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-outline-variant text-on-surface text-body-sm hover:bg-surface-container transition-colors"
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-4 h-4 text-primary" />
                ) : (
                  <MoonIcon className="w-4 h-4 text-on-surface" />
                )}
                <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
              </button>
            </div>
            <Link
              to="/resume"
              className="w-full inline-flex items-center justify-center py-2.5 rounded-xl bg-primary text-on-primary font-body-sm text-body-sm font-medium shadow-sm hover:bg-secondary transition-colors"
            >
              View résumé
            </Link>
            <div className="flex items-center justify-between text-outline font-label-code text-[0.75rem] pt-1">
              <span>{SITE_METADATA.location}</span>
              <a href={gmailComposeUrl(SITE_METADATA.email)} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                {SITE_METADATA.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
