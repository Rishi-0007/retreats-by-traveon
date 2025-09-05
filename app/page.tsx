import { Hero } from "@/components/site/Hero";
import { PillarsGrid } from "@/components/site/PillarsGrid";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { listPackages } from "@/lib/seed";
import { PackageCard } from "@/components/site/PackageCard";
import Link from "next/link";
import { Testimonials } from "@/components/site/Testimonials";

export default function HomePage() {
  const featured = listPackages().slice(0, 3);

  return (
    <main>
      <Hero />

      {/* Pillars */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container">
          <PillarsGrid />
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Featured Experiences</h2>
          <Link href="/retreats/wellness" className="text-primary underline">
            Explore all
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <PackageCard key={p.slug} pkg={p} />
          ))}
        </div>
      </section>

      <WhyChooseUs />

      <Testimonials />
    </main>
  );
}
