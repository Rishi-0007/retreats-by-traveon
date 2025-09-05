export function InclusionsExclusions({ inclusions, exclusions }: { inclusions: string[]; exclusions: string[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div>
        <h3 className="font-semibold mb-2">Inclusions</h3>
        <ul className="list-disc list-inside text-ink/80 space-y-1">
          {inclusions.map((i, idx) => <li key={idx}>{i}</li>)}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Exclusions</h3>
        <ul className="list-disc list-inside text-ink/80 space-y-1">
          {exclusions.map((i, idx) => <li key={idx}>{i}</li>)}
        </ul>
      </div>
    </div>
  )
}
