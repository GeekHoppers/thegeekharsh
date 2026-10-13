import { site } from '../content/site'
import { Reveal } from '../components/Reveal'
import { Link } from '../router'

export function GeekHoppers() {
  const gh = site.geekHoppers
  return (
    <section
      id="geek-hoppers"
      aria-labelledby="gh-title"
      className="section-pad on-olive bg-olive text-white"
    >
      <div className="container-page grid gap-x-8 gap-y-6 md:grid-cols-12">
        <p className="label md:col-span-2 md:pt-3">
          {gh.num} / {gh.label}
        </p>
        <div className="md:col-span-10">
          <Reveal as="h2">
            <span id="gh-title" className="block font-display text-giant">
              {gh.headline}
            </span>
          </Reveal>
          <Reveal as="p" className="mt-8 max-w-[56ch] text-lg md:text-xl">
            {gh.copy}
          </Reveal>
        </div>

        <ol className="mt-10 md:col-span-10 md:col-start-3 md:mt-16">
          {gh.services.map((s, i) => (
            <li
              key={s.num}
              className={`flex items-baseline gap-5 border-t border-sage py-5 md:gap-10 md:py-7 ${
                i === gh.services.length - 1 ? 'border-b' : ''
              }`}
            >
              <span className="w-[2.5ch] font-display text-2xl tracking-tight md:text-4xl">
                {s.num}
              </span>
              <span className="font-display text-h3">{s.title}</span>
            </li>
          ))}
        </ol>

        <div className="mt-12 md:col-span-10 md:col-start-3 md:mt-20">
          <Reveal as="p" className="font-display text-giant">
            {gh.tagline}
          </Reveal>
        </div>

        <div className="mt-8 grid gap-10 md:col-span-10 md:col-start-3 md:grid-cols-10 md:items-end">
          <div className="md:col-span-6">
            <p className="text-lg">{gh.clients}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={gh.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-white text-white transition-colors hover:bg-white hover:text-olive"
              >
                {gh.cta.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link
                to="/geek-hoppers"
                className="btn bg-white text-ink transition-colors hover:bg-white/90"
              >
                Detailed Overview →
              </Link>
            </div>
          </div>
          <img
            src={gh.logo.src}
            alt={gh.logo.alt}
            width={gh.logo.width}
            height={gh.logo.height}
            loading="lazy"
            decoding="async"
            className="h-auto w-40 md:col-span-4 md:ml-auto md:w-56"
          />
        </div>
      </div>
    </section>
  )
}
