// components/site/Hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";

export function Hero() {
  return (
    <section className="relative min-h-screen p-4 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/hero-yoga-retreat.jpg"
          alt="Peaceful yoga retreat with mountain views"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
            Transformative Experiences Since 2020
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight tracking-tight">
            Retreats that{" "}
            <span className="text-accent font-accent italic">Renew</span>,
            <br />
            Teams that <span className="text-secondary">Thrive</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto opacity-90">
            Immersive wellness, inspiring corporate offsites, community
            journeys, and MICE experiences—crafted by Retreats by Traveon.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="xl" asChild className="group">
              <Link href="/retreats/wellness">
                Explore Retreats
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button variant="transparent" size="xl" asChild className="group">
              <Link href="/retreats/corporate">
                <Play className="mr-2 h-5 w-5" />
                Plan Corporate Getaway
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 opacity-80">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-heading">
                150+
              </div>
              <div className="text-sm uppercase tracking-wide">
                Retreats Hosted
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-heading">
                2,500+
              </div>
              <div className="text-sm uppercase tracking-wide">
                Lives Transformed
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-heading">
                50+
              </div>
              <div className="text-sm uppercase tracking-wide">
                Corporate Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-heading">
                4.9★
              </div>
              <div className="text-sm uppercase tracking-wide">
                Guest Rating
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
