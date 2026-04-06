"use client";

import Image from "next/image";
import { HiSearch } from "react-icons/hi";
import FilterSection from "./FilterSection";
import rayaLanding from "@/images/Hero-images/raya-landdung.jpeg"
const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-center">
      
      {/* 1. هيكل الخلفية (تصميم وصلت: الصورة يسار مع منحنى انسيابي) */}
      <div className="absolute inset-0 z-0 flex flex-row-reverse">
        <div className="relative w-full lg:w-[55%] h-full  hidden sm:block">
          {/* الصورة التي أرفقتها (المبنى التاريخي) */}
          <Image
            src={rayaLanding}
            alt="منصة الراية لخدمات الاستثمار والتسويق"
            fill
            priority
            className="object-cover object-center"
            style={{
              // القناع الانسيابي الذي يجعل الصورة تندمج مع الخلفية البيضاء من جهة اليمين
              clipPath: 'ellipse(100% 100% at 100% 50%)'
            }}
          />
          {/* طبقة شفافة خفيفة لتحسين التباين إذا لزم الأمر */}
          <div className="absolute inset-0 bg-black/5 lg:hidden"></div>
        </div>
        
        {/* المساحة البيضاء للنص (يمين) */}
        <div className="hidden lg:block lg:w-[45%] bg-white"></div>
      </div>

      {/* 2. المحتوى (هوية الراية: ألوانك ونصوصك الخاصة) */}
      <div className="relative z-20 container mx-auto px-6 lg:px-16 w-full">
        <div className="grid lg:grid-cols-2 items-center">
          
          {/* الجانب الأيمن: نصوص "الراية" وألوانها */}
          <div className="text-right flex flex-col items-start lg:pr-4">
            
            {/* Badge بهوية الراية */}
            {/* <div className="inline-flex items-center gap-2 bg-orange-50 text-[#f59e0b] px-4 py-2 rounded-full text-xs font-bold mb-6 border border-orange-100">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse"></span>
              قرص عقارية حصرية في القدس وأريحا
            </div> */}

            <h1 className="text-4xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mt-20 mb-6">
              استثمر في <br />
              <span className="text-[#f59e0b]">مستقبلك العقاري</span> <br />
              بأمان واحترافية
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
              نقدم لك أفخم الوحدات السكنية والمشاريع الاستثمارية في القدس، أريحا، وكفر عقب. خبرتنا في السوق الفلسطيني تضمن لك الاختيار الأمثل.
            </p>

            {/* سكشن البحث (FilterSection) - ممتد عرضياً ليأخذ مساحته كما في وصلت */}
            <div className="w-full lg:w-[135%] xl:w-[150%] relative group">
              <div className="bg-white p-3 rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-50">
                <FilterSection />
              </div>
            </div>

            {/* قسم الثقة (Social Proof) - هويتك */}
            <div className="mt-10 flex items-center gap-4">
               <div className="flex -space-x-3 space-x-reverse">
                  <img src="https://i.pravatar.cc/100?u=8" className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="client" />
                  <img src="https://i.pravatar.cc/100?u=5" className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="client" />
                  <img src="https://i.pravatar.cc/100?u=11" className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="client" />
               </div>
               <div className="flex flex-col">
                  <span className="text-sm font-black text-slate-900">+500 عميل</span>
                  <span className="text-xs text-slate-400 font-bold">يثقون بنا في الراية</span>
               </div>
            </div>
          </div>

          {/* الجانب الأيسر: فارغ ليظهر جمال الصورة المنحنية خلفه */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;










// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import heroVideoPoster from "@/images/Hero-images/poster.png";
// import FilterSection from "./FilterSection";

// const HeroSection = () => {
//    const videoRef = useRef(null);
//   const [showVideo, setShowVideo] = useState(false);

//   // Animated texts
//   const texts = [
//     "ابنِ مستقبلك معانا",
//     "امتلك عقارك الفاخر",
//     "استثمر في أفضل المشاريع العقارية",
//   ];

//   const [displayText, setDisplayText] = useState("");
//   const [textIndex, setTextIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [deleting, setDeleting] = useState(false);

//   // Typing effect
//   useEffect(() => {
//     const currentText = texts[textIndex];
//     const typingSpeed = deleting ? 50 : 100;

//     const timeout = setTimeout(() => {
//       if (!deleting) {
//         setDisplayText(currentText.slice(0, charIndex + 1));
//         setCharIndex((prev) => prev + 1);

//         if (charIndex + 1 === currentText.length) {
//           setTimeout(() => setDeleting(true), 1500);
//         }
//       } else {
//         setDisplayText(currentText.slice(0, charIndex - 1));
//         setCharIndex((prev) => prev - 1);

//         if (charIndex === 0) {
//           setDeleting(false);
//           setTextIndex((prev) => (prev + 1) % texts.length);
//         }
//       }
//     }, typingSpeed);

//     return () => clearTimeout(timeout);
//   }, [charIndex, deleting, textIndex, texts]);

//   // Lazy load video after 1s
//   useEffect(() => {
//     const timer = setTimeout(() => setShowVideo(true), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center pb-48">
//       {/* Poster as background */}
//       <div className="absolute inset-0 -z-10">
//         <Image
//           src={heroVideoPoster}
//           alt="Hero Poster"
//           fill
//           sizes="100vw"
//           quality={70}
//           priority
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       {/* Lazy Video */}
//       {showVideo && typeof window !== "undefined" && (
//         <video
//           ref={videoRef}
//           className="absolute inset-0 w-full h-full object-cover -z-20"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/banner.mp4" type="video/mp4" />
//         </video>
//       )}

//       {/* Content */}
//       <div className="relative z-10 px-6 text-white flex flex-col items-center pt-24 md:pt-0">
//         <h1 className="text-3xl md:text-5xl font-bold text-amber-400 leading-snug text-center">
//           {displayText}
//           <span className="border-r-2 border-white ml-1 animate-pulse" />
//         </h1>

//         <p className="hidden md:block text-lg md:text-2xl text-gray-200 mt-4 max-w-3xl text-center">
//           اكتشف العقارات السكنية والتجارية المميزة التي تعيد تعريف أسلوب
//           المعيشة الحديثة، حيث تلتقي الفخامة مع الابتكار في كل التفاصيل.
//         </p>
//       </div>

//       {/* Filter Section */}
//       <div className="w-full px-4 z-20 mt-8 md:absolute md:bottom-6">
//         <FilterSection />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;