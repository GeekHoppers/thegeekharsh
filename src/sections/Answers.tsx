import { faq } from '../content/site'

/**
 * Visible, plain-text Q&A. Mirrors the FAQPage JSON-LD and llms.txt so answer engines can
 * quote self-contained answers that match the on-page content.
 */
export function Answers() {
  return (
    <section
      id="answers"
      aria-labelledby="answers-title"
      className="section-pad border-hairline border-t"
    >
      <div className="container-page grid gap-x-8 gap-y-6 md:grid-cols-12">
        <p className="label md:col-span-2 md:pt-3">08 / Answers</p>
        <div className="md:col-span-10">
          <h2 id="answers-title" className="text-h2 font-display">
            Quick answers.
          </h2>
          <dl className="mt-10 md:mt-14">
            {faq.map((f, i) => (
              <div
                key={f.q}
                className={`border-hairline grid gap-2 border-t py-6 md:grid-cols-10 md:gap-8 md:py-8 ${
                  i === faq.length - 1 ? 'border-b' : ''
                }`}
              >
                <dt className="font-display text-xl tracking-tight md:col-span-4 md:text-2xl">
                  {f.q}
                </dt>
                <dd className="text-muted md:col-span-6">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
