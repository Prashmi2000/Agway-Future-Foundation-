import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HandHeart, Sprout, Users, Target, Eye, HeartHandshake } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about AGWAY Future Foundation — our mission, vision and the values of Seva, Sanskar and Samarpan that guide our work.',
}

const values = [
  {
    icon: HandHeart,
    title: 'Seva',
    text: 'Selfless service to humanity, offered with humility and love for all.',
  },
  {
    icon: Sprout,
    title: 'Sanskar',
    text: 'Nurturing values, culture and good character in the next generation.',
  },
  {
    icon: HeartHandshake,
    title: 'Samarpan',
    text: 'Complete dedication and devotion to the well-being of our communities.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={site.motto}
        title="About AGWAY Future Foundation"
        description="A non-profit rooted in devotion and compassion, taking one step today toward a better tomorrow."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-6">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/service-education.png"
              alt="Children learning with support from the foundation"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Our Story</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance text-primary md:text-4xl">
            Serving humanity, one kind step at a time
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            AGWAY Future Foundation was founded with a simple belief — that small, consistent acts
            of kindness can transform lives. What began as a humble effort to feed those in need
            has grown into a movement spanning food, education, elder care, hospitality and the
            preservation of sacred spaces.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Guided by our motto {site.motto}, we bring together volunteers, donors and communities
            to build a future that is compassionate, dignified and full of hope.
          </p>
        </Reveal>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-6">
          <Reveal className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Target className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-serif text-2xl font-semibold text-primary">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To uplift underserved communities by providing food, education, healthcare and care
              for the elderly, while preserving cultural and spiritual heritage — ensuring no one
              is left behind.
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-gold-foreground">
              <Eye className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-serif text-2xl font-semibold text-primary">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              A world where every individual lives with dignity, opportunity and belonging — a
              society bound together by service, values and selfless devotion.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Our Core Values
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-balance text-primary md:text-4xl">
            Seva • Sanskar • Samarpan
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 100}
              className="group rounded-3xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                <v.icon className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 pb-20 md:px-6">
        <Reveal className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-3xl border border-border bg-primary p-10 text-center text-primary-foreground md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <Users className="h-12 w-12 shrink-0 text-gold" />
            <div>
              <h3 className="font-serif text-2xl font-semibold">Join our family of changemakers</h3>
              <p className="mt-1 text-primary-foreground/75">
                Become a volunteer or supporter and help us build a better tomorrow.
              </p>
            </div>
          </div>
          <Link
            href="/volunteer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-gold-foreground transition-transform hover:scale-105"
          >
            Get Involved
          </Link>
        </Reveal>
      </section>
    </>
  )
}
