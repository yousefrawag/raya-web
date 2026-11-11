"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

// سلايدر خفيف (~2KB) بدل Swiper (~45KB JS + 3 ملفات CSS).
// - الكروت نفسها بتترندر على السيرفر (children)، الكومبوننت ده بيضيف بس النقط والتشغيل التلقائي.
// - من غير scrollbar، بالسحب على الموبايل، ونقط تحت زي Swiper بالظبط.
// - شغال RTL: بنحسب المسافة من حافة الكارت مش من scrollLeft (اللي بيختلف بين المتصفحات في RTL).
export default function Carousel({ children, delay = 3000, className = "" }) {
  const trackRef = useRef(null);
  const [pages, setPages] = useState(1);
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  const slides = () => Array.from(trackRef.current?.children || []);

  // عدد النقط = عدد الكروت - اللي ظاهر مرة واحدة + 1 (نفس سلوك Swiper)
  const measure = useCallback(() => {
    const track = trackRef.current;
    const first = slides()[0];
    if (!track || !first) return;
    const visible = Math.max(1, Math.round(track.clientWidth / first.offsetWidth));
    setPages(Math.max(1, slides().length - visible + 1));
  }, []);

  const goTo = useCallback((index) => {
    const track = trackRef.current;
    const slide = slides()[index];
    if (!track || !slide) return;
    const isRtl = getComputedStyle(track).direction === "rtl";
    const t = track.getBoundingClientRect();
    const s = slide.getBoundingClientRect();
    const pad = parseFloat(getComputedStyle(track)[isRtl ? "paddingRight" : "paddingLeft"]) || 0;
    const delta = isRtl ? s.right - (t.right - pad) : s.left - (t.left + pad);
    // scrollBy أفقي بس → الصفحة نفسها مش بتتحرك لفوق أو لتحت
    track.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  // تحديد النقطة النشطة حسب أول كارت ظاهر
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    measure();
    const items = slides();
    const visible = new Set();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const i = items.indexOf(e.target);
          if (e.isIntersecting) visible.add(i);
          else visible.delete(i);
        });
        if (visible.size) setActive(Math.min(...visible));
      },
      { root: track, threshold: 0.6 }
    );
    items.forEach((el) => io.observe(el));
    window.addEventListener("resize", measure);
    return () => {
      io.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  // تشغيل تلقائي (بيقف لما المستخدم يحط الماوس أو يلمس، ومش بيشتغل لو مفعّل reduce motion)
  useEffect(() => {
    if (!delay || pages <= 1) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (pausedRef.current || document.hidden) return;
      goTo(active + 1 >= pages ? 0 : active + 1);
    }, delay);
    return () => clearInterval(id);
  }, [active, pages, delay, goTo]);

  const pause = () => (pausedRef.current = true);
  const resume = () => (pausedRef.current = false);

  return (
    <div
      className={className}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar"
      >
        {children}
      </div>

      {pages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4" role="tablist" aria-label="التنقل بين الكروت">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`الانتقال للكارت ${i + 1}`}
              onClick={() => goTo(i)}
              className={`carousel-dot ${i === active ? "carousel-dot-active" : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
