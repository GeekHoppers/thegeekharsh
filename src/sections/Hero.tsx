import { site } from '../content/site'
import { Photo } from '../components/Photo'
import { Reveal } from '../components/Reveal'

import { Link } from '../router'

export function Hero() {
  const { hero } = site
  const fullName = hero.name.join(' ')

  return (
    <section aria-labelledby="hero-title" className="pb-16 pt-8 md:pb-24 md:pt-14">
      <div className="container-page">
        <div className="grid items-end gap-x-8 gap-y-12 md:grid-cols-12">
          {/* Left Column: Typography, Narrative, and Actions */}
          <div className="relative z-10 md:col-span-7 lg:col-span-8">
            <p className="label mb-6 text-muted md:mb-8">{hero.kicker}</p>

            <h1
              id="hero-title"
              className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.04em] text-ink"
            >
              {fullName}
            </h1>

            <div className="mt-8 md:mt-12">
              <Reveal
                as="p"
                className="max-w-[20ch] font-display text-h3 leading-[1.08] text-ink"
              >
                {hero.headline}
              </Reveal>

              <Reveal as="p" className="mt-6 max-w-[44ch] text-lg text-muted">
                {hero.support}
              </Reveal>
            </div>

            <Reveal className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5 md:mt-12">
              <Link to={hero.primaryCta.href} className="btn bg-ink text-bg hover:bg-ink/85">
                <span>{hero.primaryCta.label}</span>
              </Link>
              <Link
                to={hero.secondaryCta.href}
                className="link-u link-u-on flex min-h-[44px] items-center font-display text-base font-medium text-ink"
              >
                <span>{hero.secondaryCta.label}</span>
              </Link>
            </Reveal>
          </div>

          {/* Right Column: Harsh Sinha Executive Portrait */}
          <div className="md:col-span-5 lg:col-span-4">
            <figure className="relative mx-auto max-w-[420px] md:max-w-none">
              <div className="relative overflow-hidden rounded-sm bg-[#EAEAE5] px-2 pt-4">
                <Photo
                  {...hero.portrait}
                  priority
                  fit="contain"
                  fallbackExt="png"
                  sizes="(min-width: 1280px) 420px, (min-width: 768px) 40vw, 100vw"
                  className="w-full"
                />
              </div>
              <figcaption className="label mt-3 text-right text-muted">
                Harsh Sinha — Founder &amp; CEO
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
