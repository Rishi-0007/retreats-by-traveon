import type { Package } from "@/lib/seed";

export function CalendarList({
  items,
  compact = false,
}: {
  items: Package[];
  compact?: boolean;
}) {
  return (
    <div className="space-y-4">
      {items.map((p) => (
        <div key={p.slug} className="rounded-2xl bg-white p-4 shadow-soft">
          <div className="font-semibold">{p.title}</div>
          <ul className="mt-2 text-sm text-ink/70 space-y-1">
            {p.departures.map((d, i) => (
              <li key={i}>
                {d.startDate} → {d.endDate} • {d.availability}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
