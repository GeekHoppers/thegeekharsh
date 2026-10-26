// Static pre-rendering: injects server-rendered HTML + <head> tags for each route.
// Run automatically by `npm run build` after the client and SSR builds.
import { readFileSync, writeFileSync, readdirSync, rmSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const ssr = resolve(root, 'dist-ssr', 'entry-server.js')

const { render, buildLlmsTxt, buildLlmsFullTxt } = await import(pathToFileURL(ssr).href)

const template = readFileSync(resolve(dist, 'index.html'), 'utf8')

// Preload fonts if bundled in assets directory
let preload = ''
try {
  const assets = readdirSync(resolve(dist, 'assets'))
  preload = [/geist.*400.*\.woff2$/, /geist.*600.*\.woff2$/, /jetbrains.*400.*\.woff2$/]
    .map((re) => assets.find((f) => re.test(f)))
    .filter(Boolean)
    .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
    .join('\n    ')
} catch {
  // assets directory or custom fonts handled via Google Fonts in index.html
}

const routes = [
  '/',
  '/about',
  '/projects',
  '/projects/gmr-web-platform',
  '/projects/oliver-wyman',
  '/projects/datajam-portal',
  '/projects/careeriens',
  '/projects/garun-drishti',
  '/experience',
  '/skills',
  '/research',
  '/research/real-time-threat-detection',
  '/writing',
  '/writing/designing-maintainable-blocks-in-aem-edge-delivery-services',
  '/writing/debugging-event-driven-dam-workflows-in-aem',
  '/writing/reasoning-about-asset-upload-limits',
  '/writing/lessons-from-building-a-conversational-data-portal',
  '/writing/what-a-computer-vision-prototype-can-and-cannot-prove',
  '/resume',
  '/contact',
  '/privacy',
  '/404',
]

for (const route of routes) {
  const { html, head } = render(route)
  const out = template
    .replace('<!--helmet-->', head)
    .replace('<!--preload-->', preload)
    .replace('<!--app-->', html)

  if (out.includes('<!--app-->') || !out.includes('<h1')) {
    throw new Error(`Prerender failed for route "${route}": markers not replaced or no <h1> in output`)
  }

  if (route === '/') {
    writeFileSync(resolve(dist, 'index.html'), out)
    console.log(`Prerendered dist/index.html (${(out.length / 1024).toFixed(1)} kB)`)
  } else if (route === '/404') {
    writeFileSync(resolve(dist, '404.html'), out)
    console.log(`Prerendered dist/404.html (${(out.length / 1024).toFixed(1)} kB)`)
  } else {
    const routeDir = resolve(dist, route.slice(1))
    mkdirSync(routeDir, { recursive: true })
    writeFileSync(resolve(routeDir, 'index.html'), out)
    console.log(`Prerendered dist/${route.slice(1)}/index.html (${(out.length / 1024).toFixed(1)} kB)`)
  }
}

try {
  const llms = buildLlmsTxt()
  const llmsFull = buildLlmsFullTxt()
  writeFileSync(resolve(dist, 'llms.txt'), llms)
  writeFileSync(resolve(dist, 'llms-full.txt'), llmsFull)
  writeFileSync(resolve(root, 'public', 'llms.txt'), llms)
  writeFileSync(resolve(root, 'public', 'llms-full.txt'), llmsFull)
} catch (e) {
  console.warn('llms text generation notice:', e)
}

// Generate canonical XML sitemap
const sitemapRoutes = routes.filter((r) => r !== '/404')
const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapRoutes.map((r) => {
    const loc = r === '/' ? 'https://www.thegeekharsh.in/' : `https://www.thegeekharsh.in${r}`
    return `  <url>\n    <loc>${loc}</loc>\n  </url>`
  }),
  '</urlset>',
  '',
].join('\n')

writeFileSync(resolve(dist, 'sitemap.xml'), sitemapXml)
writeFileSync(resolve(root, 'public', 'sitemap.xml'), sitemapXml)
console.log(`Generated canonical sitemap.xml with ${sitemapRoutes.length} URLs.`)

rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`Static pre-rendering completed for all ${routes.length} routes.`)
