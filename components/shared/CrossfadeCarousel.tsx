"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useAutoCarousel } from "@/hooks/useAutoCarousel";
import { useMemo, useState } from "react";

type MediaItem =
  | { type: "image"; src: string }
  | {
      type: "video";
      src: string;
      autoPlay?: boolean;
      loop?: boolean;
      muted?: boolean;
    };

interface CrossfadeCarouselProps {
  media: MediaItem[];
  alt: string;
  interval?: number;
  className?: string;
  showDots?: boolean;
  priority?: boolean;
}

/**
 * 🔥 Crossfade Carousel
 * - Supports images and videos
 * - Auto-plays with pause on hover/focus
 * - Respects prefers-reduced-motion
 * - Dots for navigation
 * - Extensible: parent sets aspect ratio, carousel fills
 */
export function CrossfadeCarousel({
  media,
  alt,
  interval = 3000,
  className = "",
  showDots = true,
  priority = false,
}: CrossfadeCarouselProps) {
  const prefersReducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const safeMedia = useMemo(
    () => (media.length ? media : [{ type: "image", src: "/placeholder.png" }]),
    [media]
  );

  const [active, setActive] = useAutoCarousel(safeMedia.length, {
    interval,
    paused: hovered || !!prefersReducedMotion,
  });

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {/* Media stage */}
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
          {safeMedia[active].type === "image" ? (
            <Image
              src={safeMedia[active].src}
              alt={alt}
              fill
              priority={priority}
              className="object-cover object-center will-change-transform"
              sizes="100vw"
            />
          ) : (
            <video
              src={safeMedia[active].src}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay={
                safeMedia[active].type === "video"
                  ? ((
                      safeMedia[active] as Extract<MediaItem, { type: "video" }>
                    ).autoPlay ?? true)
                  : undefined
              }
              loop={
                safeMedia[active].type === "video"
                  ? ((
                      safeMedia[active] as Extract<MediaItem, { type: "video" }>
                    ).loop ?? true)
                  : undefined
              }
              muted={
                safeMedia[active].type === "video"
                  ? ((
                      safeMedia[active] as Extract<MediaItem, { type: "video" }>
                    ).muted ?? true)
                  : undefined
              }
              playsInline
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      {showDots && safeMedia.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 z-10">
          {safeMedia.map((_, i) => (
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
  );
}
