// "use client";

// import { useRef, useState } from "react";
// import Image from "next/image";

// export default function ProjectGallerySlider({ images = [] }) {
//   const [active, setActive] = useState(0);
//   const trackRef = useRef(null);
//   const touchStartX = useRef(null);

//   if (!images.length) return null;

//   const goTo = (index) => {
//     const next = (index + images.length) % images.length;
//     setActive(next);
//   };

//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e) => {
//     if (touchStartX.current === null) return;
//     const deltaX = e.changedTouches[0].clientX - touchStartX.current;
//     if (deltaX > 50) goTo(active - 1);
//     else if (deltaX < -50) goTo(active + 1);
//     touchStartX.current = null;
//   };

//   return (
//     <div className="pd-slider">
//       <div className="pd-slider__header">
//         <button
//           type="button"
//           aria-label="Previous slide"
//           className="pd-slider__btn pd-slider__btn--prev"
//           onClick={() => goTo(active - 1)}
//         >
//           <svg viewBox="0 0 55.2 14.9" xmlns="http://www.w3.org/2000/svg">
//             <line x1="0" y1="7.5" x2="46" y2="7.5" stroke="currentColor" strokeWidth="1.5" />
//             <path d="M39,0.5l7,7l-7,7" fill="none" stroke="currentColor" strokeWidth="1.5" />
//           </svg>
//         </button>

//         <button
//           type="button"
//           aria-label="Next slide"
//           className="pd-slider__btn pd-slider__btn--next"
//           onClick={() => goTo(active + 1)}
//         >
//           <svg viewBox="0 0 55.2 14.9" xmlns="http://www.w3.org/2000/svg">
//             <line x1="55.2" y1="7.5" x2="9.2" y2="7.5" stroke="currentColor" strokeWidth="1.5" />
//             <path d="M16.2,0.5l-7,7l7,7" fill="none" stroke="currentColor" strokeWidth="1.5" />
//           </svg>
//         </button>
//       </div>

//       <div
//         className="pd-slider__viewport"
//         onTouchStart={handleTouchStart}
//         onTouchEnd={handleTouchEnd}
//       >
//         <div
//           ref={trackRef}
//           className="pd-slider__track"
//           style={{ transform: `translateX(-${active * 100}%)` }}
//         >
//           {images.map((src, i) => (
//             <div className="pd-slider__cell" key={src + i}>
//               <Image
//                 src={src}
//                 alt=""
//                 fill
//                 sizes="(max-width: 768px) 100vw, 60vw"
//                 className="pd-slider__image"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="pd-slider__dots">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             type="button"
//             aria-label={`Go to slide ${i + 1}`}
//             className={`pd-slider__dot ${i === active ? "is-active" : ""}`}
//             onClick={() => goTo(i)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useRef, useState } from "react";
import Image from "next/image";

/**
 * Two-up filmstrip gallery matching the reference design:
 * - cream background, no card/border chrome
 * - two images visible at once on desktop, one on mobile
 * - thin minimal line-arrows above the gallery, aligned left
 * - no dot pagination
 */
export default function ProjectGallerySlider({ images = [] }) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);

  if (!images.length) return null;

  // How many images are visible in the viewport at once.
  // Controlled via CSS variable so mobile can drop to 1 without a JS resize listener.
  const goTo = (index) => {
    const maxIndex = Math.max(images.length - 1, 0);
    const next = Math.min(Math.max(index, 0), maxIndex);
    setActive(next);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) goTo(active - 1);
    else if (deltaX < -50) goTo(active + 1);
    touchStartX.current = null;
  };

  return (
    <div className="pd-slider">
      <div className="pd-slider__header">
        <button
          type="button"
          aria-label="Previous slide"
          className="pd-slider__btn"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
        >
          <svg viewBox="0 0 56 15" xmlns="http://www.w3.org/2000/svg">
            <line x1="56" y1="7.5" x2="9" y2="7.5" stroke="currentColor" strokeWidth="1" />
            <path d="M16,0.5 L9,7.5 L16,14.5" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Next slide"
          className="pd-slider__btn"
          onClick={() => goTo(active + 1)}
          disabled={active === images.length - 1}
        >
          <svg viewBox="0 0 56 15" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="7.5" x2="47" y2="7.5" stroke="currentColor" strokeWidth="1" />
            <path d="M40,0.5 L47,7.5 L40,14.5" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </button>
      </div>

      <div
        className="pd-slider__viewport"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="pd-slider__track"
          style={{ transform: `translateX(calc(-${active} * (var(--cell-w) + var(--gap))))` }}
        >
          {images.map((src, i) => (
            <div className="pd-slider__cell" key={src + i}>
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 768px) 90vw, 42vw"
                className="pd-slider__image"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pd-slider {
          --gap: 40px;
          --cell-w: 42vw;
          --cell-h: 76vh;
          --bg: #f5f2ec;
          --ink: #2b2b28;

          background: var(--bg);
          padding: 48px 0 64px 64px;
          overflow: hidden;
        }

        .pd-slider__header {
          display: flex;
          gap: 40px;
          margin-bottom: 64px;
        }

        .pd-slider__btn {
          background: none;
          border: none;
          padding: 0;
          width: 56px;
          height: 15px;
          color: var(--ink);
          cursor: pointer;
          opacity: 1;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .pd-slider__btn svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .pd-slider__btn:hover:not(:disabled) {
          transform: translateX(2px);
        }

        .pd-slider__btn:disabled {
          opacity: 0.3;
          cursor: default;
        }

        .pd-slider__viewport {
          overflow: hidden;
          width: 100%;
        }

        .pd-slider__track {
          display: flex;
          gap: var(--gap);
          transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .pd-slider__cell {
          position: relative;
          flex: 0 0 var(--cell-w);
          height: var(--cell-h);
          background: #e5e2da;
        }

        .pd-slider__image {
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .pd-slider {
            --cell-w: 82vw;
            --cell-h: 60vh;
            padding: 32px 0 40px 24px;
          }
          .pd-slider__header {
            margin-bottom: 32px;
          }
        }
      `}</style>
    </div>
  );
}