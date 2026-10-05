import { entity, posts, site } from '../content/site'
import { withGh } from '../components/OliveDot'
import { Reveal } from '../components/Reveal'

export function Now() {
  const n = site.now
  const w = n.writing
  return (
    <section id="now" aria-labelledby="now-title" className="section-pad border-t border-hairline">
      <div className="container-page grid gap-x-8 gap-y-6 md:grid-cols-12">
        <p className="label md:col-span-2 md:pt-3">
          {n.num} / {n.label}
        </p>
        <div className="md:col-span-10">
          <Reveal as="h2">
            <span id="now-title" className="block font-display text-h2">
              {n.headline}
            </span>
          </Reveal>
          <p className="mt-4 text-sm text-muted">Last updated: <time dateTime={entity.dateModified}>{n.lastUpdated}</time></p>

          <ul className="mt-10 md:mt-14">
            {n.items.map((it, i) => (
              <li
                key={it.title}
                className={`grid gap-2 border-t border-hairline py-6 md:grid-cols-10 md:gap-8 md:py-8 ${
                  i === n.items.length - 1 ? 'border-b' : ''
                }`}
              >
                <p className="font-display text-h3 md:col-span-5">
                  {it.gh ? withGh(it.title) : it.title}
                </p>
                <p className="text-muted md:col-span-5 md:pt-2">{it.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-20 md:mt-28">
            <Reveal as="h3">
              <span className="block font-display text-h3">{w.headline}</span>
            </Reveal>
            <p className="mt-4 max-w-[48ch] text-muted">{w.copy}</p>
            <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-1 font-display text-xl tracking-tight md:text-2xl">
              {w.topics.map((t, i) => (
                <li key={t} className="flex items-center gap-3">
                  <span>{t}</span>
                  {i < w.topics.length - 1 && (
                    <span aria-hidden="true" className="text-muted">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>

            {/* Posts render only once real entries exist in `posts` (src/content/site.ts). */}
            {posts.length > 0 && (
              <ul className="mt-10">
                {posts.map((p) => (
                  <li key={p.slug} className="border-t border-hairline py-5">
                    {p.href ? (
                      <a href={p.href} className="link-u font-display text-xl">
                        <span>{p.title}</span>
                      </a>
                    ) : (
                      <span className="font-display text-xl">{p.title}</span>
                    )}
                    <p className="mt-1 text-sm text-muted">{p.date}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
