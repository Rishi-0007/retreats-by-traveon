import { useEffect, useRef, useState } from "react";

/**
 * Auto-playing carousel index controller.
 * @param length - number of slides
 * @param options - { interval, paused }
 */
export function useAutoCarousel(
  length: number,
  {
    interval = 3500,
    paused = false,
  }: { interval?: number; paused?: boolean } = {}
) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused || length <= 1) return;
    if (timerRef.current) window.clearInterval(timerRef.current);

    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, interval);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [length, interval, paused]);

  return [index, setIndex] as const;
}
