// Static pre-rendering: injects the server-rendered app + <head> tags into dist/index.html.
// Run automatically by `npm run build` after the client and SSR builds.
import { readFileSync, writeFileSync, readdirSync, rmSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const ssr = resolve(root, 'dist-ssr', 'entry-server.js')

const { render, buildLlmsTxt, buildLlmsFullTxt } = await import(pathToFileURL(ssr).href)
const { html, head } = render()

const template = readFileSync(resolve(dist, 'index.html'), 'utf8')

// Preload the two critical font files (display 500 + body 400, latin subset).
const assets = readdirSync(resolve(dist, 'assets'))
const preload = [/space-grotesk-latin-500-normal.*\.woff2$/, /inter-latin-400-normal.*\.woff2$/]
  .map((re) => assets.find((f) => re.test(f)))
  .filter(Boolean)
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')

const out = template
  .replace('<!--helmet-->', head)
  .replace('<!--preload-->', preload)
  .replace('<!--app-->', html)

if (out.includes('<!--app-->') || !out.includes('<h1')) {
  throw new Error('Prerender failed: markers not replaced or no <h1> in output')
}

writeFileSync(resolve(dist, 'index.html'), out)
writeFileSync(resolve(dist, 'llms.txt'), buildLlmsTxt())
writeFileSync(resolve(dist, 'llms-full.txt'), buildLlmsFullTxt())
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`Prerendered dist/index.html (${(out.length / 1024).toFixed(1)} kB)`)
