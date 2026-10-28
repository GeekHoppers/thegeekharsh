import { GEEK_HOPPERS_URL, PAPER_URL, SITE_URL, entity, faq, site } from './site'

export const PERSON_ID = `${SITE_URL}/#person`
export const ORG_ID = `${GEEK_HOPPERS_URL}/#organization`
export const PORTRAIT_URL = `${SITE_URL}/images/harsh-sinha-software-engineer.png`
export const LINKEDIN_URL = 'https://www.linkedin.com/in/thegeekharsh'
export const INSTAGRAM_URL = 'https://www.instagram.com/thegeekharsh/'

export const personEntity = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Harsh Sinha',
  alternateName: 'thegeekharsh',
  jobTitle: 'Software Engineer',
  image: PORTRAIT_URL,
  url: `${SITE_URL}/`,
  sameAs: [LINKEDIN_URL, INSTAGRAM_URL],
}

export const websiteEntity = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'Harsh Sinha - Software Engineer',
  alternateName: ['Harsh Sinha', 'thegeekharsh', 'thegeekharsh.in'],
  publisher: { '@id': PERSON_ID },
}

/**
 * Builds the page-appropriate, consolidated JSON-LD graph for any given route.
 * Guarantees exactly one schema script per page without duplication.
 */
export function buildRouteJsonLd(opts: {
  path: string
  title: string
  description: string
  type?: string
  article?: {
    publishedTime?: string
    author?: string
    tags?: string[]
  }
}): Record<string, unknown> {
  const cleanPath = opts.path.replace(/\/+$/, '') || '/'
  const canonicalUrl = `${SITE_URL}${cleanPath === '/' ? '/' : cleanPath}`

  if (cleanPath === '/') {
    // Homepage: WebSite root + Person
    return {
      '@context': 'https://schema.org',
      '@graph': [websiteEntity, personEntity],
    }
  }

  if (cleanPath === '/about') {
    // About page: ProfilePage representing Harsh Sinha
    const profilePageNode = {
      '@type': 'ProfilePage',
      '@id': `${canonicalUrl}#profilepage`,
      url: canonicalUrl,
      name: opts.title,
      description: opts.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntity: { '@id': PERSON_ID },
    }
    return {
      '@context': 'https://schema.org',
      '@graph': [websiteEntity, profilePageNode, personEntity],
    }
  }

  if (cleanPath.startsWith('/writing/')) {
    // Editorial & Technical Articles
    const articleNode = {
      '@type': 'TechArticle',
      '@id': `${canonicalUrl}#article`,
      url: canonicalUrl,
      headline: (opts.title.split('—')[0] ?? opts.title).trim(),
      description: opts.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      author: { '@id': PERSON_ID },
      publisher: { '@id': PERSON_ID },
      inLanguage: 'en',
      ...(opts.article?.publishedTime ? { datePublished: opts.article.publishedTime } : {}),
      ...(opts.article?.tags ? { keywords: opts.article.tags.join(', ') } : {}),
    }
    return {
      '@context': 'https://schema.org',
      '@graph': [websiteEntity, articleNode, personEntity],
    }
  }

  if (cleanPath === '/research' || cleanPath.startsWith('/research/')) {
    const researchNode = {
      '@type': 'ScholarlyArticle',
      '@id': `${SITE_URL}/#research`,
      headline: site.research.title,
      description: site.research.copy,
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
    }
    const pageNode = {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: opts.title,
      description: opts.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
    }
    return {
      '@context': 'https://schema.org',
      '@graph': [websiteEntity, pageNode, researchNode, personEntity],
    }
  }

  // Standard WebPage for projects, skills, experience, contact, etc.
  const pageNode = {
    '@type': opts.type === 'profile' ? 'ProfilePage' : 'WebPage',
    '@id': `${canonicalUrl}#page`,
    url: canonicalUrl,
    name: opts.title,
    description: opts.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [websiteEntity, pageNode, personEntity],
  }
}

/**
 * Legacy/full schema.org graph built entirely from src/content/site.ts.
 * Preserved for backward compatibility.
 */
export function buildJsonLd(): Record<string, unknown> {
  const { research } = site

  return {
    '@context': 'https://schema.org',
    '@graph': [
      websiteEntity,
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/#profilepage`,
        url: `${SITE_URL}/`,
        name: 'Harsh Sinha — Software Engineer',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': PERSON_ID },
      },
      personEntity,
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

export function buildPageJsonLd(opts: {
  url: string
  name: string
  description: string
  type?: string
  breadcrumb?: Array<{ name: string; url: string }>
}): Record<string, unknown> {
  const full = buildJsonLd()
  const graph = Array.isArray(full['@graph']) ? [...full['@graph']] : []
  graph.push({
    '@type': opts.type || 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    ...(opts.breadcrumb
      ? {
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: opts.breadcrumb.map((b, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: b.name,
              item: b.url,
            })),
          },
        }
      : {}),
  })
  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
