import { useEffect, useRef, useState } from 'react'

interface PhotoProps {
  /** Path without extension, e.g. "/images/harsh-portrait". Expects .jpg or .png plus generated -480/-800/-1200 .avif/.webp. */
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  fit?: 'contain' | 'cover'
  fallbackExt?: 'jpg' | 'png'
  caption?: string
}

const WIDTHS = [480, 800, 1200]

const srcset = (src: string, ext: string) =>
  WIDTHS.map((w) => `${src}-${w}.${ext} ${w}w`).join(', ')

/**
 * Responsive AVIF/WebP/JPG/PNG image with graceful fallback.
 * Uses exact aspect-ratio to prevent Cumulative Layout Shift (CLS).
 */
export function Photo({
  src,
  alt,
  width,
  height,
  className = '',
  priority,
  sizes,
  fit = 'cover',
  fallbackExt = 'jpg',
}: PhotoProps) {
  const [failed, setFailed] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth === 0) setFailed(true)
  }, [])

  return (
    <div
      className={`relative overflow-hidden rounded-sm ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {failed ? (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-end bg-[#E6E6E1] p-5 font-body text-xs uppercase tracking-[0.18em] text-ink"
        >
          <span aria-hidden="true">Photo coming soon</span>
        </div>
      ) : (
        <picture>
          <source type="image/avif" srcSet={srcset(src, 'avif')} sizes={sizes} />
          <source type="image/webp" srcSet={srcset(src, 'webp')} sizes={sizes} />
          <img
            ref={imgRef}
            src={`${src}.${fallbackExt}`}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            loading={priority ? 'eager' : 'lazy'}
            {...(priority ? ({ fetchpriority: 'high' } as Record<string, string>) : {})}
            decoding="async"
            onError={() => setFailed(true)}
            className={`absolute inset-0 h-full w-full ${
              fit === 'contain' ? 'object-contain object-bottom' : 'object-cover object-top'
            }`}
          />
        </picture>
      )}
    </div>
  )
}
