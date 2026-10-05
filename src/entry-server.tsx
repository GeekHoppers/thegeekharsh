import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import type { HelmetServerState } from 'react-helmet-async'
import './styles'
import App from './App'

export { buildLlmsTxt, buildLlmsFullTxt } from './content/llms'

/** Renders the app to static HTML plus <head> tags. Used by scripts/prerender.mjs. */
export function render(): { html: string; head: string; htmlAttributes: string } {
  const context = {} as { helmet: HelmetServerState | null }
  const html = renderToString(
    <HelmetProvider context={context}>
      <App />
    </HelmetProvider>,
  )
  const h = context.helmet
  const head = h
    ? [h.title, h.meta, h.link, h.script].map((x) => x.toString()).join('\n    ')
    : ''
  return { html, head, htmlAttributes: h ? h.htmlAttributes.toString() : '' }
}
