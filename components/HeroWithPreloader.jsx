"use client";

import { useState, useEffect } from "react";
// import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";

export default function HeroWithPreloader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <Preloader onComplete={() => setReady(true)} /> */}
      <Hero ready={ready} />
      <div className="arrow-scroll" />
    </>
  );
}