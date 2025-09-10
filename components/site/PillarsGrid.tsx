// components/site/PillarsGrid.tsx
"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Heart, Users, Compass, Briefcase, ArrowRight } from "lucide-react";
import { CrossfadeCarousel } from "@/components/shared/CrossfadeCarousel";

const pillars = [
  {
    title: "Wellness Retreats",
    description:
      "Rejuvenate your mind, body, and spirit with curated wellness experiences",
    features: [
      "Yoga & Meditation",
      "Sound Healing",
      "Nature Therapy",
      "Ayurveda",
    ],
    icon: Heart,
    image: "/wellness-retreats/1.jpg",
    images: [
      "/wellness-retreats/1.jpg",
      "/wellness-retreats/2.jpg",
      "/wellness-retreats/3.jpg",
    ],
    href: "/retreats/wellness",
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Corporate Retreats",
    description:
      "Build stronger teams and drive innovation through transformative offsites",
    features: [
      "Leadership Development",
      "Team Building",
      "Strategic Planning",
      "Creativity Workshops",
    ],
    icon: Briefcase,
    image: "/corporate-retreats/1.jpeg",
    images: [
      "/corporate-retreats/1.jpeg",
      "/corporate-retreats/2.jpeg",
      "/corporate-retreats/3.jpeg",
    ],
    href: "/retreats/corporate",
    color: "text-secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Community Tours",
    description:
      "Connect with local cultures and communities through meaningful travel",
    features: [
      "Cultural Immersion",
      "Local Experiences",
      "Authentic Connections",
      "Sustainable Tourism",
    ],
    icon: Compass,
    image: "/community-tours/1.jpeg",
    images: [
      "/community-tours/1.jpeg",
      "/community-tours/2.jpeg",
      "/community-tours/3.jpeg",
    ],
    href: "/tours/community",
    color: "text-accent",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    title: "MICE Tours",
    description:
      "Elevate business events with luxury venues and seamless logistics",
    features: [
      "Conference Management",
      "Incentive Programs",
      "Luxury Venues",
      "Event Coordination",
    ],
    icon: Users,
    image: "/mice-tours/1.jpg",
    images: ["/mice-tours/1.jpg", "/mice-tours/2.jpg", "/mice-tours/3.jpg"],
    href: "/tours/mice",
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5",
  },
] as const;

function PillarCard({ pillar }: { pillar: (typeof pillars)[number] }) {
  const media = pillar.images?.length
    ? pillar.images.map((src) => ({ type: "image" as const, src }))
    : [{ type: "image" as const, src: pillar.image }];

  return (
    <Card
      key={pillar.title}
      className={`group hover:shadow-floating transition-spring overflow-hidden bg-gradient-to-br ${pillar.gradient} border-0`}
    >
      {/* Carousel */}
      <div className="relative">
        <CrossfadeCarousel
          media={media}
          alt={pillar.title}
          interval={2400}
          className="aspect-[4/3]"
          priority
        />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Icon Badge */}
        <div className="absolute top-4 left-4">
          <div className="p-3 rounded-xl bg-white/90 backdrop-blur-sm shadow-soft">
            {(() => {
              const Icon = pillar.icon;
              return <Icon className={`h-6 w-6 ${pillar.color}`} />;
            })()}
          </div>
        </div>
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-heading group-hover:text-primary transition-smooth">
          {pillar.title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {pillar.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Features */}
        <div className="grid grid-cols-2 gap-2">
          {pillar.features.map((feature) => (
            <div key={feature} className="flex items-center text-sm text-muted">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
              {feature}
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button
          variant="outline"
          size="lg"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
          asChild
        >
          <Link href={pillar.href}>
            Explore {pillar.title}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export function PillarsGrid() {
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Four Paths to <span className="text-gradient">Transformation</span>
        </h2>
        <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
          Whether seeking personal renewal, team growth, cultural connection, or
          business excellence, we create experiences that leave lasting impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar) => (
          <PillarCard key={pillar.title} pillar={pillar} />
        ))}

        {/* Bottom CTA */}
        <div className="md:col-span-2 text-center mt-16">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Start Planning Your Experience
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
