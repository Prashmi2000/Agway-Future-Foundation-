import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { ServiceCard } from '@/components/service-card'
import { services } from '@/lib/site'

export function ServicesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">What We Do</p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-balance text-primary md:text-4xl">
          Our Areas of Seva
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Every initiative is a step toward a kinder, more dignified tomorrow for the communities
          we serve.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 80} className="h-full">
            <ServiceCard service={service} />
          </Reveal>
        ))}
        <Reveal delay={services.length * 80} className="h-full">
          <Link
            href="/services"
            className="flex h-full min-h-52 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gold/50 bg-gold/5 p-6 text-center transition-colors hover:bg-gold/10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-gold-foreground">
              <ArrowRight className="h-6 w-6" />
            </span>
            <span className="font-serif text-lg font-semibold text-primary">
              Explore all services
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
