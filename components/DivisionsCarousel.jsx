"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import ImageWithLoader from "@/components/ImageWithLoader";
import useAutoScroll from "@/hooks/useAutoScroll";
import { divisions } from "@/data/content";

export default function DivisionsCarousel() {
  const trackRef = useAutoScroll(0.4);

  // Original Splide "auto-scroll" extension jaisa seamless loop banane ke
  // liye list ko do baar duplicate karte hain.
  const loopedDivisions = [...divisions, ...divisions];

  const scrollManual = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  return (
    <section className="pb-80">
      <Reveal as="div" className="section-top pad-h">
        <h2>Our Divisions</h2>
        <Link className="button desktop-only" href="/divisions">
          Discover More
        </Link>
      </Reveal>

      <Reveal className="carousel-wrap pad-h" delay={150}>
        <div className="carousel-track" ref={trackRef}>
          {loopedDivisions.map((division, i) => (
            <Link
              href={`/divisions/${division.slug}`}
              className="division-card"
              key={`${division.slug}-${i}`}
            >
              <div className="image">
                <ImageWithLoader
                  src={division.image}
                  alt={division.name}
                  fill
                  imgClassName="full-bleed-image"
                  sizes="(max-width: 560px) 82vw, (max-width: 900px) 68vw, 260px"
                />
                <div
                  className="overlay"
                  style={{ backgroundColor: division.color }}
                />
                <div className="title">{division.name}</div>
              </div>
              <div className="details">
                <span>{division.name}</span>
                <span className="dark-grey">View</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="carousel-buttons desktop-only">
          <button onClick={() => scrollManual(-1)} aria-label="Previous">
            ←
          </button>
          <button onClick={() => scrollManual(1)} aria-label="Next">
            →
          </button>
        </div>
      </Reveal>

      <div className="pad-h" style={{ marginTop: "1.5rem" }}>
        <Link className="button mobile-only" href="/divisions">
          Discover More
        </Link>
      </div>
    </section>
  );
}
