import { Link } from '../router'
import { SEO } from '../components/SEO'
import { SKILL_GROUPS, type SkillGroup } from '../content/siteData'

export function SkillsPage() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <SEO
        title="Technical Skills & Architecture — Harsh Sinha · The Geek Harsh"
        description="Comprehensive technical skills matrix: Enterprise CMS, AEM 6.5 & Edge Delivery Services, full-stack systems, data engineering, applied AI, and engineering rigor."
        path="/skills"
      />

      <div className="w-full max-w-[1160px] mx-auto px-gutter-mobile lg:px-gutter py-space-xl">
        {/* Header Strip & Overview */}
        <section className="pt-space-xl pb-space-lg">
          <div className="flex flex-col gap-space-sm max-w-3xl">
            <div className="inline-flex items-center gap-space-xs font-meta-tag text-meta-tag uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              <span>TECHNICAL CAPABILITIES // TAXONOMY</span>
            </div>
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
              Skills &amp; Architecture.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Comprehensive capabilities across enterprise web systems (AEM 6.5, Edge Delivery Services), full-stack integration protocols, and applied AI perception pipelines.
            </p>
          </div>

          {/* Jump Anchor Bar */}
          <div className="mt-space-lg flex flex-wrap items-center gap-1.5 pb-2">
            {[
              { id: 'cms-architecture', label: 'Enterprise CMS & AEM' },
              { id: 'frontend-engineering', label: 'Frontend & Web' },
              { id: 'backend-apis', label: 'Backend & APIs' },
              { id: 'data-repositories', label: 'Data & Storage' },
              { id: 'applied-ai', label: 'Applied AI & Vision' },
              { id: 'engineering-rigor', label: 'Engineering Rigor' },
            ].map((anchor) => (
              <button
                key={anchor.id}
                type="button"
                onClick={() => scrollToSection(anchor.id)}
                className="font-meta-tag text-meta-tag uppercase tracking-wider px-space-md py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all cursor-pointer"
              >
                {anchor.label}
              </button>
            ))}
          </div>
        </section>

        {/* 6 Capability Bento Sections */}
        <div className="flex flex-col gap-space-xl py-space-md">
          {SKILL_GROUPS.map((group, gIdx) => (
            <SkillSection key={group.id} group={group} index={gIdx + 1} />
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <section className="mt-space-lg bg-surface-container-high rounded-xl p-space-lg md:p-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg shadow-sm">
          <div className="space-y-space-xs max-w-xl">
            <span className="font-meta-tag text-meta-tag uppercase tracking-widest text-primary font-semibold">
              Practical Verification
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              See these capabilities in production.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Every skill listed above is grounded in delivered client projects, enterprise deployments, and peer-reviewed research.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-sm w-full md:w-auto">
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-2.5 bg-primary text-on-primary font-body-sm text-body-sm rounded-lg hover:bg-secondary transition-colors shadow-sm"
            >
              <span>Explore projects</span>
              <span className="material-symbols-outlined ml-1 text-[1.1rem]">arrow_forward</span>
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-2.5 bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded-lg hover:bg-surface-container transition-colors shadow-sm"
            >
              <span>Contact me</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

function SkillSection({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <section id={group.id} className="w-full pt-space-lg border-t border-surface-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs mb-space-lg">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="font-label-code text-label-code text-secondary font-semibold">
              {index < 10 ? `0${index}` : index}
            </span>
            <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline">
              {group.eyebrow}
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            {group.title}
          </h2>
        </div>
        <p className="font-label-code text-label-code text-on-surface-variant max-w-sm text-left md:text-right">
          {group.description}
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {group.cards.map((card, cIdx) => {
          // If 3 cards: first two take 6 cols, third takes 12 cols (or all 6/6 if 2 cards)
          const isWide = group.cards.length === 3 && cIdx === 2
          return (
            <div
              key={card.title}
              className={`${
                isWide ? 'md:col-span-12' : 'md:col-span-6'
              } bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow`}
            >
              <div className="flex flex-col gap-space-sm">
                <span className="font-meta-tag text-meta-tag uppercase tracking-wider px-2 py-0.5 rounded bg-surface-container-low text-secondary font-medium w-max">
                  {card.badge}
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                  {card.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {card.description}
                </p>

                <div className="bg-surface-container-low/60 rounded-lg p-space-md my-space-xs">
                  <span className="font-meta-tag text-meta-tag uppercase tracking-wider text-outline block mb-1">
                    {card.highlightsTitle}
                  </span>
                  <ul className="font-body-sm text-body-sm text-on-surface space-y-1 list-disc list-inside">
                    {card.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-space-md flex flex-wrap gap-1.5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-meta-tag text-meta-tag px-2 py-0.5 rounded bg-surface text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
