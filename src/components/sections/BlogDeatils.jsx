"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

const BlogDeatils = ({ project }) => {
  if (!project) return null;

  // حساب وقت القراءة التقريبي بناءً على طول المحتوى
  const readingTime = project.blogDeatils 
    ? Math.ceil(project.blogDeatils.split(' ').length / 200) 
    : 5;

  return (
    <article className="bg-white min-h-screen" dir="rtl">
      {/* HERO SECTION - ألوان واضحة */}
      <div className="relative w-full h-[60vh] min-h-[450px] overflow-hidden">
        <Image
          src={project.blogImageCutmez?.url || "/api/placeholder/1200/800"}
          alt={project.blogTietal}
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay أسود شفاف - واضح */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-12 pb-16 md:pb-20">
            <div className="space-y-5">
              {/* Category badge - ألوان زاهية */}
              <span className="bg-amber-500 text-white text-sm font-bold px-4 py-1.5 rounded-full inline-block w-fit shadow-lg">
                {project.blogCatgeoray || "عقارات"}
              </span>

              {/* Title - حجم كبير وواضح */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl">
                {project.blogTietal}
              </h1>

              {/* Meta info - تاريخ ووقت قراءة فقط */}
              <div className="flex items-center gap-4 text-white/90">
                <span className="flex items-center gap-1.5 text-sm">
                  <Calendar className="w-4 h-4" />
                  {new Date(project.createdAt).toLocaleDateString("ar-EG", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="text-white/40">|</span>
                <span className="flex items-center gap-1.5 text-sm">
                  <Clock className="w-4 h-4" />
                  {readingTime} دقائق قراءة
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BREADCRUMB - شريط التنقل */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="w-full px-6 md:px-12 py-4">
          <nav className="flex items-center text-sm">
            <Link href="/" className="text-gray-600 hover:text-amber-600 transition-colors">
              الرئيسية
            </Link>
            <ArrowLeft className="w-3 h-3 mx-2 text-gray-400" />
            <Link href="/blogs" className="text-gray-600 hover:text-amber-600 transition-colors">
              المدونة
            </Link>
            <ArrowLeft className="w-3 h-3 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium truncate max-w-[300px]">
              {project.blogTietal}
            </span>
          </nav>
        </div>
      </div>

      {/* MAIN CONTENT - مساحة كاملة */}
      <div className="w-full px-6 md:px-12 py-10 md:py-14">
        {/* كاتب المقال - اختياري */}
        <div className="flex items-center justify-between mb-10 p-5 bg-amber-50 rounded-xl border-r-4 border-amber-500">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
              {project.author?.charAt(0) || "ر"}
            </div>
            <div>
              <p className="text-sm text-gray-500">كتب بواسطة</p>
              <h3 className="text-lg font-bold text-gray-800">{project.author || "فريق الراية"}</h3>
            </div>
          </div>
          
          {/* زر مشاركة فقط - شغال pointer */}
          <button 
            onClick={() => {
              // يمكن إضافة وظيفة المشاركة هنا
              if (navigator.share) {
                navigator.share({
                  title: project.blogTietal,
                  text: project.blogDeatils,
                  url: window.location.href,
                });
              } else {
                // نسخ الرابط للحالات التي لا تدعم المشاركة
                navigator.clipboard.writeText(window.location.href);
                alert("تم نسخ الرابط");
              }
            }}
            className="flex items-center gap-2 bg-white hover:bg-amber-500 text-gray-700 hover:text-white px-5 py-2.5 rounded-lg transition-all duration-300 shadow-sm cursor-pointer border border-gray-200"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-medium">مشاركة</span>
          </button>
        </div>

        {/* CONTENT - يأخذ المساحة الكاملة */}
        <div className="w-full">
          {/* مقدمة المقال */}
          {project.blogDeatils && (
            <div className="mb-8">
              <p className="text-xl leading-relaxed text-gray-700 border-r-4 border-amber-500 pr-6 py-3 bg-amber-50/30 rounded-l-lg font-medium">
                {project.blogDeatils.split('.')[0]}.
              </p>
            </div>
          )}

          {/* المحتوى الرئيسي */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              {project.blogDeatils}
            </p>

            {/* فاصل توضيحي */}
            <div className="my-10 border-b border-gray-200" />

            {/* خاتمة المقال */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">خلاصة المقال</h2>
              <p className="text-gray-700 leading-relaxed">
                في الختام، تظل القدس واحدة من أهم المدن التي تحمل فرصًا
                استثمارية طويلة الأمد في القطاع العقاري. ننصحك بالتواصل مع مستشارينا 
                للحصول على مزيد من التفاصيل حول الفرص الاستثمارية المتاحة.
              </p>
            </div>
          </div>
        </div>

        {/* الوسوم - Tags */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500 ml-2">الوسوم:</span>
            {["استثمار عقاري", "بورصة", "عقارات 2024", "نصائح استثمارية"].map((tag) => (
              <span
                key={tag}
              
                className="px-3 py-1.5 bg-gray-100 text-black hover:bg-amber-500 hover:text-white rounded-full text-sm transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDeatils;