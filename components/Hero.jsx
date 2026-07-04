"use client";

import { useEffect, useState } from "react";
import ImageWithLoader from "@/components/ImageWithLoader";
import { heroSlides } from "@/data/content";

function DownArrow() {
  return (
    <svg viewBox="0 0 21.4 26.4" xmlns="http://www.w3.org/2000/svg">
      <line x1="10.7" y1="0" x2="10.7" y2="25" stroke="#fff" strokeWidth="1.2" />
      <path
        d="M20.7,15l-10,10l-10-10"
        stroke="#fff"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const target = document.getElementById("after-hero");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.title}
          className={`hero-slide ${i === active ? "active" : ""}`}
        >
          <ImageWithLoader
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            imgClassName="full-bleed-image"
            sizes="100vw"
          />
          {/* Original theme ka tint-overlay - har slide ke upar dark tint */}
          <div className="tint-overlay" />
        </div>
      ))}

      <h1 className="hero-text" key={active}>
        {heroSlides[active].title}
      </h1>

      <div className="hero-dots">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.title}
            aria-label={`Go to slide ${i + 1}`}
            className={i === active ? "active" : ""}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

      {/* Original theme ka down-arrow - bounce + click to scroll */}
      <button className="down-arrow" onClick={scrollToNext} aria-label="Scroll down">
        <DownArrow />
      </button>
    </div>
  );
}
