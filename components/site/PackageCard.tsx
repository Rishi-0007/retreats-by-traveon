import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Package } from "@/lib/seed";

export function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <Card>
      <CardHeader>
        <div className="relative w-full h-48 overflow-hidden rounded-xl">
          <Image src={pkg.heroImage} alt={pkg.title} fill className="object-cover" />
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">{pkg.title}</h3>
        <p className="text-sm text-ink/70 mt-1">{pkg.location}</p>
        <p className="text-sm mt-1">{pkg.durationDays} days • From ₹{pkg.priceFrom}</p>
        <div className="mt-4 flex gap-3">
          <Button asChild size="sm"><Link href={`/${pkg.retreatType === "Wellness" ? "retreats" : "tours"}/${pkg.retreatType.toLowerCase()}/${pkg.slug}`}>View</Link></Button>
          <Button variant="outline" asChild size="sm"><Link href="/contact">Enquire</Link></Button>
        </div>
      </CardContent>
    </Card>
  )
}
