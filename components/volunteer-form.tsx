'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { services } from '@/lib/site'

const inputClass =
  'w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/30'

export function VolunteerForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
setStatus('submitting')

const formData = new FormData(e.currentTarget)

const data = {
  name: formData.get("name"),
  phone: formData.get("phone"),
  email: formData.get("email"),
  city: formData.get("city"),
  area: formData.get("area"),
  message: formData.get("message"),
}

try {
  const res = await fetch("/api/volunteer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (res.ok) {
    setStatus("success")
  } else {
    setStatus("idle")
  }
} catch (error) {
  setStatus("idle")
}
  }

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-sm">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-primary">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-primary">Thank you!</h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Your interest in volunteering with us means the world. Our team will reach out to you
          soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Submit Another Response
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Full Name
          </label>
          <input id="name" name="name" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 00000 00000"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-foreground">
            City
          </label>
          <input id="city" name="city" placeholder="Your city" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="area" className="mb-1.5 block text-sm font-medium text-foreground">
          Area of Interest
        </label>
        <select id="area" name="area" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a cause
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Any">Wherever I&apos;m needed most</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Why do you want to volunteer?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a little about yourself..."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-gold-foreground shadow-sm transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Application'
        )}
      </button>
    </form>
  )
}
