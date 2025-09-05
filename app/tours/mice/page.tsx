import { PageHeader } from "@/components/site/PageHeader";
import { PackageCard } from "@/components/site/PackageCard";
import { listPackages } from "@/lib/seed";

export default function MicePage() {
  const items = listPackages().filter(p => p.retreatType === "MICE");
  return (
    <div className="container py-12">
      <PageHeader title="MICE" subtitle="Seamless meetings, incentives, conferences, and exhibitions" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => <PackageCard key={p.slug} pkg={p} />)}
      </div>
    </div>
  )
}
