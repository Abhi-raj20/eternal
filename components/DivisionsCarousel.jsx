// "use client";

// import Link from "next/link";
// import Reveal from "@/components/Reveal";
// import ImageWithLoader from "@/components/ImageWithLoader";
// import useAutoScroll from "@/hooks/useAutoScroll";
// import { divisions } from "@/data/content";

// export default function DivisionsCarousel() {
//   const trackRef = useAutoScroll(0.4);
//   const loopedDivisions = [...divisions, ...divisions];

//   const scrollManual = (dir) => {
//     if (trackRef.current) {
//       trackRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="divisions-block pb-80">
//       <Reveal as="div" className="top pad-h pb-80 ourservice">
//         <h2>Our Divisions</h2>
//         <Link className="button desktop-only" href="/divisions">
//           Discover More
//         </Link>
//       </Reveal>

//       <Reveal className="carousel-wrap pad-h">
//         <div className="carousel-track" ref={trackRef}>
//           {loopedDivisions.map((division, i) => (
//             <Link
//               href={`/divisions/${division.slug}`}
//               className="division-card"
//               key={`${division.slug}-${i}`}
//             >
//               <div className="image">
//                 <ImageWithLoader
//                   src={division.image}
//                   alt={division.name}
//                   fill
//                   imgClassName="full-bleed-image"
//                   sizes="(max-width: 768px) 90vw, 260px"
//                 />
//                 <div
//                   className="overlay"
//                   style={{ backgroundColor: division.color }}
//                 />
//                 <div className="title brygada-font">{division.name}</div>
//               </div>
//               <div className="details">
//                 <div>{division.name}</div>
//                 <div className="dark-grey">View</div>
//               </div>
//             </Link>
//           ))}
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
//         <Link className="button mobile-only" href="/divisions">
//           Discover More
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
import { divisions } from "@/data/content";

export default function DivisionsCarousel() {
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
    <section className="divisions-block pb-80">
      <Reveal as="div" className="top pad-h pb-80 ourservice">
        <h2>Our Divisions</h2>

        <Link className="button desktop-only" href="/divisions">
          Discover More
        </Link>
      </Reveal>

      <Reveal className="carousel-wrap pad-h">
        <div className="carousel-track" ref={trackRef}>
          {divisions.map((division) => (
            <Link
              href={`/divisions/${division.slug}`}
              className="division-card"
              key={division.slug}
            >
              <div className="image">
                <ImageWithLoader
                  src={division.image}
                  alt={division.name}
                  fill
                  imgClassName="full-bleed-image"
                  sizes="(max-width:768px) 90vw,260px"
                />

                <div
                  className="overlay"
                  style={{ backgroundColor: division.color }}
                />

                <div className="title brygada-font">
                  {division.name}
                </div>
              </div>

              <div className="details">
                <div>{division.name}</div>
                <div className="dark-grey">View</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Large Rectangle Buttons */}
      <div className="carousel-buttons desktop-only">
  <span className="prev-button" onClick={() => scrollManual(-1)}>
    <HiOutlineArrowLongLeft size={34} />
  </span>

  <span className="next-button" onClick={() => scrollManual(1)}>
    <HiOutlineArrowLongRight size={34} />
  </span>
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