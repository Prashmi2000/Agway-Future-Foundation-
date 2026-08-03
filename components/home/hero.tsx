import Image from 'next/image'
import Link from 'next/link'
import { Heart, ArrowRight } from 'lucide-react'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
      <Image
        src="/hero-temple.png"
        alt="Temple at golden hour with volunteers serving the community"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 md:px-6">
        <div className="max-w-2xl text-primary-foreground">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold animate-fade-in">
            {site.motto}
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-6xl animate-fade-up">
            Caring Today, <span className="text-gradient-gold">Building Tomorrow</span>
          </h1>
          <p className="mt-3 text-lg font-medium uppercase tracking-[0.15em] text-gold/90 animate-fade-up">
            {site.tagline}
          </p>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/85 md:text-lg animate-fade-up">
            {site.name} serves communities through Temple Enlargement, Langer, Education,
            Hospitality and Elder Care — one compassionate step at a time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-gold-foreground shadow-lg transition-transform hover:scale-105"
            >
              <Heart className="h-5 w-5" />
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-7 py-3.5 font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
            >
              Become a Volunteer
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
