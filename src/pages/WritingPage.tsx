import { useState, useMemo, useEffect, useRef } from 'react'
import { Link } from '../router'
import { SEO } from '../components/SEO'
import { ARTICLES } from '../content/siteData'

const CATEGORIES = [
  { id: 'all', label: 'All Notes (5 Topics)' },
  { id: 'Enterprise CMS & AEM', label: 'Enterprise CMS & AEM' },
  { id: 'Web Engineering', label: 'Web Engineering' },
  { id: 'Backend & Integrations', label: 'Backend & Integrations' },
  { id: 'Applied AI & Vision', label: 'Applied AI & Vision' },
]

export function WritingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        article.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        article.tags.some((t) => t.toLowerCase().includes(selectedCategory.toLowerCase()))

      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.keywords.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q))

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const handleReset = () => {
    setSelectedCategory('all')
    setSearchQuery('')
  }

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Writing & Architectural Dispatches — Harsh Sinha"
        description="Technical lessons, architectural monographs, and field notes across enterprise web platforms (AEM 6.5, Edge Delivery Services), full-stack data platforms, and applied AI."
        canonical="/writing"
      />

      {/* Hero & Editorial Framing */}
      <section className="max-w-[1160px] mx-auto w-full px-margin-mobile md:px-margin pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-12 flex flex-col">
            <div className="inline-flex items-center gap-space-xs font-meta-tag text-meta-tag uppercase tracking-widest text-primary mb-space-sm">
              <span className="material-symbols-outlined text-[15px]">terminal</span>
              <span>ARTICLES &amp; NOTES // ENGINEERING ARCHIVE</span>
            </div>
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight mb-space-sm text-balance">
              Notes from building software<span className="text-primary">.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mb-space-lg">
              Technical lessons, implementation decisions, and practical explorations across
              enterprise web platforms, modern frontend architecture, and applied AI.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Controls: Filtering & Live Search */}
      <section className="max-w-[1160px] mx-auto w-full px-margin-mobile md:px-margin mb-space-lg">
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md border border-outline-variant/30">
          {/* Search Input */}
          <div className="relative flex-1 max-w-lg">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
              search
            </span>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search notes, architectural patterns, or technologies... (Cmd+K)"
              className="w-full pl-10 pr-16 py-2 bg-surface-container-low text-on-surface rounded-lg font-body-sm text-body-sm placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all border border-outline-variant/20"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface text-[14px]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Controls Count */}
          <div className="flex items-center gap-space-xs font-label-code text-label-code text-on-surface-variant shrink-0">
            <span className="material-symbols-outlined text-[16px]">tune</span>
            <span>
              Showing <strong className="text-on-surface">{filteredArticles.length}</strong> of{' '}
              {ARTICLES.length} Technical Dispatches
            </span>
          </div>
        </div>

        {/* Category Pills Strip */}
        <div className="flex items-center gap-space-xs overflow-x-auto py-space-sm no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-space-md py-1.5 rounded-full font-label-code text-label-code tracking-tight font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Main Articles Feed */}
      <section className="max-w-[1160px] mx-auto w-full px-margin-mobile md:px-margin pb-space-xl">
        <div className="space-y-space-lg">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="group bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm hover:shadow-md transition-all duration-200 border border-outline-variant/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md lg:gap-gutter items-start">
                  <div className="lg:col-span-3 flex flex-col justify-between space-y-space-sm lg:pr-space-sm">
                    <div className="space-y-1">
                      <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold block">
                        DISPATCH // {article.num}
                      </span>
                      {article.isDraft && (
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-label-code font-semibold uppercase tracking-wider bg-surface-container text-primary border border-primary/20">
                          {article.draftLabel || 'Draft / Field Note'}
                        </span>
                      )}
                    </div>
                    <div className="space-y-1 font-label-code text-label-code text-on-surface-variant">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px]">schedule</span>
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-secondary">
                        <span className="material-symbols-outlined text-[15px]">category</span>
                        <span>{article.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-9 flex flex-col justify-between space-y-space-sm">
                    <div>
                      <Link to={article.path} className="group-hover:text-primary transition-colors">
                        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-xs font-semibold">
                          {article.title}
                        </h2>
                      </Link>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-3xl mb-space-md">
                        {article.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs border-t border-outline-variant/20">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-code text-label-code"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={article.path}
                        className="inline-flex items-center gap-1 text-primary hover:text-on-surface font-body-sm text-body-sm font-medium transition-colors"
                      >
                        <span>Read Technical Note</span>
                        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="p-space-xl bg-surface-container-lowest rounded-xl text-center shadow-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-[36px] text-on-surface-variant mb-2">
                find_in_page
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">
                No matching technical notes found
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md mx-auto mb-space-md">
                No dispatches matched your query. Try searching for broader terms like &quot;AEM&quot;,
                &quot;DOM&quot;, &quot;Oak&quot;, &quot;MCP&quot;, or clear your filter.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm font-medium hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-pointer"
              >
                Reset Filter Selections
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
