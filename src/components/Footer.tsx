import { Link } from '../router'
import { SITE_METADATA } from '../content/siteData'
import { gmailComposeUrl } from '../utils/gmail'

export function Footer() {
  return (
    <footer className="w-full mt-margin border-t border-outline-variant bg-surface-container-low py-space-xl">
      <div className="max-w-[1160px] mx-auto px-gutter-mobile lg:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-space-xl">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-md text-headline-md text-on-surface tracking-tight font-medium">
                The Geek Harsh<span className="text-primary font-bold">.</span>
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm leading-relaxed">
              Software Engineer building thoughtful digital experiences and the systems behind them.
            </p>
            <div className="pt-space-xs">
              <a
                className="font-label-code text-label-code text-primary hover:underline"
                href={gmailComposeUrl(SITE_METADATA.email)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE_METADATA.email}
              </a>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="md:col-span-4 flex flex-col gap-space-xs">
            <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline mb-space-xs font-semibold">
              Navigation
            </span>
            <nav className="grid grid-cols-2 gap-x-space-md gap-y-space-xs font-body-sm text-body-sm">
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors" to="/">
                Home
              </Link>
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors" to="/about">
                About
              </Link>
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors" to="/projects">
                Projects
              </Link>
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors" to="/experience">
                Experience
              </Link>
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors" to="/skills">
                Skills
              </Link>
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors" to="/research">
                Research
              </Link>
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors" to="/writing">
                Writing
              </Link>
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors" to="/contact">
                Contact
              </Link>
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors" to="/resume">
                Résumé
              </Link>
              <Link className="text-on-surface-variant hover:text-on-surface transition-colors" to="/privacy">
                Privacy
              </Link>
            </nav>
          </div>

          {/* Connect & Direct Channels */}
          <div className="md:col-span-3 flex flex-col gap-space-xs">
            <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline mb-space-xs font-semibold">
              Connect
            </span>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm">
              <a
                className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5"
                href={SITE_METADATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>
                <span className="text-xs text-outline">↗</span>
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href={gmailComposeUrl(SITE_METADATA.email)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Direct Email
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors"
                href={gmailComposeUrl(SITE_METADATA.mediaEmail)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Media &amp; Press
              </a>
              <Link className="text-on-surface-variant hover:text-primary transition-colors" to="/resume">
                Printable Résumé
              </Link>
              <a
                className="text-outline hover:text-primary transition-colors flex items-center gap-1.5 pt-1 text-xs"
                href={SITE_METADATA.geekHoppersUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Geek Hoppers</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Colophon */}
        <div className="pt-space-md border-t border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-space-xs">
          <p className="font-label-code text-label-code text-outline">
            © 2026 Harsh Sinha. All rights reserved.
          </p>
          <div className="flex items-center gap-space-md text-outline font-label-code text-label-code">
            <Link to="/privacy" className="hover:text-on-surface transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <span>{SITE_METADATA.location}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
