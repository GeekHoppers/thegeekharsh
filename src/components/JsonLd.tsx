import { Helmet } from 'react-helmet-async'
import { buildRouteJsonLd } from '../content/schema'

export const SITE_JSON_LD = buildRouteJsonLd({
  path: '/',
  title: 'Harsh Sinha — Software Engineer · Enterprise Web & Applied AI',
  description:
    'Software engineer working across enterprise web platforms (AEM 6.5, Edge Delivery Services), full-stack systems, and applied AI research.',
})

interface JsonLdProps {
  data?: Record<string, unknown>
}

export function JsonLd({ data = SITE_JSON_LD }: JsonLdProps) {
  if (!data) return null
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data).replace(/</g, '\\u003c')}
      </script>
    </Helmet>
  )
}
