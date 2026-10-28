import { readFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')

console.log('--- Verifying SEO, Sitemap, Google Site Name, About Portrait, and JSON-LD Configuration ---')

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

  const locMatches = [...content.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1])
  assert(locMatches.length === EXPECTED_ROUTES.length, `${dir}/sitemap.xml contains exactly ${EXPECTED_ROUTES.length} URLs (found ${locMatches.length})`)

  const uniqueLocs = new Set(locMatches)
  assert(uniqueLocs.size === locMatches.length, `${dir}/sitemap.xml contains no duplicate URLs`)

  for (const r of EXPECTED_ROUTES) {
    const expectedUrl = r === '/' ? `${CANONICAL_ORIGIN}/` : `${CANONICAL_ORIGIN}${r}`
    assert(uniqueLocs.has(expectedUrl), `${dir}/sitemap.xml contains canonical URL for ${r} (${expectedUrl})`)
  }

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

// 3. Check prerendered HTML in dist/index.html
const indexHtml = readFileSync(resolve(dist, 'index.html'), 'utf8')

// Canonical & Robots
assert(
  /<link[^>]*rel="canonical"[^>]*href="https:\/\/www\.thegeekharsh\.in\/?\"/.test(indexHtml),
  'dist/index.html has canonical link to www.thegeekharsh.in/'
)
assert(indexHtml.includes('name="robots" content="index, follow'), 'dist/index.html is set to index, follow')

// Homepage Metadata
assert(indexHtml.includes('Harsh Sinha — Software Engineer · Enterprise Web'), 'dist/index.html contains original title')
assert(indexHtml.includes('Software engineer working across enterprise web platforms'), 'dist/index.html contains original description')
assert(indexHtml.includes('property="og:site_name" content="Harsh Sinha - Software Engineer"'), 'dist/index.html has og:site_name "Harsh Sinha - Software Engineer"')
assert(indexHtml.includes('property="og:type" content="website"'), 'dist/index.html has page-appropriate og:type "website"')

// Duplicate tag check: exactly 1 application-name and apple-mobile-web-app-title
const appNameMatches = indexHtml.match(/name="application-name"/g) || []
assert(appNameMatches.length === 1, `dist/index.html has exactly 1 application-name meta tag (found ${appNameMatches.length})`)
const appTitleMatches = indexHtml.match(/name="apple-mobile-web-app-title"/g) || []
assert(appTitleMatches.length === 1, `dist/index.html has exactly 1 apple-mobile-web-app-title meta tag (found ${appTitleMatches.length})`)

// Single JSON-LD script assertion
const indexJsonLdMatches = indexHtml.match(/<script[^>]*type="application\/ld\+json"[^>]*>/g) || []
assert(indexJsonLdMatches.length === 1, `dist/index.html contains exactly 1 JSON-LD script tag (found ${indexJsonLdMatches.length})`)

// Homepage JSON-LD Schema: WebSite root + Person (NOT ProfilePage, no worksFor, no Founder/CEO)
assert(indexHtml.includes('"@type":"WebSite"') || indexHtml.includes('"@type": "WebSite"'), 'dist/index.html includes WebSite JSON-LD')
assert(indexHtml.includes('"name":"Harsh Sinha - Software Engineer"') || indexHtml.includes('"name": "Harsh Sinha - Software Engineer"'), 'WebSite JSON-LD sets name to "Harsh Sinha - Software Engineer"')
const indexJsonLdContent = (indexHtml.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/) || [])[1] || ''
assert(!indexJsonLdContent.includes('"ProfilePage"'), 'dist/index.html does NOT stamp ProfilePage on homepage root')
assert(!indexJsonLdContent.includes('worksFor'), 'Homepage schema contains no worksFor')
assert(!indexJsonLdContent.includes('Founder'), 'Homepage schema contains no Founder')
assert(!indexJsonLdContent.includes('CEO'), 'Homepage schema contains no CEO')
assert(indexJsonLdContent.includes('https://www.linkedin.com/in/thegeekharsh'), 'Homepage schema sameAs contains LinkedIn')
assert(indexJsonLdContent.includes('https://www.instagram.com/thegeekharsh/'), 'Homepage schema sameAs contains Instagram')

// 4. Check About Page Prerendered HTML
const aboutHtmlPath = resolve(dist, 'about', 'index.html')
assert(existsSync(aboutHtmlPath), 'dist/about/index.html exists')
if (existsSync(aboutHtmlPath)) {
  const aboutHtml = readFileSync(aboutHtmlPath, 'utf8')

  // Canonical and unique metadata
  assert(
    /<link[^>]*rel="canonical"[^>]*href="https:\/\/www\.thegeekharsh\.in\/about\"/.test(aboutHtml),
    'dist/about/index.html has canonical link to /about'
  )
  assert(aboutHtml.includes('property="og:type" content="profile"'), 'dist/about/index.html has og:type "profile"')
  assert(aboutHtml.includes('property="profile:first_name" content="Harsh"'), 'dist/about/index.html has profile:first_name')
  assert(aboutHtml.includes('About — Harsh Sinha'), 'dist/about/index.html has unique About page title')

  // Single JSON-LD script on About page
  const aboutJsonLdMatches = aboutHtml.match(/<script[^>]*type="application\/ld\+json"[^>]*>/g) || []
  assert(aboutJsonLdMatches.length === 1, `dist/about/index.html contains exactly 1 JSON-LD script tag (found ${aboutJsonLdMatches.length})`)

  // About page JSON-LD Schema: ProfilePage representing Harsh Sinha
  const aboutJsonLdContent = (aboutHtml.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/) || [])[1] || ''
  assert(aboutJsonLdContent.includes('"ProfilePage"'), 'dist/about/index.html includes ProfilePage schema')
  assert(aboutJsonLdContent.includes('https://www.thegeekharsh.in/about'), 'ProfilePage URL is canonical /about')
  assert(aboutJsonLdContent.includes('harsh-sinha-software-engineer'), 'Person schema contains supplied portrait URL')
  assert(aboutJsonLdContent.includes('"jobTitle":"Software Engineer"') || aboutJsonLdContent.includes('"jobTitle": "Software Engineer"'), 'Person schema jobTitle is Software Engineer')
  assert(!aboutJsonLdContent.includes('worksFor'), 'About schema contains no worksFor')
  assert(!aboutJsonLdContent.includes('Founder'), 'About schema contains no Founder')
  assert(!aboutJsonLdContent.includes('CEO'), 'About schema contains no CEO')

  // Visible About page identity: Software Engineer only, no Founder or CEO
  assert(aboutHtml.includes('Harsh Sinha'), 'dist/about/index.html shows visible name Harsh Sinha')
  assert(aboutHtml.includes('Software Engineer'), 'dist/about/index.html visibly displays role "Software Engineer"')
  assert(!aboutHtml.includes('Founder &amp; CEO'), 'dist/about/index.html does NOT mention Founder & CEO')
  assert(!aboutHtml.includes('Founder & CEO'), 'dist/about/index.html does NOT mention Founder & CEO')

  // About portrait element assertions: URL, alt, dimensions, loading
  assert(
    aboutHtml.includes('harsh-sinha-software-engineer'),
    'About hero renders the new portrait asset'
  )
  assert(
    aboutHtml.includes('alt="Harsh Sinha, Software Engineer"'),
    'About portrait alt text is "Harsh Sinha, Software Engineer"'
  )
  assert(aboutHtml.includes('width="1024"'), 'About portrait has explicit width 1024')
  assert(aboutHtml.includes('height="956"'), 'About portrait has explicit height 956')
  assert(aboutHtml.includes('loading="eager"'), 'About portrait has eager loading attribute')
  assert(aboutHtml.includes('fetchpriority="high"'), 'About portrait has fetchpriority="high"')
}

// 5. Check Removal of Incorrect "Staff" Labels in all 5 articles
const articleFiles = [
  'src/pages/ArticleAemBlocksPage.tsx',
  'src/pages/ArticleDamWorkflowsPage.tsx',
  'src/pages/ArticleAssetLimitsPage.tsx',
  'src/pages/ArticleVisionPrototypePage.tsx',
  'src/pages/ArticleMcpPortalPage.tsx',
]
for (const file of articleFiles) {
  const filePath = resolve(root, file)
  const content = readFileSync(filePath, 'utf8')
  assert(!content.includes('Staff'), `${file} does not contain incorrect "Staff" label`)
  assert(content.includes('Software Engineer'), `${file} has accurate role "Software Engineer"`)
}

// 6. Strict Constraint Check: NO GitHub references anywhere in dist/index.html or dist/llms.txt
assert(!indexHtml.includes('github.com'), 'dist/index.html contains 0 GitHub links')
const llmsTxt = readFileSync(resolve(dist, 'llms.txt'), 'utf8')
assert(!llmsTxt.includes('github.com'), 'dist/llms.txt contains 0 GitHub links')

// 7. 404 page checks
if (existsSync(resolve(dist, '404.html'))) {
  const notFoundHtml = readFileSync(resolve(dist, '404.html'), 'utf8')
  assert(notFoundHtml.includes('name="robots" content="noindex, nofollow"'), 'dist/404.html is correctly marked noindex, nofollow')
}

// 8. Check vercel.json
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
  console.log('🎉 All SEO, sitemap, Google Site Name, About portrait, and JSON-LD verification checks passed!')
}
