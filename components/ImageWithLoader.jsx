"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Original theme ka lazyload pattern: image load hone ke turant baad
 * (50ms delay) loading-overlay pe "hidden" class lagti hai, jisse
 * solid cream-color overlay 600ms mein fade-out hota hai. Ye shimmer
 * nahi hai - simple solid color reveal hai.
 */
export default function ImageWithLoader({ imgClassName = "", ...props }) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setTimeout(() => setLoaded(true), 50);
  };

  return (
    <>
      <Image {...props} className={imgClassName} onLoad={handleLoad} />
      <div className={`loading-overlay ${loaded ? "hidden" : ""}`} />
    </>
  );
}
