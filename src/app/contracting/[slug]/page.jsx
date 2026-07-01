import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { GetConstractByslug } from '@/lib/GetConstractByslug';
import { HiOutlineCheckCircle, HiOutlineChevronRight , HiOutlinePlus } from 'react-icons/hi';
import GallerySlider from '@/components/common/GallerySlider'; 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
// ==========================================
// 1. إعداد الـ SEO الديناميكي المتقدم
// ==========================================
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await GetConstractByslug(slug);

  if (!data) return { title: 'الخدمة غير متوفرة | الراية' };

  const serviceTitle = data?.title || "خدمات المقاولات";
  
  const generateMassiveKeywords = () => {
    const actions = ["مقاول", "شركة", "تكلفة", "اسعار", "افضل مقاول", "تعهدات", "مكتب", "تنفيذ", "مهندس" , "بناء" , "إنشاء"];
    const cities = ["القدس", "رام الله", "اريحا", "نابلس", "الخليل", "بيت لحم", "جنين", "طولكرم", "كفر عقب", "بيت حنينا", "شعفاط", "صور باهر", "الماصيون", "الطيرة", "البيرة", "اريحا البوابة", "الديوك"];
    
    let keywords = [serviceTitle, `شركة الراية ${serviceTitle}`, "مقاولات عامة فلسطين", "بناء عظم وتشطيب"];

    cities.forEach(city => {
      keywords.push(`${serviceTitle} في ${city}`);
      actions.forEach(action => { keywords.push(`${action} ${serviceTitle} ${city}`); });
    });
    return keywords;
  };

  return {
    title: `${serviceTitle} في القدس ورام الله وأريحا | الراية للمقاولات`,
    description: data?.details ? data.details.substring(0, 160) + '...' : `تفاصيل خدمة ${serviceTitle} من شركة الراية للمقاولات العامة. نقدم أفضل المعايير الهندسية بأسعار منافسة.`,
    keywords: generateMassiveKeywords(),
    alternates: { canonical: `https://www.rayapal.com/contracting/${slug}` },
    openGraph: {
      title: `${serviceTitle} | الراية للمقاولات`,
      description: data?.details ? data.details.substring(0, 150) + '...' : `اكتشف مميزات ${serviceTitle} معنا.`,
      url: `https://www.rayapal.com/contracting/${slug}`,
      images: [{ url: data?.seriesimagesCutmez?.[0]?.url || "https://www.rayapal.com/og-image.png", width: 1200, height: 630, alt: serviceTitle }],
      locale: "ar_PS",
      type: "article",
    },
  };
}

// ==========================================
// 2. المكون الرئيسي للصفحة (Server Component)
// ==========================================
const SingleConstractionService = async ({ params }) => {
  const { slug } = await params;
  const data = await GetConstractByslug(slug);
  const richTextOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, file } = node.data.target.fields;
        return (
          <img
            src={`https:${file.url}`}
            alt={title || 'صورة'}
            className="rounded-xl my-6 w-full object-cover shadow-lg border border-gray-100"
          />
        );
      },
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-800">{children}</h3>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-4">{children}</p>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal pr-6 space-y-2 mb-4">{children}</ol>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc pr-6 space-y-2 mb-4">{children}</ul>
      ),
    },
  };
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900" dir="rtl">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">عذراً، الخدمة غير موجودة!</h1>
          <Link href="/contracting" className="text-amber-500 font-bold hover:underline">العودة لصفحة المقاولات</Link>
        </div>
      </div>
    );
  }

  const title = data?.title || "عنوان الخدمة";
  const badge = data?.badg || "خدمة هندسية مميزة";
  const description = data?.details || "تفاصيل الخدمة غير متوفرة حالياً.";
  const features = data?.features || [];
  const images = data?.seriesimagesCutmez || [];
  const mainImage = images[0]?.url || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80";
  const whatsappNumber = data?.whatssapfolow || "+972568700632";
  const videoUrl = data?.youtupeUrl;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "الراية للمقاولات العامة",
      "telephone": whatsappNumber,
      "image": "https://www.rayapal.com/icon.png",
      "address": { "@type": "PostalAddress", "addressLocality": "Jerusalem, Ramallah, Jericho", "addressCountry": "PS" }
    },
    "areaServed": [{ "@type": "City", "name": "Jerusalem" }, { "@type": "City", "name": "Ramallah" }, { "@type": "City", "name": "Jericho" }],
    "description": description.substring(0, 200),
    "image": mainImage,
    "url": `https://www.rayapal.com/contracting/${slug}`
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased" dir="rtl">
      <Script id={`schema-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
        
        {/* التوهجات الخلفية اللمسية الناعمة جداً */}
        <div className="absolute inset-0 opacity-40 pointer-events-none -z-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* النصوص والمحاذاة */}
            <div className="flex flex-col items-start text-right">
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-medium">
                <Link href="/" className="hover:text-amber-600 transition-colors">الرئيسية</Link>
                <HiOutlineChevronRight className="rotate-180 text-xs" />
                <Link href="/contracting" className="hover:text-amber-600 transition-colors">المقاولات</Link>
                <HiOutlineChevronRight className="rotate-180 text-xs" />
                <span className="text-slate-900 font-bold">{title}</span>
              </div>

              <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-xs font-bold mb-5 border border-amber-200/50 shadow-xs">
                {badge}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.25] tracking-tight">
                {title}
              </h1>
               {
                data.details2 ? (
                  // ✅ الحالة الجديدة (Rich Text): نحول الـ JSON إلى عناصر
                  <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed font-medium text-base md:text-lg">
                    {documentToReactComponents(data.details2, richTextOptions)}
                  </div>
                ) : (
                  // ❌ الحالة القديمة (نص عادي): نعرضه مع احترام الأسطر الجديدة
              <p className="text-slate-700 text-lg leading-relaxed whitespace-pre-line font-medium max-w-2xl">
                {description}
              </p>
                )
              }
          
                <div className="flex justify-center mt-5">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://wa.me/${whatsappNumber}?text=مرحباً شركة الراية للمقاولات، أود الاستفسار عن ${title}.`}
                          className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-amber-500 transition-all shadow-xl shadow-slate-200"
                        >
                          <HiOutlinePlus size={20}/> اطلب تسعير مشروعك الإنشائي الآن
                        </a>
                      </div>
            </div>
            
                    

            {/* عرض الصورة كاملة 100% وبدون أي اقتصاص (Fixed Dimensions & Contain) */}
            <div className="relative w-full flex items-center justify-center  bg-white  shadow-xl shadow-slate-100 border border-slate-100 overflow-hidden aspect-[4/3]">
              <img 
                src={mainImage} 
                alt={title}
                className="w-full h-full rounded-sm" 
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION (MODERN & RESTRUCTURED) ================= */}
      {features && features.length > 0 && (
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">مميزات الخدمة</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
            </div>

            {/* الكروت مرتبة أفقياً وهيكلياً بشكل ممتاز ومحاذاة كاملة للخط العربي */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-amber-200 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 group"
                >
                  {/* الأيقونة على اليمين بوضوح تام */}
                  <div className="bg-white text-amber-500 p-3 rounded-xl shadow-xs border border-slate-100 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors shrink-0">
                    <HiOutlineCheckCircle size={26} />
                  </div>
                  
                  {/* النصوص محاذية تماماً بجانب الأيقونة */}
                  <div className="flex flex-col text-right">
                    
                    <p className="text-slate-600 text-lg leading-relaxed font-medium">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= GALLERY & VIDEO SLIDER (Client Component) ================= */}
      <GallerySlider images={images} videoUrl={videoUrl} />

    </div>
  );
};

export default SingleConstractionService;