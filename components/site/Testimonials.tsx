// components/site/Testimonials.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ---------------- Types ---------------- */

type Media = {
  type: "video" | "image";
  src: string; // /testimonials/1.mp4 OR /assets/...jpg
  poster?: string; // optional poster for video (or image fallback)
  format?: "portrait" | "landscape"; // portrait = 9:16, landscape = 16:9
  autoplayOnView?: boolean; // 👈 new: autoplay when card is visible
  loop?: boolean; // optional: loop video (default true)
};

type Testimonial = {
  content: string;
  author: string;
  role: string;
  company?: string;
  rating: number;
  avatar: string;
  media?: Media;
  trip?: string;
};

/* ---------------- Light HTML5 Video ----------------
   - Shows poster by default.
   - If autoplayOnView=true, it autoplays muted once the card is ~50% visible.
   - Pauses when scrolled away; resumes when visible again.
---------------------------------------------------- */
function LightVideo({
  src,
  title,
  poster,
  format = "landscape",
  autoplayOnView = false,
  loop = true,
}: {
  src: string;
  title: string;
  poster?: string;
  format?: "portrait" | "landscape";
  autoplayOnView?: boolean;
  loop?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const pad =
    format === "portrait"
      ? "pt-[177.78%]" /* 9:16 */
      : "pt-[56.25%]"; /* 16:9 */

  // Observe visibility to start/stop video
  useEffect(() => {
    if (!autoplayOnView) return;
    const el = wrapperRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio >= 0.5) {
            setPlaying(true);
          } else {
            setPlaying(false);
          }
        }
      },
      { threshold: [0, 0.5, 1] }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [autoplayOnView]);

  // Keep the <video> element in control when visibility toggles
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (playing) {
      // ensure muted is set before play (iOS/Safari)
      v.muted = true;
      const p = v.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          /* ignore autoplay errors */
        });
      }
    } else {
      try {
        v.pause();
      } catch {}
    }
  }, [playing]);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full ${pad} rounded-xl overflow-hidden shadow-card bg-background`}
    >
      {/* Render poster layer if not playing and not in autoplay-on-view mode */}
      {!playing && !autoplayOnView && (
        <button
          type="button"
          aria-label="Play testimonial video"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full"
        >
          {poster ? (
            <Image
              src={poster}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 bg-muted/10" />
          )}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-smooth" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-14 w-14 rounded-full bg-white/95 text-primary grid place-items-center shadow-card group-hover:scale-105 transition-spring">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path fill="currentColor" d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}

      {/* Always mount the <video> when autoplayOnView is true so it can start instantly when visible.
          For click-to-play case, mount only when playing to avoid initial buffering. */}
      {(autoplayOnView || playing) && (
        <video
          ref={videoRef}
          src={src}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          autoPlay
          controls
          loop={loop}
          preload={autoplayOnView ? "auto" : "metadata"}
          aria-label={title}
        />
      )}

      {/* If autoplayOnView and not yet playing (not visible enough), show the poster behind the future video mount */}
      {autoplayOnView && !playing && poster && (
        <Image
          src={poster}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}
    </div>
  );
}

/* ---------------- Media Frame ----------------
   Renders either an image or a (light) local video with correct aspect.
------------------------------------------------ */
function MediaFrame({ media, title }: { media?: Media; title: string }) {
  if (!media) return null;
  const format = media.format ?? "landscape";
  const pad = format === "portrait" ? "pt-[177.78%]" : "pt-[56.25%]";

  if (media.type === "image") {
    return (
      <div
        className={`relative w-full ${pad} rounded-xl overflow-hidden shadow-card bg-background`}
      >
        <Image
          src={media.src}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <LightVideo
      src={media.src}
      poster={media.poster}
      title={title}
      format={format}
      autoplayOnView={media.autoplayOnView}
      loop={media.loop ?? true}
    />
  );
}

/* ---------------- Data ---------------- */

const testimonials: Testimonial[] = [
  {
    content:
      "Our group of five friends travelled to Pattaya and Bangkok—proof that adventure has no age! Traveon handled every detail with care: smooth transfers, clean and central hotels, and thoughtfully paced days. It was joyful, comfortable, and truly memorable.",
    author: "Mahendra Pratap Singh",
    role: "Retired Bank Manager",
    company: "(Lucknow)",
    rating: 5,
    avatar: "MS",
    trip: "Pattaya & Bangkok, Thailand",
    media: {
      type: "video",
      src: "/testimonials/1.mp4", // put the file in /public/testimonials/1.mp4
      poster: "/assets/testimonials/thailand-senior-group.jpg",
      format: "portrait", // reel-style 9:16
      autoplayOnView: true, // 👈 will autoplay (muted) when visible
      loop: true,
    },
  },
  {
    content:
      "The wellness retreat in Rishikesh completely transformed my perspective on work-life balance. The yoga sessions at sunrise and sound healing were exactly what my soul needed.",
    author: "Priya Sharma",
    role: "Marketing Director",
    company: "Tech Startup",
    rating: 5,
    avatar: "PS",
    media: {
      type: "image",
      src: "/testimonials/priya.jpg",
      format: "landscape",
    },
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
      "The community tour through Oman opened our eyes to authentic Arabia. Every interaction felt genuine, and the local connections we made were priceless.",
    author: "Rahul Mehta",
    role: "Travel Blogger",
    company: "Wanderlust Weekly",
    rating: 5,
    avatar: "ET",
    media: {
      type: "image",
      src: "/testimonials/oman.jpeg",
      format: "landscape",
    },
  },
  {
    author: "Aisha Khan",
    role: "Freelance Designer",
    rating: 5,
    avatar: "AK",
    trip: "Almaty & Astana, Kazakhstan",
    content:
      "Exploring Kazakhstan with Traveon was an unforgettable experience. From the bustling markets of Almaty to the futuristic skyline of Astana, every moment was filled with wonder and discovery. The local guides were incredibly knowledgeable and made us feel at home.",
    media: {
      type: "image",
      src: "/testimonials/almaty.jpeg",
      format: "landscape",
    },
  },
];

/* ---------------- UI bits ---------------- */

function Rating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex space-x-1" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
      ))}
    </div>
  );
}

/* ---------------- Main ---------------- */

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

        {/* Masonry columns: no stretched rows, neat balancing */}
        <div className="space-y-8 md:columns-2 lg:columns-3 md:gap-8">
          {testimonials.map((t, index) => {
            const hasMedia = !!t.media;
            return (
              <Card
                key={index}
                className="relative p-8 shadow-card hover:shadow-floating transition-spring bg-gradient-to-br from-background to-primary/5 border-0 mb-8 break-inside-avoid"
              >
                {/* Hide quote if media exists to avoid overlay */}
                {!hasMedia && (
                  <div className="absolute top-6 right-6 opacity-20 pointer-events-none z-0">
                    <Quote className="h-8 w-8 text-primary" />
                  </div>
                )}

                <CardContent className="p-0 space-y-6 relative z-10">
                  {/* Media */}
                  {hasMedia && (
                    <div>
                      <MediaFrame
                        media={t.media}
                        title={`${t.author} — Testimonial`}
                      />
                      {t.trip && (
                        <div className="mt-2 text-xs uppercase tracking-wide text-muted">
                          {t.trip}
                        </div>
                      )}
                    </div>
                  )}

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
            );
          })}
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
