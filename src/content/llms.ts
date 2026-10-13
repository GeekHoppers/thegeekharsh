import { GEEK_HOPPERS_URL, LINKEDIN_URL, PAPER_URL, SITE_URL, entity, faq, site } from './site'

/** Concise llms.txt (llmstxt.org format): a curated entry point for LLM crawlers and agents. */
export function buildLlmsTxt(): string {
  const { geekHoppers, research, contact, now } = site
  return `# Harsh Sinha — The Geek Harsh

> ${entity.description} This is his personal site (${SITE_URL}). He is also known as The Geek Harsh.

Last updated: ${now.lastUpdated}.

## Pages
- [Home Overview](${SITE_URL}/): Full profile and technology platform overview.
- [Geek Hoppers](${SITE_URL}/geek-hoppers): Dedicated company deep-dive, capabilities, and client work.
- [About Harsh Sinha](${SITE_URL}/about): Full story, philosophy, builder mindset, and career path.
- [Engineering Architecture](${SITE_URL}/engineering): Deep-dive into AEM, backend systems, and computer vision.
- [Research & Publications](${SITE_URL}/research): Real-Time Threat Detection System for Campus Security (CRC Press 2025).
- [Contact & Collaboration](${SITE_URL}/contact): Direct communication channels and enterprise inquiries.
- [Plain-Text Archive](${SITE_URL}/llms-full.txt): Complete site content in Markdown.

## Key facts
- Name: ${site.name} (${entity.alternateName})
- Role: ${entity.jobTitle}, Geek Hoppers; software engineer
- Company: Geek Hoppers, a technology company founded in January 2026 — ${GEEK_HOPPERS_URL}
- Services of Geek Hoppers: ${geekHoppers.services.map((s) => s.title).join('; ')}
- Education: B.Tech, Computer Science & Engineering, ${entity.alumniOf} (2021–2025)
- Research: "${research.title}" — ${entity.paperBook}, ${entity.paperPublisher}, ${entity.paperYear} — ${PAPER_URL}

## Contact
- Projects: ${contact.email} and ${GEEK_HOPPERS_URL}
- Speaking, media, collaboration: media@thegeekharsh.in
- LinkedIn: ${LINKEDIN_URL}
`
}

/** Full Markdown rendering of the site's content, derived from src/content/site.ts. */
export function buildLlmsFullTxt(): string {
  const { hero, geekHoppers: gh, about, engineering, path, research, now, contact } = site
  const lines: string[] = []
  const push = (...l: string[]) => lines.push(...l)

  push(
    `# Harsh Sinha — The Geek Harsh`,
    '',
    `> ${hero.kicker}`,
    '',
    `${hero.headline} ${hero.support}`,
    '',
  )
  push(`Canonical URL: ${SITE_URL}`, `Last updated: ${now.lastUpdated}`, '')

  push(`## Geek Hoppers`, '', gh.copy, '')
  gh.services.forEach((s) => push(`${s.num}. ${s.title}`))
  push('', `Tagline: ${gh.tagline}`, gh.clients, `Website: ${GEEK_HOPPERS_URL}`, '')

  push(`## About`, '', about.copy, '', `Roles: ${about.words.join(', ')}`, '')

  push(`## Engineering`, '')
  engineering.columns.forEach((c) => push(`- ${c.title}: ${c.body}`))
  push('')

  push(`## Path`, '')
  path.entries.forEach((e) => push(`- ${e.period ? `${e.period}: ` : ''}${e.role}`))
  push('')

  push(
    `## Research`,
    '',
    `**${research.title}**`,
    '',
    research.meta,
    '',
    research.copy,
    '',
    `Link: ${PAPER_URL}`,
    '',
  )

  push(`## Now`, '', `${now.headline} (Last updated: ${now.lastUpdated})`, '')
  now.items.forEach((i) => push(`- ${i.title} — ${i.body}`))
  push(
    '',
    `### ${now.writing.headline}`,
    '',
    now.writing.copy,
    '',
    `Topics: ${now.writing.topics.join('; ')}`,
    '',
  )

  push(`## Quick answers`, '')
  faq.forEach((f) => push(`### ${f.q}`, '', f.a, ''))

  push(
    `## Contact`,
    '',
    `- Email: ${contact.email}`,
    `- Work with Geek Hoppers: ${GEEK_HOPPERS_URL}`,
    `- Speaking, media, collaboration: media@thegeekharsh.in`,
    `- LinkedIn: ${LINKEDIN_URL}`,
    '',
    site.footer.copyright,
    '',
  )
  return lines.join('\n')
}
