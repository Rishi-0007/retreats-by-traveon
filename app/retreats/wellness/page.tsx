import { PageHeader } from "@/components/site/PageHeader";
import { PackageCard } from "@/components/site/PackageCard";
import { listPackages } from "@/lib/seed";

export default function WellnessPage() {
  const items = listPackages().filter((p) => p.category === "Wellness");
  return (
    <div className="container py-12">
      <PageHeader
        title="Wellness Retreats"
        subtitle="Mind-body reset journeys"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <PackageCard key={p.slug} pkg={p} />
        ))}
      </div>
    </div>
  );
}
