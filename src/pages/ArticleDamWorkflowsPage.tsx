import { useState, useEffect } from 'react'
import { Link } from '../router'
import { SEO } from '../components/SEO'

export function ArticleDamWorkflowsPage() {
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
    const url = typeof window !== 'undefined' ? window.location.href : 'https://thegeekharsh.in/writing/debugging-event-driven-dam-workflows-in-aem'
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

  const osgiSnippet = `@Component(
    service = EventHandler.class,
    property = {
        EventConstants.EVENT_TOPIC + "=org/apache/sling/api/resource/Resource/ADDED",
        EventConstants.EVENT_FILTER + "=(path=/content/dam/corporate/*)"
    }
)
public class DebouncedAssetEventHandler implements EventHandler {
    @Reference
    private JobManager jobManager;

    @Override
    public void handleEvent(final Event event) {
        final String path = (String) event.getProperty(SlingConstants.PROPERTY_PATH);
        if (path != null && path.endsWith("/jcr:content/metadata")) {
            // Push asset path to an isolated Sling Job queue instead of executing inline
            final Map<String, Object> payload = Collections.singletonMap("assetPath", path);
            jobManager.addJob("com/corporate/dam/asset/metadata/process", payload);
        }
    }
}`

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Debugging Event-Driven DAM Workflows in AEM 6.5 — Harsh Sinha"
        description="How debounced OSGi event listeners, in-memory queue throttling, and isolated Sling Job queues prevent cluster CPU spikes during bulk asset ingest in enterprise AEM 6.5."
        canonical="/writing/debugging-event-driven-dam-workflows-in-aem"
      />

      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-surface-container z-40">
        <div
          className="h-full bg-primary transition-all duration-75"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="w-full bg-surface-bright py-space-xl px-margin-mobile md:px-margin border-b border-outline-variant/30">
        <div className="max-w-[1160px] mx-auto">
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
              Debugging Event-Driven DAM Workflows in AEM 6.5
            </span>
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-space-md mb-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant font-meta-tag text-meta-tag uppercase tracking-wider border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Draft / Field Note // Enterprise CMS &amp; AEM</span>
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-baseline">
            <div className="lg:col-span-9">
              <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight mb-space-md font-semibold leading-tight">
                Debugging Event-Driven DAM Workflows in AEM 6.5
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl mb-space-lg">
                How debounced OSGi event listeners, in-memory queue throttling, and isolated Sling
                Job queues prevent cluster CPU spikes and authoring freezes during bulk asset
                ingest.
              </p>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-space-xs bg-surface-container p-space-md rounded-xl shadow-sm border border-outline-variant/30">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                Article Status
              </span>
              <p className="font-body-sm text-body-sm text-on-surface leading-relaxed mt-space-xs">
                <span className="font-semibold text-primary">Field Note:</span> Architectural
                breakdown based on verified production patterns in AEM 6.5 Managed Services.
              </p>
            </div>
          </div>

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
                11 min read (Field Note)
              </span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-on-surface-variant tracking-wider mb-0.5">
                Production Case
              </span>
              <Link
                to="/projects/oliver-wyman"
                className="font-body-sm text-body-sm text-primary hover:underline font-medium flex items-center gap-1"
              >
                <span>Oliver Wyman Rebuild</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-[1160px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Sticky TOC */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-space-md">
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/30">
              <div className="flex items-center justify-between mb-space-sm pb-space-xs border-b border-outline-variant/20">
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface font-semibold flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    list_alt
                  </span>
                  Outline
                </span>
                <span className="font-label-code text-label-code text-primary bg-surface-container px-1.5 py-0.5 rounded">
                  6 SECTIONS
                </span>
              </div>
              <nav className="space-y-1 font-body-sm text-body-sm">
                <button
                  type="button"
                  onClick={() => scrollToSection('sec-01')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    01
                  </span>
                  <span className="leading-snug">The Ingestion Concurrency Trap</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('sec-02')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    02
                  </span>
                  <span className="leading-snug">Decoupled OSGi R7 Event Handlers</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('sec-03')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    03
                  </span>
                  <span className="leading-snug">Isolating Sling Job Queues</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('sec-04')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    04
                  </span>
                  <span className="leading-snug">Metadata Automation &amp; Smart Tags</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('sec-05')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    05
                  </span>
                  <span className="leading-snug">Production Telemetry &amp; Heap Stability</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('sec-06')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    06
                  </span>
                  <span className="leading-snug">Engineering Recommendations</span>
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Body */}
          <main className="lg:col-span-8 space-y-space-xl">
            <section className="space-y-space-md scroll-mt-24" id="sec-01">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  01
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Architectural Problem
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                The Ingestion Concurrency Trap
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                In enterprise Digital Asset Management (DAM), bulk asset ingest operations—such as
                marketing teams synchronizing hundreds of high-resolution product photos or brand
                collateral—frequently trigger severe cluster degradation if workflow listeners are
                configured synchronously.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                When an author uploads 250 assets, naive JCR observation listeners fire hundreds of
                events within milliseconds. In default AEM configurations, each event spawns
                rendition workflows, thumbnail extractions, and metadata listeners simultaneously on
                the same OSGi thread pool. The author instance CPU spikes to 100%, page rendering
                times out, and Oak repository transaction locks begin cascading.
              </p>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-02">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  02
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Event Decoupling
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Decoupled OSGi R7 Event Handlers
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                The solution requires strictly separating event receipt from event execution. The
                OSGi <code>EventHandler</code> must do one thing only: validate path criteria and
                immediately hand off the work to an isolated Sling Job. It must never execute JCR
                modifications or CPU-intensive image routines inline.
              </p>

              <div className="my-space-md bg-inverse-surface rounded-xl overflow-hidden shadow-md border border-outline-variant/30">
                <div className="bg-[#1a231b] px-space-md py-space-xs flex items-center justify-between text-on-surface-variant font-label-code text-label-code">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-error" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed" />
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    <span className="ml-space-xs text-inverse-on-surface">
                      DebouncedAssetEventHandler.java
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(osgiSnippet)}
                    className="hover:text-inverse-on-surface transition-colors cursor-pointer"
                    title="Copy code"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {copiedCode ? 'check' : 'content_copy'}
                    </span>
                  </button>
                </div>
                <pre className="p-space-md font-label-code text-label-code overflow-x-auto text-[#cbeca3] leading-relaxed">
                  <code>{osgiSnippet}</code>
                </pre>
              </div>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-03">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  03
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Queue Isolation
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Isolating Sling Job Queues
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                By delegating to a dedicated Apache Sling Job Queue configured as <code>ORDERED</code>{' '}
                or with a capped <code>MAX_PARALLEL</code> thread limit (typically 2 to 4 threads),
                the background ingest pipeline cannot exhaust the JVM thread pool. Author-facing
                operations (page edits, publishing, content fragment authoring) remain completely
                unaffected even under heavy batch processing.
              </p>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-04">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  04
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Metadata Pipelines
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Metadata Automation &amp; Smart Tags Lifecycle
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                Once assets are staged in queue, secondary enrichment steps (EXIF extraction, Adobe
                Smart Tags AI tagging, and taxonomy classification) are scheduled sequentially.
                Debounced listeners inspect whether metadata has already been normalized,
                eliminating redundant workflow invocation cycles.
              </p>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-05">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  05
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Telemetry
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Production Telemetry &amp; Heap Stability
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="p-space-md bg-surface-container rounded-xl border border-outline-variant/30">
                  <span className="font-label-code text-label-code text-error font-semibold block mb-1">
                    Synchronous Baseline
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Bulk ingestion caused JVM heap utilization to spike above 90%, triggering stop-the-world GC pauses lasting 4 to 8 seconds.
                  </p>
                </div>
                <div className="p-space-md bg-surface-container rounded-xl border border-outline-variant/30">
                  <span className="font-label-code text-label-code text-primary font-semibold block mb-1">
                    Isolated Job Queue
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Heap remained stable under 55% during ingest. Background jobs drained deterministically without interrupting live authoring sessions.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-06">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  06
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Key Insights
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Engineering Recommendations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                <div className="bg-surface-container p-space-md rounded-xl space-y-space-xs border border-outline-variant/20">
                  <span className="font-label-code text-label-code text-primary font-bold">01</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Never Work in Listeners
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    OSGi event listeners must remain lean and return immediately. Always hand off
                    work to background Sling Jobs.
                  </p>
                </div>
                <div className="bg-surface-container p-space-md rounded-xl space-y-space-xs border border-outline-variant/20">
                  <span className="font-label-code text-label-code text-primary font-bold">02</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Throttle Ingest Queues
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Set strict concurrency caps on DAM job queues so authoring instances never
                    exhaust available threads.
                  </p>
                </div>
                <div className="bg-surface-container p-space-md rounded-xl space-y-space-xs border border-outline-variant/20">
                  <span className="font-label-code text-label-code text-primary font-bold">03</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Debounce JCR Events
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Filter for specific target nodes (e.g. metadata nodes) rather than listening to
                    broad subtree mutations.
                  </p>
                </div>
              </div>
            </section>

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

            {/* Prev / Next Navigation */}
            <nav
              aria-label="Sequential Articles"
              className="pt-space-lg border-t-0 grid grid-cols-1 md:grid-cols-2 gap-space-md"
            >
              <Link
                to="/writing/designing-maintainable-blocks-in-aem-edge-delivery-services"
                className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors shadow-sm flex flex-col justify-between group border border-outline-variant/30"
              >
                <div className="flex items-center gap-space-xs text-on-surface-variant font-meta-tag text-meta-tag uppercase tracking-wider mb-space-xs">
                  <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">
                    arrow_back
                  </span>
                  <span>Previous Article</span>
                </div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-medium group-hover:text-primary transition-colors">
                  Designing Maintainable Blocks in AEM Edge Delivery
                </div>
                <span className="mt-space-sm font-label-code text-label-code text-on-surface-variant">
                  Dispatch // 01 • Canonical Monograph
                </span>
              </Link>
              <Link
                to="/writing/reasoning-about-asset-upload-limits"
                className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors shadow-sm flex flex-col justify-between group text-right border border-outline-variant/30"
              >
                <div className="flex items-center justify-end gap-space-xs text-on-surface-variant font-meta-tag text-meta-tag uppercase tracking-wider mb-space-xs">
                  <span>Next Article</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-medium group-hover:text-primary transition-colors">
                  Reasoning About Asset-Upload Limits
                </div>
                <span className="mt-space-sm font-label-code text-label-code text-on-surface-variant">
                  Dispatch // 03 • [Draft / Field Note]
                </span>
              </Link>
            </nav>
          </main>
        </div>
      </div>
    </div>
  )
}
