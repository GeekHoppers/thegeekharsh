import { site } from '../content/site'
import { Reveal } from '../components/Reveal'

export function Engineering() {
  const e = site.engineering
  return (
    <section
      id="engineering"
      aria-labelledby="eng-title"
      className="section-pad border-t border-hairline"
    >
      <div className="container-page grid gap-x-8 gap-y-6 md:grid-cols-12">
        <p className="label md:col-span-2 md:pt-3">
          {e.num} / {e.label}
        </p>
        <div className="md:col-span-10">
          <Reveal as="h2">
            <span id="eng-title" className="block font-display text-h2">
              {e.headline}
            </span>
          </Reveal>
        </div>

        <div className="mt-6 grid md:col-span-10 md:col-start-3 md:mt-12 md:grid-cols-3">
          {e.columns.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.08}
              className={`border-t border-hairline py-8 md:border-t-0 md:py-2 ${
                i > 0 ? 'md:border-l md:pl-8' : ''
              } ${i < 2 ? 'md:pr-8' : ''}`}
            >
              <h3 className="font-display text-h3">{c.title}</h3>
              <p className="mt-4 text-muted">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
