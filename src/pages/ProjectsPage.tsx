import { useState, useMemo } from 'react'
import { Link } from '../router'
import { SEO } from '../components/SEO'
import { PROJECTS, type ProjectItem } from '../content/siteData'

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return PROJECTS.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory
      const matchesQuery = !q || p.searchCorpus.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, searchQuery])

  const handleReset = () => {
    setActiveCategory('all')
    setSearchQuery('')
  }

  return (
    <>
      <SEO
        title="Projects & Case Studies — Harsh Sinha · The Geek Harsh"
        description="Curated selection of enterprise digital platforms, full-stack systems, and applied AI research projects built by Harsh Sinha."
        path="/projects"
      />

      <div className="w-full max-w-[1160px] mx-auto px-gutter-mobile lg:px-gutter py-space-xl">
        {/* Header Strip & Editorial Framing */}
        <section className="pt-space-xl pb-space-lg">
          <div className="flex flex-col gap-space-sm max-w-3xl">
            <div className="inline-flex items-center gap-space-xs font-meta-tag text-meta-tag uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined text-[16px]">folder_open</span>
              <span>ENGINEERING DIRECTORY // INDEX</span>
            </div>
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
              Selected Works &amp; Systems.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Architectural case studies, production systems, and experimental prototypes across enterprise CMS ecosystems, distributed web architectures, and real-time computer vision.
            </p>
          </div>
        </section>

        {/* Interactive Controls: Search & Category Filter */}
        <section className="mb-space-lg">
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md">
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                search
              </span>
              <input
                id="project-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, technologies, or keywords..."
                className="w-full pl-10 pr-10 py-2 bg-surface-container-low text-on-surface rounded-lg font-body-sm text-body-sm placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'enterprise', label: 'Enterprise Web' },
                { id: 'fullstack', label: 'Full-Stack & Platforms' },
                { id: 'research', label: 'Research & Systems' },
              ].map((pill) => {
                const isActive = activeCategory === pill.id
                return (
                  <button
                    key={pill.id}
                    type="button"
                    onClick={() => setActiveCategory(pill.id)}
                    className={`font-meta-tag text-meta-tag uppercase tracking-wider px-space-md py-1.5 rounded-full transition-all cursor-pointer ${
                      isActive
                        ? 'bg-primary text-on-primary font-semibold shadow-sm'
                        : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    {pill.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Results Feedback Bar */}
          <div className="flex items-center justify-between px-space-xs mt-space-sm font-label-code text-label-code text-on-surface-variant">
            <div>
              Showing <span className="font-semibold text-on-surface">{filteredProjects.length}</span> of{' '}
              <span className="font-semibold text-on-surface">{PROJECTS.length}</span> engineering entries
            </div>
            {(activeCategory !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={handleReset}
                className="text-secondary hover:text-primary transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[0.875rem]">restart_alt</span>
                Reset filters
              </button>
            )}
          </div>
        </section>

        {/* Empty State Banner */}
        {filteredProjects.length === 0 && (
          <div className="w-full py-space-xl px-space-lg my-space-md text-center bg-surface-container-lowest rounded-xl shadow-sm">
            <div className="max-w-md mx-auto flex flex-col items-center gap-space-sm">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-outline">
                <span className="material-symbols-outlined text-[1.5rem]">filter_alt_off</span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">No matching projects found</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                No engineering files or research logs matched your query. Try broadening your keywords or resetting filters.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-space-xs px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm hover:bg-on-secondary-fixed-variant transition-colors"
              >
                Reset filters
              </button>
            </div>
          </div>
        )}

        {/* Projects Grid / Editorial Cards */}
        <div className="flex flex-col gap-space-lg mb-space-xl">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Footnote / System Specification Reference */}
        <section className="py-space-md bg-surface-container-low rounded-xl px-space-md text-on-surface-variant flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-code text-label-code shadow-sm">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[1.125rem] text-secondary">folder</span>
            <span>5 Selected Engineering Projects</span>
          </div>
          <div className="flex items-center gap-space-md">
            <Link to="/research" className="text-primary hover:underline">
              Browse academic publications →
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

function ProjectCard({ project }: { project: ProjectItem }) {
  if (project.slug === 'gmr-web-platform') {
    return (
      <article className="project-card group bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm hover:shadow-md transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="font-meta-tag text-meta-tag text-secondary uppercase tracking-wider">
                  {project.categoryLabel}
                </span>
                <span className="text-outline">•</span>
                <span className="font-label-code text-label-code text-on-surface-variant">{project.organization}</span>
                <span className="text-outline">•</span>
                <span className="font-label-code text-meta-tag font-semibold text-primary">2026</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                {project.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm mb-space-md">
                {project.summary}
              </p>
              <div className="p-space-sm bg-surface-container-low rounded-lg mb-space-md">
                <span className="font-meta-tag text-meta-tag uppercase text-outline block mb-1">
                  Key Responsibility
                </span>
                <p className="font-body-sm text-body-sm text-on-surface">{project.keyResponsibility}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-space-md">
                {project.tags.map((t) => (
                  <span key={t} className="px-2 py-1 rounded bg-surface-container text-on-surface-variant font-meta-tag text-meta-tag">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to={project.caseStudyPath}
                className="inline-flex items-center gap-1 font-body-sm text-body-sm text-primary hover:text-on-secondary-fixed-variant transition-colors group/link font-medium"
              >
                View case study
                <span className="material-symbols-outlined text-[1.125rem] group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 bg-surface-container rounded-lg p-space-md flex flex-col justify-between overflow-hidden relative min-h-[220px]">
            <div className="flex items-center justify-between pb-space-xs mb-space-sm border-b border-surface-container-high">
              <span className="font-meta-tag text-meta-tag uppercase text-outline">Block Architecture</span>
              <span className="font-label-code text-label-code text-secondary">AEM EDS</span>
            </div>
            <div className="space-y-2 py-2">
              <div className="h-3 w-1/3 bg-surface-container-high rounded" />
              <div className="p-space-sm bg-surface-container-lowest rounded shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-code text-label-code text-primary font-medium">header-navigation.js</span>
                  <span className="font-meta-tag text-meta-tag text-outline">Universal Editor</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-10 bg-surface-container-low rounded p-1 flex flex-col justify-between">
                    <span className="text-[0.625rem] font-meta-tag text-outline">Algolia Search</span>
                    <div className="h-1.5 w-3/4 bg-primary/30 rounded" />
                  </div>
                  <div className="h-10 bg-surface-container-low rounded p-1 flex flex-col justify-between">
                    <span className="text-[0.625rem] font-meta-tag text-outline">Hero Carousel</span>
                    <div className="h-1.5 w-1/2 bg-secondary/30 rounded" />
                  </div>
                  <div className="h-10 bg-surface-container-low rounded p-1 flex flex-col justify-between">
                    <span className="text-[0.625rem] font-meta-tag text-outline">Target Experiment</span>
                    <div className="h-1.5 w-4/5 bg-tertiary/30 rounded" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-16 bg-primary-fixed rounded" />
                <div className="h-2 w-28 bg-surface-container-high rounded" />
              </div>
            </div>
            <div className="pt-space-xs flex justify-between items-center text-outline font-meta-tag text-meta-tag">
              <span>Delivered at Bluethink Inc.</span>
              <span>Static HTML Cache</span>
            </div>
          </div>
        </div>
      </article>
    )
  }

  if (project.slug === 'oliver-wyman') {
    return (
      <article className="project-card group bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm hover:shadow-md transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="font-meta-tag text-meta-tag text-secondary uppercase tracking-wider">
                  {project.categoryLabel}
                </span>
                <span className="text-outline">•</span>
                <span className="font-label-code text-label-code text-on-surface-variant">{project.organization}</span>
                <span className="text-outline">•</span>
                <span className="px-2 py-0.5 rounded-full bg-secondary-container/70 text-on-secondary-fixed-variant font-label-code text-[0.6875rem] font-medium">
                  Under Development
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                {project.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm mb-space-md">
                {project.summary}
              </p>
              <div className="p-space-sm bg-surface-container-low rounded-lg mb-space-md">
                <span className="font-meta-tag text-meta-tag uppercase text-outline block mb-1">
                  Key Responsibility
                </span>
                <p className="font-body-sm text-body-sm text-on-surface">{project.keyResponsibility}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-space-md">
                {project.tags.map((t) => (
                  <span key={t} className="px-2 py-1 rounded bg-surface-container text-on-surface-variant font-meta-tag text-meta-tag">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to={project.caseStudyPath}
                className="inline-flex items-center gap-1 font-body-sm text-body-sm text-primary hover:text-on-secondary-fixed-variant transition-colors group/link font-medium"
              >
                View case study
                <span className="material-symbols-outlined text-[1.125rem] group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 bg-surface-container rounded-lg p-space-md flex flex-col justify-between overflow-hidden relative min-h-[220px]">
            <div className="flex items-center justify-between pb-space-xs mb-space-sm border-b border-surface-container-high">
              <span className="font-meta-tag text-meta-tag uppercase text-outline">Workflow &amp; DAM Pipeline</span>
              <span className="font-label-code text-label-code text-tertiary">OSGi Service</span>
            </div>
            <div className="py-2 flex flex-col gap-2">
              <div className="p-space-sm bg-surface-container-lowest rounded shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[1.125rem]">schema</span>
                  <span className="font-label-code text-label-code text-on-surface">Asset Ingestion &amp; Validation</span>
                </div>
                <span className="font-meta-tag text-meta-tag text-outline bg-surface-container px-1.5 py-0.5 rounded">
                  DAM Workflow
                </span>
              </div>
              <div className="flex justify-center -my-1 text-outline">
                <span className="material-symbols-outlined text-[1rem]">arrow_downward</span>
              </div>
              <div className="p-space-sm bg-surface-container-lowest rounded shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[1.125rem]">tune</span>
                  <span className="font-label-code text-label-code text-on-surface">Metadata Automation</span>
                </div>
                <span className="font-meta-tag text-meta-tag text-outline bg-surface-container px-1.5 py-0.5 rounded">
                  Asset Limit Check
                </span>
              </div>
            </div>
            <div className="pt-space-xs flex justify-between items-center text-outline font-meta-tag text-meta-tag">
              <span>Delivered at Bluethink Inc.</span>
              <span>HTL Rendering Engine</span>
            </div>
          </div>
        </div>
      </article>
    )
  }

  if (project.slug === 'datajam-portal') {
    return (
      <article className="project-card group bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm hover:shadow-md transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="font-meta-tag text-meta-tag text-secondary uppercase tracking-wider">
                  {project.categoryLabel}
                </span>
                <span className="text-outline">•</span>
                <span className="font-label-code text-label-code text-on-surface-variant">{project.organization}</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                {project.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm mb-space-md">
                {project.summary}
              </p>
              <div className="p-space-sm bg-surface-container-low rounded-lg mb-space-md">
                <span className="font-meta-tag text-meta-tag uppercase text-outline block mb-1">
                  Key Responsibility
                </span>
                <p className="font-body-sm text-body-sm text-on-surface">{project.keyResponsibility}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-space-md">
                {project.tags.map((t) => (
                  <span key={t} className="px-2 py-1 rounded bg-surface-container text-on-surface-variant font-meta-tag text-meta-tag">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to={project.caseStudyPath}
                className="inline-flex items-center gap-1 font-body-sm text-body-sm text-primary hover:text-on-secondary-fixed-variant transition-colors group/link font-medium"
              >
                View case study
                <span className="material-symbols-outlined text-[1.125rem] group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 bg-surface-container rounded-lg p-space-md flex flex-col justify-between overflow-hidden relative min-h-[220px]">
            <div className="flex items-center justify-between pb-space-xs mb-space-sm border-b border-surface-container-high">
              <span className="font-meta-tag text-meta-tag uppercase text-outline">Model Context Protocol</span>
              <span className="font-label-code text-label-code text-primary">MCP Interface</span>
            </div>
            <div className="space-y-2 py-1">
              <div className="bg-surface-container-lowest p-2 rounded shadow-sm flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary text-[1rem] mt-0.5">smart_toy</span>
                <div className="flex-1">
                  <span className="font-label-code text-[0.75rem] text-outline block">Conversational query context</span>
                  <span className="font-body-sm text-[0.8125rem] text-on-surface block">
                    Aggregating schema and dataset models...
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-low p-2 rounded flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-label-code text-[0.75rem] text-on-surface">Django REST API Handshake</span>
                </div>
                <span className="font-meta-tag text-meta-tag text-outline">Connected</span>
              </div>
            </div>
            <div className="pt-space-xs flex justify-between items-center text-outline font-meta-tag text-meta-tag">
              <span>Delivered at Iktara Data Science</span>
              <span>REST Integration</span>
            </div>
          </div>
        </div>
      </article>
    )
  }

  if (project.slug === 'careeriens') {
    return (
      <article className="project-card group bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm hover:shadow-md transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="font-meta-tag text-meta-tag text-secondary uppercase tracking-wider">
                  {project.categoryLabel}
                </span>
                <span className="text-outline">•</span>
                <span className="font-label-code text-label-code text-on-surface-variant">{project.organization}</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                {project.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm mb-space-md">
                {project.summary}
              </p>
              <div className="p-space-sm bg-surface-container-low rounded-lg mb-space-md">
                <span className="font-meta-tag text-meta-tag uppercase text-outline block mb-1">
                  Key Responsibility
                </span>
                <p className="font-body-sm text-body-sm text-on-surface">{project.keyResponsibility}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-space-md">
                {project.tags.map((t) => (
                  <span key={t} className="px-2 py-1 rounded bg-surface-container text-on-surface-variant font-meta-tag text-meta-tag">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to={project.caseStudyPath}
                className="inline-flex items-center gap-1 font-body-sm text-body-sm text-primary hover:text-on-secondary-fixed-variant transition-colors group/link font-medium"
              >
                View case study
                <span className="material-symbols-outlined text-[1.125rem] group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 bg-surface-container rounded-lg p-space-md flex flex-col justify-between overflow-hidden relative min-h-[220px]">
            <div className="flex items-center justify-between pb-space-xs mb-space-sm border-b border-surface-container-high">
              <span className="font-meta-tag text-meta-tag uppercase text-outline">Frontend Architecture</span>
              <span className="font-label-code text-label-code text-secondary">React SSR</span>
            </div>
            <div className="p-space-sm bg-surface-container-lowest rounded shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-label-code text-label-code text-on-surface">App Router / Layout</span>
                <span className="font-meta-tag text-meta-tag text-outline bg-surface-container px-1 rounded">Next.js</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container rounded overflow-hidden">
                <div className="h-full bg-primary-container w-4/5" />
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="p-1.5 bg-surface-container-low rounded text-center">
                  <span className="block font-meta-tag text-meta-tag text-outline">Viewport</span>
                  <span className="font-label-code text-[0.75rem] text-on-surface">Responsive Layout</span>
                </div>
                <div className="p-1.5 bg-surface-container-low rounded text-center">
                  <span className="block font-meta-tag text-meta-tag text-outline">Rendering</span>
                  <span className="font-label-code text-[0.75rem] text-on-surface">Component Driven</span>
                </div>
              </div>
            </div>
            <div className="pt-space-xs flex justify-between items-center text-outline font-meta-tag text-meta-tag">
              <span>Tailwind CSS</span>
              <span>Freelance Project</span>
            </div>
          </div>
        </div>
      </article>
    )
  }

  // Garun Drishti (Research highlight)
  return (
    <article className="project-card group bg-surface-container-low rounded-xl p-space-md lg:p-space-lg shadow-md hover:shadow-lg transition-all duration-300 relative">
      <div className="flex flex-wrap items-center justify-between gap-space-xs pb-space-sm mb-space-md border-b border-outline-variant">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[1.25rem]">menu_book</span>
          <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-primary font-medium">
            Academic Research • Published Book Chapter
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-primary-container text-on-primary font-meta-tag text-meta-tag shadow-sm font-medium">
          <span className="material-symbols-outlined text-[0.875rem]">verified</span>
          Published in Routledge / CRC Press
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="font-meta-tag text-meta-tag text-secondary uppercase tracking-wider">
                {project.categoryLabel}
              </span>
              <span className="text-outline">•</span>
              <span className="font-label-code text-label-code text-on-surface-variant">{project.organization}</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
              {project.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm mb-space-md">
              {project.summary}
            </p>
            <div className="p-space-sm bg-surface-container rounded-lg mb-space-md">
              <span className="font-meta-tag text-meta-tag uppercase text-outline block mb-1">
                Team &amp; Supervision
              </span>
              <p className="font-body-sm text-body-sm text-on-surface">{project.keyResponsibility}</p>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap gap-1.5 mb-space-md">
              {project.tags.map((t) => (
                <span key={t} className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface-variant font-meta-tag text-meta-tag">
                  {t}
                </span>
              ))}
            </div>
            <Link
              to={project.caseStudyPath}
              className="inline-flex items-center gap-1 font-body-sm text-body-sm text-primary hover:text-on-secondary-fixed-variant transition-colors group/link font-medium"
            >
              View research case study
              <span className="material-symbols-outlined text-[1.125rem] group-hover/link:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 bg-surface-container-lowest rounded-lg p-space-md flex flex-col justify-between overflow-hidden relative min-h-[220px] shadow-sm">
          <div className="flex items-center justify-between pb-space-xs mb-space-sm border-b border-surface-container">
            <span className="font-meta-tag text-meta-tag uppercase text-outline">Pipeline Overview</span>
            <span className="font-label-code text-label-code text-primary font-medium">Prototype</span>
          </div>
          <div className="relative bg-[#0f1610] border border-[#233125] rounded p-3 text-[#dbe6d7] font-label-code text-[0.75rem] overflow-hidden">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#a8ce8e] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Video Input Pipeline
              </span>
              <span className="text-outline-variant">Webcam Stream</span>
            </div>
            <div className="border border-dashed border-[#a8ce8e]/30 rounded p-2 mb-2">
              <div className="flex justify-between text-[0.6875rem] text-[#cbeca3]">
                <span>Pose Landmark Extraction</span>
              </div>
              <div className="h-6 flex items-center justify-center text-[#9bb297] text-[0.6875rem]">
                Gesture Vector Detection Model
              </div>
            </div>
            <div className="flex justify-between text-[0.6875rem] text-[#9bb297]">
              <span>Object &amp; Face Detection</span>
              <span>Alert Dispatch</span>
            </div>
          </div>
          <div className="pt-space-xs flex justify-between items-center text-outline font-meta-tag text-meta-tag">
            <span>Supervised Research</span>
            <span>IMS Engineering College</span>
          </div>
        </div>
      </div>
    </article>
  )
}
