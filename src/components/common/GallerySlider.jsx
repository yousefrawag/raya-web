"use client";
import React, { useState } from 'react';
import { HiOutlineZoomIn, HiX, HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { FaPlay } from 'react-icons/fa';

export default function GallerySlider({ images = [], videoUrl = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // استخراج ID اليوتيوب عشان نجيب صورته المصغرة
  const getYoutubeId = (url) => {
    if (!url) return null;
    const match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const ytId = getYoutubeId(videoUrl);
  
  // دمج الفيديو (لو موجود) مع الصور في مصفوفة واحدة
  const media = [];
  if (ytId) {
    media.push({
      type: 'video',
      url: `https://www.youtube.com/embed/${ytId}?autoplay=1`,
      thumb: `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
    });
  }
  
  // إضافة باقي الصور للمصفوفة
  if (images && images.length > 0) {
    images.forEach(img => {
      media.push({ type: 'image', url: img.url, thumb: img.url });
    });
  }

  // لو مفيش أي ميديا خالص، متعملش ريندر للسكشن
  if (media.length === 0) return null;

  const handleNext = () => setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4">معرض الأعمال والتنفيذ</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* شبكة الصور المبدئية */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {media.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => { setCurrentIndex(idx); setIsOpen(true); }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img src={item.thumb} alt={`عرض ${idx}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                {item.type === 'video' ? (
                  <FaPlay className="text-white text-4xl drop-shadow-lg" />
                ) : (
                  <HiOutlineZoomIn className="text-white text-5xl drop-shadow-lg" />
                )}
              </div>
              
              {/* شارة توضح أنه فيديو */}
              {item.type === 'video' && (
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <FaPlay size={10} /> فيديو
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* الـ Popup بحجم الشاشة (Slider) */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between" dir="rtl">
          {/* زر الإغلاق */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 left-6 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-red-500 rounded-full w-12 h-12 flex items-center justify-center transition-all"
          >
            <HiX size={28} />
          </button>

          {/* العرض الرئيسي (الصورة أو الفيديو الكبير) */}
          <div className="flex-1 w-full flex items-center justify-center relative px-12 md:px-24">
            <button onClick={handlePrev} className="absolute right-4 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-all z-10">
              <HiChevronRight size={32} />
            </button>

            <div className="w-full max-w-5xl max-h-[75vh] flex justify-center items-center rounded-2xl overflow-hidden shadow-2xl relative">
              {media[currentIndex].type === 'video' ? (
                <div className="w-full aspect-video rounded-2xl overflow-hidden">
                  <iframe className="w-full h-full" src={media[currentIndex].url} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
              ) : (
                <img src={media[currentIndex].url} className="max-w-full max-h-[75vh]" alt="عرض مكبر" />
              )}
            </div>

            <button onClick={handleNext} className="absolute left-4 md:left-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-all z-10">
              <HiChevronLeft size={32} />
            </button>
          </div>

          {/* شريط الصور المصغرة بالأسفل (Thumbnails Navigation) */}
          <div className="w-full h-28 bg-black border-t border-white/10 flex items-center justify-center gap-3 overflow-x-auto px-4 py-4 scrollbar-hide">
            {media.map((item, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentIndex(idx)}
                className={`relative h-full shrink-0 aspect-[4/3] rounded-lg overflow-hidden transition-all duration-300 ${currentIndex === idx ? 'border-2 border-amber-500 scale-105 opacity-100' : 'opacity-40 hover:opacity-100 border border-transparent'}`}
              >
                <img src={item.thumb} alt={`صورة ${idx}`} className="w-full h-full object-cover" />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <FaPlay className="text-white text-lg drop-shadow-md" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}