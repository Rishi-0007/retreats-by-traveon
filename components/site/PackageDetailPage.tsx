import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Calendar,
  Clock,
  Star,
  Users,
  CheckCircle,
  XCircle,
  Phone,
  Mail,
  Heart,
  Share2,
  ArrowLeft,
  Package as LucidePackage,
} from "lucide-react";
import { BookingModal } from "@/components/site/BookingModal";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { Package } from "@/lib/seed";
interface PackageDetailPageProps {
  pkg: Package;
}
import { CrossfadeCarousel } from "../shared/CrossfadeCarousel";

export function PackageDetailPage({ pkg }: PackageDetailPageProps) {
  // Prepare media for carousel - combine hero image with gallery
  const carouselMedia = [
    { type: "image" as const, src: pkg.heroImage },
    ...pkg.gallery.map((src) => ({ type: "image" as const, src })),
  ];

  // Get category-based styling
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Wellness":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Community":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Corporate":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "MICE":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatPrice = (price: number, currency = "INR") => {
    if (currency === "INR") {
      return `₹${price.toLocaleString("en-IN")}`;
    }
    return `${currency} ${price.toLocaleString()}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Back Navigation */}
      <div className="container py-4">
        <Button variant="ghost" asChild className="mb-4">
          <Link
            href={`/${pkg.category === "Wellness" ? "retreats" : "tours"}/${pkg.category.toLowerCase()}`}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {pkg.category}{" "}
            {pkg.category === "Wellness" ? "Retreats" : "Tours"}
          </Link>
        </Button>
      </div>

      {/* Hero Section with Carousel */}
      <div className="relative aspect-[4/3] md:aspect-[1440/545]">
        <CrossfadeCarousel media={carouselMedia} alt={pkg.title} priority />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 text-white">
          <div className="container">
            <div className="flex items-center gap-3 mb-4">
              <Badge className={getCategoryColor(pkg.category)}>
                {pkg.category}
              </Badge>
              {pkg.isFeatured && (
                <Badge variant="secondary" className="bg-yellow-500 text-black">
                  Featured
                </Badge>
              )}
              {pkg.rating && (
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{pkg.rating}</span>
                </div>
              )}
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-4">{pkg.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{pkg.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{pkg.duration} Days</span>
              </div>
              <div className="text-2xl font-bold">
                From {formatPrice(pkg.basePrice, pkg.currency)}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-6 right-6 flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Summary */}
            <div>
              <h2 className="text-3xl font-bold mb-6">About This Experience</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {pkg.summary}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {pkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus Tags */}
            {pkg.focusTags && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Focus Areas</h2>
                <div className="flex flex-wrap gap-2">
                  {pkg.focusTags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="capitalize">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Itinerary */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Day-by-Day Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                          {day.day}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{day.title}</CardTitle>
                          {day.meals && (
                            <div className="flex gap-2 mt-2">
                              {day.meals.breakfast && (
                                <Badge variant="outline" className="text-xs">
                                  Breakfast
                                </Badge>
                              )}
                              {day.meals.lunch && (
                                <Badge variant="outline" className="text-xs">
                                  Lunch
                                </Badge>
                              )}
                              {day.meals.dinner && (
                                <Badge variant="outline" className="text-xs">
                                  Dinner
                                </Badge>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {day.description}
                      </p>
                      {day.activities && (
                        <div className="mt-4">
                          <h4 className="font-semibold mb-2">Activities:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {day.activities.map((activity, i) => (
                              <li key={i}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {day.stay && (
                        <div className="mt-4">
                          <span className="font-semibold">Stay: </span>
                          <span className="text-muted-foreground">
                            {day.stay}
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Leaders */}
            {pkg.leaders && pkg.leaders.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Meet Your Leaders</h2>
                <div className="space-y-6">
                  {pkg.leaders.map((leader, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={leader.image}
                              alt={leader.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">
                              {leader.name}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {leader.bio}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {leader.expertise.map((skill, i) => (
                                <Badge
                                  key={i}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Inclusions & Exclusions */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-emerald-800 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    What's Not Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Sidebar - Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Pricing Card */}
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">
                      {formatPrice(pkg.basePrice, pkg.currency)}
                    </div>
                    <div className="text-muted-foreground">per person</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Amenities */}
                  <div>
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.amenities.map((amenity, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="h-3 w-3 text-emerald-500" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      <Phone className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <Mail className="h-4 w-4 mr-2" />
                      Request Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Departure Dates */}
              <Card>
                <CardHeader>
                  <CardTitle>Available Dates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pkg.departures.map((departure, index) => (
                      <div key={index} className="border rounded-lg p-3">
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-sm font-semibold">
                            {formatDate(departure.startDate)} -{" "}
                            {formatDate(departure.endDate)}
                          </div>
                          <Badge
                            variant={
                              departure.availability === "Available"
                                ? "default"
                                : departure.availability === "Limited"
                                  ? "secondary"
                                  : "destructive"
                            }
                            className="text-xs"
                          >
                            {departure.availability}
                          </Badge>
                        </div>
                        {departure.price && (
                          <div className="text-sm text-muted-foreground">
                            {formatPrice(departure.price, pkg.currency)}
                          </div>
                        )}
                        {departure.isFeatured && (
                          <Badge className="mt-2 text-xs bg-yellow-500 text-black">
                            {departure.ctaLabel || "Special Offer"}
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Partner Info */}
              {pkg.partner && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Organized by</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      {pkg.partnerLogo && (
                        <div className="relative w-12 h-12">
                          <Image
                            src={pkg.partnerLogo}
                            alt={pkg.partner}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <div className="text-sm font-medium">{pkg.partner}</div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Quick Contact */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Need Help?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span>help@example.com</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    Chat with us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <TestimonialsSection
          packageId={pkg.title.split(" ")[0]}
          className="mt-16"
        />

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  What's the best time to book?
                </h3>
                <p className="text-muted-foreground">
                  We recommend booking at least 30 days in advance for the best
                  availability and rates. Popular dates fill up quickly,
                  especially during peak season.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  What if I need to cancel?
                </h3>
                <p className="text-muted-foreground">
                  Cancellation policies vary by package and timing. Generally,
                  cancellations made 30+ days in advance receive full refund
                  minus processing fees. Contact us for specific details.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  Are solo travelers welcome?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! Many of our guests travel solo. We can arrange
                  single occupancy rooms (supplement may apply) and help connect
                  you with other solo travelers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What should I pack?</h3>
                <p className="text-muted-foreground">
                  A detailed packing list will be provided upon booking.
                  Generally includes comfortable clothing, walking shoes, sun
                  protection, and any specific items mentioned in the itinerary.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
