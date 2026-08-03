import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with AGWAY Future Foundation. Visit us in Old Palasia, Indore, call us or send a message.',
}

const mapQuery = encodeURIComponent(
  `${site.address.line1}, ${site.address.line2}, ${site.address.line3}`,
)

export default function ContactPage() {
  const details = [
    {
      icon: MapPin,
      title: 'Visit Us',
      lines: [site.address.line1, site.address.line2, site.address.line3],
    },
    {
      icon: Phone,
      title: 'Call Us',
      lines: [`+91 ${site.phone}`],
      href: `tel:+91${site.phone}`,
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: [site.email],
      href: `mailto:${site.email}`,
    },
    {
      icon: Clock,
      title: 'Office Hours',
      lines: ['Mon – Sat: 9:00 AM – 6:00 PM'],
    },
  ]

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        description="We would love to hear from you. Reach out to volunteer, donate or simply say hello."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((d, i) => (
            <Reveal
              key={d.title}
              delay={i * 90}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary">
                <d.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-primary">{d.title}</h3>
              <div className="mt-1.5 space-y-0.5 text-sm text-muted-foreground">
                {d.lines.map((line) =>
                  d.href ? (
                    <a key={line} href={d.href} className="block break-words hover:text-gold">
                      {line}
                    </a>
                  ) : (
                    <p key={line}>{line}</p>
                  ),
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">
              Send us a message
            </h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Fill out the form and our team will respond shortly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Find us here</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Located behind Malwa Tower, Old Palasia, on A.B. Road, Indore.
            </p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-border shadow-sm">
              <iframe
                title="AGWAY Future Foundation location map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[420px] w-full border-0"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
