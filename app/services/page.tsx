import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { services } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore the services of AGWAY Future Foundation: Temple Enlargement, Langer (free food), Education, Hospitality and Elder Care.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Our Services"
        description="Five pillars of seva through which we care for our communities every single day."
      />

      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="space-y-20">
          {services.map((service, i) => {
            const reversed = i % 2 === 1
            return (
              <Reveal
                key={service.slug}
                className="grid items-center gap-10 md:grid-cols-2"
              >
                <div className={reversed ? 'md:order-2' : ''}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                    <Image
                      src={service.image || '/placeholder.svg'}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={reversed ? 'md:order-1' : ''}>
                  <span className="inline-flex items-center rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-foreground">
                    {String(i + 1).padStart(2, '0')} — Seva
                  </span>
                  <h2 className="mt-4 font-serif text-3xl font-bold text-primary md:text-4xl">
                    {service.title}
                  </h2>
                  <div className="mt-3 h-1 w-16 rounded-full bg-gold" />
                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    href="/donate"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    <Heart className="h-4 w-4" />
                    Support This Cause
                  </Link>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </>
  )
}
