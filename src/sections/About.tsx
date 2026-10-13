import { site } from '../content/site'
import { Photo } from '../components/Photo'
import { Reveal } from '../components/Reveal'
import { Link } from '../router'

export function About() {
  const { about } = site
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad">
      <div className="container-page grid gap-x-8 gap-y-6 md:grid-cols-12">
        <p className="label md:col-span-2 md:pt-3">
          {about.num} / {about.label}
        </p>
        <div className="md:col-span-10">
          <Reveal as="h2">
            <span id="about-title" className="block font-display text-h2">
              {about.headline}
            </span>
          </Reveal>
          <Reveal as="p" className="mt-8 max-w-[46ch] text-lg md:text-xl">
            {about.copy}
          </Reveal>
        </div>

        <div aria-hidden="true" className="mt-10 md:col-span-12 md:mt-16">
          {about.words.map((w, i) => (
            <p
              key={w}
              className={`font-display text-giant ${
                i === 1 ? 'md:pl-[16%]' : i === 2 ? 'md:pl-[32%]' : ''
              }`}
            >
              {w}
            </p>
          ))}
        </div>
        <ul className="sr-only">
          {about.words.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>

        <div className="mt-8 md:col-span-7 md:col-start-1 md:mt-16">
          <Photo
            {...about.photo}
            sizes="(min-width: 1280px) 700px, (min-width: 768px) 58vw, 100vw"
            className="w-full"
          />
        </div>

        <div className="mt-6 md:col-span-12">
          <Link
            to="/about"
            className="link-u font-display text-base font-medium text-ink"
          >
            Read full background &amp; story →
          </Link>
        </div>
      </div>
    </section>
  )
}
