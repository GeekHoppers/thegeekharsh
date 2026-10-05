import { Helmet } from 'react-helmet-async'
import { LINKEDIN_URL, site } from '../content/site'
import { jsonLdString } from '../content/schema'

export function SEO() {
  const { seo, url } = site
  return (
    <Helmet>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={site.name} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="theme-color" content={seo.themeColor} />
      <link rel="canonical" href={url} />
      <link rel="me" href={LINKEDIN_URL} />
      <link rel="alternate" type="text/markdown" href="/llms.txt" title="llms.txt" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="The Geek Harsh" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={seo.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="THE GEEK HARSH — Harsh Sinha" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.ogImage} />
      <script type="application/ld+json">{jsonLdString()}</script>
    </Helmet>
  )
}
