import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { navLinks, services, site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/agway-logo.jpeg"
              alt="AGWAY Future Foundation logo"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/60"
            />
            <div className="leading-tight">
              <p className="font-serif text-lg font-bold">{site.name}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">{site.motto}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-primary-foreground/70">
            {site.tagline}. Serving humanity through devotion, compassion and dedication.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg font-semibold text-gold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-primary-foreground/70 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg font-semibold text-gold">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href="/services"
                  className="text-primary-foreground/70 transition-colors hover:text-gold"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg font-semibold text-gold">Reach Us</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>
                {site.address.line1}, {site.address.line2}, {site.address.line3}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-gold" />
              <a href={`tel:+91${site.phone}`} className="hover:text-gold">
                +91 {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 md:flex-row md:px-6">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.2em] text-gold">{site.subMotto}</p>
        </div>
      </div>
    </footer>
  )
}
