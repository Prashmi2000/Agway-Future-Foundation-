'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const images = [
  { src: '/gallery-3.png', alt: 'Large community meal event', span: 'md:row-span-2' },
  { src: '/gallery-1.png', alt: 'Volunteers at a charity event', span: '' },
  { src: '/service-education.png', alt: 'Children studying in class', span: '' },
  { src: '/gallery-2.png', alt: 'Children receiving school supplies', span: 'md:row-span-2' },
  { src: '/service-eldercare.png', alt: 'Caring for elderly couple', span: '' },
  { src: '/service-langar.png', alt: 'Serving free community meal', span: '' },
  { src: '/gallery-4.png', alt: 'Medical health camp', span: '' },
  { src: '/service-temple.png', alt: 'Temple development work', span: '' },
  { src: '/service-hospitality.png', alt: 'Welcoming guests with hospitality', span: '' },
]

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((img, i) => (
          <Reveal
            key={img.src}
            delay={(i % 3) * 80}
            className={`group relative overflow-hidden rounded-2xl shadow-sm ${img.span}`}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="h-full w-full cursor-zoom-in"
              aria-label={`View ${img.alt}`}
            >
              <Image
                src={img.src || '/placeholder.svg'}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/30" />
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/90 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            aria-label="Close image"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative h-[75vh] w-full max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active].src || '/placeholder.svg'}
              alt={images[active].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
