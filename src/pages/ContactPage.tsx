import { Helmet } from 'react-helmet-async'
import { Link } from '../router'
import { site, GEEK_HOPPERS_URL, LINKEDIN_URL } from '../content/site'
import { buildPageJsonLd } from '../content/schema'

export function ContactPage() {
  const pageTitle = "Contact Harsh Sinha — Let's Build Something"
  const pageDesc =
    'Direct communication channels for Harsh Sinha: engineering projects, enterprise technology solutions, speaking, and collaboration.'
  const canonicalUrl = 'https://thegeekharsh.in/contact'

  const structuredData = buildPageJsonLd({
    url: canonicalUrl,
    name: pageTitle,
    description: pageDesc,
    type: 'ContactPage',
    breadcrumb: [
      { name: 'Home', url: 'https://thegeekharsh.in/' },
      { name: 'Contact', url: canonicalUrl },
    ],
  })

  return (
    <article className="min-h-screen bg-bg">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Editorial Header */}
      <section className="border-b border-hairline py-12 md:py-20">
        <div className="container-page">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <span>← Back to Overview</span>
            </Link>
          </div>

          <p className="label mb-4 text-muted">08 / Contact</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-tight">
            Let's build something worth talking about.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
            Whether you want to build with Geek Hoppers, consult on enterprise architecture,
            or connect for founder collaboration and speaking.
          </p>
        </div>
      </section>

      {/* Direct Contact Channels */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          {/* Giant Direct Mailto */}
          <div className="border-b border-hairline pb-16">
            <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Direct Inquiries
            </span>
            <div className="mt-4">
              <a
                href={`mailto:${site.contact.email}`}
                className="link-u font-display text-[clamp(1.75rem,5.5vw,4rem)] font-medium leading-none tracking-tight text-ink hover:text-accent"
              >
                {site.contact.email}
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">
              Direct inbox. Monitored daily for engineering projects, partnership inquiries, and conversations.
            </p>
          </div>

          {/* Two Structured Routes */}
          <div className="grid grid-cols-1 divide-y divide-hairline border-b border-hairline md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="py-12 md:pr-12">
              <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Route 01 / Commercial & Technical
              </span>
              <h2 className="mt-2 font-display text-2xl font-medium tracking-tight">
                Work with Geek Hoppers
              </h2>
              <p className="mt-3 text-base text-muted">
                For startups, growing businesses, and enterprises needing full-stack web applications,
                custom AI integrations, data science telemetry, or enterprise Adobe Experience Manager consulting.
              </p>
              <div className="mt-6">
                <a
                  href={GEEK_HOPPERS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-u font-display text-lg font-medium text-ink"
                >
                  Visit geekhoppers.com ↗
                </a>
              </div>
            </div>

            <div className="py-12 md:pl-12">
              <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Route 02 / Speaking & Collaboration
              </span>
              <h2 className="mt-2 font-display text-2xl font-medium tracking-tight">
                Talk to Harsh Sinha
              </h2>
              <p className="mt-3 text-base text-muted">
                For conference speaking, technical podcasts, press inquiries, research discussions,
                or advisory conversations directly with Harsh Sinha.
              </p>
              <div className="mt-6">
                <a
                  href={site.contact.routes[1]?.href || `mailto:${site.contact.email}`}
                  className="link-u font-display text-lg font-medium text-ink"
                >
                  {site.contact.routes[1]?.label || 'Get in touch'} →
                </a>
              </div>
            </div>
          </div>

          {/* Professional Network & Location Details */}
          <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-2">
            <div>
              <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Professional Network
              </span>
              <h3 className="mt-2 font-display text-xl font-medium">LinkedIn</h3>
              <p className="mt-2 text-sm text-muted">
                Connect for professional updates, company milestones, and technology discourse.
              </p>
              <div className="mt-4">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-u text-sm font-medium text-ink"
                >
                  linkedin.com/in/harshsinhaa ↗
                </a>
              </div>
            </div>

            <div>
              <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Operational Location
              </span>
              <h3 className="mt-2 font-display text-xl font-medium">India (IST / UTC+5:30)</h3>
              <p className="mt-2 text-sm text-muted">
                Operating from India, collaborating with teams, founders, and enterprises globally.
              </p>
            </div>
          </div>

          {/* Navigation to Other Sections */}
          <div className="mt-12 border-t border-hairline pt-12">
            <p className="label mb-6 text-muted">Explore More</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/geek-hoppers" className="link-u font-medium">
                Geek Hoppers Overview →
              </Link>
              <Link to="/about" className="link-u font-medium">
                About Harsh Sinha →
              </Link>
              <Link to="/engineering" className="link-u font-medium">
                Engineering Architecture →
              </Link>
              <Link to="/research" className="link-u font-medium">
                Published Research →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
