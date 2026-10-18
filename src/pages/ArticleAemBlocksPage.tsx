import { useState, useEffect } from 'react'
import { Link } from '../router'
import { SEO } from '../components/SEO'

export function ArticleAemBlocksPage() {
  const [readingProgress, setReadingProgress] = useState(0)
  const [copiedLink, setCopiedLink] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      if (docHeight > 0) {
        setReadingProgress(Math.min(100, Math.max(0, (scrolled / docHeight) * 100)))
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCopyPermalink = () => {
    const url = typeof window !== 'undefined' ? window.location.href : 'https://thegeekharsh.in/writing/designing-maintainable-blocks-in-aem-edge-delivery-services'
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2200)
    })
  }

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    })
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const codeSnippet = `// Architectural Micro-block Decorator Pattern
export default async function decorate(block) {
  // 1. Deconstruct direct table elements (rows & columns)
  const rows = [...block.children];
  const [headerRow, contentRow] = rows;
  
  // 2. Defensive attribute extraction from editorial markup
  const title = headerRow?.querySelector('h1, h2, h3')?.textContent?.trim() || '';
  const cells = contentRow ? [...contentRow.children] : [];

  // 3. Map authored cells into predictable semantic descriptors
  const pillars = cells.map((cell) => ({
    icon: cell.querySelector('span.icon')?.className || 'generic-icon',
    heading: cell.querySelector('strong, h4')?.textContent || 'Notice',
    body: cell.querySelector('p')?.innerHTML || cell.innerHTML,
    cta: cell.querySelector('a')?.href || null,
  }));

  // 4. Construct accessible semantic markup without layout thrashing
  const fragment = document.createDocumentFragment();
  const wrapper = document.createElement('div');
  wrapper.className = 'pillar-grid-container';
  wrapper.setAttribute('role', 'region');
  wrapper.setAttribute('aria-label', title || 'highlights');

  // 5. Atomic DOM substitution
  block.replaceChildren(wrapper);
}`

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Designing Maintainable Blocks in AEM Edge Delivery Services — Harsh Sinha"
        description="A deep dive into zero-dependency DOM decoration micro-blocks, universal authoring contracts, and keeping client-side execution budgets strictly under 50ms for Tier-1 corporate ecosystems."
        canonical="/writing/designing-maintainable-blocks-in-aem-edge-delivery-services"
      />

      {/* Reading Progress Bar (Fixed Top Accent) */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-surface-container z-40">
        <div
          className="h-full bg-primary transition-all duration-75"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Article Hero & Editorial Header */}
      <header className="w-full bg-surface-bright py-space-xl px-margin-mobile md:px-margin border-b border-outline-variant/30">
        <div className="max-w-[1160px] mx-auto">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-space-xs font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant mb-space-lg flex-wrap"
          >
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-outline">/</span>
            <Link to="/writing" className="hover:text-primary transition-colors">
              Writing
            </Link>
            <span className="text-outline">/</span>
            <span className="text-on-surface font-semibold truncate max-w-xs md:max-w-md">
              Designing Maintainable Blocks in AEM Edge Delivery
            </span>
          </nav>

          {/* Editorial Classification & Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-space-md mb-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-meta-tag text-meta-tag uppercase tracking-wider">
              <span className="material-symbols-outlined text-[14px]">architecture</span>
              <span>Enterprise CMS &amp; AEM // Architectural Monograph</span>
            </div>
            <div className="flex items-center gap-space-xs">
              <button
                type="button"
                onClick={handleCopyPermalink}
                className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-variant text-body-sm font-body-sm transition-colors shadow-sm cursor-pointer"
                title="Copy canonical permalink to clipboard"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">
                  {copiedLink ? 'check' : 'link'}
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider">
                  {copiedLink ? 'Link Copied!' : 'Copy Permalink'}
                </span>
              </button>
              <Link
                to="/writing"
                className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-variant text-body-sm font-body-sm transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider">
                  All Monographs
                </span>
              </Link>
            </div>
          </div>

          {/* Main Headline with Asymmetric Offset Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-baseline">
            <div className="lg:col-span-9">
              <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight mb-space-md font-semibold leading-tight">
                Designing Maintainable Blocks in AEM Edge Delivery Services
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl mb-space-lg">
                A deep dive into zero-dependency DOM decoration micro-blocks, universal authoring
                contracts, and keeping client-side execution budgets strictly under 50ms for Tier-1
                corporate ecosystems.
              </p>
            </div>

            {/* Quick System Stats Pill Column */}
            <div className="lg:col-span-3 flex flex-col gap-space-xs bg-surface-container p-space-md rounded-xl shadow-sm border border-outline-variant/30">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                Architecture Highlights
              </span>
              <p className="font-body-sm text-body-sm text-on-surface leading-relaxed mt-space-xs">
                <span className="font-semibold text-primary">Focus:</span> Zero-dependency DOM
                decoration, Universal Editor authoring, edge caching, and optimal page experience.
              </p>
            </div>
          </div>

          {/* Comprehensive Metadata Grid */}
          <div className="mt-space-lg pt-space-md bg-surface-container-low p-space-md rounded-xl grid grid-cols-2 gap-space-md sm:grid-cols-3 border border-outline-variant/20">
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-on-surface-variant tracking-wider mb-0.5">
                Author &amp; Dispatch
              </span>
              <div className="flex items-center gap-space-xs">
                <span className="font-body-sm text-body-sm text-on-surface font-medium">
                  Harsh Sinha
                </span>
                <span className="text-primary font-label-code text-label-code text-[11px] bg-secondary-container px-1 rounded">
                  Staff
                </span>
              </div>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-on-surface-variant tracking-wider mb-0.5">
                Reading Cadence
              </span>
              <span className="font-body-sm text-body-sm text-on-surface font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  schedule
                </span>
                8 min deep read (2,450 words)
              </span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-on-surface-variant tracking-wider mb-0.5">
                Production Case
              </span>
              <Link
                to="/projects/gmr-web-platform"
                className="font-body-sm text-body-sm text-primary hover:underline font-medium flex items-center gap-1"
              >
                <span>GMR Web Platform</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Editorial Layout Body: Sticky Outline + Long-form Technical Content */}
      <div className="w-full max-w-[1160px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* STICKY TABLE OF CONTENTS */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-space-md">
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/30">
              <div className="flex items-center justify-between mb-space-sm pb-space-xs border-b border-outline-variant/20">
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface font-semibold flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    list_alt
                  </span>
                  Monograph Outline
                </span>
                <span className="font-label-code text-label-code text-primary bg-surface-container px-1.5 py-0.5 rounded">
                  6 SECTIONS
                </span>
              </div>
              <nav className="space-y-1 font-body-sm text-body-sm">
                <button
                  type="button"
                  onClick={() => scrollToSection('section-01')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    01
                  </span>
                  <span className="leading-snug">The Architectural Paradigm Shift</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('section-02')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    02
                  </span>
                  <span className="leading-snug">The EDS Block Decorator Contract</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('section-03')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    03
                  </span>
                  <span className="leading-snug">Preventing Cumulative Layout Shift &amp; LCP</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('section-04')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    04
                  </span>
                  <span className="leading-snug">Universal Editor Instrumentation</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('section-05')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    05
                  </span>
                  <span className="leading-snug">Defensive Table Transformation</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('section-06')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    06
                  </span>
                  <span className="leading-snug">Key Takeaways for Engineers</span>
                </button>
              </nav>
            </div>
          </aside>

          {/* MAIN ARTICLE CONTENT STREAM */}
          <main className="lg:col-span-8 space-y-space-xl">
            {/* SECTION 01 */}
            <article className="space-y-space-md scroll-mt-24" id="section-01">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  01
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Core Topology
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                The Architectural Paradigm Shift
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                For years, enterprise web delivery relied upon two opposing, yet equally compromised
                architectures: the monolithic Java-based server-side render pipeline (AEM
                Classic/Cloud Sites via HTL and Sling models) or the client-heavy Single Page
                Application (SPA) hydration architecture (Next.js, Nuxt, Gatsby).
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                The standard enterprise SPA routinely transfers{' '}
                <strong>280KB to 650KB of gzipped JavaScript</strong> before rendering initial
                meaningful UI. In high-traffic corporate portals, this hydration tax introduces
                latency spikes, cumulative layout shifts (CLS), and compromises SEO crawl budgets.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                With AEM Edge Delivery Services (formerly Franklin), the content repository becomes a
                document source (Microsoft Word or Google Docs). The edge compiler renders raw
                markdown-derived markup directly into clean HTML tables. The browser receives zero
                framework runtimes. Everything reduces to one elegant contract:{' '}
                <strong>zero-dependency micro-blocks executing pure DOM transformations</strong>.
              </p>

              {/* Data Flow Diagram */}
              <div className="my-space-lg bg-surface-container p-space-lg rounded-xl shadow-sm border border-outline-variant/30">
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-semibold">
                    Data Flow Pipeline: Document to Decorated DOM
                  </span>
                  <span className="font-label-code text-label-code text-on-surface-variant">
                    EDS Ingestion Flow
                  </span>
                </div>
                {/* Responsive EDS Pipeline Flow */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md items-stretch">
                  <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/60 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-meta-tag uppercase text-[10px] text-primary font-bold">01 · Authoring Tier</span>
                        <span className="material-symbols-outlined text-outline text-[18px]">description</span>
                      </div>
                      <h4 className="font-headline-sm text-body-md font-semibold text-on-surface">
                        Google Doc / Word
                      </h4>
                      <p className="font-meta-tag text-meta-tag text-on-surface-variant mt-1">
                        Semantic tables and raw editorial content.
                      </p>
                    </div>
                    <span className="font-label-code text-[11px] text-primary pt-2 border-t border-outline-variant/30 font-medium">
                      Source Document
                    </span>
                  </div>

                  <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/60 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-meta-tag uppercase text-[10px] text-primary font-bold">02 · Edge Worker</span>
                        <span className="material-symbols-outlined text-outline text-[18px]">cloud</span>
                      </div>
                      <h4 className="font-headline-sm text-body-md font-semibold text-on-surface">
                        Adobe Edge Worker
                      </h4>
                      <p className="font-meta-tag text-meta-tag text-on-surface-variant mt-1">
                        Fastly VCL/Wasm compiles markdown to clean HTML.
                      </p>
                    </div>
                    <span className="font-label-code text-[11px] text-primary pt-2 border-t border-outline-variant/30 font-medium">
                      Markdown → HTML
                    </span>
                  </div>

                  <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/60 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-meta-tag uppercase text-[10px] text-primary font-bold">03 · Browser Ingest</span>
                        <span className="material-symbols-outlined text-outline text-[18px]">html</span>
                      </div>
                      <h4 className="font-headline-sm text-body-md font-semibold text-on-surface">
                        Initial Document
                      </h4>
                      <p className="font-meta-tag text-meta-tag text-on-surface-variant mt-1">
                        Semantic HTML with clean block wrappers; LCP ready.
                      </p>
                    </div>
                    <span className="font-label-code text-[11px] text-primary pt-2 border-t border-outline-variant/30 font-medium">
                      &lt;div class=&quot;block&quot;&gt;
                    </span>
                  </div>

                  <div className="p-space-md rounded-xl bg-primary text-on-primary shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-meta-tag uppercase text-[10px] text-primary-fixed font-bold">04 · Client Runtime</span>
                        <span className="material-symbols-outlined text-primary-fixed text-[18px]">code</span>
                      </div>
                      <h4 className="font-headline-sm text-body-md font-semibold text-on-primary">
                        decorate(block)
                      </h4>
                      <p className="font-meta-tag text-meta-tag text-on-primary/90 mt-1">
                        Lightweight vanilla JS micro-block DOM transformation.
                      </p>
                    </div>
                    <span className="font-label-code text-[11px] text-primary-fixed pt-2 border-t border-on-primary/20 font-semibold">
                      Sub-50ms Hydration
                    </span>
                  </div>
                </div>
                <p className="font-label-code text-label-code text-on-surface-variant text-center mt-space-sm">
                  Figure 1.0: End-to-end edge compilation pipeline circumventing client-side virtual
                  DOM trees.
                </p>
              </div>
            </article>

            {/* SECTION 02 */}
            <article className="space-y-space-md scroll-mt-24" id="section-02">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  02
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Core Implementation
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                The EDS Block Decorator Contract
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                In Edge Delivery Services, each block is treated as an isolated custom web component
                without the overhead of Web Component shadow roots. Every block script exposes an
                exported async function named <code>decorate</code>:
              </p>

              {/* Technical Code Block */}
              <div className="my-space-md bg-inverse-surface rounded-xl overflow-hidden shadow-md border border-outline-variant/30">
                <div className="bg-[#1a231b] px-space-md py-space-xs flex items-center justify-between text-on-surface-variant font-label-code text-label-code">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-error" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed" />
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    <span className="ml-space-xs text-inverse-on-surface">
                      /blocks/columns/columns.js
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <span className="text-inverse-primary font-mono text-[11px]">ES6 Module</span>
                    <button
                      type="button"
                      onClick={() => handleCopyCode(codeSnippet)}
                      className="hover:text-inverse-on-surface transition-colors cursor-pointer"
                      title="Copy code"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {copiedCode ? 'check' : 'content_copy'}
                      </span>
                    </button>
                  </div>
                </div>
                <pre className="p-space-md font-label-code text-label-code overflow-x-auto text-[#cbeca3] leading-relaxed">
                  <code>{codeSnippet}</code>
                </pre>
              </div>

              <div className="bg-surface-container-high p-space-md rounded-xl space-y-space-xs border border-outline-variant/20">
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    lightbulb
                  </span>
                  Direct DOM Decoration vs. Virtual Tree Diffing
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Notice that the decorator does not synthesize an in-memory Virtual DOM. It
                  leverages native browser APIs: <code>DocumentFragment</code> and{' '}
                  <code>replaceChildren()</code>. This keeps runtime heap allocations flat,
                  preventing micro garbage-collection pauses on mobile devices.
                </p>
              </div>
            </article>

            {/* SECTION 03 */}
            <article className="space-y-space-md scroll-mt-24" id="section-03">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  03
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Performance Engineering
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Preventing Cumulative Layout Shift &amp; LCP Hygiene
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                Because Edge Delivery scripts run on the client, unoptimized blocks risk
                introducing <strong>Cumulative Layout Shift (CLS)</strong> if visual elements
                expand asynchronously or images render without explicit aspect ratios.
              </p>

              <blockquote className="my-space-md p-space-lg bg-surface-container-low rounded-xl relative pl-space-xl border-l-4 border-primary">
                <p className="font-headline-sm text-headline-sm text-on-surface italic font-medium leading-relaxed mb-space-xs">
                  “In high-scale edge systems, speed is not an optimization pass conducted before
                  launch; it is the fundamental architectural constraint that dictates every DOM
                  operation.”
                </p>
                <cite className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant not-italic font-semibold">
                  — Harsh Sinha, Principles of Modernist Web Delivery
                </cite>
              </blockquote>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                To maintain optimal Core Web Vitals ratings, blocks classified as LCP candidates
                (such as Hero, Header, and Carousels) must implement{' '}
                <strong>critical preload injection</strong> in the page&apos;s{' '}
                <code>scripts.js</code> bootstrap phase:
              </p>

              <div className="space-y-space-sm pt-space-xs">
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start gap-space-md border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-[24px] mt-0.5">
                    priority_high
                  </span>
                  <div>
                    <h3 className="font-body-sm text-body-sm font-semibold text-on-surface">
                      Image Dimension Locks
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Always inspect authored picture elements and inject inline <code>width</code>{' '}
                      and <code>height</code> attributes matching the target aspect ratio before
                      the image initiates network fetch.
                    </p>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start gap-space-md border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-[24px] mt-0.5">
                    timer
                  </span>
                  <div>
                    <h3 className="font-body-sm text-body-sm font-semibold text-on-surface">
                      Eager Block Staging
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      The first block on any page must be decorated synchronously within the critical
                      path (the <code>loadEager()</code> phase), before any analytics, consent
                      managers, or auxiliary fonts initialize.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* SECTION 04 */}
            <article className="space-y-space-md scroll-mt-24" id="section-04">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  04
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Editorial Ergonomics
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Universal Editor Instrumentation
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                While document-based authoring provides extreme speed for writers, enterprise teams
                often demand visual WYSIWYG editing directly on the edge-delivered webpage. Adobe&apos;s{' '}
                <strong>Universal Editor (AUE)</strong> bridges this by listening for data
                attributes attached during decoration.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Maintainable blocks decorate visual nodes while systematically propagating{' '}
                <code>data-aue-*</code> attributes so editors can click into live text, banners,
                and links directly on staging previews:
              </p>

              <div className="my-space-md bg-surface-container-low p-space-md rounded-xl border border-outline-variant/30">
                <div className="font-label-code text-label-code text-primary font-semibold mb-space-xs">
                  DATA-AUE HIERARCHY TREE
                </div>
                <div className="space-y-space-xs font-label-code text-label-code text-on-surface-variant">
                  <div className="p-space-xs bg-surface-container rounded flex items-center justify-between">
                    <span className="text-on-surface font-medium">
                      &lt;div class=&quot;hero-block&quot; data-aue-resource=&quot;urn:aemconnection:...&quot; data-aue-type=&quot;component&quot;&gt;
                    </span>
                    <span className="text-primary text-[11px]">CONTAINER</span>
                  </div>
                  <div className="ml-space-md p-space-xs bg-surface-container rounded flex items-center justify-between">
                    <span className="text-on-surface font-medium">
                      &lt;h1 data-aue-prop=&quot;headline&quot; data-aue-type=&quot;text&quot;&gt;...&lt;/h1&gt;
                    </span>
                    <span className="text-secondary text-[11px]">SLOT</span>
                  </div>
                  <div className="ml-space-md p-space-xs bg-surface-container rounded flex items-center justify-between">
                    <span className="text-on-surface font-medium">
                      &lt;a data-aue-prop=&quot;callToAction&quot; data-aue-type=&quot;reference&quot;&gt;...&lt;/a&gt;
                    </span>
                    <span className="text-secondary text-[11px]">SLOT</span>
                  </div>
                </div>
              </div>
            </article>

            {/* SECTION 05 */}
            <article className="space-y-space-md scroll-mt-24" id="section-05">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  05
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Robustness &amp; Resiliency
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Defensive Table Transformation
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                Content creators make mistakes: pasting formatted text from email clients,
                accidentally leaving empty table rows, or merging cells unpredictably. A fragile
                block decorator fails catastrophically with{' '}
                <code>Cannot read properties of undefined</code>, breaking the entire page render.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Our engineering standard requires every block to adopt defensive parsing utilities
                that sanitize rows prior to restructuring:
              </p>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm border border-outline-variant/30">
                <div className="flex items-center gap-space-xs text-primary font-label-code text-label-code font-semibold">
                  <span className="material-symbols-outlined text-[18px]">rule</span>
                  <span>Sanitization Protocol</span>
                </div>
                <ul className="list-disc list-inside space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  <li>
                    Strip out zero-width spaces (<code>\u200B</code>) and accidental non-breaking
                    entities.
                  </li>
                  <li>
                    Filter out empty rows:{' '}
                    <code>rows.filter(r =&gt; r.textContent.trim().length &gt; 0)</code>.
                  </li>
                  <li>
                    Gracefully fallback to placeholder iconography if authored asset link is dead.
                  </li>
                  <li>
                    Wrap all dynamic async external fetches (e.g. airport flight API) in strict
                    timeouts.
                  </li>
                </ul>
              </div>
            </article>

            {/* SECTION 06 */}
            <article className="space-y-space-md scroll-mt-24" id="section-06">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  06
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Engineering Synthesis
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Key Takeaways for Frontend Engineers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                <div className="bg-surface-container p-space-md rounded-xl space-y-space-xs border border-outline-variant/20">
                  <span className="font-label-code text-label-code text-primary font-bold">01</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Vanilla JS is Sufficient
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Modern browsers are faster than ever. Eliminating runtime abstractions reduces
                    bundle delivery to zero while simplifying long-term debugging.
                  </p>
                </div>
                <div className="bg-surface-container p-space-md rounded-xl space-y-space-xs border border-outline-variant/20">
                  <span className="font-label-code text-label-code text-primary font-bold">02</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Authoring Contracts
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Author contracts must be simple enough for a non-technical marketing writer, yet
                    rigid enough for a programmatic DOM parser.
                  </p>
                </div>
                <div className="bg-surface-container p-space-md rounded-xl space-y-space-xs border border-outline-variant/20">
                  <span className="font-label-code text-label-code text-primary font-bold">03</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Immediate Interactivity
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Instant Time to Interactive is no longer an edge-case luxury; it is the ultimate
                    competitive differentiator for enterprise conversion rates.
                  </p>
                </div>
              </div>
            </article>

            {/* Author Profile Footnote Card */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-space-lg border border-outline-variant/30">
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm border border-outline-variant/40 bg-surface-container">
                <picture>
                  <source type="image/avif" srcSet="/images/harsh-portrait-480.avif" />
                  <source type="image/webp" srcSet="/images/harsh-portrait-480.webp" />
                  <img
                    src="/images/harsh-portrait.jpg"
                    alt="Harsh Sinha"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="space-y-space-xs text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-space-xs">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Harsh Sinha
                  </h3>
                  <span className="font-meta-tag text-meta-tag uppercase bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">
                    Software Engineer
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Specializing in enterprise web architecture, AEM Edge Delivery Services,
                  full-stack micro-architectures, and high-performance frontend systems.
                </p>
                <div className="pt-space-xs flex flex-wrap items-center justify-center sm:justify-start gap-space-md font-body-sm text-body-sm">
                  <Link
                    to="/about"
                    className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>View Full Bio &amp; Philosophy</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                  <span className="text-outline">•</span>
                  <Link
                    to="/experience"
                    className="text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    Track Record &amp; Roles
                  </Link>
                </div>
              </div>
            </div>

            {/* Next Article Navigation */}
            <nav
              aria-label="Sequential Articles"
              className="pt-space-lg border-t-0 grid grid-cols-1 md:grid-cols-2 gap-space-md"
            >
              <Link
                to="/writing"
                className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors shadow-sm flex flex-col justify-between group border border-outline-variant/30"
              >
                <div className="flex items-center gap-space-xs text-on-surface-variant font-meta-tag text-meta-tag uppercase tracking-wider mb-space-xs">
                  <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">
                    arrow_back
                  </span>
                  <span>All Articles</span>
                </div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-medium group-hover:text-primary transition-colors">
                  Browse Technical Articles
                </div>
                <span className="mt-space-sm font-label-code text-label-code text-on-surface-variant">
                  Architecture &amp; Engineering
                </span>
              </Link>
              <Link
                to="/writing/debugging-event-driven-dam-workflows-in-aem"
                className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors shadow-sm flex flex-col justify-between group text-right border border-outline-variant/30"
              >
                <div className="flex items-center justify-end gap-space-xs text-on-surface-variant font-meta-tag text-meta-tag uppercase tracking-wider mb-space-xs">
                  <span>Next Article</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-medium group-hover:text-primary transition-colors">
                  Debugging Event-Driven DAM Workflows in AEM 6.5
                </div>
                <span className="mt-space-sm font-label-code text-label-code text-on-surface-variant">
                  [Draft / Field Note] • Asset Workflows
                </span>
              </Link>
            </nav>
          </main>
        </div>
      </div>
    </div>
  )
}
