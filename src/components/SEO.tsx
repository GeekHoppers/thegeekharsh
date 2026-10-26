import { Helmet } from 'react-helmet-async'
import { SITE_METADATA } from '../content/siteData'

interface SEOProps {
  title?: string
  description?: string
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
}

export function SEO({ title, description, path, canonical, type, ogImage, noindex, article }: SEOProps) {
  const fullTitle = title
    ? `${title} — ${SITE_METADATA.brandName}`
    : `${SITE_METADATA.name} — ${SITE_METADATA.brandName}`
  const metaDescription = description || SITE_METADATA.description
  const targetPath = canonical || path || '/'
  const canonicalUrl = `${SITE_METADATA.url}${targetPath === '/' ? '' : targetPath}`
  const image = ogImage || `${SITE_METADATA.url}/og-image.png`
  const ogType = type || (article ? 'article' : 'website')

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={SITE_METADATA.name} />
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
      <link rel="alternate" type="text/markdown" href="/llms.txt" title="llms.txt" />

      {/* OpenGraph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content={SITE_METADATA.brandName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
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
  )
}
