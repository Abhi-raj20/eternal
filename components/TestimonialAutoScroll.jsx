"use client";

import useAutoScroll from "@/hooks/useAutoScroll";
import { testimonials } from "@/data/testimonials";

export default function TestimonialAutoScroll() {
  const trackRef = useAutoScroll(0.5);
  const items = [...testimonials, ...testimonials];

  return (
    <section className="autoscroll-section">
      <div ref={trackRef} className="autoscroll-track">
        {items.map((t, i) => (
          <div key={`${t.name}-${i}`} className="autoscroll-card">
            <p className="autoscroll-card__quote">&ldquo;{t.quote}&rdquo;</p>
            <h6 className="autoscroll-card__name">{t.name}</h6>
            <p className="autoscroll-card__role">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}