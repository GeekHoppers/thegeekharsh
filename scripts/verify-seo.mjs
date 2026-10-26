import { readFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')

console.log('--- Verifying SEO, Sitemap, and Robots Configuration ---')

const EXPECTED_ROUTES = [
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
]

const CANONICAL_ORIGIN = 'https://www.thegeekharsh.in'
const FORBIDDEN_ORIGIN = 'https://thegeekharsh.in'

let errors = 0
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`)
    errors++
  } else {
    console.log(`✅ PASS: ${message}`)
  }
}

// 1. Check sitemap in dist and public
for (const dir of ['dist', 'public']) {
  const sitemapPath = resolve(root, dir, 'sitemap.xml')
  assert(existsSync(sitemapPath), `${dir}/sitemap.xml exists`)

  const content = readFileSync(sitemapPath, 'utf8')
  assert(content.startsWith('<?xml version="1.0" encoding="UTF-8"?>'), `${dir}/sitemap.xml has valid XML declaration`)
  assert(content.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'), `${dir}/sitemap.xml has standard sitemap urlset`)
  assert(!content.includes(FORBIDDEN_ORIGIN + '/'), `${dir}/sitemap.xml does NOT contain non-canonical apex domain URLs`)

  // Extract <loc> tags
  const locMatches = [...content.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1])
  assert(locMatches.length === EXPECTED_ROUTES.length, `${dir}/sitemap.xml contains exactly ${EXPECTED_ROUTES.length} URLs (found ${locMatches.length})`)

  // Check unique URLs
  const uniqueLocs = new Set(locMatches)
  assert(uniqueLocs.size === locMatches.length, `${dir}/sitemap.xml contains no duplicate URLs`)

  // Check all expected routes are present
  for (const r of EXPECTED_ROUTES) {
    const expectedUrl = r === '/' ? `${CANONICAL_ORIGIN}/` : `${CANONICAL_ORIGIN}${r}`
    assert(uniqueLocs.has(expectedUrl), `${dir}/sitemap.xml contains canonical URL for ${r} (${expectedUrl})`)
  }

  // Check no forbidden routes (404, legacy aliases)
  assert(!content.includes('/404'), `${dir}/sitemap.xml does not contain /404`)
  assert(!content.includes('/geek-hoppers'), `${dir}/sitemap.xml does not contain legacy /geek-hoppers`)
  assert(!content.includes('/engineering'), `${dir}/sitemap.xml does not contain legacy /engineering`)
}

// 2. Check robots.txt in dist and public
for (const dir of ['dist', 'public']) {
  const robotsPath = resolve(root, dir, 'robots.txt')
  assert(existsSync(robotsPath), `${dir}/robots.txt exists`)

  const content = readFileSync(robotsPath, 'utf8')
  assert(content.includes(`Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml`), `${dir}/robots.txt points to canonical sitemap (${CANONICAL_ORIGIN}/sitemap.xml)`)
  assert(!content.includes(`Sitemap: ${FORBIDDEN_ORIGIN}/sitemap.xml`), `${dir}/robots.txt does not point to apex domain sitemap`)
}

// 3. Check prerendered HTML in dist
const indexHtml = readFileSync(resolve(dist, 'index.html'), 'utf8')
assert(
  /<link[^>]*rel="canonical"[^>]*href="https:\/\/www\.thegeekharsh\.in\/?\"/.test(indexHtml),
  'dist/index.html has canonical link to www.thegeekharsh.in'
)
assert(indexHtml.includes('name="robots" content="index, follow'), 'dist/index.html is set to index, follow')

if (existsSync(resolve(dist, '404.html'))) {
  const notFoundHtml = readFileSync(resolve(dist, '404.html'), 'utf8')
  assert(notFoundHtml.includes('name="robots" content="noindex, nofollow"'), 'dist/404.html is correctly marked noindex, nofollow')
}

// 4. Check vercel.json
const vercelPath = resolve(root, 'vercel.json')
assert(existsSync(vercelPath), 'vercel.json exists')
const vercelConfig = JSON.parse(readFileSync(vercelPath, 'utf8'))
const sitemapRedirect = vercelConfig.redirects?.find(r => r.source === '/sitemap')
assert(sitemapRedirect && sitemapRedirect.destination === '/sitemap.xml', 'vercel.json redirects /sitemap -> /sitemap.xml')
const sitemapHeader = vercelConfig.headers?.find(h => h.source === '/sitemap.xml')
assert(sitemapHeader && sitemapHeader.headers.some(k => k.key === 'Content-Type' && k.value.includes('xml')), 'vercel.json sets XML Content-Type header for /sitemap.xml')

console.log('----------------------------------------------------')
if (errors > 0) {
  console.error(`❌ Verification completed with ${errors} error(s).`)
  process.exit(1)
} else {
  console.log('🎉 All SEO, sitemap, and robots.txt verification checks passed!')
}
