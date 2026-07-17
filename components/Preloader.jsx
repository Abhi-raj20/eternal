// "use client";

// import { useEffect, useState } from "react";

// const LOGO_PATH = `M111.7,9.4c-0.3-0.2-0.4-0.5-0.4-0.9c0-0.3,0.1-0.5,0.3-0.7c0.2-0.2,0.4-0.3,0.6-0.4
// c0.3-0.1,0.5-0.2,0.8-0.2c0.2,0,0.5,0,0.7-0.1c0.6,0,1.2,0.1,1.8,0.4c0.5,0.3,0.9,0.8,1,1.4h3.1
// c-0.1-0.7-0.3-1.3-0.6-1.9c-0.3-0.5-0.8-1-1.3-1.3c-0.5-0.3-1.1-0.6-1.7-0.7c-0.7-0.1-1.3-0.2-2-0.2
// c-0.6,0-1.3,0.1-1.9,0.2c-0.6,0.1-1.3,0.3-1.8,0.6c-0.5,0.3-1,0.7-1.4,1.2c-0.4,0.5-0.6,1.2-0.5,1.8
// c0,0.6,0.1,1.2,0.4,1.7c0.2,0.4,0.6,0.8,1,1.1c0.4,0.3,0.9,0.5,1.4,0.7c0.5,0.2,1.1,0.3,1.6,0.4
// c0.5,0.1,1.1,0.2,1.6,0.3c0.5,0.1,0.9,0.2,1.4,0.4c0.4,0.1,0.7,0.3,1,0.6c0.3,0.2,0.4,0.6,0.4,0.9
// c0,0.3-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.8,0.5c-0.3,0.1-0.7,0.2-1,0.2c-0.3,0-0.6,0.1-1,0.1
// c-0.7,0-1.4-0.2-2.1-0.5c-0.6-0.4-1-1.1-1-1.8h-3c0,0.7,0.2,1.4,0.5,2.1c0.3,0.6,0.7,1.1,1.3,1.5
// c0.6,0.4,1.2,0.7,1.9,0.9c0.8,0.2,1.6,0.3,2.4,0.3c0.7,0,1.4-0.1,2.1-0.2c0.7-0.1,1.3-0.4,1.9-0.8
// c0.6-0.3,1.1-0.8,1.4-1.4c0.4-0.6,0.6-1.3,0.5-2c0-0.6-0.1-1.2-0.4-1.7c-0.2-0.4-0.6-0.8-1-1.1
// c-0.4-0.3-0.9-0.5-1.4-0.7c-0.5-0.2-1.1-0.3-1.6-0.4c-0.6-0.1-1.1-0.2-1.6-0.3c-0.5-0.1-0.9-0.2-1.4-0.4
// C112.3,9.8,111.9,9.6,111.7,9.4 M106.5,12.6c0.1-1,0.1-2-0.2-2.9c-0.2-0.9-0.6-1.8-1.2-2.5
// c-0.6-0.7-1.3-1.3-2.1-1.8c-0.9-0.5-1.9-0.7-2.9-0.7c-0.9,0-1.9,0.2-2.7,0.6c-0.8,0.4-1.5,0.9-2,1.6
// c-0.6,0.7-1,1.4-1.3,2.3c-0.3,0.9-0.5,1.8-0.5,2.7c0,1,0.1,1.9,0.4,2.9c0.3,0.8,0.7,1.6,1.3,2.2
// c0.6,0.6,1.3,1.1,2.1,1.5c0.9,0.4,1.8,0.5,2.8,0.5c0.7,0,1.4-0.1,2.1-0.3c0.6-0.2,1.3-0.5,1.8-0.9
// c0.5-0.4,1-0.9,1.4-1.4c0.4-0.6,0.7-1.3,0.8-2h-2.8c-0.2,0.7-0.6,1.3-1.2,1.7c-0.6,0.4-1.4,0.6-2.1,0.6
// c-0.6,0-1.1-0.1-1.6-0.3c-0.4-0.2-0.8-0.5-1.1-0.9c-0.3-0.4-0.5-0.8-0.7-1.3c-0.1-0.5-0.2-1-0.2-1.5L106.5,12.6z
// M103.5,10.7h-6.9c0-0.5,0.1-1,0.3-1.4c0.2-0.4,0.4-0.8,0.7-1.1c0.3-0.3,0.7-0.6,1.1-0.8
// c0.4-0.2,0.9-0.3,1.4-0.3c0.5,0,0.9,0.1,1.4,0.3c0.4,0.2,0.7,0.5,1,0.8c0.3,0.3,0.5,0.7,0.7,1.1
// C103.4,9.8,103.5,10.2,103.5,10.7 M89.1,18.6h3V0h-3V18.6z M83.4,18.6l4.2-13.5h-3l-2.7,10.1h-0.1
// L79.4,5.1h-3l-2.5,10.1h-0.1L71.2,5.1h-3.2l4.2,13.5h3.1l2.5-10h0.1l2.5,10L83.4,18.6z M67.4,14.7
// c0.3-0.9,0.5-1.9,0.5-2.9c0-1-0.1-1.9-0.5-2.8c-0.3-0.8-0.7-1.6-1.3-2.2c-0.6-0.6-1.3-1.1-2.1-1.5
// C63,4.9,62,4.8,61.1,4.8c-1,0-2,0.2-2.9,0.5c-0.8,0.3-1.5,0.8-2.1,1.5c-0.6,0.6-1,1.4-1.3,2.2
// c-0.3,0.9-0.5,1.9-0.5,2.8c0,1,0.1,1.9,0.5,2.9c0.3,0.8,0.7,1.6,1.3,2.2c0.6,0.6,1.3,1.1,2.1,1.5
// c0.9,0.4,1.9,0.6,2.9,0.5c1,0,2-0.2,2.9-0.5c0.8-0.3,1.5-0.8,2.1-1.5C66.7,16.3,67.1,15.5,67.4,14.7
// M64.9,11.9c0,0.6-0.1,1.2-0.2,1.7c-0.1,0.5-0.4,1.1-0.7,1.5c-0.3,0.5-0.7,0.8-1.2,1.1
// c-0.5,0.3-1.1,0.4-1.7,0.4c-0.6,0-1.2-0.1-1.7-0.4c-0.5-0.3-0.9-0.6-1.2-1.1c-0.3-0.5-0.6-1-0.7-1.5
// c-0.1-0.6-0.2-1.1-0.2-1.7c0-0.6,0.1-1.2,0.2-1.7c0.1-0.5,0.4-1.1,0.7-1.5c0.3-0.4,0.7-0.8,1.2-1.1
// c0.5-0.3,1.1-0.4,1.7-0.4c0.6,0,1.2,0.1,1.7,0.4c0.5,0.3,0.9,0.6,1.2,1.1c0.3,0.5,0.6,1,0.7,1.5
// C64.8,10.7,64.9,11.3,64.9,11.9 M49.6,18.6h3V9.4c0.1-1.3-0.4-2.5-1.3-3.4c-1-0.8-2.2-1.2-3.5-1.1
// c-0.9,0-1.7,0.2-2.4,0.6c-0.7,0.4-1.3,1-1.8,1.8l-0.1-0.1v-2h-2.8v13.5h3v-7.9c0-0.5,0.1-0.9,0.2-1.4
// c0.1-0.4,0.4-0.8,0.7-1.1c0.3-0.3,0.6-0.6,1-0.8c0.4-0.2,0.9-0.3,1.4-0.3c0.7-0.1,1.4,0.2,2,0.7
// c0.5,0.7,0.7,1.5,0.7,2.3L49.6,18.6z M39.6,18.6L31.7,7.4L39.1,0h-4l-8.3,8.5V0h-3.3v18.6h3.3v-6.3
// l2.7-2.6l6.1,8.9H39.6z M14.5,18.4h4V9.3h-3v6.1h-11v3L14.5,18.4z M3,3.2h11v-3H0v9.1h3V3.2z`;

// /**
//  * Original theme ka .logo-animation exact sequence:
//  * - t=0: big logo (25rem) center screen, header logo hidden, hero-text hidden
//  * - t=1000ms: .animated class -> shrink to 15.82rem + move to top:1.25rem
//  * - t=2000ms: header logo fade in, preloader logo fade out, hero-text fadeIn(500ms)
//  * Sirf desktop (>=769px) pe chalta hai - mobile pe original bhi skip karta hai.
//  */
// export default function Preloader({ onComplete }) {
//   const [visible, setVisible] = useState(false);
//   const [animated, setAnimated] = useState(false);
//   const [faded, setFaded] = useState(false);

//   useEffect(() => {
//     const isDesktop = window.matchMedia("(min-width: 769px)").matches;

//     if (!isDesktop) {
//       onComplete?.();
//       return;
//     }

//     setVisible(true);
//     document.body.style.overflow = "hidden";

//     const t1 = setTimeout(() => setAnimated(true), 1000);
//     const t2 = setTimeout(() => {
//       setFaded(true);
//       document.body.style.overflow = "";
//       onComplete?.();
//     }, 2000);

//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//       document.body.style.overflow = "";
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   if (!visible) return null;

//   return (
//     <div
//       className={`logo-animation ${animated ? "animated" : ""} ${
//         faded ? "faded" : ""
//       }`}
//       aria-hidden="true"
//     >
//       <svg viewBox="0 0 120 19" xmlns="http://www.w3.org/2000/svg">
//         <path d={LOGO_PATH} />
//       </svg>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";

/**
 * Original theme ka .logo-animation exact sequence:
 * - t=0: big logo (25rem) center screen, header logo hidden, hero-text hidden
 * - t=1000ms: .animated class -> shrink to 15.82rem + move to top:1.25rem
 * - t=2000ms: header logo fade in, preloader logo fade out, hero-text fadeIn(500ms)
 * Sirf desktop (>=769px) pe chalta hai - mobile pe original bhi skip karta hai.
 */
export default function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [faded, setFaded] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 769px)").matches;

    if (!isDesktop) {
      onComplete?.();
      return;
    }

    setVisible(true);
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setAnimated(true), 1000);
    const t2 = setTimeout(() => {
      setFaded(true);
      document.body.style.overflow = "";
      onComplete?.();
    }, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`logo-animation ${animated ? "animated" : ""} ${
        faded ? "faded" : ""
      }`}
      aria-hidden="true"
    >
      <img src="/images/Logo_white.png"  alt="Eternal"
      // width={120}
      // height={80} 
      />
    </div>
  );
}