import { Helmet } from 'react-helmet-async'
import { Link } from '../router'
import { site } from '../content/site'
import { buildPageJsonLd } from '../content/schema'

export function EngineeringPage() {
  const pageTitle = 'Engineering Architecture & Systems — Harsh Sinha'
  const pageDesc =
    'Engineering principles, architecture, and technology stack spanning Adobe Experience Manager (AEM), Java, Spring Boot, Python, and AI/Computer Vision.'
  const canonicalUrl = 'https://www.thegeekharsh.in/engineering'

  const structuredData = buildPageJsonLd({
    url: canonicalUrl,
    name: pageTitle,
    description: pageDesc,
    type: 'WebPage',
    breadcrumb: [
      { name: 'Home', url: 'https://www.thegeekharsh.in/' },
      { name: 'Engineering', url: canonicalUrl },
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

          <p className="label mb-4 text-muted">04 / Engineering</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-tight">
            Built through engineering.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted md:text-xl">
            Software craftsmanship across enterprise content management systems, core distributed
            backends, and real-time computer vision inference. No vanity metrics or superficial abstractions—just
            rock-solid engineering.
          </p>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 divide-y divide-hairline border-y border-hairline lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {/* Column 1: Enterprise */}
            <div className="py-10 lg:px-8 lg:py-12">
              <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-muted">
                01 / Enterprise Systems
              </span>
              <h2 className="mt-3 font-display text-2xl font-medium tracking-tight md:text-3xl">
                Enterprise & AEM
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {site.engineering.columns[0]?.body}
              </p>
              <div className="mt-8 space-y-4 border-t border-hairline pt-6 text-sm text-muted">
                <h3 className="font-display font-medium text-ink">Technical Highlights</h3>
                <ul className="space-y-2">
                  <li>• Custom OSGi modular bundles and Sling model design</li>
                  <li>• HTL/Sightly component architecture</li>
                  <li>• High-concurrency Dispatcher caching & load distribution</li>
                  <li>• Enterprise cloud migrations and headless API delivery</li>
                  <li>• Sub-second response times under peak enterprise traffic</li>
                </ul>
              </div>
            </div>

            {/* Column 2: Software */}
            <div className="py-10 lg:px-8 lg:py-12">
              <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-muted">
                02 / Core Systems
              </span>
              <h2 className="mt-3 font-display text-2xl font-medium tracking-tight md:text-3xl">
                Software & Backends
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {site.engineering.columns[1]?.body}
              </p>
              <div className="mt-8 space-y-4 border-t border-hairline pt-6 text-sm text-muted">
                <h3 className="font-display font-medium text-ink">Technical Highlights</h3>
                <ul className="space-y-2">
                  <li>• Java & Spring Boot microservice architectures</li>
                  <li>• Python for high-performance automation and pipelines</li>
                  <li>• Type-safe TypeScript across server and client interfaces</li>
                  <li>• Relational & distributed data schemas with ACID integrity</li>
                  <li>• Scalable system design and fault-tolerant architecture</li>
                </ul>
              </div>
            </div>

            {/* Column 3: AI & Vision */}
            <div className="py-10 lg:px-8 lg:py-12">
              <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-muted">
                03 / Applied AI
              </span>
              <h2 className="mt-3 font-display text-2xl font-medium tracking-tight md:text-3xl">
                AI & Computer Vision
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {site.engineering.columns[2]?.body}
              </p>
              <div className="mt-8 space-y-4 border-t border-hairline pt-6 text-sm text-muted">
                <h3 className="font-display font-medium text-ink">Technical Highlights</h3>
                <ul className="space-y-2">
                  <li>• OpenCV real-time video stream ingestion and matrix filtering</li>
                  <li>• YOLO deep neural networks for multi-class threat detection</li>
                  <li>• Google MediaPipe skeletal tracking and gesture estimation</li>
                  <li>• Low-latency edge inference on RTSP camera streams</li>
                  <li>• Asynchronous notification and anomaly logging pipelines</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Philosophy Statement */}
          <div className="mt-16 max-w-3xl">
            <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
              Philosophy: Zero unnecessary abstractions.
            </h3>
            <p className="mt-4 text-muted leading-relaxed">
              Every system is designed to be maintainable, observable, and resilient under real-world conditions.
              We avoid heavy frameworks where standard native primitives suffice, ensuring high performance,
              minimal memory footprint, and straightforward long-term operations.
            </p>
          </div>

          {/* Navigation to Other Sections */}
          <div className="mt-20 border-t border-hairline pt-12">
            <p className="label mb-6 text-muted">Explore More</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/research" className="link-u font-medium">
                Published Research & Garun Drishti →
              </Link>
              <Link to="/geek-hoppers" className="link-u font-medium">
                Geek Hoppers Overview →
              </Link>
              <Link to="/about" className="link-u font-medium">
                About Harsh Sinha →
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
