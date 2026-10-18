import { useState, useEffect } from 'react'
import { Link } from '../router'
import { SEO } from '../components/SEO'

export function ArticleMcpPortalPage() {
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
    const url = typeof window !== 'undefined' ? window.location.href : 'https://thegeekharsh.in/writing/lessons-from-building-a-conversational-data-portal'
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

  const mcpSnippet = `# MCP Tool Declaration in Python/Django Backend
@mcp_server.tool()
async def query_aggregate_metric(
    dataset_id: str,
    metric_name: str,
    time_window: str,
    group_by: Optional[str] = None
) -> Dict[str, Any]:
    """
    Query strictly aggregated numerical metrics without allowing free-form SQL.
    Validates dataset authorization and maps parameters to indexed Django ORM queries.
    """
    dataset = await get_authorized_dataset(dataset_id)
    if not dataset:
        raise PermissionDenied("Dataset not found or unauthorized access.")

    # Execute deterministic parameterized ORM query
    results = await run_parameterized_metric_query(dataset, metric_name, time_window, group_by)
    return {
        "status": "success",
        "dataset": dataset.name,
        "metric": metric_name,
        "data": results
    }`

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Lessons from Building a Conversational Data Portal with MCP — Harsh Sinha"
        description="Bridging relational data silos and analyst workflows using the Model Context Protocol (MCP) to enforce deterministic tool routing and schema introspection over raw SQL generation."
        canonical="/writing/lessons-from-building-a-conversational-data-portal"
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
              Building a Conversational Data Portal with MCP
            </span>
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-space-md mb-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant font-meta-tag text-meta-tag uppercase tracking-wider border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Draft / Field Note // Backend &amp; AI Integration</span>
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
                Lessons from Building a Conversational Data Portal with MCP
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl mb-space-lg">
                Bridging relational data silos and analyst workflows using the Model Context
                Protocol (MCP) to enforce deterministic tool routing and schema introspection over
                raw SQL generation.
              </p>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-space-xs bg-surface-container p-space-md rounded-xl shadow-sm border border-outline-variant/30">
              <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                Article Status
              </span>
              <p className="font-body-sm text-body-sm text-on-surface leading-relaxed mt-space-xs">
                <span className="font-semibold text-primary">Field Note:</span> Practical takeaways
                integrating MCP server endpoints with Django REST backends at Iktara Data Science.
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
                10 min read (Field Note)
              </span>
            </div>
            <div>
              <span className="block font-meta-tag text-meta-tag uppercase text-on-surface-variant tracking-wider mb-0.5">
                Production Case
              </span>
              <Link
                to="/projects/datajam-portal"
                className="font-body-sm text-body-sm text-primary hover:underline font-medium flex items-center gap-1"
              >
                <span>DataJam Portal</span>
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
                <a
                  className="toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant"
                  href="#sec-01"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    01
                  </span>
                  <span className="leading-snug">The Fallacy of Raw Text-to-SQL</span>
                </a>
                <a
                  className="toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant"
                  href="#sec-02"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    02
                  </span>
                  <span className="leading-snug">Enter Model Context Protocol</span>
                </a>
                <a
                  className="toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant"
                  href="#sec-03"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    03
                  </span>
                  <span className="leading-snug">Deterministic Tool Routing</span>
                </a>
                <a
                  className="toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant"
                  href="#sec-04"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    04
                  </span>
                  <span className="leading-snug">Schema Introspection &amp; Guards</span>
                </a>
                <a
                  className="toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant"
                  href="#sec-05"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    05
                  </span>
                  <span className="leading-snug">Analyst UX &amp; Latency Budgets</span>
                </a>
                <a
                  className="toc-link group flex items-start gap-space-xs p-1.5 rounded-lg hover:text-on-surface hover:bg-surface-container transition-colors text-on-surface-variant"
                  href="#sec-06"
                >
                  <span className="font-label-code text-label-code text-primary mt-0.5 shrink-0">
                    06
                  </span>
                  <span className="leading-snug">Key Engineering Takeaways</span>
                </a>
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
                  Vulnerability Analysis
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                The Fallacy of Raw Text-to-SQL
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                Allowing an unconstrained Large Language Model to generate arbitrary raw SQL queries
                directly against production analytical databases presents catastrophic risks:
                unbounded table joins causing database lockup, SQL injection vulnerabilities, and
                subtle hallucinated column queries that produce plausible-looking but false metrics.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                In analytics platforms like DataJam Portal, analysts need reliable answers without
                requiring deep SQL knowledge. But trusting raw LLM-generated SQL creates an
                untenable auditing burden.
              </p>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-02">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  02
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Protocol Standard
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Enter Model Context Protocol (MCP)
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                The Model Context Protocol (MCP) introduces a standardized client-server protocol
                where tools and schemas are explicitly exposed by the backend and invoked
                deterministically by the model. Rather than generating unconstrained code, the model
                selects from typed, vetted tools with explicit parameter contracts.
              </p>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-03">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  03
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Implementation Pattern
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Deterministic Tool Routing in Django
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                In our Django backend, each MCP tool is backed by strongly parameterized Django ORM
                query methods with enforced user authorization and strict pagination:
              </p>

              <div className="my-space-md bg-inverse-surface rounded-xl overflow-hidden shadow-md border border-outline-variant/30">
                <div className="bg-[#1a231b] px-space-md py-space-xs flex items-center justify-between text-on-surface-variant font-label-code text-label-code">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-error" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed" />
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    <span className="ml-space-xs text-inverse-on-surface">
                      mcp_tools.py (Django Backend)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(mcpSnippet)}
                    className="hover:text-inverse-on-surface transition-colors cursor-pointer"
                    title="Copy code"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {copiedCode ? 'check' : 'content_copy'}
                    </span>
                  </button>
                </div>
                <pre className="p-space-md font-label-code text-label-code overflow-x-auto text-[#cbeca3] leading-relaxed">
                  <code>{mcpSnippet}</code>
                </pre>
              </div>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-04">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  04
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Schema Guards
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Schema Introspection &amp; Guards
              </h2>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                By providing dynamic schema introspection tools, the model can first explore what
                datasets and metrics exist before formulating a query. The backend rejects any
                request referencing non-existent dimensions, returning structured diagnostic feedback
                that helps the agent self-correct.
              </p>
            </section>

            <section className="space-y-space-md scroll-mt-24" id="sec-05">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-code text-label-code bg-surface-container text-primary px-2 py-0.5 rounded font-semibold">
                  05
                </span>
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant">
                  Performance
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Analyst UX &amp; Latency Budgets
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                In practice, conversational tool calling achieves end-to-end response times under
                1.8 seconds while guaranteeing 100% syntactically valid and authorized database
                access. Analysts get the flexibility of natural language exploration with the safety
                of enterprise REST API contracts.
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
                    Tools Over Free SQL
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Always restrict LLMs to discrete, parameterized backend tools rather than
                    free-form query generation.
                  </p>
                </div>
                <div className="bg-surface-container p-space-md rounded-xl space-y-space-xs border border-outline-variant/20">
                  <span className="font-label-code text-label-code text-primary font-bold">02</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Authorize Every Call
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    The MCP server must validate permissions per-tool execution, never trusting the
                    agent blindly.
                  </p>
                </div>
                <div className="bg-surface-container p-space-md rounded-xl space-y-space-xs border border-outline-variant/20">
                  <span className="font-label-code text-label-code text-primary font-bold">03</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Schema Introspection
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Exposing metadata discovery endpoints allows models to inspect available fields
                    before constructing queries.
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
                to="/writing/reasoning-about-asset-upload-limits"
                className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors shadow-sm flex flex-col justify-between group border border-outline-variant/30"
              >
                <div className="flex items-center gap-space-xs text-on-surface-variant font-meta-tag text-meta-tag uppercase tracking-wider mb-space-xs">
                  <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">
                    arrow_back
                  </span>
                  <span>Previous Article</span>
                </div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-medium group-hover:text-primary transition-colors">
                  Reasoning About Asset-Upload Limits
                </div>
                <span className="mt-space-sm font-label-code text-label-code text-on-surface-variant">
                  Dispatch // 03 • [Draft / Field Note]
                </span>
              </Link>
              <Link
                to="/writing/what-a-computer-vision-prototype-can-and-cannot-prove"
                className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors shadow-sm flex flex-col justify-between group text-right border border-outline-variant/30"
              >
                <div className="flex items-center justify-end gap-space-xs text-on-surface-variant font-meta-tag text-meta-tag uppercase tracking-wider mb-space-xs">
                  <span>Next Article</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-medium group-hover:text-primary transition-colors">
                  What Computer Vision Prototypes Can Prove
                </div>
                <span className="mt-space-sm font-label-code text-label-code text-on-surface-variant">
                  Dispatch // 05 • [Draft / Field Note]
                </span>
              </Link>
            </nav>
          </main>
        </div>
      </div>
    </div>
  )
}
