// Generates the exact navbar GH badge icon set and OG image into public/.
import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const pub = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public')
const font = "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"

// Responsive SVG Favicon that matches the navbar GH badge in both dark and light modes
const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <style>
    .bg { fill: #1a241b; stroke: #344235; }
    .txt { fill: #a8ce8e; }
    @media (prefers-color-scheme: light) {
      .bg { fill: #e6f1e2; stroke: #c4c8b9; }
      .txt { fill: #39531b; }
    }
  </style>
  <rect class="bg" x="2" y="2" width="60" height="60" rx="15" stroke-width="2.5"/>
  <text class="txt" x="32" y="44" text-anchor="middle" font-family="${font}" font-weight="800" font-size="32" letter-spacing="-1.5">GH</text>
</svg>
`

// Generates raster PNG icon markup matching the navbar badge
const generateRasterSvg = (size) => {
  const strokeWidth = Math.max(2, Math.round(size * 0.04))
  const radius = Math.round(size * 0.24)
  const offset = strokeWidth / 2
  const rectSize = size - strokeWidth
  const fontSize = Math.round(size * 0.5)
  const textY = Math.round(size * 0.69)
  const letterSpacing = Math.round(-size * 0.025)

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect x="${offset}" y="${offset}" width="${rectSize}" height="${rectSize}" rx="${radius}" fill="#1a241b" stroke="#344235" stroke-width="${strokeWidth}"/>
  <text x="50%" y="${textY}" text-anchor="middle" font-family="${font}" font-weight="800" font-size="${fontSize}" letter-spacing="${letterSpacing}" fill="#a8ce8e">GH</text>
</svg>`
}

writeFileSync(resolve(pub, 'favicon.svg'), svgFavicon)

await sharp(Buffer.from(generateRasterSvg(256)))
  .resize(32, 32)
  .png()
  .toFile(resolve(pub, 'favicon-32.png'))

await sharp(Buffer.from(generateRasterSvg(512)))
  .resize(180, 180)
  .png()
  .toFile(resolve(pub, 'apple-touch-icon.png'))

await sharp(Buffer.from(generateRasterSvg(512)))
  .resize(192, 192)
  .png()
  .toFile(resolve(pub, 'icon-192.png'))

await sharp(Buffer.from(generateRasterSvg(512)))
  .png()
  .toFile(resolve(pub, 'icon-512.png'))

// Brand Harmonious OpenGraph Image
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#121713"/>
  <!-- Navbar GH Badge Mark -->
  <rect x="80" y="80" width="88" height="88" rx="22" fill="#1a241b" stroke="#344235" stroke-width="3"/>
  <text x="124" y="141" text-anchor="middle" font-family="${font}" font-weight="800" font-size="44" letter-spacing="-2" fill="#a8ce8e">GH</text>
  
  <text x="80" y="280" font-family="${font}" font-weight="800" font-size="76" letter-spacing="-3" fill="#f2f7f0">Harsh Sinha</text>
  <text x="80" y="340" font-family="${font}" font-weight="500" font-size="32" fill="#a8ce8e">Enterprise Web &amp; Applied AI · Software Engineer</text>
  
  <rect x="80" y="380" width="1040" height="1" fill="#344235"/>
  
  <text x="80" y="440" font-family="${font}" font-size="24" fill="#b0beae">Specializing in Adobe Experience Manager (AEM 6.5, Edge Delivery Services),</text>
  <text x="80" y="475" font-family="${font}" font-size="24" fill="#b0beae">full-stack systems, and applied computer vision research.</text>
  
  <text x="80" y="555" font-family="${font}" font-weight="700" font-size="22" letter-spacing="1" fill="#8c9b8a">THE GEEK HARSH · thegeekharsh.in</text>
</svg>`

await sharp(Buffer.from(og)).png().toFile(resolve(pub, 'og-image.png'))

console.log('Navbar-matched GH icons + og-image successfully generated into public/')
