import { site } from '../content/site'
import { Reveal } from '../components/Reveal'
import { Link } from '../router'

export function Contact() {
  const c = site.contact
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-pad border-t border-hairline"
    >
      <div className="container-page">
        <Reveal as="h2">
          <span id="contact-title" className="block max-w-[14ch] font-display text-giant">
            {c.headline}
          </span>
        </Reveal>

        <a
          href={`mailto:${c.email}`}
          className="link-u link-u-on mt-12 break-words font-display text-mail md:mt-20"
        >
          <span>{c.email}</span>
        </a>

        <ul className="mt-16 grid border-t border-hairline md:mt-24 md:grid-cols-2">
          {c.routes.map((r, i) => (
            <li
              key={r.label}
              className={`border-hairline py-8 md:py-10 ${
                i === 0 ? 'border-b md:border-b-0 md:border-r md:pr-8' : 'md:pl-8'
              }`}
            >
              <a
                href={r.href}
                {...(r.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group block"
              >
                <span className="link-u font-display text-h3">
                  <span>
                    {r.label}
                    <span aria-hidden="true"> →</span>
                    {r.external && <span className="sr-only"> (opens in a new tab)</span>}
                  </span>
                </span>
                {'detail' in r && <span className="mt-2 block text-muted">{r.detail}</span>}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-hairline pt-6">
          <a
            href={c.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-u inline-flex min-h-[44px] items-center font-display text-lg font-medium"
          >
            <span>
              {c.linkedin.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
          </a>
          <Link
            to="/contact"
            className="link-u inline-flex min-h-[44px] items-center font-display text-base font-medium text-ink"
          >
            Visit dedicated contact hub →
          </Link>
        </div>
      </div>
    </section>
  )
}
