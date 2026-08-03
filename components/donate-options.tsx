'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'

const presets = [500, 1100, 2100, 5100]

export function DonateOptions() {
  const [amount, setAmount] = useState<number>(1100)
  const [custom, setCustom] = useState('')

  const value = custom ? Number(custom) || 0 : amount

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
      <h3 className="font-serif text-2xl font-semibold text-primary">Choose an amount</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Every contribution directly supports our seva programs.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {presets.map((p) => {
          const active = !custom && amount === p
          return (
            <button
              key={p}
              type="button"
              onClick={() => {
                setAmount(p)
                setCustom('')
              }}
              className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                active
                  ? 'border-gold bg-gold text-gold-foreground'
                  : 'border-border bg-background text-foreground hover:border-gold/60'
              }`}
            >
              &#8377;{p.toLocaleString('en-IN')}
            </button>
          )
        })}
      </div>

      <div className="mt-4">
        <label htmlFor="custom" className="mb-1.5 block text-sm font-medium text-foreground">
          Or enter a custom amount
        </label>
        <div className="flex items-center rounded-xl border border-border bg-background px-4 shadow-sm focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/30">
          <span className="text-muted-foreground">&#8377;</span>
          <input
            id="custom"
            type="number"
            min={1}
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            placeholder="Enter amount"
            className="w-full bg-transparent px-2 py-3 text-sm outline-none"
          />
        </div>
      </div>

      <a
        href="#donation-details"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-gold-foreground shadow-sm transition-transform hover:scale-[1.02]"
      >
        <Heart className="h-5 w-5" />
        Donate &#8377;{value.toLocaleString('en-IN')}
      </a>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Use the bank &amp; UPI details below to complete your contribution.
      </p>
    </div>
  )
}
