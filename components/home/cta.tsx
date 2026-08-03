import Link from 'next/link'
import { Heart, HandHeart } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CTA() {
  return (
    <section className="px-4 py-20 md:px-6">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground md:py-20">
        <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-bold text-balance md:text-4xl">
            Your one step today can change a life tomorrow
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
            Join hundreds of donors and volunteers who make our seva possible. Every contribution,
            big or small, creates a lasting impact.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-gold-foreground shadow-lg transition-transform hover:scale-105"
            >
              <Heart className="h-5 w-5" />
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <HandHeart className="h-5 w-5" />
              Volunteer With Us
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
