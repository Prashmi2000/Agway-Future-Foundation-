import { Reveal } from '@/components/reveal'
import { stats } from '@/lib/site'

export function Stats() {
  return (
    <section className="relative z-10 -mt-16 px-4 md:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl border border-border bg-card p-8 shadow-xl md:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              className="text-center"
            >
              <p className="font-serif text-3xl font-bold text-primary md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
