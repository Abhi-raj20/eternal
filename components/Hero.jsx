"use client";

import { useEffect, useState } from "react";
import ImageWithLoader from "@/components/ImageWithLoader";
import { heroSlides } from "@/data/content";

function DownArrow() {
  return (
    <svg viewBox="0 0 21.4 26.4" xmlns="http://www.w3.org/2000/svg">
      <line
        className="st0"
        x1="10.7"
        y1="0"
        x2="10.7"
        y2="25"
      />
      <path className="st0" d="M20.7,15l-10,10l-10-10" />
    </svg>
  );
}

export default function Hero({ ready = true }) {
  const [active, setActive] = useState(0);
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Original: scrollTop > 100 pe tint-overlay + hero-text fade out
    function onScroll() {
      setScrolledPast(window.scrollY > 100);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToNext = () => {
    // Original: ".arrow-scroll" element ke offset tak scroll
    const target = document.querySelector(".arrow-scroll");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header-trigger">
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
            <div
              className="tint-overlay"
              style={{
                backgroundColor: "#3F3F3F",
                opacity: scrolledPast ? 0 : 0.5,
              }}
            />
          </div>
        ))}

        <h1
          className="hero-text"
          key={active}
          style={{ opacity: ready && !scrolledPast ? 1 : 0 }}
        >
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

        <button
          className="down-arrow"
          onClick={scrollToNext}
          aria-label="Scroll down"
        >
          <DownArrow />
        </button>
      </div>
    </div>
  );
}
