import { Link } from '../router'
import { SEO } from '../components/SEO'
import { EXPERIENCES, PROJECTS, PUBLICATION, SITE_METADATA } from '../content/siteData'
import { gmailComposeUrl } from '../utils/gmail'

export function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Curriculum Vitae & Résumé — Harsh Sinha"
        description="Comprehensive engineering curriculum vitae for Harsh Sinha: enterprise Adobe Experience Manager (AEM 6.5, EDS), full-stack Django, Model Context Protocol (MCP), and published computer vision research."
        canonical="/resume"
      />

      {/* Action Header Strip (Hidden in Print) */}
      <section className="w-full bg-surface-container-low py-space-md border-b border-outline-variant/30 print:hidden">
        <div className="max-w-[1160px] mx-auto px-margin-mobile md:px-margin flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold">
              Curriculum Vitae Specification // Live Record
            </span>
          </div>
          <div className="flex items-center gap-space-xs">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-body-sm text-body-sm font-medium transition-colors cursor-pointer shadow-sm border border-outline-variant/30"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print Résumé</span>
            </button>
            <a
              href={gmailComposeUrl(SITE_METADATA.email, 'Requesting PDF Résumé — Harsh Sinha')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container font-body-sm text-body-sm font-medium transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Request PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Resume Canvas */}
      <div className="w-full max-w-[1160px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-xl shadow-md border border-outline-variant/30 print:border-none print:shadow-none print:p-0">
          {/* Header Profile Section */}
          <div className="border-b border-outline-variant/30 pb-space-lg mb-space-lg">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
              <div>
                <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold block mb-1">
                  SOFTWARE ENGINEER // ENTERPRISE WEB &amp; APPLIED AI
                </span>
                <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight font-semibold">
                  Harsh Sinha
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Founder &amp; Engineer at{' '}
                  <a
                    href={SITE_METADATA.geekHoppersUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Geek Hoppers
                  </a>{' '}
                  • Software Engineer at Bluethink Inc.
                </p>
              </div>

              <div className="flex flex-col md:items-end gap-1 font-label-code text-label-code text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-primary">
                    location_on
                  </span>
                  {SITE_METADATA.location}
                </span>
                <a
                  href={gmailComposeUrl(SITE_METADATA.email)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <span className="material-symbols-outlined text-[15px]">mail</span>
                  {SITE_METADATA.email}
                </a>
                <a
                  href={SITE_METADATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <span className="material-symbols-outlined text-[15px]">open_in_new</span>
                  linkedin.com/in/thegeekharsh
                </a>
              </div>
            </div>
          </div>

          {/* Section 01: Synopsis */}
          <section className="mb-space-xl">
            <div className="flex items-center gap-space-xs mb-space-sm">
              <span className="font-meta-tag text-meta-tag text-primary uppercase font-semibold">
                01 // SYNOPSIS
              </span>
              <span className="h-px bg-outline-variant/30 flex-1" />
            </div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">
              Architectural Profile &amp; Focus
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Software Engineer specializing in enterprise digital experience platforms (
              <strong className="text-on-surface font-medium">
                Adobe Experience Manager 6.5 &amp; Edge Delivery Services
              </strong>
              ), resilient full-stack web applications (
              <strong className="text-on-surface font-medium">Next.js, React, Django</strong>), and
              applied edge AI research. Proven track record architecting high-throughput repository
              lookup checks, scalable DAM automation, low-latency micro-block rendering, and{' '}
              <strong className="text-on-surface font-medium">Model Context Protocol (MCP)</strong>{' '}
              data interfaces for deterministic query pipelines. Focused on clean separation of
              concerns, high authoring velocity, and minimal client execution overhead.
            </p>
          </section>

          {/* Section 02: Experience */}
          <section className="mb-space-xl">
            <div className="flex items-center gap-space-xs mb-space-md">
              <span className="font-meta-tag text-meta-tag text-primary uppercase font-semibold">
                02 // PROFESSIONAL EXPERIENCE
              </span>
              <span className="h-px bg-outline-variant/30 flex-1" />
              <span className="font-meta-tag text-meta-tag text-on-surface-variant">
                3 ROLES RECORDED
              </span>
            </div>

            <div className="space-y-space-md">
              {EXPERIENCES.map((exp) => (
                <article
                  key={exp.id}
                  className="p-space-md rounded-xl bg-surface-container-low/60 border border-outline-variant/20 break-inside-avoid"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-xs mb-space-xs">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                          {exp.role}
                        </h3>
                        <span className="font-meta-tag text-meta-tag uppercase px-2 py-0.5 rounded-full bg-primary-container text-on-primary">
                          {exp.type}
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-secondary font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="font-label-code text-label-code text-on-surface font-medium block">
                        {exp.period}
                      </span>
                      <span className="font-meta-tag text-meta-tag text-on-surface-variant">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs mb-space-sm leading-relaxed">
                    {exp.summary}
                  </p>

                  <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    {exp.contributions.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-space-xs">
                        <span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-space-sm pt-space-xs flex flex-wrap gap-1.5 border-t border-outline-variant/20">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-label-code text-[11px] px-2 py-0.5 rounded bg-surface-container text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section 03: Selected Projects */}
          <section className="mb-space-xl">
            <div className="flex items-center gap-space-xs mb-space-md">
              <span className="font-meta-tag text-meta-tag text-primary uppercase font-semibold">
                03 // SELECTED CASE STUDIES
              </span>
              <span className="h-px bg-outline-variant/30 flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              {PROJECTS.map((proj) => (
                <div
                  key={proj.slug}
                  className="p-space-md rounded-xl bg-surface-container-low/40 border border-outline-variant/20 flex flex-col justify-between break-inside-avoid"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-meta-tag text-meta-tag uppercase text-primary font-semibold">
                        {proj.categoryLabel}
                      </span>
                      <span className="font-label-code text-label-code text-on-surface-variant">
                        {proj.year}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">
                      {proj.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-sm">
                      {proj.summary}
                    </p>
                  </div>
                  <div>
                    <p className="font-label-code text-[11px] text-on-surface mb-space-xs">
                      <span className="text-primary font-semibold">Key Role:</span>{' '}
                      {proj.keyResponsibility}
                    </p>
                    <Link
                      to={proj.caseStudyPath}
                      className="inline-flex items-center gap-1 text-primary hover:underline font-body-sm text-body-sm font-medium"
                    >
                      <span>View Detailed Case Study</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 04: Publications */}
          <section className="mb-space-xl">
            <div className="flex items-center gap-space-xs mb-space-md">
              <span className="font-meta-tag text-meta-tag text-primary uppercase font-semibold">
                04 // SCHOLARLY RESEARCH &amp; PUBLICATIONS
              </span>
              <span className="h-px bg-outline-variant/30 flex-1" />
            </div>

            <div className="p-space-md rounded-xl bg-surface-container-low/60 border border-outline-variant/20 break-inside-avoid">
              <div className="flex flex-wrap items-center gap-space-xs mb-1">
                <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-meta-tag text-meta-tag font-semibold uppercase">
                  Peer-Reviewed • CRC Press (Taylor &amp; Francis)
                </span>
                <span className="font-label-code text-label-code text-primary">
                  {PUBLICATION.chapter} ({PUBLICATION.pages})
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-1">
                {PUBLICATION.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-sm">
                Published in <em>{PUBLICATION.bookTitle}</em>, {PUBLICATION.proceedings}, First
                Edition, {PUBLICATION.year}. Authors: {PUBLICATION.authors.join(', ')} —{' '}
                {PUBLICATION.institution}.
              </p>
              <div className="flex flex-wrap items-center gap-space-sm font-label-code text-label-code">
                <span className="text-on-surface-variant">DOI: {PUBLICATION.doi}</span>
                <span className="text-outline">•</span>
                <Link
                  to="/research/real-time-threat-detection"
                  className="text-primary hover:underline font-medium"
                >
                  View Publication Dossier
                </Link>
              </div>
            </div>
          </section>

          {/* Section 05: Education */}
          <section className="mb-space-xl">
            <div className="flex items-center gap-space-xs mb-space-md">
              <span className="font-meta-tag text-meta-tag text-primary uppercase font-semibold">
                05 // EDUCATION
              </span>
              <span className="h-px bg-outline-variant/30 flex-1" />
            </div>

            <div className="p-space-md rounded-xl bg-surface-container-low/40 border border-outline-variant/20 flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm break-inside-avoid">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  Bachelor of Technology (B.Tech) — Computer Science &amp; Engineering
                </h3>
                <p className="font-body-sm text-body-sm text-secondary font-medium mt-0.5">
                  IMS Engineering College, Ghaziabad (Dr. A.P.J. Abdul Kalam Technical University)
                </p>
              </div>
              <div className="sm:text-right font-label-code text-label-code text-on-surface-variant">
                <span className="text-on-surface font-medium block">2021 – 2025</span>
                <span>Graduated with Honors</span>
              </div>
            </div>
          </section>

          {/* Section 06: Technical Skills Inventory */}
          <section>
            <div className="flex items-center gap-space-xs mb-space-md">
              <span className="font-meta-tag text-meta-tag text-primary uppercase font-semibold">
                06 // TECHNICAL SKILLS INVENTORY
              </span>
              <span className="h-px bg-outline-variant/30 flex-1" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
              <div className="p-space-sm bg-surface-container-low/50 rounded-lg border border-outline-variant/20">
                <span className="font-meta-tag text-meta-tag text-primary uppercase font-semibold block mb-1">
                  Enterprise CMS
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  AEM 6.5 AMS, Edge Delivery Services, Sling Models, HTL, OSGi, Universal Editor,
                  DAM Metadata Workflows.
                </p>
              </div>
              <div className="p-space-sm bg-surface-container-low/50 rounded-lg border border-outline-variant/20">
                <span className="font-meta-tag text-meta-tag text-primary uppercase font-semibold block mb-1">
                  Frontend &amp; Web
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  JavaScript (ES6+), TypeScript, React, Next.js (App Router), Tailwind CSS, Semantic
                  HTML, Core Web Vitals.
                </p>
              </div>
              <div className="p-space-sm bg-surface-container-low/50 rounded-lg border border-outline-variant/20">
                <span className="font-meta-tag text-meta-tag text-primary uppercase font-semibold block mb-1">
                  Backends &amp; APIs
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Java, Python, Django, REST APIs, GraphQL, Model Context Protocol (MCP),
                  PostgreSQL.
                </p>
              </div>
              <div className="p-space-sm bg-surface-container-low/50 rounded-lg border border-outline-variant/20">
                <span className="font-meta-tag text-meta-tag text-primary uppercase font-semibold block mb-1">
                  Repositories &amp; Storage
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Apache Jackrabbit Oak, JCR, Counter-based O(1) Limit Validation, Node Traversals,
                  Content Fragments.
                </p>
              </div>
              <div className="p-space-sm bg-surface-container-low/50 rounded-lg border border-outline-variant/20">
                <span className="font-meta-tag text-meta-tag text-primary uppercase font-semibold block mb-1">
                  Applied AI &amp; Vision
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  OpenCV, YOLOv8 Nano, MediaPipe (Pose &amp; Hands), DeepFace, Multi-threaded Video
                  Pipelines.
                </p>
              </div>
              <div className="p-space-sm bg-surface-container-low/50 rounded-lg border border-outline-variant/20">
                <span className="font-meta-tag text-meta-tag text-primary uppercase font-semibold block mb-1">
                  Engineering Practices
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Git Workflows, CI/CD, Algolia Search Integration, Adobe Target Experiments,
                  Defensive DOM sanitization.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
