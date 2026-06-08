"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2, User, Tag, Bookmark, Video } from "lucide-react";

const BlogDetails = ({ project }) => {
  if (!project) return null;

  // حساب وقت القراءة التقريبي
  const readingTime = project.blogDeatils 
    ? Math.ceil(project.blogDeatils.split(' ').length / 200) 
    : 5;

  // تقسيم تفاصيل المدونة إلى مصفوفة فقرات بناءً على الأسطر لتوزيعها بشكل أفضل
  const allParagraphs = project.blogDeatils 
    ? project.blogDeatils.split('\n').filter(p => p.trim() !== '') 
    : [];

  // تقسيم المحتوى: أول فقرتين كمقدمة بارزة، والباقي كجسم المقال الرئيسي
  const introParagraphs = allParagraphs.slice(0, 2);
  const mainParagraphs = allParagraphs.slice(2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.blogTietal,
        text: project.shortDescription || project.blogTietal,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("تم نسخ رابط المقال بنجاح!");
    }
  };

  // دالة مساعدة لتحويل رابط يوتيوب العادي إلى رابط Embed صالح للـ iframe
  const getEmbedUrl = (url) => {
    if (!url) return null;
    let videoId = "";
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split(/[?#]/)[0];
    } else if (url.includes("youtube.com/watch")) {
      videoId = url.split("v=")[1]?.split(/[&#]/)[0];
    } else if (url.includes("youtube.com/embed/")) {
      videoId = url.split("embed/")[1]?.split(/[?#]/)[0];
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const videoEmbedUrl = getEmbedUrl(project.youtupeUrl);

  return (
    <article className="bg-gray-50 min-h-screen text-right pt-20" dir="rtl">
      
      <div className="bg-white border-b border-gray-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <Link href="/" className="hover:text-amber-600 transition-colors">الرئيسية</Link>
            <ArrowLeft className="w-3.5 h-3.5 text-gray-400 rotate-180" />
            <Link href="/blogs" className="hover:text-amber-600 transition-colors">المدونة</Link>
            <ArrowLeft className="w-3.5 h-3.5 text-gray-400 rotate-180" />
            <span className="text-gray-800 font-semibold truncate max-w-[220px] md:max-w-xs">
              {project.blogTietal}
            </span>
          </nav>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* هيدر المقال الرئيسي (العنوان والتصنيف) */}


        {/* 🖼️ قسم الصورة - عرض كامل، نقي وبدون أي طبقة ألوان عازلة */}
        <div className="relative w-full aspect-[16/9] max-h-[550px]  overflow-hidden shadow-md border border-gray-100 bg-gray-200 mb-10">
          <Image
            src={project.blogImageCutmez?.url || "/api/placeholder/1200/800"}
            alt={project.blogTietal}
            fill
            // className="object-cover"
            priority
            sizes="(max-w-1200px) 100vw, 1200px"
          />
        </div>
        
        <div className="mb-6 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
            <Tag className="w-3 h-3" />
            {project.blogCatgeoray || "عقارات استثمارية"}
          </span>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-snug tracking-tight">
            {project.blogTietal}
          </h1>

          {/* معلومات الميتا البسيطة */}
          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500 pt-2 border-b border-gray-200/60 pb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-500" />
              {new Date(project.createdAt || Date.now()).toLocaleDateString("ar-EG", {
                year: "numeric", month: "long", day: "numeric"
              })}
            </span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-500" />
              تستغرق القراءة: {readingTime} دقائق
            </span>
          </div>
        </div>
        {/* تخطيط الصفحة: المحتوى الرئيسي + الجانب الأيسر (Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* العمود الأيمن الكبير: تفاصيل المقال المقسمة بشكل مريح وعصري */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            
            {/* 1. مقدمة المقال (الفقرات الأولى المميزة) */}
            {introParagraphs.length > 0 && (
              <div className="mb-8 p-5 bg-gradient-to-r from-amber-50/40 to-amber-50 border-r-4 border-amber-500 rounded-l-xl">
                {introParagraphs.map((para, i) => (
                  <p key={i} className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed text-justify mb-3 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            )}

            {/* 2. جسم المقال الرئيسي (باقي التفاصيل مقسمة لسهولة القراءة) */}
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
              {mainParagraphs.length > 0 ? (
                mainParagraphs.map((paragraph, index) => (
                  <p key={index} className="transition-all hover:text-gray-900">
                    {paragraph}
                  </p>
                ))
              ) : (
                // في حال كان المقال قصيراً ولم يتم تقسيمه بالكامل أعلى
                allParagraphs.slice(2).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              )}
            </div>

            {/* 📺 قسم الفيديو من اليوتيوب - يظهر فقط إذا كان الرابط موجوداً وصالحاً */}
            {videoEmbedUrl && (
              <div className="mt-10 mb-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Video className="w-5 h-5 text-amber-500" />
                  الشرح المرئي للموضوع
                </h3>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md border border-gray-100 bg-black">
                  <iframe
                    className="absolute top-0 right-0 w-full h-full"
                    src={videoEmbedUrl}
                    title={project.blogTietal}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {/* الفاصل التوضيحي البصري */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-[1px] bg-gray-200 flex-grow" />
              <Bookmark className="w-5 h-5 text-amber-500 shrink-0" />
              <div className="h-[1px] bg-gray-200 flex-grow" />
            </div>

            {/* 3. خاتمة المقال وخلاصة النصائح العقارية */}
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-5 bg-amber-500 rounded-sm inline-block"></span>
                خلاصة المقال والتوصية العقارية
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                في الختام، تظل الاستشارات العقارية المدروسة هي بوابتك الآمنة لتحقيق عوائد استثمارية طويلة الأمد ومستديمة. 
                نحن في <span className="font-semibold text-amber-600">شركة الراية للتطوير والاستثمار العقاري</span> نضع خبرتنا الطويلة بين يديك لمساعدتك في اتخاذ القرار الأمثل. لا تتردد في التواصل مع أحد مستشارينا العقاريين للحصول على تحليل شامل للفرص المتاحة حالياً بالسوق.
              </p>
            </div>

          </div>

          {/* العمود الأيسر (Sidebar): معلومات الكاتب والمشاركة والوسوم */}
          <div className="space-y-6">
            
            {/* بطاقة الكاتب والمشاركة */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-tr from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-inner mx-auto mb-3">
                {project.author?.charAt(0) || "ر"}
              </div>
              <span className="text-xs text-gray-400 block mb-1">تأليف ونشر</span>
              <h3 className="text-md font-bold text-gray-800 mb-4">{project.author || "فريق الراية الخبير"}</h3>
              
              <button 
                onClick={handleShare}
                className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-amber-600 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 shadow-sm cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span className="text-sm">مشاركة المقال الفورية</span>
              </button>
            </div>

            {/* صندوق الوسوم الذكي والمحسّن للـ SEO الداخلي */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-sm font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">الوسوم ذات الصلة</h4>
              <div className="flex flex-wrap gap-2">
                {["استثمار عقاري", "الراية العقارية", "عقارات 2026", "نصائح استثمارية", "شقق فاخرة"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1.5 bg-gray-50 text-gray-600 hover:bg-amber-500 hover:text-white border border-gray-100 rounded-lg text-xs font-medium transition-all cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </article>
  );
};

export default BlogDetails;

