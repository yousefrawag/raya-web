"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import heroVideoPoster from "@/images/Hero-images/poster.png";
import Image from "next/image";
import FilterSection from "./FilterSection";
// import videourl from "@/images/banner-bg-BshJoH4o.mp4"
const HeroSection = () => {
  const videoRef = useRef(null);

  // نصوص العنوان
  const texts = [
    "ابنِ مستقبلك معانا",
    "امتلك عقارك الفاخر",
    "استثمر في أفضل المشاريع العقارية",
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // typing effect
  useEffect(() => {
    const currentText = texts[textIndex];

    let typingSpeed = deleting ? 50 : 100;

    const typing = setTimeout(() => {
      if (!deleting) {
        // كتابة
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setDeleting(true), 1500); // انتظار قبل الحذف
        }
      } else {
        // مسح
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length); // تغيير للنص التالي
        }
      }
    }, typingSpeed);

    return () => clearTimeout(typing);
  }, [charIndex, deleting, textIndex]);

  // scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate");
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
   <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
  {/* Background Video */}
  <div className="absolute inset-0">
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster={heroVideoPoster.src}
    >
      <source
        src= "/banner.mp4" 
        type="video/mp4"
      />
    </video>
    <div className="absolute inset-0 bg-black/40" /> {/* overlay لتوضيح النص */}
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl px-6 text-white space-y-6">
    <h1 className="text-3xl md:text-5xl font-bold text-amber-400 leading-snug">
      {displayText}
      <span className="border-r-2 border-white ml-1 animate-pulse"></span>
    </h1>
    <p className="text-lg md:text-2xl text-gray-200">
      اكتشف العقارات السكنية والتجارية المميزة التي تعيد تعريف أسلوب
      المعيشة الحديثة، حيث تلتقي الفخامة مع الابتكار في كل التفاصيل.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Link
        href="/Projects"
        className="px-6 py-3 bg-amber-500 rounded-2xl font-semibold hover:bg-amber-600 transition"
      >
        جميع المشاريع
      </Link>
      <Link
        href="/contact"
        className="px-6 py-3 border border-amber-500 rounded-2xl font-semibold hover:bg-amber-500 hover:text-white transition"
      >
        تواصل معنا
      </Link>
    </div>
  </div>

  {/* Filter Section */}
  <div className="absolute bottom-6 w-full px-4 z-20">
    <FilterSection />
  </div>
</section>

  );
};

export default HeroSection;
