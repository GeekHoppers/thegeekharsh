import { useState, useEffect } from 'react'
import { Link } from '../router'
import { SEO } from '../components/SEO'

export function ArticleAssetLimitsPage() {
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
    const url = typeof window !== 'undefined' ? window.location.href : 'https://www.thegeekharsh.in/writing/reasoning-about-asset-upload-limits'
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

  const limitSnippet = `// O(1) Pre-Upload Folder Limit Check
public boolean canAcceptAsset(final Resource folderResource) {
    final ValueMap props = folderResource.getValueMap();
    final long currentCount = props.get("dam:assetCount", 0L);
    final long maxLimit = props.get("dam:maxAllowedAssets", 500L);

    // O(1) lookup on single folder node property
    if (currentCount >= maxLimit) {
        LOG.warn("Folder {} reached limit of {} assets. Blocking upload.", folderResource.getPath(), maxLimit);
        return false;
    }
    return true;
}`

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Reasoning About Asset-Upload Limits and Metadata Automation — Harsh Sinha"
        description="Why naive Jackrabbit Oak tree traversals trigger index warnings, and how atomic JCR folder properties enable O(1) pre-upload limit checks with nightly reconciliation."
        canonical="/writing/reasoning-about-asset-upload-limits"
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
              Reasoning About Asset-Upload Limits
            </span>
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-space-md mb-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant font-meta-tag text-meta-tag uppercase tracking-wider border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Draft / Field Note // Architecture &amp; DAM</span>
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
                Reasoning About Asset-Upload Limits and Metadata Automation
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl mb-space-lg">
                Why naive Jackrabbit Oak tree traversals trigger index warnings, and how atomic JCR
                folder properties enable O(1) pre-upload limit checks with nightly reconciliation.
              </p>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-space-xs bg-surface-container p-space-md rounded-xl shadow-sm border border-outline-variant/30">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                Article Status
              </span>
              <p className="font-body-sm text-body-sm text-on-surface leading-relaxed mt-space-xs">
                <span className="font-semibold text-primary">Field Note:</span> Architectural
                rationale for high-volume JCR repository performance and Oak index safety.
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
                9 min read (Field Note)
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
                  <span className="leading-snug">The Oak Tree Traversal Problem</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('sec-02')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    02
                  </span>
                  <span className="leading-snug">O(N) Traversal to O(1) Counter</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('sec-03')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    03
                  </span>
                  <span className="leading-snug">Atomic Property Updates</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('sec-04')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    04
                  </span>
                  <span className="leading-snug">Nightly Reconciliation Cron</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('sec-05')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    05
                  </span>
                  <span className="leading-snug">Repository Data Integrity</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('sec-06')}
                  className="w-full text-left toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant cursor-pointer"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    06
                  </span>
                  <span className="leading-snug">Key Engineering Takeaways</span>
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
                  Oak Traversal
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                The Oak Tree Traversal Problem
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                In Apache Jackrabbit Oak, counting child nodes across a hierarchy by traversing
                nodes via <code>resource.listChildren()</code> or running unindexed XPath queries is
                an anti-pattern that triggers <code>TraversingIndexQuery</code> warnings in production
                logs.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                When a folder contains 1,500 assets, validating whether a newly uploaded 1,501st
                asset exceeds the folder quota requires reading 1,500 JCR node headers into memory.
                If multiple authors upload concurrently, Oak memory buffers fill up rapidly, and the
                repository logs severe warnings before killing queries exceeding the traversal limit
                threshold (typically 10,000 nodes).
              </p>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-02">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  02
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Algorithmic Solution
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                O(N) Traversal to O(1) Counter
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                To achieve deterministic performance regardless of folder size, we store a
                maintained counter property (<code>dam:assetCount</code>) directly on the folder&apos;s
                <code>jcr:content</code> node. The upload validator executes an O(1) property read
                on the folder node rather than traversing the child asset tree.
              </p>

              <div className="my-space-md bg-[#0f1610] rounded-xl overflow-hidden shadow-md border border-[#233125]">
                <div className="bg-[#172018] border-b border-[#233125] px-space-md py-space-xs flex items-center justify-between font-label-code text-label-code">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-error" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed" />
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    <span className="ml-space-xs text-[#dbe6d7] font-medium">
                      AssetLimitService.java
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(limitSnippet)}
                    className="text-[#9bb297] hover:text-[#f2f7f0] transition-colors cursor-pointer"
                    title="Copy code"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {copiedCode ? 'check' : 'content_copy'}
                    </span>
                  </button>
                </div>
                <pre className="p-space-md bg-[#0d140e] font-label-code text-label-code overflow-x-auto text-[#cbeca3] leading-relaxed selection:bg-[#385026] selection:text-white">
                  <code>{limitSnippet}</code>
                </pre>
              </div>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-03">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  03
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Atomic Updates
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Atomic Property Updates
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                Whenever an asset is created or deleted, an asynchronous event increment/decrement
                routine adjusts the counter. Because this is executed via an atomic write to a single
                node property, Oak version conflicts and branch lock contentions are minimized.
              </p>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-04">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  04
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Reconciliation
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Nightly Reconciliation Cron Jobs
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                Any counter mechanism subject to asynchronous events can theoretically drift if
                unhandled exceptions occur during crash cycles. To guarantee mathematical accuracy,
                a nightly Sling Scheduler cron job runs during zero-traffic maintenance windows,
                performing a thorough count reconciliation and healing any detected counter drifts.
              </p>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-05">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  05
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Data Guarantees
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Repository Data Integrity
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                By decoupling real-time authoring validation from background indexing and night
                maintenance, the repository eliminates Oak index warnings, retains high write
                throughput, and keeps folder boundaries well within recommended architectural limits.
              </p>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-06">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  06
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Synthesis
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Key Engineering Takeaways
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                <div className="bg-surface-container p-space-md rounded-xl space-y-space-xs border border-outline-variant/20">
                  <span className="font-label-code text-label-code text-primary font-bold">01</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Avoid Tree Traversals
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Never count child nodes by traversing them during user-interactive requests.
                  </p>
                </div>
                <div className="bg-surface-container p-space-md rounded-xl space-y-space-xs border border-outline-variant/20">
                  <span className="font-label-code text-label-code text-primary font-bold">02</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Denormalize with Care
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Stashing precalculated counters on parent nodes is valid if accompanied by a
                    reconciliation strategy.
                  </p>
                </div>
                <div className="bg-surface-container p-space-md rounded-xl space-y-space-xs border border-outline-variant/20">
                  <span className="font-label-code text-label-code text-primary font-bold">03</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Scheduled Self-Healing
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Nightly low-priority jobs ensure asynchronous drift never compounds into
                    permanent data corruption.
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
                to="/writing/debugging-event-driven-dam-workflows-in-aem"
                className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors shadow-sm flex flex-col justify-between group border border-outline-variant/30"
              >
                <div className="flex items-center gap-space-xs text-on-surface-variant font-meta-tag text-meta-tag uppercase tracking-wider mb-space-xs">
                  <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">
                    arrow_back
                  </span>
                  <span>Previous Article</span>
                </div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-medium group-hover:text-primary transition-colors">
                  Debugging Event-Driven DAM Workflows in AEM
                </div>
                <span className="mt-space-sm font-label-code text-label-code text-on-surface-variant">
                  Dispatch // 02 • [Draft / Field Note]
                </span>
              </Link>
              <Link
                to="/writing/lessons-from-building-a-conversational-data-portal"
                className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors shadow-sm flex flex-col justify-between group text-right border border-outline-variant/30"
              >
                <div className="flex items-center justify-end gap-space-xs text-on-surface-variant font-meta-tag text-meta-tag uppercase tracking-wider mb-space-xs">
                  <span>Next Article</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-medium group-hover:text-primary transition-colors">
                  Building a Conversational Data Portal with MCP
                </div>
                <span className="mt-space-sm font-label-code text-label-code text-on-surface-variant">
                  Dispatch // 04 • [Draft / Field Note]
                </span>
              </Link>
            </nav>
          </main>
        </div>
      </div>
    </div>
  )
}
