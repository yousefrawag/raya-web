"use client";

import Image from "next/image";
import { HiSearch } from "react-icons/hi";
import FilterSection from "./FilterSection";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-center">
      
      {/* 1. هيكل الخلفية (تصميم وصلت: الصورة يسار مع منحنى انسيابي) */}
      <div className="absolute inset-0 z-0 flex flex-row-reverse">
        <div className="relative w-full lg:w-[55%] h-full">
          {/* الصورة التي أرفقتها (المبنى التاريخي) */}
          <Image
            src="/homebanner21.webp" 
            alt="الراية للعقارات"
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