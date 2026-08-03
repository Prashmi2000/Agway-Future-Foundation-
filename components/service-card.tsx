import Image from 'next/image'
import type { Service } from '@/lib/site'

export function ServiceCard({
  service,
  detailed = false,
}: {
  service: Service
  detailed?: boolean
}) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image || '/placeholder.svg'}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-primary">{service.title}</h3>
        <div className="mt-2 h-1 w-12 rounded-full bg-gold transition-all duration-300 group-hover:w-20" />
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {detailed ? service.description : service.short}
        </p>
      </div>
    </article>
  )
}
