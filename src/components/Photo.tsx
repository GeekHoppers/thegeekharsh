import { useEffect, useRef, useState } from 'react'

interface PhotoProps {
  /** Path without extension, e.g. "/images/harsh-portrait". Expects .jpg plus generated -480/-800/-1200 .avif/.webp. */
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
}

const WIDTHS = [480, 800, 1200]

const srcset = (src: string, ext: string) =>
  WIDTHS.map((w) => `${src}-${w}.${ext} ${w}w`).join(', ')

/**
 * Responsive AVIF/WebP/JPG image with a neutral placeholder block when the file is missing.
 * Reserves space via aspect-ratio to prevent layout shift.
 */
export function Photo({ src, alt, width, height, className = '', priority, sizes }: PhotoProps) {
  const [failed, setFailed] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    // Covers errors that fired before hydration attached the handler.
    if (img && img.complete && img.naturalWidth === 0) setFailed(true)
  }, [])

  return (
    <div
      className={`relative overflow-hidden rounded-sm bg-[#E6E6E1] ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {failed ? (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-end p-5 font-body text-xs uppercase tracking-[0.18em] text-ink"
        >
          <span aria-hidden="true">Photo coming soon</span>
        </div>
      ) : (
        <picture>
          <source type="image/avif" srcSet={srcset(src, 'avif')} sizes={sizes} />
          <source type="image/webp" srcSet={srcset(src, 'webp')} sizes={sizes} />
          <img
            ref={imgRef}
            src={`${src}.jpg`}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            loading={priority ? 'eager' : 'lazy'}
            {...(priority ? ({ fetchpriority: 'high' } as Record<string, string>) : {})}
            decoding="async"
            onError={() => setFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
      )}
    </div>
  )
}
