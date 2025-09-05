import * as React from "react"

export function Accordion({
  items
}: { items: { title: string; content: React.ReactNode }[] }) {
  const [open, setOpen] = React.useState<number | null>(null)
  return (
    <div className="divide-y divide-ink/10 rounded-2xl bg-white shadow-soft">
      {items.map((it, idx) => (
        <div key={idx}>
          <button
            className="w-full text-left p-4 font-medium"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
          >
            {it.title}
          </button>
          {open === idx && <div className="p-4 pt-0 text-sm text-ink/80">{it.content}</div>}
        </div>
      ))}
    </div>
  )
}
