// 🚨 لاحظ: لا يوجد "use client" هنا تماماً ليعمل فوراً من السيرفر سايد
import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]" dir="rtl">
      
      {/* التدرج الخلفي المشرق يتم رندرته فوراً من السيرفر */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-amber-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-amber-50 rounded-full blur-[120px]"></div>
      </div>

      <div className="flex flex-col items-center text-center px-6 relative z-10">
        
        {/* الأيقونة الثابتة تظهر فوراً قبل بدء الحركات التفاعلية */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="relative w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200/60 border border-amber-300 rounded-2xl flex items-center justify-center shadow-sm">
            <svg 
              className="text-amber-600 w-8 h-8" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={1.8}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>

        {/* الكلمات الذهبية المستهدفة */}
        <h1 className="text-3xl md:text-4xl font-black text-amber-800 mb-3 tracking-tight">
          منصة <span className="text-amber-500">الراية</span>
        </h1>
        
        <p className="text-amber-700/80 text-sm md:text-base font-bold tracking-wide max-w-xs md:max-w-md opacity-90">
          للتطوير والاستثمار العقاري والمقاولات العامة
        </p>

        {/* خط تحميل انسيابي ثابت ريثما يكتمل تحميل الـ CSS الحركي */}
        <div className="w-36 h-1 bg-amber-100 rounded-full mt-8 overflow-hidden">
          <div className="w-full h-full bg-amber-400 origin-right"></div>
        </div>

      </div>

      {/* ⚡ هنا نقوم باستدعاء التأثيرات والمؤثرات البصرية بشكل آمن لتفعيل الحركات المتقدمة */}
      <ClientAnimations />
    </div>
  );
};

// 🎨 مكون داخلي صغير لضمان ضخ الـ Keyframes والـ Animations بسلاسة دون تعطيل سرعة بث السيرفر
const ClientAnimations = () => {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes loadingBar {
        0% { transform: scaleX(0); }
        50% { transform: scaleX(1); }
        100% { transform: scaleX(0); }
      }
      @keyframes customPulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: .5; transform: scale(0.95); }
      }
      @keyframes customPing {
        0% { transform: scale(1); opacity: 0.4; }
        100% { transform: scale(1.6); opacity: 0; }
      }
      h1 { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      p { animation: customPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      svg { animation: customPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      .w-full.h-full { animation: loadingBar 1.6s infinite ease-in-out; }
      .absolute.inset-0.w-16.h-16 { animation: customPing 1.2s cubic-bezier(0, 0, 0.2, 1) infinite; }
    `}} />
  );
};

export default Loading;