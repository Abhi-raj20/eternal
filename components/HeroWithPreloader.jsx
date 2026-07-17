"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";

export default function HeroWithPreloader() {
  // Desktop pe preloader complete hone tak hero-text hidden rehta hai
  // (jaise original theme: e(".hero-text").css("display","none") preloader ke dauraan)
  const [ready, setReady] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setReady(true)} />
      <Hero ready={ready} />
      {/* Original theme ka scroll target down-arrow click ke liye */}
      <div className="arrow-scroll" />
    </>
  );
}
