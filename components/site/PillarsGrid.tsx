// components/site/PillarsGrid.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Heart, Users, Compass, Briefcase, ArrowRight } from "lucide-react";

/**
 * 🔥 What changed
 * - Each card now has an auto-playing, cross-fading image carousel (2–3 images recommended).
 * - Hover to pause; keyboard focus also pauses for accessibility.
 * - Respects reduced motion preferences.
 * - Graceful fallback to a single image if extra images are not provided.
 *
 * ✅ How to add more images per pillar
 *   Add an `images: string[]` field with 2–3 related URLs. If omitted, `image` will be used alone.
 */

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

// --- Carousel Hook
function useAutoCarousel(
  length: number,
  { interval = 3500, paused }: { interval?: number; paused?: boolean }
) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused || length <= 1) return; // nothing to play
    timerRef.current && window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, interval);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [length, interval, paused]);

  return [index, setIndex] as const;
}

// --- Pillar Card Component with Crossfade
function PillarCard({ pillar }: { pillar: (typeof pillars)[number] }) {
  const prefersReducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const images = useMemo(
    () =>
      pillar.images && pillar.images.length > 0
        ? pillar.images
        : [pillar.image],
    [pillar.images, pillar.image]
  );
  const [active, setActive] = useAutoCarousel(images.length, {
    interval: 2400,
    paused: !!(hovered || prefersReducedMotion),
  });

  return (
    <Card
      key={pillar.title}
      className={`group hover:shadow-floating transition-spring overflow-hidden bg-gradient-to-br ${pillar.gradient} border-0`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="relative">
        {/* Image Stage */}
        <div className="aspect-[4/3] relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              className="absolute inset-0"
              initial={{ opacity: 0.0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.8,
                ease: "easeOut",
              }}
            >
              <Image
                src={images[active]}
                alt={pillar.title}
                fill
                priority={true}
                className="object-cover will-change-transform"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Subtle gradient overlay to keep text legible */}
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

          {/* Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-5 bg-white"
                      : "w-2 bg-white/60 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          )}
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
          <Button variant="hero" size="xl" asChild>
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

// Optional: if you use Tailwind, consider adding these utilities in your CSS for smoother animations
// .transition-spring { transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1); }
// .hover:shadow-floating { box-shadow: 0 15px 40px -10px rgba(0,0,0,0.25); }
