export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6 md:py-24">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold animate-fade-in">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-3xl font-bold text-balance md:text-5xl animate-fade-up">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/75 animate-fade-up">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
