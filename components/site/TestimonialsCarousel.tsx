"use client";
import * as React from "react";

const testimonials = [
  { quote: "A beautifully curated retreat — felt renewed and focused.", author: "Aditi, Mumbai" },
  { quote: "Our offsite aligned leadership and energized the team.", author: "Rahul, HR Head" },
];

export function TestimonialsCarousel() {
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);
  const item = testimonials[idx];
  return (
    <section className="container py-16">
      <figure className="mx-auto max-w-2xl text-center">
        <blockquote className="text-xl md:text-2xl">“{item.quote}”</blockquote>
        <figcaption className="mt-3 text-ink/70">— {item.author}</figcaption>
      </figure>
    </section>
  )
}
