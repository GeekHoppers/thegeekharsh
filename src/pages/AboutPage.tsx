import { Helmet } from 'react-helmet-async'
import { Link } from '../router'
import { Photo } from '../components/Photo'
import { site } from '../content/site'
import { buildPageJsonLd } from '../content/schema'

export function AboutPage() {
  const pageTitle = 'About Harsh Sinha — Founder & CEO, Software Engineer'
  const pageDesc =
    'The story, background, and engineering philosophy of Harsh Sinha, Founder & CEO of Geek Hoppers and software engineer.'
  const canonicalUrl = 'https://thegeekharsh.in/about'

  const structuredData = buildPageJsonLd({
    url: canonicalUrl,
    name: pageTitle,
    description: pageDesc,
    type: 'ProfilePage',
    breadcrumb: [
      { name: 'Home', url: 'https://thegeekharsh.in/' },
      { name: 'About', url: canonicalUrl },
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
        <meta property="og:type" content="profile" />
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

          <p className="label mb-4 text-muted">03 / About</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-tight">
            More than the title.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted md:text-xl">
            {site.about.copy}
          </p>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 font-display text-2xl font-medium tracking-tight text-ink md:text-4xl">
            {site.about.words.map((word, i) => (
              <span key={word} className="flex items-center gap-4">
                <span>{word}</span>
                {i < site.about.words.length - 1 && <span className="text-muted/40">/</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative & Visual Section */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-7">
              <div>
                <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                  Engineering from first principles.
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
                  <p>
                    I started as an engineer who loved understanding how systems work under the hood.
                    Whether it was optimizing database transactions, designing real-time computer vision
                    pipelines, or engineering multi-tier enterprise platforms, the joy has always been in
                    taking complex challenges and turning them into reliable, clean software.
                  </p>
                  <p>
                    In January 2026, I founded <strong>Geek Hoppers</strong> to bring that engineering-first
                    ethos directly to startups, growing businesses, and enterprises. When a company is built
                    by an engineer, every strategic decision is anchored in technical reality. There is no
                    superficial fluff—only craftsmanship, velocity, and enduring software.
                  </p>
                  <p>
                    I believe the best products emerge when technical rigor meets genuine empathy for the
                    end user. Every line of code, architectural diagram, or interface decision should serve
                    a real purpose.
                  </p>
                </div>
              </div>

              {/* The Timeline / Path */}
              <div className="border-t border-hairline pt-10">
                <p className="label mb-6 text-muted">05 / Path</p>
                <h3 className="mb-8 font-display text-2xl font-medium tracking-tight">
                  Journey & Experience
                </h3>
                <ol className="relative space-y-8 border-l border-hairline pl-6">
                  {site.path.entries.map((e, idx) => (
                    <li key={idx} className="relative">
                      <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border border-ink bg-bg" />
                      {e.period && (
                        <time className="font-display text-sm font-medium text-muted">
                          {e.period}
                        </time>
                      )}
                      <h4 className="mt-1 font-display text-lg font-medium text-ink">
                        {e.role}
                      </h4>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Asymmetrical Candid Photo */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-6">
                <div className="overflow-hidden border border-hairline bg-[#EAEAE5]">
                  <Photo
                    src={site.about.photo.src}
                    alt={site.about.photo.alt}
                    width={site.about.photo.width}
                    height={site.about.photo.height}
                    sizes="(min-width: 1280px) 500px, 100vw"
                    className="w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </div>
                <p className="text-xs uppercase tracking-widest text-muted">
                  Harsh Sinha · Founder & CEO, Geek Hoppers
                </p>

                <div className="border border-hairline p-6">
                  <h4 className="font-display text-lg font-medium">Core Beliefs</h4>
                  <ul className="mt-4 space-y-3 text-sm text-muted">
                    <li>• Solve the real problem, not an idealized abstraction.</li>
                    <li>• Speed matters, but technical debt compounds faster.</li>
                    <li>• Ground software in measurable performance and zero clutter.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation to Other Sections */}
          <div className="mt-20 border-t border-hairline pt-12">
            <p className="label mb-6 text-muted">Explore More</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/geek-hoppers" className="link-u font-medium">
                Geek Hoppers Overview →
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
