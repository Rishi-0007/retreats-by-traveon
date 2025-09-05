export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
      {subtitle && <p className="text-ink/70 mt-2">{subtitle}</p>}
    </div>
  )
}
