import { Helmet } from 'react-helmet-async'
import { Link } from '../router'
import { PAPER_URL } from '../content/site'
import { buildPageJsonLd } from '../content/schema'

export function ResearchPage() {
  const pageTitle =
    'Research: Real-Time Threat Detection System — Harsh Sinha'
  const pageDesc =
    'Academic publication and system architecture for Garun Drishti: Real-Time Threat Detection System for Campus Security Using Integrated Computer Vision Techniques (CRC Press 2025).'
  const canonicalUrl = 'https://thegeekharsh.in/research'

  const structuredData = buildPageJsonLd({
    url: canonicalUrl,
    name: pageTitle,
    description: pageDesc,
    type: 'ItemPage',
    breadcrumb: [
      { name: 'Home', url: 'https://thegeekharsh.in/' },
      { name: 'Research', url: canonicalUrl },
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
        <meta property="og:type" content="article" />
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

          <p className="label mb-4 text-muted">06 / Research</p>
          <h1 className="font-display text-[clamp(2rem,5.5vw,4.25rem)] font-medium leading-[1.05] tracking-tight">
            Real-Time Threat Detection System for Campus Security Using Integrated Computer Vision Techniques
          </h1>

          <div className="mt-8 border-l-2 border-accent pl-6">
            <p className="font-display text-sm font-medium uppercase tracking-wider text-muted">
              Peer-Reviewed Book Chapter
            </p>
            <p className="mt-1 text-base font-medium text-ink md:text-lg">
              Integrated Technologies in Electrical, Electronics and Biotechnology Engineering — CRC Press, 2025 (ICITEEB 2025 proceedings)
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & Deep Breakdown */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-8">
              {/* Abstract */}
              <div>
                <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                  Abstract & Overview
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                  Campus environments demand vigilant physical security while handling dense, dynamic foot
                  traffic. Traditional surveillance setups rely on reactive human monitoring, which frequently
                  leads to observer fatigue and delayed response times during emergencies.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                  Built under the name <strong>Garun Drishti</strong>, this research proposes an end-to-end,
                  real-time automated surveillance architecture that fuses facial recognition, object and
                  weapon detection, and human skeletal posture analysis into a unified processing loop.
                  When abnormal activities or security threats are identified, the system immediately triggers
                  local audio-visual alarms and dispatches automated email alerts with incident snapshots.
                </p>
              </div>

              {/* Four Architectural Modules */}
              <div className="border-t border-hairline pt-10">
                <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                  System Architecture & Pipelines
                </h2>

                <div className="mt-8 space-y-8">
                  <div className="border border-hairline p-6">
                    <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-muted">
                      Pipeline 01
                    </span>
                    <h3 className="mt-2 font-display text-xl font-medium">
                      Real-Time Facial Recognition
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      Extracts facial landmark vectors from live camera feeds to verify identity against
                      authorized and restricted lists. Designed for robust operation under variable campus
                      lighting conditions, camera angles, and moderate occlusions.
                    </p>
                  </div>

                  <div className="border border-hairline p-6">
                    <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-muted">
                      Pipeline 02
                    </span>
                    <h3 className="mt-2 font-display text-xl font-medium">
                      Weapon & Hazard Detection (YOLO)
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      Utilizes optimized YOLO (You Only Look Once) convolutional neural network architectures
                      to perform single-pass bounding box inference on video frames. Identifies hazardous objects
                      and potential threats at high frame rates suitable for edge deployment.
                    </p>
                  </div>

                  <div className="border border-hairline p-6">
                    <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-muted">
                      Pipeline 03
                    </span>
                    <h3 className="mt-2 font-display text-xl font-medium">
                      Gesture & Posture Anomaly Analysis (MediaPipe)
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      Leverages Google MediaPipe to track key skeletal landmarks across detected individuals.
                      Analyzes posture geometry and temporal movement to flag violent physical altercations,
                      aggressive body language, and falls in real-time.
                    </p>
                  </div>

                  <div className="border border-hairline p-6">
                    <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-muted">
                      Pipeline 04
                    </span>
                    <h3 className="mt-2 font-display text-xl font-medium">
                      Multi-Tier Alerting & Notification Engine
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      Separates notification dispatch into instantaneous local audio-visual feedback at security
                      monitoring consoles and asynchronous email dispatch containing timestamped frame captures,
                      minimizing latency while ensuring verified incident logging.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar with Publication Details & Action */}
            <div className="space-y-6 lg:col-span-4">
              <div className="border border-hairline p-6">
                <h3 className="font-display text-lg font-medium">Publication Details</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted">Book Volume</dt>
                    <dd className="mt-0.5 font-medium text-ink">
                      Integrated Technologies in Electrical, Electronics and Biotechnology Engineering
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted">Publisher</dt>
                    <dd className="mt-0.5 font-medium text-ink">
                      CRC Press (Taylor & Francis Group)
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted">Year</dt>
                    <dd className="mt-0.5 font-medium text-ink">2025</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted">Conference</dt>
                    <dd className="mt-0.5 font-medium text-ink">ICITEEB 2025</dd>
                  </div>
                </dl>

                <div className="mt-6 border-t border-hairline pt-6">
                  {/* TODO: replace with the chapter DOI once confirmed */}
                  <a
                    href={PAPER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-full bg-ink text-bg hover:bg-ink/85"
                  >
                    Read the Paper at CRC Press ↗
                  </a>
                </div>
              </div>

              <div className="border border-hairline p-6 text-sm text-muted">
                <h4 className="font-display font-medium text-ink">Research Context</h4>
                <p className="mt-2 text-xs leading-relaxed">
                  Conducted as part of research into applied computer vision and automated edge intelligence,
                  bridging the gap between theoretical models and real-world campus deployment.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation to Other Sections */}
          <div className="mt-20 border-t border-hairline pt-12">
            <p className="label mb-6 text-muted">Explore More</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/engineering" className="link-u font-medium">
                Engineering Architecture →
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
