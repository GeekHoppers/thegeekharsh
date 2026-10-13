import { site } from '../content/site'
import { Reveal } from '../components/Reveal'
import { Link } from '../router'

export function Research() {
  const r = site.research
  return (
    <section
      id="research"
      aria-labelledby="research-title"
      className="section-pad border-t border-hairline"
    >
      <div className="container-page grid gap-x-8 gap-y-6 md:grid-cols-12">
        <p className="label md:col-span-2 md:pt-3">
          {r.num} / {r.label}
        </p>
        <article className="md:col-span-10">
          <Reveal as="h2">
            <span id="research-title" className="block max-w-[22ch] font-display text-h1">
              {r.title}
            </span>
          </Reveal>
          <div className="mt-10 grid gap-x-8 gap-y-6 border-t border-hairline pt-8 md:mt-14 md:grid-cols-10">
            <p className="text-muted md:col-span-4">{r.meta}</p>
            <div className="md:col-span-5 md:col-start-6">
              <p className="text-lg md:text-xl">{r.copy}</p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href={r.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-u link-u-on inline-flex min-h-[44px] items-center font-display text-lg font-medium"
                >
                  <span>
                    {r.link.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
                <Link
                  to="/research"
                  className="link-u inline-flex min-h-[44px] items-center font-display text-base font-medium text-ink"
                >
                  Full paper analysis &amp; architecture →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
