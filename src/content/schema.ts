import {
  GEEK_HOPPERS_URL,
  LINKEDIN_URL,
  PAPER_URL,
  SITE_URL,
  entity,
  faq,
  site,
} from './site'

const PERSON_ID = `${SITE_URL}/#person`
const ORG_ID = `${GEEK_HOPPERS_URL}/#organization`

/**
 * schema.org graph built entirely from src/content/site.ts so it always matches visible content.
 * Entities: WebSite, ProfilePage, Person, Organization (Geek Hoppers), ScholarlyArticle, FAQPage.
 */
export function buildJsonLd(): Record<string, unknown> {
  const { geekHoppers, research, contact } = site

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'The Geek Harsh',
        alternateName: site.wordmark,
        description: site.seo.description,
        inLanguage: 'en',
        publisher: { '@id': PERSON_ID },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: site.seo.title,
        inLanguage: 'en',
        dateModified: entity.dateModified,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': PERSON_ID },
        about: { '@id': PERSON_ID },
      },
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: site.name,
        alternateName: entity.alternateName,
        jobTitle: entity.jobTitle,
        description: entity.description,
        url: SITE_URL,
        mainEntityOfPage: { '@id': `${SITE_URL}/#profilepage` },
        email: `mailto:${contact.email}`,
        worksFor: { '@id': ORG_ID },
        alumniOf: { '@type': 'CollegeOrUniversity', name: entity.alumniOf },
        knowsAbout: entity.knowsAbout,
        sameAs: [LINKEDIN_URL],
      },
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'Geek Hoppers',
        url: GEEK_HOPPERS_URL,
        slogan: geekHoppers.tagline,
        description: geekHoppers.copy,
        foundingDate: entity.orgFoundingDate,
        founder: { '@id': PERSON_ID },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Geek Hoppers services',
          itemListElement: geekHoppers.services.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title, provider: { '@id': ORG_ID } },
          })),
        },
      },
      {
        '@type': 'ScholarlyArticle',
        '@id': `${SITE_URL}/#research`,
        headline: research.title,
        description: research.copy,
        url: PAPER_URL,
        datePublished: entity.paperYear,
        inLanguage: 'en',
        author: { '@id': PERSON_ID },
        isPartOf: {
          '@type': 'Book',
          name: entity.paperBook,
          publisher: { '@type': 'Organization', name: entity.paperPublisher },
          datePublished: entity.paperYear,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }
}

/** Serialised for a <script type="application/ld+json"> tag ("<" escaped for safe inlining). */
export const jsonLdString = (): string => JSON.stringify(buildJsonLd()).replace(/</g, '\\u003c')
