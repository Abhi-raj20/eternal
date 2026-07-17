// "use client";

// import { useState, useRef, useCallback, useEffect } from "react";
// import Image from "next/image";

// export default function BeforeAfterSlider({
//   beforeImage,
//   afterImage,
//   beforeAlt = "Before",
//   afterAlt = "After",
//   beforeLabel = "Before",
//   afterLabel = "After",
// }) {
//   const [position, setPosition] = useState(50); // % from left
//   const containerRef = useRef(null);
//   const isDragging = useRef(false);

//   const updatePosition = useCallback((clientX) => {
//     const container = containerRef.current;
//     if (!container) return;

//     const rect = container.getBoundingClientRect();
//     let percent = ((clientX - rect.left) / rect.width) * 100;
//     percent = Math.max(0, Math.min(100, percent));
//     setPosition(percent);
//   }, []);

//   const handleMouseDown = () => {
//     isDragging.current = true;
//   };

//   const handleMouseUp = useCallback(() => {
//     isDragging.current = false;
//   }, []);

//   const handleMouseMove = useCallback(
//     (e) => {
//       if (!isDragging.current) return;
//       updatePosition(e.clientX);
//     },
//     [updatePosition]
//   );

//   const handleTouchMove = useCallback(
//     (e) => {
//       if (!isDragging.current) return;
//       updatePosition(e.touches[0].clientX);
//     },
//     [updatePosition]
//   );

//   // click anywhere on the slider to move it directly
//   const handleClick = (e) => {
//     updatePosition(e.clientX);
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     window.addEventListener("touchmove", handleTouchMove);
//     window.addEventListener("touchend", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//       window.removeEventListener("touchmove", handleTouchMove);
//       window.removeEventListener("touchend", handleMouseUp);
//     };
//   }, [handleMouseMove, handleMouseUp, handleTouchMove]);

//   return (
//     <div
//       ref={containerRef}
//       className="ba-slider"
//       onClick={handleClick}
//     >
//       {/* AFTER image - full width, sits at the back */}
//       <div className="ba-image-wrap">
//         <Image
//           src={afterImage}
//           alt={afterAlt}
//           fill
//           className="ba-image"
//           sizes="(max-width: 768px) 100vw, 570px"
//           priority
//         />
//         <span className="ba-label ba-label-after">{afterLabel}</span>
//       </div>

//       {/* BEFORE image - clipped from the right based on position */}
//       <div
//         className="ba-image-wrap ba-before-wrap"
//         style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
//       >
//         <Image
//           src={beforeImage}
//           alt={beforeAlt}
//           fill
//           className="ba-image"
//           sizes="(max-width: 768px) 100vw, 570px"
//           priority
//         />
//         <span className="ba-label ba-label-before">{beforeLabel}</span>
//       </div>

//       {/* Handle */}
//       <div
//         className="ba-handle"
//         style={{ left: `${position}%` }}
//         onMouseDown={handleMouseDown}
//         onTouchStart={handleMouseDown}
//       >
//         <span className="ba-arrow ba-arrow-left" />
//         <span className="ba-arrow ba-arrow-right" />
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

const DEFAULT_BEFORE_IMAGE =
  "https://themefic.com/plugins/wp-content/uploads/2024/10/Room-Construction-Before.jpg";
const DEFAULT_AFTER_IMAGE =
  "https://themefic.com/plugins/wp-content/uploads/2024/10/Room-Construction-After.jpg";

export default function BeforeAfterSlider({
  beforeImage = DEFAULT_BEFORE_IMAGE,
  afterImage = DEFAULT_AFTER_IMAGE,
  beforeAlt = "Before",
  afterAlt = "After",
  beforeLabel = "Before",
  afterLabel = "After",
}) {
  const [position, setPosition] = useState(50); // % from left
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    let percent = ((clientX - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    setPosition(percent);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging.current) return;
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const handleClick = (e) => {
    updatePosition(e.clientX);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div ref={containerRef} className="ba-slider" onClick={handleClick}>
      {/* AFTER image - full width, sits at the back */}
      <div className="ba-image-wrap">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="ba-image"
          sizes="(max-width: 768px) 100vw, 570px"
          priority
        />
        <span className="ba-label ba-label-after">{afterLabel}</span>
      </div>

      {/* BEFORE image - clipped from the right based on position */}
      <div
        className="ba-image-wrap ba-before-wrap"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="ba-image"
          sizes="(max-width: 768px) 100vw, 570px"
          priority
        />
        <span className="ba-label ba-label-before">{beforeLabel}</span>
      </div>

      {/* Handle */}
      <div
        className="ba-handle"
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <span className="ba-arrow ba-arrow-left" />
        <span className="ba-arrow ba-arrow-right" />
      </div>
    </div>
  );
}