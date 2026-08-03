import type { Metadata } from 'next'
import { HeartHandshake, Clock, Users, Sparkles } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { VolunteerForm } from '@/components/volunteer-form'

export const metadata: Metadata = {
  title: 'Volunteer',
  description:
    'Join AGWAY Future Foundation as a volunteer. Give your time and skills to serve communities through food, education, elder care and more.',
}

const perks = [
  { icon: HeartHandshake, title: 'Make an impact', text: 'Directly change lives in your community.' },
  { icon: Users, title: 'Meet like minds', text: 'Join a warm family of changemakers.' },
  { icon: Clock, title: 'Flexible hours', text: 'Contribute whenever you can, however you can.' },
  { icon: Sparkles, title: 'Grow yourself', text: 'Gain experience, purpose and lasting joy.' },
]

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Involved"
        title="Become a Volunteer"
        description="Your time is the most precious gift you can give. Join hands with us and help build a better tomorrow."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-5 md:px-6">
        <div className="md:col-span-2">
          <Reveal>
            <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">
              Why volunteer with us?
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Whether you can offer an hour a week or a whole day, every helping hand strengthens
              our mission of seva.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            {perks.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 90}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-primary">{p.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <Reveal delay={150}>
            <VolunteerForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
