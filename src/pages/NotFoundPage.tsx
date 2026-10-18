import { useState, useMemo } from 'react'
import { Link } from '../router'
import { SEO } from '../components/SEO'

const WAYPOINTS = [
  {
    path: '/',
    num: 'INDEX 01',
    label: 'Home',
    desc: 'Primary engineering profile, architectural ethos, and system overview.',
    tag: 'ROOT',
  },
  {
    path: '/about',
    num: 'INDEX 02',
    label: 'About',
    desc: 'Narrative, engineering background, core strengths, and working principles.',
    tag: 'PROFILE',
  },
  {
    path: '/projects',
    num: 'INDEX 03',
    label: 'Projects',
    desc: 'Verified case studies across enterprise AEM, full-stack product, and AI.',
    tag: 'CATALOG',
  },
  {
    path: '/experience',
    num: 'INDEX 04',
    label: 'Experience',
    desc: 'Chronological career history, contributions, and comparative skills matrix.',
    tag: 'CAREER',
  },
  {
    path: '/skills',
    num: 'INDEX 05',
    label: 'Skills',
    desc: 'Comprehensive technical competencies, tooling, and architecture toolkit.',
    tag: 'TAXONOMY',
  },
  {
    path: '/research',
    num: 'INDEX 06',
    label: 'Research',
    desc: 'Peer-reviewed CRC Press book chapter, prototype, and empirical telemetry.',
    tag: 'SCHOLARLY',
  },
  {
    path: '/writing',
    num: 'INDEX 07',
    label: 'Writing',
    desc: 'Technical notes, architectural monographs, and design system essays.',
    tag: 'DISPATCHES',
  },
  {
    path: '/contact',
    num: 'INDEX 08',
    label: 'Contact',
    desc: 'Direct email dispatch, secure channels, and technical consulting inquiries.',
    tag: 'INBOX',
  },
  {
    path: '/resume',
    num: 'INDEX 09',
    label: 'Résumé',
    desc: 'Verified CV specification, career background, and accredited credentials.',
    tag: 'DOCUMENT',
  },
]

export function NotFoundPage() {
  const [filterQuery, setFilterQuery] = useState('')

  const filteredWaypoints = useMemo(() => {
    const q = filterQuery.trim().toLowerCase()
    if (!q) return WAYPOINTS
    return WAYPOINTS.filter(
      (w) =>
        w.path.toLowerCase().includes(q) ||
        w.label.toLowerCase().includes(q) ||
        w.desc.toLowerCase().includes(q) ||
        w.tag.toLowerCase().includes(q)
    )
  }, [filterQuery])

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="404 — Page Not Found — The Geek Harsh"
        description="The requested waypoint does not exist in this deployment. Navigate verified architectural routes across The Geek Harsh."
        canonical="/404"
      />

      <section className="w-full pt-8 pb-12 border-b border-outline-variant/30 bg-surface-container-low/40">
        <div className="max-w-[1160px] mx-auto px-margin-mobile md:px-margin">
          <div className="inline-flex items-center gap-space-xs font-meta-tag text-meta-tag uppercase tracking-wider text-on-surface-variant bg-surface-container px-3 py-1 rounded-full shadow-sm mb-space-md">
            <span className="w-1.5 h-1.5 rounded-full bg-error" />
            <span>HTTP 404 // UNRESOLVED WAYPOINT</span>
          </div>
          <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight mb-space-xs font-semibold">
            Route coordinate does not exist<span className="text-primary">.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            The requested endpoint or path is unmapped in this deployment. Please verify the URL or
            select a verified waypoint from the architectural index below.
          </p>
        </div>
      </section>

      <section className="w-full max-w-[1160px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        {/* Quick Route Filter Bar */}
        <div className="p-space-md rounded-xl bg-surface-container mb-space-lg flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md border border-outline-variant/30">
          <div className="flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-[22px]">manage_search</span>
            </div>
            <div>
              <span className="font-meta-tag text-meta-tag text-on-surface-variant uppercase tracking-wider block">
                Automatic Fallback
              </span>
              <p className="font-body-sm text-body-sm text-on-surface">
                Filter verified routes or target sections:
              </p>
            </div>
          </div>

          <div className="flex items-center gap-space-sm w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Filter waypoints (e.g. AEM, Vision)"
                className="w-full h-10 px-space-sm pl-9 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-outline border border-outline-variant/30"
              />
              <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-outline text-[18px]">
                search
              </span>
            </div>
            {filterQuery && (
              <button
                type="button"
                onClick={() => setFilterQuery('')}
                className="h-10 px-space-sm rounded-lg bg-surface-container-highest text-on-surface-variant font-body-sm text-body-sm hover:text-on-surface transition-colors cursor-pointer"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Waypoint Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {filteredWaypoints.map((w) => (
            <Link
              key={w.path}
              to={w.path}
              className="group p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-all flex flex-col justify-between gap-space-md border border-outline-variant/30 hover:border-primary/40 shadow-sm"
            >
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-label-code text-primary group-hover:text-tertiary">
                    {w.path}
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-transform group-hover:translate-x-0.5 text-[20px]">
                    arrow_forward
                  </span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors font-semibold">
                  {w.label}
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {w.desc}
                </p>
              </div>
              <div className="flex items-center gap-1 font-meta-tag text-meta-tag text-outline uppercase pt-space-xs border-t border-outline-variant/20">
                <span>{w.num}</span>
                <span>•</span>
                <span>{w.tag}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
