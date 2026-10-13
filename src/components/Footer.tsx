import { LINKEDIN_URL, site } from '../content/site'
import { Link } from '../router'

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="container-page grid gap-10 py-12 md:grid-cols-12 md:items-end md:py-16">
        <div className="md:col-span-6">
          <Link to="/" className="font-display text-lg font-medium tracking-[0.04em] text-ink transition-colors hover:text-accent">
            {site.wordmark}
          </Link>
          <p className="mt-2 text-sm text-muted">{site.footer.copyright}</p>
        </div>
        <div className="md:col-span-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-u flex min-h-[44px] items-center text-sm"
          >
            <span>LinkedIn</span>
          </a>
        </div>
        <p
          aria-hidden="true"
          className="font-display text-[clamp(3.5rem,8vw,6rem)] font-medium leading-[0.8] tracking-[-0.06em] md:col-span-3 md:text-right"
        >
          {site.footer.monogram}
        </p>
      </div>
    </footer>
  )
}
