import { Helmet } from 'react-helmet-async'
import { SITE_METADATA } from '../content/siteData'
import { JsonLd } from './JsonLd'
import { buildRouteJsonLd } from '../content/schema'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  path?: string
  canonical?: string
  type?: string
  ogImage?: string
  noindex?: boolean
  article?: {
    publishedTime?: string
    author?: string
    tags?: string[]
  }
  jsonLd?: Record<string, unknown>
}

export function SEO({
  title,
  description,
  keywords,
  path,
  canonical,
  type,
  ogImage,
  noindex,
  article,
  jsonLd,
}: SEOProps) {
  const fullTitle = title
    ? title.includes('Harsh Sinha')
      ? title
      : `${title} — ${SITE_METADATA.brandName}`
    : SITE_METADATA.title

  const metaDescription = description || SITE_METADATA.description
  const targetPath = canonical || path || '/'
  const canonicalUrl = `${SITE_METADATA.url}${targetPath === '/' ? '/' : targetPath}`
  const image =
    ogImage || `${SITE_METADATA.url}/images/harsh-sinha-software-engineer.png`

  // Use page-appropriate Open Graph types: profile for profile/about page, article for articles, website for others
  const ogType =
    type ||
    (article || targetPath.startsWith('/writing/')
      ? 'article'
      : targetPath === '/about'
        ? 'profile'
        : 'website')

  const schemaData =
    jsonLd ||
    buildRouteJsonLd({
      path: targetPath,
      title: fullTitle,
      description: metaDescription,
      type: ogType,
      article,
    })

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="author" content={SITE_METADATA.name} />
        {/* Note: application-name and apple-mobile-web-app-title are preserved statically in index.html to avoid duplication */}
        <meta
          name="robots"
          content={
            noindex
              ? 'noindex, nofollow'
              : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          }
        />
        <meta name="theme-color" content="#f1fdee" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="me" href={SITE_METADATA.linkedinUrl} />
        <link rel="me" href={SITE_METADATA.instagramUrl} />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="llms.txt" />

        {/* OpenGraph */}
        <meta property="og:type" content={ogType} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Harsh Sinha | Software Engineer" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="956" />
        <meta property="og:image:alt" content={fullTitle} />

        {ogType === 'profile' && <meta property="profile:first_name" content="Harsh" />}
        {ogType === 'profile' && <meta property="profile:last_name" content="Sinha" />}
        {ogType === 'profile' && <meta property="profile:username" content="thegeekharsh" />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thegeekharsh" />
        <meta name="twitter:creator" content="@thegeekharsh" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={image} />

        {article?.publishedTime && (
          <meta property="article:published_time" content={article.publishedTime} />
        )}
        {article?.author && <meta property="article:author" content={article.author} />}
        {article?.tags?.map((tag) => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}
      </Helmet>
      <JsonLd data={schemaData} />
    </>
  )
}
