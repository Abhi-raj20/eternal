"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import ImageWithLoader from "@/components/ImageWithLoader";
import useAutoScroll from "@/hooks/useAutoScroll";
import { featuredProjects } from "@/data/content";

export default function FeaturedProjects() {
  const trackRef = useAutoScroll(0.5);
  const loopedProjects = [...featuredProjects, ...featuredProjects];

  const scrollManual = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-80 pb-80 pad-h">
      <Reveal as="div" className="section-top">
        <h2>Featured Projects</h2>
        <Link className="button desktop-only" href="/projects">
          More Projects
        </Link>
      </Reveal>

      <Reveal className="carousel-wrap" delay={150}>
        <div className="carousel-track" ref={trackRef}>
          {loopedProjects.map((project, i) => {
            const CardInner = (
              <>
                <div className="image">
                  <ImageWithLoader
                    src={project.image}
                    alt={project.title}
                    fill
                    imgClassName="full-bleed-image"
                    sizes="(max-width: 560px) 86vw, (max-width: 900px) 78vw, 280px"
                  />
                  <div
                    className="overlay"
                    style={{ backgroundColor: project.color }}
                  />
                </div>
                <div className="details">
                  <span>{project.title}</span>
                  <span className="dark-grey">{project.category}</span>
                </div>
              </>
            );

            return project.slug ? (
              <Link
                href={`/projects/${project.slug}`}
                className="project-card"
                key={`${project.title}-${i}`}
              >
                {CardInner}
              </Link>
            ) : (
              <div className="project-card" key={`${project.title}-${i}`}>
                {CardInner}
              </div>
            );
          })}
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

      <div style={{ marginTop: "1.5rem" }}>
        <Link className="button mobile-only" href="/projects">
          More Projects
        </Link>
      </div>
    </section>
  );
}
