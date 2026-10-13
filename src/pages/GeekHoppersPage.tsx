import { Helmet } from 'react-helmet-async'
import { Link } from '../router'
import { site, GEEK_HOPPERS_URL } from '../content/site'
import { buildPageJsonLd } from '../content/schema'

export function GeekHoppersPage() {
  const pageTitle = 'Geek Hoppers — Technology Company | Harsh Sinha'
  const pageDesc =
    'Geek Hoppers is a technology company founded in January 2026 by Harsh Sinha. Websites, AI workflows, data products, and enterprise Adobe Experience Manager solutions.'
  const canonicalUrl = 'https://thegeekharsh.in/geek-hoppers'

  const structuredData = buildPageJsonLd({
    url: canonicalUrl,
    name: pageTitle,
    description: pageDesc,
    type: 'OrganizationPage',
    breadcrumb: [
      { name: 'Home', url: 'https://thegeekharsh.in/' },
      { name: 'Geek Hoppers', url: canonicalUrl },
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

          <p className="label mb-4 text-muted">02 / The Company</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-tight">
            Building Geek Hoppers.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted md:text-xl">
            A technology company founded in January 2026 by Harsh Sinha. Designing and developing
            high-impact digital products, applied AI workflows, data platforms, and enterprise
            Adobe Experience Manager solutions.
          </p>
        </div>
      </section>

      {/* Signature Olive Brand Band */}
      <section className="bg-olive py-16 text-white md:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-6 h-12 w-auto">
                <img
                  src={site.geekHoppers.logo.src}
                  alt="Geek Hoppers official logo"
                  width={site.geekHoppers.logo.width}
                  height={site.geekHoppers.logo.height}
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="font-display text-3xl font-medium tracking-tight text-white md:text-4xl">
                {site.geekHoppers.tagline}
              </p>
              <p className="mt-4 text-base text-white/85">
                {site.geekHoppers.clients}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={GEEK_HOPPERS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-white text-white transition-colors hover:bg-white hover:text-ink"
                >
                  Visit Geek Hoppers ↗
                </a>
                <Link
                  to="/contact"
                  className="btn bg-white text-ink transition-colors hover:bg-white/90"
                >
                  Work with Geek Hoppers
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2 className="mb-8 font-display text-2xl font-medium tracking-tight text-white">
                Core Capabilities & Practice Areas
              </h2>
              <div className="space-y-6">
                {site.geekHoppers.services.map((s) => (
                  <div
                    key={s.num}
                    className="border-t border-sage/60 pt-6"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-xl font-medium text-white/70">
                        {s.num}
                      </span>
                      <h3 className="font-display text-2xl font-medium text-white">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Practice Breakdown */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="mb-12 border-b border-hairline pb-6">
            <p className="label mb-2 text-muted">Architectural Depth</p>
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              How Geek Hoppers delivers.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="border border-hairline p-8">
              <span className="font-display text-sm font-medium text-muted">01 / Practice</span>
              <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">
                Websites & Web Applications
              </h3>
              <p className="mt-4 text-muted">
                From high-speed founder platforms to complex web applications. Built with modern,
                accessible frontend architecture (React, TypeScript, Next.js, Vite), responsive typography,
                and zero layout shift. Every site is engineered for maximum performance, Lighthouse 95+ scores,
                and search engine visibility.
              </p>
            </div>

            <div className="border border-hairline p-8">
              <span className="font-display text-sm font-medium text-muted">02 / Practice</span>
              <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">
                AI & Machine Learning Workflows
              </h3>
              <p className="mt-4 text-muted">
                Applying artificial intelligence to practical operational workflows. From multi-modal LLM
                integrations and retrieval-augmented systems to real-time computer vision inference
                (OpenCV, YOLO, MediaPipe), we turn cutting-edge models into production tools.
              </p>
            </div>

            <div className="border border-hairline p-8">
              <span className="font-display text-sm font-medium text-muted">03 / Practice</span>
              <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">
                Data Science & Analytics
              </h3>
              <p className="mt-4 text-muted">
                Transforming telemetry, event streams, and relational data into actionable product decisions.
                Designing resilient ingestion pipelines, automated reporting workflows, and intuitive analytics
                dashboards tailored for leadership and engineering teams.
              </p>
            </div>

            <div className="border border-hairline p-8">
              <span className="font-display text-sm font-medium text-muted">04 / Practice</span>
              <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">
                Adobe Experience Manager (AEM)
              </h3>
              <p className="mt-4 text-muted">
                Enterprise-grade Adobe Experience Manager consulting. Architectural guidance covering custom
                OSGi backend bundles, HTL/Sightly components, Sling Models, cloud migrations, Dispatcher
                optimization, and high-throughput headless content delivery.
              </p>
            </div>
          </div>

          {/* Client Spotlight */}
          <div className="mt-16 border-t border-hairline pt-12">
            <p className="label mb-3 text-muted">Production Partnership</p>
            <div className="max-w-3xl">
              <h3 className="font-display text-2xl font-medium">Careeriens.com</h3>
              <p className="mt-3 text-muted">
                Geek Hoppers works with real clients in active production, including Careeriens.com,
                delivering web applications, scalable technical infrastructure, and user-centric software design.
              </p>
            </div>
          </div>

          {/* Navigation to Other Sections */}
          <div className="mt-20 border-t border-hairline pt-12">
            <p className="label mb-6 text-muted">Explore More</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/about" className="link-u font-medium">
                About Harsh Sinha →
              </Link>
              <Link to="/engineering" className="link-u font-medium">
                Engineering Architecture →
              </Link>
              <Link to="/research" className="link-u font-medium">
                Published Research →
              </Link>
              <Link to="/contact" className="link-u font-medium">
                Contact & Inquiries →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
