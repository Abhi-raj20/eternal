// "use client";

// import { useEffect, useRef } from "react";

// /**
//  * Continuous auto-scroll for a horizontal track — jaise original site ka
//  * Splide "auto-scroll" extension. Hover/touch pe pause hota hai, chhod
//  * dene par phir se chalu ho jaata hai. Track ke andar content do baar
//  * duplicate hona chahiye taaki loop seamless lage.
//  */
// export default function useAutoScroll(speed = 0.5) {
//   const trackRef = useRef(null);

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     let rafId;
//     let paused = false;

//     function step() {
//       if (!paused && track.scrollWidth > track.clientWidth) {
//         track.scrollLeft += speed;
//         const singleSetWidth = track.scrollWidth / 2;
//         if (track.scrollLeft >= singleSetWidth) {
//           track.scrollLeft -= singleSetWidth;
//         }
//       }
//       rafId = requestAnimationFrame(step);
//     }

//     rafId = requestAnimationFrame(step);

//     const pause = () => (paused = true);
//     const resume = () => (paused = false);

//     track.addEventListener("pointerenter", pause);
//     track.addEventListener("pointerleave", resume);
//     track.addEventListener("touchstart", pause, { passive: true });
//     track.addEventListener("touchend", resume);

//     return () => {
//       cancelAnimationFrame(rafId);
//       track.removeEventListener("pointerenter", pause);
//       track.removeEventListener("pointerleave", resume);
//       track.removeEventListener("touchstart", pause);
//       track.removeEventListener("touchend", resume);
//     };
//   }, [speed]);

//   return trackRef;
// }


"use client";

import { useEffect, useRef } from "react";

export default function useAutoScroll(speed = 0.5) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let rafId;
    let paused = false;

    function step() {
      if (!paused && track.scrollWidth > track.clientWidth) {
        track.scrollLeft += speed;
        const singleSetWidth = track.scrollWidth / 2;
        if (singleSetWidth > 0 && track.scrollLeft >= singleSetWidth) {
          track.scrollLeft -= singleSetWidth;
        }
      }
      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);

    const pause = () => (paused = true);
    const resume = () => (paused = false);

    track.addEventListener("pointerenter", pause);
    track.addEventListener("pointerleave", resume);
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener("pointerenter", pause);
      track.removeEventListener("pointerleave", resume);
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("touchend", resume);
    };
  }, [speed]);

  return trackRef;
}