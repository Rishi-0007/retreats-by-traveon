import { Badge } from "@/components/ui/badge";

export function BadgeList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((i, idx) => <Badge key={idx}>{i}</Badge>)}
    </div>
  )
}
