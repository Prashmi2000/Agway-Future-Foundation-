import type { Metadata } from 'next'
import { Building2, Smartphone, ShieldCheck, Utensils, GraduationCap, HeartPulse } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { DonateOptions } from '@/components/donate-options'

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support AGWAY Future Foundation with a donation. Your generosity fuels free meals, education, elder care and more.',
}

const impact = [
  { icon: Utensils, amount: '₹500', text: 'Provides warm meals for 25 people through Langer.' },
  { icon: GraduationCap, amount: '₹1,100', text: 'Sponsors books and supplies for a child for a term.' },
  { icon: HeartPulse, amount: '₹2,100', text: 'Supports elder care and health check-ups for a month.' },
]

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Support Our Mission"
        title="Make a Donation"
        description="Your one step today can build a better tomorrow for countless lives. Every rupee counts."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <DonateOptions />
          </Reveal>

          <Reveal delay={120} id="donation-details" className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Building2 className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-xl font-semibold text-primary">Bank Transfer</h3>
              </div>
              <dl className="mt-5 space-y-3 text-sm">
                {[
                  ['Account Name', 'AGWAY Future Foundation'],
                  ['Account Number', 'XXXX XXXX XXXX'],
                  ['IFSC Code', 'XXXX0000000'],
                  ['Bank & Branch', 'Bank Name, Indore Branch'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-border pb-2">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-right font-medium text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-gold-foreground">
                  <Smartphone className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-xl font-semibold text-primary">UPI Payment</h3>
              </div>
              <div className="mt-5 flex items-center justify-between gap-4 rounded-xl bg-secondary/50 px-4 py-3">
                <span className="text-sm text-muted-foreground">UPI ID</span>
                <span className="font-medium text-foreground">agwayfuture@upi</span>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Placeholder details — replace with your verified bank and UPI information.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-gold/40 bg-gold/10 px-5 py-4">
              <ShieldCheck className="h-6 w-6 shrink-0 text-primary" />
              <p className="text-sm text-foreground/80">
                All donations are used transparently to fund our seva programs.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Your Impact
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-balance text-primary md:text-4xl">
              See where your kindness goes
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {impact.map((item, i) => (
              <Reveal
                key={item.amount}
                delay={i * 100}
                className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 text-primary">
                  <item.icon className="h-7 w-7" />
                </span>
                <p className="mt-4 font-serif text-2xl font-bold text-gold-foreground">
                  {item.amount}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
