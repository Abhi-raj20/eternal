"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Original theme ka inViewport-based "out-of-view" -> "am-in-view" pattern,
 * IntersectionObserver se implement kiya gaya. Class names exactly original
 * jaisi rakhi hain taaki devtools mein bhi match ho.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  opacityOnly = false,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseClass = opacityOnly ? "out-of-opacity" : "out-of-view";
  const activeClass = opacityOnly ? "in-opacity" : "am-in-view";

  return (
    <Tag
      ref={ref}
      className={`${baseClass} ${visible ? activeClass : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
