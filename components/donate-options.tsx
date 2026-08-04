import { Building2, Smartphone, ShieldCheck } from 'lucide-react'

export function DonateOptions() {
  return (
    <div className="space-y-6">

      {/* Bank Details */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">

        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
            <Building2 className="h-5 w-5" />
          </span>

          <h3 className="font-serif text-xl font-semibold text-primary">
            Bank Transfer
          </h3>
        </div>

        <div className="mt-5 space-y-3 text-sm">

          <p>
            <b>Account Name:</b><br />
            AGWAY FUTURE FOUNDATION
          </p>

          <p>
            <b>Account Number:</b><br />
            50200107732910
          </p>

          <p>
            <b>IFSC Code:</b><br />
            HDFC0008685
          </p>

          <p>
            <b>Bank Name:</b><br />
            HDFC BANK LTD
          </p>

          <p>
            <b>Branch:</b><br />
            Indore, Madhya Pradesh
          </p>

        </div>

      </div>


      {/* UPI Details */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">

        <div className="flex items-center gap-3">

          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-white">
            <Smartphone className="h-5 w-5" />
          </span>

          <h3 className="font-serif text-xl font-semibold text-primary">
            UPI Payment
          </h3>

        </div>


        <div className="mt-5 rounded-xl bg-secondary px-4 py-3">

          <p className="text-sm text-muted-foreground">
            UPI ID
          </p>

          <p className="font-semibold">
            agwayfuture@upi
          </p>

        </div>


        <button
          onClick={() => {
               navigator.clipboard.writeText("agwayfuture@upi")
              alert("UPI ID copied: agwayfuture@upi")
  }}
  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 font-semibold text-white transition hover:scale-105"
>
  Copy UPI ID & Donate
</button>

      </div>


      {/* Transparency */}
      <div className="flex items-center gap-3 rounded-2xl border border-gold/40 bg-gold/10 px-5 py-4">

        <ShieldCheck className="h-6 w-6 text-primary" />

        <p className="text-sm text-foreground/80">
          All donations are used transparently to support AGWAY Future Foundation seva programs.
        </p>

      </div>


    </div>
  )
}