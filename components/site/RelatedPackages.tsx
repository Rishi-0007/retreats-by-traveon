"use client";

import { PackageCard } from "@/components/site/PackageCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { Package } from "@/lib/seed";

interface RelatedPackagesProps {
  currentPackage: Package;
  allPackages: Package[];
  className?: string;
}

export function RelatedPackages({
  currentPackage,
  allPackages,
  className = "",
}: RelatedPackagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get related packages logic
  const getRelatedPackages = () => {
    // Filter out current package
    const otherPackages = allPackages.filter(
      (pkg) => pkg.id !== currentPackage.id
    );

    // Prioritize packages from same category
    const sameCategory = otherPackages.filter(
      (pkg) => pkg.category === currentPackage.category
    );
    const otherCategories = otherPackages.filter(
      (pkg) => pkg.category !== currentPackage.category
    );

    // Prioritize featured packages
    const featuredSame = sameCategory.filter((pkg) => pkg.isFeatured);
    const regularSame = sameCategory.filter((pkg) => !pkg.isFeatured);
    const featuredOther = otherCategories.filter((pkg) => pkg.isFeatured);
    const regularOther = otherCategories.filter((pkg) => !pkg.isFeatured);

    // Combine in order of priority
    return [
      ...featuredSame,
      ...regularSame.slice(0, 2),
      ...featuredOther.slice(0, 1),
      ...regularOther.slice(0, 1),
    ].slice(0, 6);
  };

  const relatedPackages = getRelatedPackages();
  const itemsPerView = 3;
  const maxIndex = Math.max(0, relatedPackages.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  if (relatedPackages.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">You Might Also Like</h2>
          <p className="text-muted-foreground mt-2">
            Similar experiences curated for you
          </p>
        </div>

        {relatedPackages.length > itemsPerView && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="default"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="h-10 w-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="default"
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="h-10 w-10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {relatedPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="w-1/3 flex-shrink-0 pr-6"
              style={{ minWidth: `${100 / itemsPerView}%` }}
            >
              <PackageCard pkg={pkg} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      {relatedPackages.length > itemsPerView && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Mobile: Show all packages in grid */}
      <div className="md:hidden mt-8">
        <div className="grid gap-6">
          {relatedPackages.slice(0, 3).map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {relatedPackages.length > 3 && (
          <div className="text-center mt-6">
            <Button variant="outline">View All Similar Packages</Button>
          </div>
        )}
      </div>
    </div>
  );
}
