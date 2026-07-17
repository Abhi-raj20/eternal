// "use client";

// import Link from "next/link";
// import Reveal from "@/components/Reveal";
// import ImageWithLoader from "@/components/ImageWithLoader";
// import useAutoScroll from "@/hooks/useAutoScroll";
// import { featuredProjects } from "@/data/content";

// export default function FeaturedProjects() {
//   const trackRef = useAutoScroll(0.5);
//   const loopedProjects = [...featuredProjects, ...featuredProjects];

//   const scrollManual = (dir) => {
//     if (trackRef.current) {
//       trackRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="featured-projects pt-80 pb-80">
//       <Reveal as="div" className="top pad-h pb-80 ourservice">
//         <h2>Featured Projects</h2>
//         <Link className="button desktop-only" href="/projects">
//           More Projects
//         </Link>
//       </Reveal>

//       <Reveal className="carousel-wrap pad-h">
//         <div className="carousel-track" ref={trackRef}>
//           {loopedProjects.map((project, i) => {
//             const CardInner = (
//               <>
//                 <div className="image">
//                   <ImageWithLoader
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     imgClassName="full-bleed-image"
//                     sizes="(max-width: 768px) 80vw, 280px"
//                   />
//                   <div
//                     className="overlay"
//                     style={{ backgroundColor: project.color }}
//                   />
//                   <div className="short-description" />
//                 </div>
//                 <div className="details">
//                   <div>{project.title}</div>
//                   <div className="dark-grey">{project.category}</div>
//                 </div>
//               </>
//             );

//             return project.slug ? (
//               <Link
//                 href={`/projects/${project.slug}`}
//                 className="project-card projects-thumb"
//                 key={`${project.title}-${i}`}
//               >
//                 {CardInner}
//               </Link>
//             ) : (
//               <div
//                 className="project-card projects-thumb"
//                 key={`${project.title}-${i}`}
//               >
//                 {CardInner}
//               </div>
//             );
//           })}
//         </div>

//         <div className="carousel-buttons desktop-only">
//           <span className="prev-button" onClick={() => scrollManual(-1)}>
//             ←
//           </span>
//           <span className="next-button" onClick={() => scrollManual(1)}>
//             →
//           </span>
//         </div>
//       </Reveal>

//       <div className="pad-h" style={{ marginTop: "1.5rem" }}>
//         <Link className="button mobile-only" href="/projects">
//           More Projects
//         </Link>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import Link from "next/link";
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import Reveal from "@/components/Reveal";
import ImageWithLoader from "@/components/ImageWithLoader";
import { featuredProjects } from "@/data/content";

export default function FeaturedProjects() {
  const trackRef = useRef(null);

  const scrollManual = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        left: dir * 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="featured-projects pt-80 pb-80">
      <Reveal as="div" className="top pad-h pb-80 ourservice">
        <h2>Featured Projects</h2>

        <Link className="button desktop-only" href="/projects">
          More Projects
        </Link>
      </Reveal>

      <Reveal className="carousel-wrap pad-h">
        <div className="carousel-track" ref={trackRef}>
          {featuredProjects.map((project) => {
            const CardInner = (
              <>
                <div className="image">
                  <ImageWithLoader
                    src={project.image}
                    alt={project.title}
                    fill
                    imgClassName="full-bleed-image"
                    sizes="(max-width: 768px) 80vw, 280px"
                  />

                  <div
                    className="overlay"
                    style={{ backgroundColor: project.color }}
                  />

                  <div className="short-description" />
                </div>

                <div className="details">
                  <div>{project.title}</div>
                  <div className="dark-grey">{project.category}</div>
                </div>
              </>
            );

            return project.slug ? (
              <Link
                href={`/projects/${project.slug}`}
                className="project-card projects-thumb"
                key={project.slug}
              >
                {CardInner}
              </Link>
            ) : (
              <div
                className="project-card projects-thumb"
                key={project.title}
              >
                {CardInner}
              </div>
            );
          })}
        </div>

        <div className="carousel-buttons desktop-only">
          <span
            className="prev-button"
            onClick={() => scrollManual(-1)}
          >
            <HiOutlineArrowLongLeft size={34} />
          </span>

          <span
            className="next-button"
            onClick={() => scrollManual(1)}
          >
            <HiOutlineArrowLongRight size={34} />
          </span>
        </div>
      </Reveal>

      <div className="pad-h" style={{ marginTop: "1.5rem" }}>
        <Link className="button mobile-only" href="/projects">
          More Projects
        </Link>
      </div>
    </section>
  );
}