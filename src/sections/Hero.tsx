import { site } from '../content/site'
import { OliveDot, withGh } from '../components/OliveDot'
import { Photo } from '../components/Photo'
import { Reveal } from '../components/Reveal'

export function Hero() {
  const { hero } = site
  const fullName = hero.name.join(' ')

  return (
    <section aria-labelledby="hero-title" className="pb-12 pt-8 md:pb-16 md:pt-10">
      <div className="container-page">
        {/* Row A: index label, name, eyebrow, hairline */}
        <header>
          <p className="label mb-4 md:mb-6">01 / Index</p>
          <h1
            id="hero-title"
            className="font-display text-[clamp(2.25rem,11vw,3.5rem)] font-bold leading-[0.95] tracking-[-0.03em] md:whitespace-nowrap md:text-[clamp(2.75rem,6.5vw,5.5rem)]"
          >
            {fullName}
          </h1>
          <p className="label mt-4 md:mt-5">{withGh(hero.kicker)}</p>
          <hr className="mt-8 border-0 border-t border-ink/15 md:mt-10" />
        </header>

        {/* Row B: copy (left) + portrait (right) */}
        <div className="mt-8 grid gap-x-8 gap-y-8 md:mt-10 md:grid-cols-12 md:items-stretch">
          <figure className="order-first md:order-none md:col-span-4 md:col-start-9 md:row-start-1">
            <Photo
              {...hero.portrait}
              priority
              sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 100vw"
              className="w-full"
            />
            <figcaption className="label mt-3 text-right">Portrait / Harsh Sinha</figcaption>
          </figure>

          <div className="flex flex-col justify-between gap-10 md:col-span-8 md:col-start-1 md:row-start-1">
            <div>
              <Reveal
                as="p"
                className="max-w-[16ch] font-display text-h3 md:max-w-[18ch]"
              >
                {hero.headline}
              </Reveal>
              <Reveal as="p" className="mt-6 max-w-[42ch] text-lg text-muted">
                {withGh(hero.support)}
              </Reveal>
            </div>

            <Reveal className="flex flex-wrap items-center gap-x-10 gap-y-4">
              <a href={hero.primaryCta.href} className="btn bg-ink text-bg hover:bg-ink/85">
                <span>
                  {hero.primaryCta.label}
                  <OliveDot ring />
                </span>
              </a>
              <a
                href={hero.secondaryCta.href}
                className="link-u link-u-on flex min-h-[44px] items-center font-display text-base font-medium"
              >
                <span>{hero.secondaryCta.label}</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}