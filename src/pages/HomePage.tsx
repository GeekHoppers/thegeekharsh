import { Link } from '../router'
import { SEO } from '../components/SEO'
import { Photo } from '../components/Photo'
import { SITE_METADATA } from '../content/siteData'
import { gmailComposeUrl } from '../utils/gmail'

export function HomePage() {
  return (
    <>
      <SEO
        title="Harsh Sinha — Software Engineer · Enterprise Web & Applied AI"
        description="Software engineer working across enterprise web platforms (AEM 6.5, Edge Delivery Services), full-stack systems, and applied AI research."
        path="/"
      />

      <div className="w-full max-w-[1160px] mx-auto px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col w-full">
          {/* SECTION 1: HERO */}
          <section className="py-space-xl lg:py-margin border-b border-outline-variant/60">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              {/* Left Column: Editorial introduction */}
              <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
                <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-secondary-container/70 text-on-secondary-fixed-variant">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-meta-tag text-meta-tag tracking-widest uppercase">
                    SOFTWARE ENGINEER · WEB PLATFORMS · APPLIED AI
                  </span>
                </div>

                <h1 className="font-display-hero text-headline-lg lg:text-display-hero text-on-surface tracking-tight font-semibold max-w-2xl">
                  I build thoughtful digital experiences and the systems behind them.
                </h1>

                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                  I’m a software engineer working across enterprise web platforms, full-stack
                  development, and applied AI. I enjoy turning complex technical requirements into
                  maintainable implementations and useful digital experiences.
                </p>

                <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center px-space-lg py-2.5 bg-primary-container hover:bg-primary text-on-primary font-body-sm text-body-sm font-medium rounded-xl transition-colors shadow-sm"
                  >
                    Explore projects
                  </Link>
                  <Link
                    to="/resume"
                    className="inline-flex items-center justify-center px-space-lg py-2.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant hover:border-secondary font-body-sm text-body-sm rounded-xl transition-all"
                  >
                    View résumé
                  </Link>
                </div>

                <div className="flex items-center gap-space-xs pt-space-sm text-outline">
                  <span className="material-symbols-outlined text-[1rem]">terminal</span>
                  <span className="font-label-code text-label-code">
                    Enterprise web engineering · Full-stack development · Computer vision research
                  </span>
                </div>
              </div>

              {/* Right Column: Harsh Sinha Portrait in Editorial Architectural Frame */}
              <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
                <figure className="relative w-full max-w-[420px] bg-surface-container-low rounded-xl p-3 sm:p-space-md border border-outline-variant/70 shadow-sm flex flex-col justify-between overflow-hidden">
                  {/* Top Architectural Header */}
                  <div className="flex items-center justify-between pb-2 px-1 mb-2 border-b border-outline-variant/50">
                    <span className="font-meta-tag text-meta-tag text-outline tracking-wider uppercase font-semibold">
                      HARSH SINHA · SOFTWARE ENGINEER
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-outline-variant" />
                      <span className="w-2 h-2 rounded-full bg-secondary/60" />
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </div>

                  {/* Photo Container */}
                  <div className="relative w-full overflow-hidden rounded-lg border border-outline-variant/60 bg-surface-container-lowest">
                    <Photo
                      src="/images/harsh-portrait"
                      alt="Harsh Sinha — Software Engineer"
                      width={1024}
                      height={866}
                      priority
                      fit="cover"
                      fallbackExt="jpg"
                      sizes="(min-width: 1024px) 420px, 100vw"
                      className="w-full object-cover object-top"
                    />

                    {/* Floating Tech Badges */}
                    <div className="absolute top-2.5 left-2.5 bg-surface/90 backdrop-blur-md px-2 py-0.5 rounded border border-outline-variant font-label-code text-[0.6875rem] text-on-surface flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>AEM &amp; Edge Delivery</span>
                    </div>

                    <div className="absolute bottom-2.5 right-2.5 bg-surface/90 backdrop-blur-md px-2.5 py-1 rounded border border-outline-variant font-label-code text-[0.6875rem] text-on-surface flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                      <span>Applied AI · Full-Stack</span>
                    </div>
                  </div>

                  {/* Bottom Architectural Colophon */}
                  <div className="pt-space-sm px-1 flex items-center justify-between text-outline font-label-code text-[0.75rem]">
                    <span>NOIDA, INDIA</span>
                    <span className="text-primary font-medium tracking-tight">THE GEEK HARSH · GH.</span>
                  </div>
                </figure>
              </div>
            </div>
          </section>

          {/* SECTION 2: PROFESSIONAL CREDIBILITY STRIP */}
          <section className="py-space-lg">
            <h2 className="sr-only">Core Engineering Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant/70 shadow-sm">
              {/* Highlight 1 */}
              <div className="flex items-start gap-space-md">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[1.25rem]">web_traffic</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Enterprise Web
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    AEM platforms, components, content models and integrations.
                  </p>
                </div>
              </div>

              {/* Highlight 2 */}
              <div className="flex items-start gap-space-md md:border-l md:border-outline-variant/50 md:pl-gutter">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[1.25rem]">layers</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Full-Stack Development
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Frontend experiences, backend implementation and API integration.
                  </p>
                </div>
              </div>

              {/* Highlight 3 */}
              <div className="flex items-start gap-space-md md:border-l md:border-outline-variant/50 md:pl-gutter">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[1.25rem]">psychology</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Applied AI
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Computer vision experimentation and published research.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: SELECTED WORK */}
          <section className="py-space-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm border-b border-outline-variant/60 pb-space-md">
              <div>
                <span className="font-meta-tag text-meta-tag uppercase text-outline tracking-wider">
                  PORTFOLIO
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight mt-0.5">
                  Selected work
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Projects spanning enterprise web platforms, full-stack products, and applied research.
                </p>
              </div>
              <Link
                to="/projects"
                className="font-body-sm text-body-sm text-primary hover:text-secondary inline-flex items-center gap-1 group font-medium"
              >
                View all projects
                <span className="material-symbols-outlined text-[1.125rem] group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Card 1: GMR Web Platform */}
              <article className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant/70 hover:border-secondary transition-all flex flex-col justify-between shadow-sm group">
                <div>
                  <div className="flex items-center justify-between gap-space-sm mb-space-sm">
                    <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline">
                      BLUETHINK INC. · AEM EDGE DELIVERY SERVICES
                    </span>
                    <span className="font-label-code text-[0.75rem] text-primary font-medium">2026</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors mb-space-xs">
                    GMR Web Platform
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    Built on AEM Edge Delivery Services with Universal Editor at Bluethink Inc., engineering multiple content blocks and interactive web experiences. Completed in 2026.
                  </p>
                  <div className="bg-surface-container-low rounded-lg p-space-sm mb-space-md">
                    <span className="font-meta-tag text-[0.6875rem] text-outline uppercase block mb-0.5">
                      Role scope
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      Block development &amp; interactive features
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-space-md">
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      AEM Edge Delivery
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      Universal Editor
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      JavaScript
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      HTML
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      Search
                    </span>
                  </div>
                  <Link
                    to="/projects/gmr-web-platform"
                    className="font-body-sm text-body-sm text-primary font-medium inline-flex items-center gap-1 group-hover:underline"
                  >
                    View case study <span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
                  </Link>
                </div>
              </article>

              {/* Card 2: Oliver Wyman Website Rebuild */}
              <article className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant/70 hover:border-secondary transition-all flex flex-col justify-between shadow-sm group">
                <div>
                  <div className="flex items-center justify-between gap-space-sm mb-space-sm">
                    <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline">
                      BLUETHINK INC. · AEM MANAGED SERVICES (6.5 AMS)
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container/70 text-on-secondary-fixed-variant font-label-code text-[0.6875rem] font-medium">
                      Under Development
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors mb-space-xs">
                    Oliver Wyman Website Rebuild
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    Enterprise AEM 6.5 AMS website rebuild at Bluethink Inc., currently under active development. Developing custom components, DAM workflows, metadata automation, and asset-upload limit enforcement.
                  </p>
                  <div className="bg-surface-container-low rounded-lg p-space-sm mb-space-md">
                    <span className="font-meta-tag text-[0.6875rem] text-outline uppercase block mb-0.5">
                      Role scope
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      Custom components (Sling Models, HTL), DAM workflows, metadata automation &amp; asset limits
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-space-md">
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      AEM 6.5 AMS
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      Sling Models
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      HTL
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      OSGi
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      DAM Workflows
                    </span>
                  </div>
                  <Link
                    to="/projects/oliver-wyman"
                    className="font-body-sm text-body-sm text-primary font-medium inline-flex items-center gap-1 group-hover:underline"
                  >
                    View case study <span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
                  </Link>
                </div>
              </article>

              {/* Card 3: DataJam Portal */}
              <article className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant/70 hover:border-secondary transition-all flex flex-col justify-between shadow-sm group">
                <div>
                  <div className="flex items-center justify-between gap-space-sm mb-space-sm">
                    <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline">
                      IKTARA DATA SCIENCE · FULL-STACK &amp; AI
                    </span>
                    <span className="font-label-code text-[0.75rem] text-outline">2025</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors mb-space-xs">
                    DataJam Portal
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    Delivered portal experiences at Iktara Data Science, building the portal UI, Django backend, REST APIs, and Model Context Protocol conversational data access.
                  </p>
                  <div className="bg-surface-container-low rounded-lg p-space-sm mb-space-md">
                    <span className="font-meta-tag text-[0.6875rem] text-outline uppercase block mb-0.5">
                      Role scope
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      Portal UI, Django backend, REST APIs &amp; MCP integration
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-space-md">
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      Django
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      Python
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      REST APIs
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      MCP
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      JavaScript
                    </span>
                  </div>
                  <Link
                    to="/projects/datajam-portal"
                    className="font-body-sm text-body-sm text-primary font-medium inline-flex items-center gap-1 group-hover:underline"
                  >
                    View case study <span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
                  </Link>
                </div>
              </article>

              {/* Card 4: CareerIens */}
              <article className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant/70 hover:border-secondary transition-all flex flex-col justify-between shadow-sm group">
                <div>
                  <div className="flex items-center justify-between gap-space-sm mb-space-sm">
                    <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline">
                      FREELANCE PROJECT
                    </span>
                    <span className="font-label-code text-[0.75rem] text-outline">WEB</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors mb-space-xs">
                    CareerIens
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    Developed a live website as a freelance project using Next.js and React, focused on responsive implementation and clean component design.
                  </p>
                  <div className="bg-surface-container-low rounded-lg p-space-sm mb-space-md">
                    <span className="font-meta-tag text-[0.6875rem] text-outline uppercase block mb-0.5">
                      Role scope
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      Next.js + React frontend, responsive implementation
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-space-md">
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      Next.js
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      React
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      Responsive Design
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-code text-[0.6875rem] text-on-surface-variant">
                      Tailwind CSS
                    </span>
                  </div>
                  <Link
                    to="/projects/careeriens"
                    className="font-body-sm text-body-sm text-primary font-medium inline-flex items-center gap-1 group-hover:underline"
                  >
                    View case study <span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
                  </Link>
                </div>
              </article>
            </div>
          </section>

          {/* SECTION 4: ENGINEERING FOCUS ("What I work on") */}
          <section className="py-space-xl border-t border-outline-variant/60">
            <div className="mb-space-lg">
              <span className="font-meta-tag text-meta-tag uppercase text-outline tracking-wider">
                CAPABILITIES
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight mt-0.5">
                What I work on
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Disciplined engineering competencies across the software stack.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* Group 1 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-outline-variant/70 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-surface-container text-primary flex items-center justify-center mb-space-sm">
                    <span className="material-symbols-outlined text-[1.125rem]">view_quilt</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-space-xs">
                    AEM &amp; Digital Experience
                  </h3>
                  <ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> AEM 6.5 &amp; Managed Services
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> Edge Delivery Services
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> Custom components &amp; blocks
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> Sling Models, HTL &amp; OSGi
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> DAM workflows &amp; metadata automation
                    </li>
                  </ul>
                </div>
              </div>

              {/* Group 2 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-outline-variant/70 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-surface-container text-primary flex items-center justify-center mb-space-sm">
                    <span className="material-symbols-outlined text-[1.125rem]">code</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-space-xs">
                    Web Engineering
                  </h3>
                  <ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> JavaScript &amp; TypeScript
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> React &amp; Next.js
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> Semantic HTML &amp; modern CSS
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> Responsive interfaces
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> Search &amp; interactive UX
                    </li>
                  </ul>
                </div>
              </div>

              {/* Group 3 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-outline-variant/70 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-surface-container text-primary flex items-center justify-center mb-space-sm">
                    <span className="material-symbols-outlined text-[1.125rem]">dns</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-space-xs">
                    Backend &amp; Integrations
                  </h3>
                  <ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> Java &amp; Python
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> Django &amp; Spring Boot
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> REST API design
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> GraphQL persistent queries
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> JCR queries &amp; backend patterns
                    </li>
                  </ul>
                </div>
              </div>

              {/* Group 4 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-outline-variant/70 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-surface-container text-primary flex items-center justify-center mb-space-sm">
                    <span className="material-symbols-outlined text-[1.125rem]">visibility</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-space-xs">
                    Applied AI &amp; Vision
                  </h3>
                  <ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> Python &amp; OpenCV
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> Face recognition systems
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> YOLO-based object detection
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> MediaPipe posture cues
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-secondary">•</span> Computer-vision prototyping
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: EXPERIENCE SNAPSHOT */}
          <section className="py-space-xl border-t border-outline-variant/60">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
              <div>
                <span className="font-meta-tag text-meta-tag uppercase text-outline tracking-wider">
                  TRACK RECORD
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight mt-0.5">
                  Where I’ve been building
                </h2>
              </div>
              <Link
                to="/experience"
                className="font-body-sm text-body-sm text-primary hover:text-secondary inline-flex items-center gap-1 group font-medium"
              >
                Complete timeline
                <span className="material-symbols-outlined text-[1.125rem] group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-space-md">
              {/* Experience 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant/70 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-space-md">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-x-space-sm gap-y-1 mb-1">
                    <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      Bluethink Inc.
                    </h3>
                    <span className="text-outline">·</span>
                    <span className="font-body-sm text-body-sm text-primary font-medium">
                      Software Engineer
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl mb-space-sm">
                    Working on enterprise web experiences and AEM-based implementations, including website development, component engineering, DAM workflows and integrations.
                  </p>
                  <Link
                    to="/experience"
                    className="font-label-code text-label-code text-primary hover:underline inline-flex items-center gap-1"
                  >
                    View experience details{' '}
                    <span className="material-symbols-outlined text-[0.875rem]">chevron_right</span>
                  </Link>
                </div>
                <div className="flex md:flex-col md:items-end justify-between text-outline font-label-code text-[0.8125rem] border-t md:border-t-0 border-outline-variant/50 pt-space-xs md:pt-0">
                  <span>2025 – Present</span>
                  <span>Noida, India</span>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant/70 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-space-md">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-x-space-sm gap-y-1 mb-1">
                    <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      Iktara Data Science
                    </h3>
                    <span className="text-outline">·</span>
                    <span className="font-body-sm text-body-sm text-primary font-medium">
                      Data Science Engineer Intern
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl mb-space-sm">
                    Worked on portal development, frontend and backend implementation, APIs, and conversational data-access integration.
                  </p>
                  <Link
                    to="/experience"
                    className="font-label-code text-label-code text-primary hover:underline inline-flex items-center gap-1"
                  >
                    View experience details{' '}
                    <span className="material-symbols-outlined text-[0.875rem]">chevron_right</span>
                  </Link>
                </div>
                <div className="flex md:flex-col md:items-end justify-between text-outline font-label-code text-[0.8125rem] border-t md:border-t-0 border-outline-variant/50 pt-space-xs md:pt-0">
                  <span>June 2025 – Oct 2025</span>
                  <span>Remote / India</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: RESEARCH HIGHLIGHT */}
          <section className="py-space-xl border-t border-outline-variant/60">
            <div className="bg-surface-container-low rounded-xl p-space-lg lg:p-space-xl border border-outline-variant/80 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                {/* Text & Citations */}
                <div className="lg:col-span-7 flex flex-col gap-space-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-meta-tag text-meta-tag uppercase tracking-wider">
                      Published research · Book Chapter
                    </span>
                  </div>
                  <span className="font-meta-tag text-meta-tag uppercase text-outline tracking-wider">
                    RESEARCH &amp; COMPUTER VISION
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                    Garun Drishti: Real-Time Threat Detection System for Campus Security
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Final-year B.Tech project (June 2025) at IMS Engineering College, supervised by Dr. Nizam Uddin Khan and built by a team of five. The system served as the basis of a published research book chapter exploring face recognition, weapon detection, posture cues, and real-time alert mechanisms.
                  </p>
                  <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                    <Link
                      to="/projects/garun-drishti"
                      className="inline-flex items-center justify-center px-space-md py-2 bg-primary-container hover:bg-primary text-on-primary font-body-sm text-body-sm font-medium rounded-xl transition-colors"
                    >
                      Explore project
                    </Link>
                    <Link
                      to="/research/real-time-threat-detection"
                      className="inline-flex items-center justify-center px-space-md py-2 bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant font-body-sm text-body-sm rounded-xl transition-all"
                    >
                      Read publication dossier
                    </Link>
                  </div>
                </div>

                {/* Academic Rigor / Diagram Card */}
                <div className="lg:col-span-5 w-full">
                  <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant shadow-sm flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between border-b border-outline-variant/60 pb-space-xs">
                      <span className="font-meta-tag text-[0.6875rem] text-outline uppercase tracking-wider">
                        PIPELINE SCHEMA // GD-V1
                      </span>
                      <span className="font-label-code text-[0.6875rem] text-secondary">
                        IEEE FORMAT
                      </span>
                    </div>
                    {/* Conceptual Steps */}
                    <div className="flex flex-col gap-2 font-label-code text-[0.75rem]">
                      <div className="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline-variant/40">
                        <span className="text-on-surface">01. Frame Ingestion</span>
                        <span className="text-outline">Webcam Stream (30 FPS)</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline-variant/40">
                        <span className="text-on-surface">02. Inference Layer</span>
                        <span className="text-primary font-medium">YOLOv8 + OpenCV Haar</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline-variant/40">
                        <span className="text-on-surface">03. Posture Analysis</span>
                        <span className="text-outline">MediaPipe Spatial Landmarks</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline-variant/40">
                        <span className="text-on-surface">04. Trigger State</span>
                        <span className="text-error font-medium">Real-Time Threat Dispatch</span>
                      </div>
                    </div>
                    <div className="pt-space-xs text-right">
                      <span className="font-meta-tag text-[0.625rem] text-outline">
                        PEER-REVIEWED VALIDATION ARCHIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: WRITING PREVIEW */}
          <section className="py-space-xl border-t border-outline-variant/60">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
              <div>
                <span className="font-meta-tag text-meta-tag uppercase text-outline tracking-wider">
                  DISPATCHES
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight mt-0.5">
                  Notes from building software
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Practical lessons, technical explorations, and ideas from engineering work.
                </p>
              </div>
              <Link
                to="/writing"
                className="font-body-sm text-body-sm text-primary hover:text-secondary inline-flex items-center gap-1 group font-medium"
              >
                Writing index
                <span className="material-symbols-outlined text-[1.125rem] group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Editorial Card: Essays In-Progress */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/70 p-space-lg shadow-sm">
              <div className="flex items-center justify-between border-b border-outline-variant/60 pb-space-sm mb-space-md">
                <span className="font-meta-tag text-meta-tag uppercase text-outline tracking-wider">
                  TECHNICAL ESSAYS &amp; FIELD NOTES
                </span>
              </div>
              <div className="divide-y divide-outline-variant/40">
                <Link
                  to="/writing/designing-maintainable-blocks-in-aem-edge-delivery-services"
                  className="py-space-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 group block"
                >
                  <span className="font-body-md text-body-md text-on-surface font-medium group-hover:text-primary transition-colors">
                    Designing maintainable blocks in AEM Edge Delivery Services
                  </span>
                  <span className="font-meta-tag text-meta-tag text-outline uppercase tracking-wider shrink-0">
                    Architecture
                  </span>
                </Link>

                <Link
                  to="/writing/debugging-event-driven-dam-workflows-in-aem"
                  className="py-space-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 group block"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-body-md text-body-md text-on-surface font-medium group-hover:text-primary transition-colors">
                      Debugging event-driven DAM workflows in AEM 6.5
                    </span>
                    <span className="text-[10px] font-label-code px-1.5 py-0.5 rounded bg-surface-container text-outline">
                      Draft / Field Note
                    </span>
                  </div>
                  <span className="font-meta-tag text-meta-tag text-outline uppercase tracking-wider shrink-0">
                    AEM 6.5
                  </span>
                </Link>

                <Link
                  to="/writing/reasoning-about-asset-upload-limits"
                  className="py-space-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 group block"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-body-md text-body-md text-on-surface font-medium group-hover:text-primary transition-colors">
                      Reasoning about asset-upload limits and metadata automation
                    </span>
                    <span className="text-[10px] font-label-code px-1.5 py-0.5 rounded bg-surface-container text-outline">
                      Draft / Field Note
                    </span>
                  </div>
                  <span className="font-meta-tag text-meta-tag text-outline uppercase tracking-wider shrink-0">
                    Systems
                  </span>
                </Link>

                <Link
                  to="/writing/lessons-from-building-a-conversational-data-portal"
                  className="py-space-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 group block"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-body-md text-body-md text-on-surface font-medium group-hover:text-primary transition-colors">
                      Lessons from building a conversational data portal with MCP
                    </span>
                    <span className="text-[10px] font-label-code px-1.5 py-0.5 rounded bg-surface-container text-outline">
                      Draft / Field Note
                    </span>
                  </div>
                  <span className="font-meta-tag text-meta-tag text-outline uppercase tracking-wider shrink-0">
                    Full-Stack / AI
                  </span>
                </Link>

                <Link
                  to="/writing/what-a-computer-vision-prototype-can-and-cannot-prove"
                  className="py-space-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 group block"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-body-md text-body-md text-on-surface font-medium group-hover:text-primary transition-colors">
                      What a computer-vision prototype can and cannot prove
                    </span>
                    <span className="text-[10px] font-label-code px-1.5 py-0.5 rounded bg-surface-container text-outline">
                      Draft / Field Note
                    </span>
                  </div>
                  <span className="font-meta-tag text-meta-tag text-outline uppercase tracking-wider shrink-0">
                    Applied AI
                  </span>
                </Link>
              </div>
            </div>
          </section>

          {/* SECTION 8: CONTACT CTA */}
          <section className="py-space-xl my-space-lg bg-surface-container-low rounded-xl border border-outline-variant/70 p-space-lg lg:p-space-xl shadow-sm">
            <div className="max-w-2xl flex flex-col gap-space-sm">
              <span className="font-meta-tag text-meta-tag uppercase text-outline tracking-wider">
                COLLABORATION
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Have something interesting to build?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                I’m open to meaningful conversations about software engineering, technical challenges, and collaboration.
              </p>
              <div className="flex flex-wrap items-center gap-space-sm pt-space-sm">
                <a
                  className="inline-flex items-center justify-center gap-2 px-space-lg py-2.5 bg-primary-container hover:bg-primary text-on-primary font-body-sm text-body-sm font-medium rounded-xl transition-colors shadow-sm"
                  href={gmailComposeUrl(SITE_METADATA.email)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[1.125rem]">mail</span>
                  Email me
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 px-space-lg py-2.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant hover:border-secondary font-body-sm text-body-sm rounded-xl transition-all"
                  href={SITE_METADATA.linkedinUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[1.125rem]">link</span>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
