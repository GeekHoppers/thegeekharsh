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
