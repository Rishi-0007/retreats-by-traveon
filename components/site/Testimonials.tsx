// components/site/Testimonials.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useMemo } from "react";

// Convert shared Google Drive link -> preview URL
function toDrivePreview(url: string) {
  const m = url.match(/\/file\/d\/([^/]+)\//);
  const id = m?.[1];
  return id ? `https://drive.google.com/file/d/${id}/preview` : url;
}

/** Format-aware video wrapper (no global.css dependency)
 *  - portrait => 9:16 (reel-style)
 *  - landscape => 16:9
 */
function VideoFrame({
  src,
  title,
  format = "landscape",
}: {
  src: string;
  title: string;
  format?: "portrait" | "landscape";
}) {
  const base = useMemo(() => toDrivePreview(src), [src]);
  const url = useMemo(
    () =>
      base.includes("?")
        ? `${base}&autoplay=1&mute=1`
        : `${base}?autoplay=1&mute=1`,
    [base]
  );

  // padding-top percentage for aspect ratio
  const pad =
    format === "portrait"
      ? "pt-[177.78%]" /* 9:16 */
      : "pt-[56.25%]"; /* 16:9 */

  return (
    <div
      className={`relative w-full ${pad} rounded-xl overflow-hidden shadow-card bg-background`}
    >
      <iframe
        src={url}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        title={title}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}

// ⭐ Bangkok testimonial now marked as portrait + formal/joyful English
const testimonials = [
  {
    content:
      "Our group of five friends travelled to Pattaya and Bangkok—proof that adventure has no age! Traveon handled every detail with care: smooth transfers, clean and central hotels, and thoughtfully paced days. It was joyful, comfortable, and truly memorable.",
    author: "Mahendra Pratap Singh",
    role: "Retired Bank Manager",
    company: "(Lucknow)",
    rating: 5,
    avatar: "MS",
    videoUrl: toDrivePreview(
      "https://drive.google.com/file/d/1C56Mh4zo3DWsnAr-kcM0rvz0R0njI0a7/view?usp=sharing"
    ),
    trip: "Pattaya & Bangkok, Thailand",
    format: "portrait" as const, // << reel-style
  },
  {
    content:
      "The wellness retreat in Rishikesh completely transformed my perspective on work-life balance. The yoga sessions at sunrise and sound healing were exactly what my soul needed.",
    author: "Priya Sharma",
    role: "Marketing Director",
    company: "Tech Startup",
    rating: 5,
    avatar: "PS",
  },
  {
    content:
      "Our corporate team came back energized and more collaborative than ever. The leadership workshops and team-building activities were perfectly designed for our goals.",
    author: "Rajesh Kumar",
    role: "VP Operations",
    company: "Manufacturing Co.",
    rating: 5,
    avatar: "RK",
  },
  {
    content:
      "The community tour through Kerala opened our eyes to authentic India. Every interaction felt genuine, and the local connections we made were priceless.",
    author: "Emma Thompson",
    role: "Travel Blogger",
    company: "Wanderlust Weekly",
    rating: 5,
    avatar: "ET",
  },
];

function Rating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex space-x-1" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Guest Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Voices of <span className="text-gradient">Transformation</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Real experiences from guests who found renewal, teams that
            discovered synergy, and travelers who connected with purpose.
          </p>
        </div>

        {/* Masonry layout: no stretched rows, beautiful balancing */}
        <div className="space-y-8 md:columns-2 lg:columns-3 md:gap-8">
          {testimonials.map((t, index) => (
            <Card
              key={index}
              className="relative p-8 shadow-card hover:shadow-floating transition-spring bg-gradient-to-br from-background to-primary/5 border-0 mb-8 break-inside-avoid"
            >
              {/* Hide decorative quote when video present to avoid any overlap */}
              {!t.videoUrl && (
                <div className="absolute top-6 right-6 opacity-20 pointer-events-none z-0">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
              )}

              <CardContent className="p-0 space-y-6 relative z-10">
                {/* Video sits INSIDE the card, above the text, only when present */}
                {t.videoUrl ? (
                  <div>
                    <VideoFrame
                      src={t.videoUrl}
                      title={`${t.author} — Testimonial Video`}
                      format={(t as any).format || "landscape"}
                    />
                    {t.trip && (
                      <div className="mt-2 text-xs uppercase tracking-wide text-muted">
                        {t.trip}
                      </div>
                    )}
                  </div>
                ) : null}

                {/* Rating */}
                <Rating count={t.rating} />

                {/* Content */}
                <blockquote className="text-lg leading-relaxed font-light italic">
                  “{t.content}”
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-semibold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {t.author}
                    </div>
                    <div className="text-sm text-muted">
                      {t.role}
                      {t.company ? `, ${t.company}` : ""}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-8 rounded-2xl gradient-primary text-white">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-heading mb-2">
              4.9★
            </div>
            <div className="text-sm opacity-90 uppercase tracking-wide">
              Average Rating
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-heading mb-2">
              95%
            </div>
            <div className="text-sm opacity-90 uppercase tracking-wide">
              Would Recommend
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-heading mb-2">
              500+
            </div>
            <div className="text-sm opacity-90 uppercase tracking-wide">
              5-Star Reviews
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-heading mb-2">
              88%
            </div>
            <div className="text-sm opacity-90 uppercase tracking-wide">
              Return Guests
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
