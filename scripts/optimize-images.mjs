// Generates responsive AVIF/WebP/JPG variants for photos dropped in public/images/.
// Source files: harsh-portrait.jpg, harsh-candid.jpg. Missing sources are skipped.
import { existsSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const dir = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images')
mkdirSync(dir, { recursive: true })
const widths = [480, 800, 1200]
const names = ['harsh-portrait', 'harsh-candid']

for (const name of names) {
  const src = resolve(dir, `${name}.jpg`)
  if (!existsSync(src)) {
    console.log(`skip ${name}.jpg (not found — placeholder will be shown)`)
    continue
  }
  for (const w of widths) {
    const img = () => sharp(src).rotate().resize({ width: w, withoutEnlargement: true })
    await img()
      .webp({ quality: 78 })
      .toFile(resolve(dir, `${name}-${w}.webp`))
    await img()
      .avif({ quality: 55 })
      .toFile(resolve(dir, `${name}-${w}.avif`))
  }
  console.log(`optimised ${name}`)
}

// Process the portrait: harsh-sinha-software-engineer.png
const newPortraitSrc = resolve(dir, 'harsh-sinha-software-engineer.png')
if (existsSync(newPortraitSrc)) {
  const portraitWidths = [480, 800, 1024]
  for (const w of portraitWidths) {
    const img = () => sharp(newPortraitSrc).rotate().resize({ width: w, withoutEnlargement: true })
    await img()
      .webp({ quality: 82 })
      .toFile(resolve(dir, `harsh-sinha-software-engineer-${w}.webp`))
    await img()
      .avif({ quality: 60 })
      .toFile(resolve(dir, `harsh-sinha-software-engineer-${w}.avif`))
  }
  // Also create a high-quality WebP copy of the full portrait for open-graph or schema
  await sharp(newPortraitSrc)
    .rotate()
    .webp({ quality: 85 })
    .toFile(resolve(dir, 'harsh-sinha-software-engineer.webp'))
  console.log('optimised harsh-sinha-software-engineer variants')
}

// Ensure harsh-sinha-thegeekharsh.webp is created for schema.org ProfilePage Person entity
const primaryPortrait = resolve(dir, 'harsh-portrait.jpg')
if (existsSync(primaryPortrait)) {
  await sharp(primaryPortrait)
    .rotate()
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(resolve(dir, 'harsh-sinha-thegeekharsh.webp'))
  console.log('optimised harsh-sinha-thegeekharsh.webp')
}
