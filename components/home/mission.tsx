import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const points = [
  'Warm meals served every single day through Langer',
  'Education support for underprivileged children',
  'Compassionate care and companionship for elders',
  'Preserving culture through temple development',
]

export function Mission() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/service-langar.png"
              alt="Volunteers serving a community meal"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card p-5 shadow-lg sm:block md:-right-6">
            <p className="font-serif text-3xl font-bold text-primary">10+</p>
            <p className="text-sm text-muted-foreground">Years of Seva</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Who We Are</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance text-primary md:text-4xl">
            Rooted in devotion, driven by compassion
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            AGWAY Future Foundation is a non-profit organization built on the values of Seva,
            Sanskar and Samarpan. We work hand in hand with communities to nourish the hungry,
            educate the young, care for the elderly and nurture spaces of faith and togetherness.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-foreground">
                  <Check className="h-4 w-4 text-primary" />
                </span>
                <span className="text-sm leading-relaxed text-foreground/80">{p}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Learn More About Us
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
