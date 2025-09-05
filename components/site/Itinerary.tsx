export type Day = {
  dayNumber: number;
  title: string;
  description: string;
  meals?: { B?: boolean; L?: boolean; D?: boolean };
}

export function Itinerary({ days }: { days: Day[] }) {
  return (
    <ol className="space-y-4">
      {days.map(d => (
        <li key={d.dayNumber} className="rounded-2xl bg-white p-4 shadow-soft">
          <div className="font-semibold">Day {d.dayNumber}: {d.title}</div>
          <div className="text-sm text-ink/70 mt-1">{d.description}</div>
          {d.meals && (
            <div className="text-xs text-ink/60 mt-2">Meals: {d.meals.B ? "B " : ""}{d.meals.L ? "L " : ""}{d.meals.D ? "D" : ""}</div>
          )}
        </li>
      ))}
    </ol>
  )
}
