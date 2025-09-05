import { PageHeader } from "@/components/site/PageHeader";
import { CalendarList } from "@/components/site/CalendarList";
import { listPackages } from "@/lib/seed";

export default function CalendarPage() {
  const items = listPackages();
  return (
    <div className="container py-12">
      <PageHeader title="Upcoming Departures" subtitle="Plan ahead with available dates" />
      <CalendarList items={items} />
    </div>
  )
}
