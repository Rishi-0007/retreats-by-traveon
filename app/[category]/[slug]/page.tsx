import Image from "next/image";
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/lib/seed";
import { BadgeList } from "@/components/site/BadgeList";
import { InclusionsExclusions } from "@/components/site/InclusionsExclusions";
import { Itinerary } from "@/components/site/Itinerary";
import { CalendarList } from "@/components/site/CalendarList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function PackageDetail({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return notFound();

  return (
    <div className="pb-12">
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <Image
          src={pkg.heroImage}
          alt={pkg.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl md:text-5xl font-semibold">{pkg.title}</h1>
          <p className="opacity-90 mt-2">
            {pkg.location} • {pkg.durationDays} days • From ₹{pkg.priceFrom}
          </p>
          <div className="mt-4 flex gap-3">
            <Button asChild>
              <Link href="/contact">Enquire Now</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`/api/itinerary?slug=${pkg.slug}`}>
                Download PDF Itinerary
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mt-8 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-2">Highlights</h2>
            <BadgeList items={pkg.highlights} />
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Itinerary</h2>
            <Itinerary days={pkg.itinerary} />
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Inclusions & Exclusions
            </h2>
            <InclusionsExclusions
              inclusions={pkg.inclusions}
              exclusions={pkg.exclusions}
            />
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl p-6 bg-white shadow-soft">
            <h3 className="font-semibold mb-2">Dates & Prices</h3>
            <CalendarList items={[pkg]} compact />
          </div>
          <div className="rounded-2xl p-6 bg-white shadow-soft">
            <h3 className="font-semibold mb-2">Amenities</h3>
            <BadgeList items={pkg.amenities} />
          </div>
        </aside>
      </div>
    </div>
  );
}
