'use client';

import React, { useState, useEffect } from 'react';
import { HiOutlineChevronUp } from 'react-icons/hi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // التحكم في ظهور الزر بناءً على مسافة التمرير
  useEffect(() => {
    const toggleVisibility = () => {
      // إذا تجاوز التمرير 400 بكسل يظهر الزر، وإلا يختفي
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // دالة الصعود السلس للأعلى
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="الرجوع إلى الأعلى"
          className="fixed bottom-8 left-8 z-50 p-4 rounded-2xl bg-white text-slate-900 border border-amber-200 shadow-xl shadow-amber-500/10 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1 group animate-fade-in"
        >
          <HiOutlineChevronUp 
            size={24} 
            className="animate-bounce group-hover:animate-none" 
          />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;