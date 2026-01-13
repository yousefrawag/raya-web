"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import heroVideoPoster from "@/images/Hero-images/poster.png";
import FilterSection from "./FilterSection";

const HeroSection = () => {
   const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  // Animated texts
  const texts = [
    "ابنِ مستقبلك معانا",
    "امتلك عقارك الفاخر",
    "استثمر في أفضل المشاريع العقارية",
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts]);

  // Lazy load video after 1s
  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center pb-48">
      {/* Poster as background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroVideoPoster}
          alt="Hero Poster"
          fill
          sizes="100vw"
          quality={70}
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Lazy Video */}
      {showVideo && typeof window !== "undefined" && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover -z-20"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>
      )}

      {/* Content */}
      <div className="relative z-10 px-6 text-white flex flex-col items-center pt-24 md:pt-0">
        <h1 className="text-3xl md:text-5xl font-bold text-amber-400 leading-snug text-center">
          {displayText}
          <span className="border-r-2 border-white ml-1 animate-pulse" />
        </h1>

        <p className="hidden md:block text-lg md:text-2xl text-gray-200 mt-4 max-w-3xl text-center">
          اكتشف العقارات السكنية والتجارية المميزة التي تعيد تعريف أسلوب
          المعيشة الحديثة، حيث تلتقي الفخامة مع الابتكار في كل التفاصيل.
        </p>
      </div>

      {/* Filter Section */}
      <div className="w-full px-4 z-20 mt-8 md:absolute md:bottom-6">
        <FilterSection />
      </div>
    </section>
  );
};

export default HeroSection;
