"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageWithLoader({ imgClassName = "", ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Image
        {...props}
        className={imgClassName}
        onLoad={() => setLoaded(true)}
        style={{
          ...props.style,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      />
      <div className={`loading-overlay ${loaded ? "is-loaded" : ""}`} />
    </>
  );
}
