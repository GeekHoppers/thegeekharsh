import { site } from '../content/site'
import { Reveal } from '../components/Reveal'

export function Path() {
  const p = site.path
  return (
    <section
      id="path"
      aria-labelledby="path-title"
      className="section-pad border-t border-hairline"
    >
      <div className="container-page grid gap-x-8 gap-y-6 md:grid-cols-12">
        <p className="label md:col-span-2 md:pt-3">
          {p.num} / {p.label}
        </p>
        <div className="md:col-span-10">
          <h2 id="path-title" className="sr-only">
            Path
          </h2>
          <ol className="relative ml-1 border-l border-hairline md:ml-0">
            {p.entries.map((e) => (
              <li key={e.role} className="relative pb-10 pl-8 last:pb-0 md:pl-12">
                {/* The olive marker itself is the Geek Hoppers dot for the GH entry. */}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-[0.7rem] h-[9px] w-[9px] -translate-x-1/2 rounded-full ${
                    e.gh ? 'bg-olive' : 'bg-ink'
                  }`}
                />
                <Reveal>
                  {e.period && <p className="label mb-2 text-muted">{e.period}</p>}
                  <p className="max-w-[28ch] font-display text-h3">{e.role}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
