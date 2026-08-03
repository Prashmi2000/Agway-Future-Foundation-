'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'

const inputClass =
  'w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/30'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    // Simulated submission — connect to your backend or email service here.
    setTimeout(() => setStatus('success'), 1100)
  }

  if (status === 'success') {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center shadow-sm">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-primary">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-primary">Message sent!</h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Thank you for reaching out. We will get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Send Another Message
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
          <label htmlFor="cname" className="mb-1.5 block text-sm font-medium text-foreground">
            Name
          </label>
          <input id="cname" name="name" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cemail" className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="cemail"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="csubject" className="mb-1.5 block text-sm font-medium text-foreground">
          Subject
        </label>
        <input
          id="csubject"
          name="subject"
          placeholder="How can we help?"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="cmessage" className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="cmessage"
          name="message"
          rows={5}
          required
          placeholder="Write your message..."
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
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
