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

// Preload the two critical font files (display 500 + body 400, latin subset).
const assets = readdirSync(resolve(dist, 'assets'))
const preload = [/space-grotesk-latin-500-normal.*\.woff2$/, /inter-latin-400-normal.*\.woff2$/]
  .map((re) => assets.find((f) => re.test(f)))
  .filter(Boolean)
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')

const routes = [
  '/',
  '/geek-hoppers',
  '/about',
  '/engineering',
  '/research',
  '/contact',
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
  } else {
    const routeDir = resolve(dist, route.slice(1))
    mkdirSync(routeDir, { recursive: true })
    writeFileSync(resolve(routeDir, 'index.html'), out)
    console.log(`Prerendered dist/${route.slice(1)}/index.html (${(out.length / 1024).toFixed(1)} kB)`)
  }
}

writeFileSync(resolve(dist, 'llms.txt'), buildLlmsTxt())
writeFileSync(resolve(dist, 'llms-full.txt'), buildLlmsFullTxt())
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })
console.log('Static pre-rendering completed for all 6 routes.')
