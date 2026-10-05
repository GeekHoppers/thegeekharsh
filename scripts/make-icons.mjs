// Generates the typographic TGH favicon set and a placeholder OG image into public/.
import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const pub = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public')
const font = "'Space Grotesk', 'Arial Black', Arial, sans-serif"

const mono = (
  size,
  pad,
) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
<rect width="${size}" height="${size}" fill="#111111"/>
<text x="50%" y="${size * 0.64}" text-anchor="middle" font-family="${font}" font-weight="700" font-size="${size * 0.42}" letter-spacing="${-size * 0.025}" fill="#F7F7F5">TGH</text>
<rect x="${size * 0.2}" y="${size * 0.74 + pad}" width="${size * 0.6}" height="${Math.max(2, size * 0.03)}" fill="#8B7CF6"/>
</svg>`

writeFileSync(resolve(pub, 'favicon.svg'), mono(64, 0))
await sharp(Buffer.from(mono(256, 0)))
  .resize(32, 32)
  .png()
  .toFile(resolve(pub, 'favicon-32.png'))
await sharp(Buffer.from(mono(512, 0)))
  .resize(180, 180)
  .png()
  .toFile(resolve(pub, 'apple-touch-icon.png'))
await sharp(Buffer.from(mono(512, 0)))
  .png()
  .toFile(resolve(pub, 'icon-512.png'))
await sharp(Buffer.from(mono(512, 0)))
  .resize(192, 192)
  .png()
  .toFile(resolve(pub, 'icon-192.png'))

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#F7F7F5"/>
<text x="70" y="330" font-family="${font}" font-weight="700" font-size="150" letter-spacing="-8" fill="#111111">HARSH SINHA</text>
<rect x="74" y="370" width="120" height="6" fill="#8B7CF6"/>
<text x="70" y="450" font-family="${font}" font-size="38" fill="#111111">Founder &amp; CEO — Geek Hoppers · Software Engineer</text>
<text x="70" y="570" font-family="${font}" font-weight="700" font-size="28" letter-spacing="2" fill="#686868">THE GEEK HARSH · thegeekharsh.in</text>
</svg>`
await sharp(Buffer.from(og)).png().toFile(resolve(pub, 'og-image.png'))
console.log('icons + og-image written to public/')
