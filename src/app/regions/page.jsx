export const revalidate = 86400;
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineSearch, HiOutlineLocationMarker } from 'react-icons/hi';
import Script from 'next/script';
// استيراد الصور الحقيقية للمناطق كما هي لديك
import quets from "../../images/regions/qutes.jpeg";
import ramella from "../../images/regions/ramall.jpeg";
import phetahnen from "../../images/regions/pethanen.jpeg";
import akrab from "../../images/regions/akrab.jpeg";
import surbare from "../../images/regions/SurBahir.webp";

// داتا بنية المناطق المحدثة بالـ slugs الصحيحة للهيكلة والـ URLs المطلوبة
const regionsStructure = [
  {
    name: "القدس",
    slug: "jerusalem",
    image: quets, // الصورة الحقيقية للقدس
    description: "العاصمة وقلب فلسطين العقاري النابض",
    locations: [
      { name: "صور باهر", slug: "sur-baher", image: surbare },
      { name: "شعfاط", slug: "shuafat", image: quets },
      { name: "بيت صفافا", slug: "beit-safafa", image: quets },
      { name: "كفر عقب", slug: "kafr-aqab", image: akrab },
      { name: "بيت حنينا", slug: "beit-hanina", image: phetahnen },
      { name: "جبل المكبر", slug: "jabal-al-mukaber", image: quets },
      { name: "ام طوبا", slug: "umm-tuba", image: quets },
      { name: "راس العمود", slug: "ras-al-amud", image: quets },
    ],
  },
  {
    name: "اريحا",
    slug: "jericho",
    image: phetahnen, // صورة تمثيلية لأريحا أو استبدلها بالصورة المناسبة لها
    description: "أقدم مدن العالم وعاصمة الاستثمار الاستجمامي والسياحي",
    locations: [
      { name: "اريحا", slug: "jericho", image: phetahnen },
      { name: "البوابه", slug: "al-bawaba", image: akrab },
    ],
  },
  {
    name: "رام الله",
    slug: "ramallah",
    image: ramella, // الصورة الحقيقية لرام الله
    description: "المركز الاستثماري، التجاري، والسكني الأسرع نمواً",
    locations: [
      { name: "رام الله", slug: "ramallah", image: ramella },
      { name: "البيره", slug: "al-bireh", image: ramella },
      { name: "المصايف", slug: "al-masyef", image: ramella },
    ],
  },
];

// تهيئة الـ SEO المتقدم والمتوافق مع بنية الروابط الجديدة
export const metadata = {
  metadataBase: new URL("https://www.rayapal.com"),
  title: "دليل المناطق والمدن العقارية في فلسطين | منصة الراية العقارية",
  description: "تصفح مئات العقارات والأراضي للبيع والاستثمار في القدس، بيت حنينا، كفر عقب، رام الله، وأريحا. ابحث عن عقارك المثالي حسب المدينة والحي مع الراية.",
  alternates: {
    canonical: "https://www.rayapal.com/regions",
  },
  keywords: [
    // عقارات عامة في فلسطين
    "عقارات فلسطين", "عقارات للبيع في فلسطين", "عقارات للاستثمار في فلسطين", "دليل العقارات الفلسطيني", "منصة الراية العقارية", 
    "موقع عقارات فلسطين", "البحث عن عقارات في فلسطين", "شقق طابو للبيع فلسطين", "اراضي للبيع طابو فلسطين", "استثمار عقاري في فلسطين",
    "اسعار العقارات في فلسطين", "دليل احياء فلسطين العقارية", "شقق سكنية للبيع فلسطين", "اراضي تجارية للبيع فلسطين", "مشاريع عقارية في فلسطين",
    
    // عقارات القدس وضواحيها
    "عقارات القدس", "عقارات للبيع في القدس", "شقق للبيع في القدس", "شقق طابو في القدس", "اراضي للبيع في القدس", 
    "شقق للايجار في القدس", "بيوت للبيع في القدس", "اسعار الشقق في القدس", "الاستثمار العقاري في القدس", "شقق سكنية القدس",
    "محلات تجارية للبيع القدس", "مشاريع سكنية في القدس", "اراضي طابو القدس", "شقق للبيع بالتقسيط القدس", "فلل للبيع في القدس",
    "عقارات القدس الشرقية", "شقق للبيع القدس وضواحيها", "اسعار الاراضي في القدس", "دليل عقارات القدس", "شقق عظم للبيع القدس",

    // بيت حنينا
    "عقارات بيت حنينا", "شقق للبيع في بيت حنينا", "اراضي للبيع في بيت حنينا", "شقق للايجار في بيت حنينا", "اسعار الشقق في بيت حنينا", 
    "حي الهجرة بيت حنينا", "شقق طابو بيت حنينا", "فلل للبيع في بيت حنينا", "عقارات بيت حنينا القدس", "شقق بالتقسيط بيت حنينا",
    "اراضي بناء بيت حنينا", "محلات تجارية بيت حنينا", "شقق عظم بيت حنينا", "بيوت مستقلة بيت حنينا", "استثمار عقاري بيت حنينا",

    // كفر عقب
    "عقارات كفر عقب", "شقق للبيع في كفر عقب", "اراضي للبيع في كفر عقب", "شقق للايجار في كفر عقب", "اسعار الشقق في كفر عقب",
    "شقق رخيصة للبيع كفر عقب", "عمارات للبيع في كفر عقب", "شقق بالتقسيط في كفر عقب", "اراضي طابو كفر عقب", "محلات تجارية كفر عقب",
    "استثمار عقاري كفر عقب", "شقق عظم كفر عقب", "اسعار الاراضي كفر عقب", "منطقة كفر عقب العقارية", "اسكانات كفر عقب الجديدة",

    // صور باهر
    "عقارات صور باهر", "شقق للبيع في صور باهر", "اراضي للبيع في صور باهر", "شقق للايجار في صور باهر", "اسعار الشقق صور باهر",
    "اراضي طابو صور باهر", "بيوت للبيع في صور باهر", "فلل للبيع صور باهر", "عقارات صور باهر القدس", "شقق بالتقسيط صور باهر",

    // شعفاط وبيت صفافا وجبل المكبر وام طوبا وراس العمود
    "عقارات شعفاط", "شقق للبيع في شعفاط", "اراضي للبيع في شعفاط", "شقق للايجار شعفاط", "اسعار الشقق في شعفاط",
    "عقارات بيت صفافا", "شقق للبيع في بيت صفافا", "اراضي للبيع في بيت صفافا", "شقق للايجار بيت صفافا", "عقارات جبل المكبر",
    "شقق للبيع في جبل المكبر", "اراضي للبيع جبل المكبر", "شقق للايجار جبل المكبر", "عقارات ام طوبا", "شقق للبيع ام طوبا",
    "اراضي للبيع ام طوبا", "عقارات راس العمود", "شقق للبيع في راس العمود", "اراضي للبيع راس العمود", "شقق للايجار راس العمود",

    // رام الله والبيرة والأحياء
    "عقارات رام الله", "عقارات رام الله والبيرة", "شقق للبيع في رام الله", "اراضي للبيع في رام الله", "شقق للايجار في رام الله",
    "اسعار الشقق في رام الله", "شقق طابو للبيع رام الله", "اراضي طابو رام الله", "فلل للبيع في رام الله", "شقق بالتقسيط رام الله",
    "عقارات الماصيون", "شقق للبيع في الماصيون", "شقق للايجار الماصيون", "عقارات الارسال", "شقق للبيع في الارسال",
    "عقارات الطيرة رام الله", "شقق للبيع في الطيرة", "شقق للايجار الطيرة", "عقارات المصايف", "شقق للبيع في المصايف",
    "عقارات البيرة", "شقق للبيع في البيرة", "اراضي للبيع في البيرة", "شقق للايجار البيرة", "اسعار الشقق في البيرة",
    "محلات تجارية للبيع رام الله", "مكاتب للايجار رام الله", "مشاريع سكنية رام الله", "اراضي استثمارية رام الله", "شقق عظم رام الله",

    // أريحا والبوابة والديوك
    "عقارات اريحا", "شقق للبيع في اريحا", "اراضي للبيع في اريحا", "شقق للايجار في اريحا", "اسعار الشقق في اريحا",
    "شاليهات للبيع في اريحا", "فلل للبيع في اريحا", "اراضي طابو اريحا", "شاليهات للايجار اريحا", "عقارات اريحا البوابة",
    "مشروع اريحا البوابة", "اراضي اريحا البوابة", "فلل اريحا البوابة", "عقارات الديوك اريحا", "اراضي للبيع في الديوك اريحا",
    "استثمار سياحي اريحا", "اراضي زراعية للبيع اريحا", "فلل مودرن اريحا", "اسعار الاراضي في اريحا", "شاليهات اريحا بالتقسيط",

    // كلمات بحث طويلة ومركبة (Long-tail Keywords) لزيادة الأرشفة
    "افضل مناطق الاستثمار العقاري في فلسطين", "كيفية شراء شقة في القدس بالتقسيط", "اسعار اراضي الطابو في رام الله والبيرة",
    "البحث عن اراضي للبيع في اريحا البوابة", "شقق سكنية عظم للبيع في بيت حنينا", "عقارات تجارية ومكاتب للبيع في الماصيون",
    "فلل وشاليهات مودرن للبيع في اريحا", "شقق طابو للبيع في كفر عقب بالتقسيط", "اراضي بناء مرخصة للبيع في صور باهر",
    "دليل اسعار الشقق السكنية في شعفاط", "شقق للايجار السنوي في بيت صفافا", "اراضي للبيع في جبل المكبر طابو",
    "فرص استثمار عقاري في اريحا والبوابة", "موقع الراية للبحث عن عقارات فلسطين", "خريطة عقارات القدس ورام الله واريحا",
    "افضل احياء رام الله السكنية", "شقق فاخرة للبيع في الطيرة رام الله", "اراضي مسورة للبيع في الديوك اريحا",
    "مكاتب تجارية للبيع في الارسال رام الله", "شقق للبيع في ام طوبا وضواحي القدس",

    // صياغات إضافية مرادفة ومستهدفة
    "بيع وشراء عقارات فلسطين", "شقة للبيع القدس", "ارض للبيع رام الله", "شاليه للبيع اريحا", "شقق الراية العقارية",
    "سمسار عقارات في القدس", "مكاتب عقارية في رام الله", "شركات تطوير عقاري فلسطين", "شقق للبيع في المصايف بالتقسيط",
    "اراضي استثمارية اريحا", "شقق طابو رام الله الطيرة", "اسعار شقق بيت حنينا الهجرة", "عمارات تجارية للبيع فلسطين",
    "محلات للايجار في القدس", "مشاريع اسكان في كفر عقب", "اراضي للبيع في البيرة طابو", "شقق عظم للبيع رام الله",
    "شاليهات اريحا اليومية", "اراضي للبيع في القدس طابو", "دليل المحافظات العقارية فلسطين"
  ],
  openGraph: {
    title: "دليل المدن والمناطق العقارية في فلسطين | منصة الراية",
    description: "استكشف العقارات المتوفرة في أفضل الأحياء والمدن الفلسطينية استثماراً وسكناً (القدس، رام الله، أريحا).",
    url: "https://www.rayapal.com/regions",
    siteName: "الراية العقارية",
    locale: "ar_PS",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png",
        width: 1200,
        height: 630,
        alt: "دليل المناطق العقارية - الراية العقارية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تصفح العقارات حسب المدينة والمنطقة | الراية العقارية",
    description: "ابحث عن الشقق والأراضي والمشاريع الاستثمارية في القدس وضواحيها، رام الله وأريحا بسهولة.",
    images: ["https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png"],
  },
  category: "real estate directory",
};

const Regions = async () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.rayapal.com/regions/#webpage",
        "url": "https://www.rayapal.com/regions",
        "name": "دليل المناطق والمدن العقارية في فلسطين - الراية العقارية",
        "description": "دليل جرافي متكامل لاستعراض العقارات والأراضي السكنية والتجارية والاستثمارية في القدس، رام الله، وأريحا وأحيائهم التابعة.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.rayapal.com/#website",
          "url": "https://www.rayapal.com",
          "name": "الراية العقارية"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ما هي أفضل المناطق للاستثمار العقاري في القدس؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تعتبر مناطق بيت حنينا (خصوصاً حي الهجرة)، كفر عقب، وشعفاط وصور باهر من أكثر المناطق طلباً للاستثمار العقاري نظراً للنمو السكاني والتجاري المستمر وعوائدها الممتازة."
            }
          },
          {
            "@type": "Question",
            "name": "كيف يمكنني البحث عن عقار في حي محدد برام الله أو أريحا？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "توفر منصة الراية العقارية إمكانية الفلترة المباشرة وتصفح الأحياء مثل الماصيون والطيرة في رام الله، أو أريحا البوابة، بالإضافة إلى ميزة البحث التفاعلي على الخريطة."
            }
          }
        ]
      }
    ]
  };
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Script
        id="regions-schema"
        type="application/ld+json"
        strategy="afterInteractive" // يضمن تحميل السكريبت فوراً بعد تفاعلية الصفحة لحماية الـ Performance
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* --- Section 1: Hero Section (بنفس أسلوب وتصميم المدونة مع التاتش الخاص بالمناطق) --- */}
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
        
        {/* Background shapes (blur effects) */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-700/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          {/* Title Area */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
              تصفح العقارات <span className="text-amber-500">حسب المنطقة</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
              دليل جرافي متكامل يسهل عليك الوصول للفرص الاستثمارية والشقق والأراضي في كافة المحافظات والأحياء الفلسطينية المبحوثة
            </p>
          </div>

          {/* Search Box & Quick Navigation */}
          <div className="max-w-3xl mx-auto space-y-6">
      

            {/* Quick Filter Categories (أزرار المدن الكبرى) */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="px-5 py-2.5 rounded-lg text-sm font-bold transition bg-amber-500 text-white shadow">
                كل المدن
              </button>
              {regionsStructure.map((city, idx) => (
                <a
                  key={idx}
                  href={`#${city.slug}`}
                  className="px-5 py-2.5 cursor-pointer rounded-lg text-sm font-bold transition bg-white border border-gray-200 text-gray-700 hover:bg-slate-50 hover:border-amber-500 hover:text-amber-600"
                >
                  {city.name}
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- Section 2: المحافظات الرئيسية وتوابعها بتصميم الـ Cards الرشيق الجديد --- */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-20">
          
          {/* التكرار لكل محافظة رئيسية (القدس، أريحا، رام الله) */}
          {regionsStructure.map((city) => (
            <div key={city.slug} id={city.slug} className="scroll-mt-24">
              
              {/* عنوان المحافظة الرئيسية مع رابط التوجيه الخاص بها */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-4 border-b border-gray-100 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-6 bg-amber-500 rounded-full"></span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900">{city.name}</h2>
                  </div>
                  <p className="text-gray-500 text-sm font-medium pr-4">{city.description}</p>
                </div>
                
                {/* رابط المدينة الرئيسية المباشر: regions/jerusalem */}
                <Link 
                  href={`/regions/${city.slug}`}
                  className="text-sm font-bold text-amber-600 hover:text-amber-700 bg-amber-50 px-4 py-2 rounded-xl transition"
                >
                  عرض كافة عقارات {city.name} ←
                </Link>
              </div>

              {/* شبكة عرض التوابع والأحياء (تصميم الكروت الجديد الصغير والأنيق) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {city.locations.map((loc, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-44"
                  >
                    {/* صورة المنطقة التابعة المصغرة ومحسنة الأداء */}
                    <div className="relative h-full w-full">
                      <Image
                        src={loc.image}
                        alt={`عقارات للبيع في ${loc.name} - ${city.name}`}
                        fill
                        sizes="(max-w-768px) 100vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* طبقة التظليل المحسنة لجعل النص واضحاً وجميلاً */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
                      
                      {/* المحتوى الداخلي للكارت الصغير */}
                      <div className="absolute inset-0 p-5 flex flex-col justify-end">
                        <div className="flex items-center text-amber-400 gap-1 text-[10px] font-black mb-1">
                          <HiOutlineLocationMarker size={12} />
                          <span>{city.name}</span>
                        </div>
                        <h3 className="text-white text-lg font-bold mb-3">{loc.name}</h3>
                        
                        {/* رابط التابع المباشر المخصص: regions/jerusalem/sur-baher */}
                        <Link
                          href={`/regions/${city.slug}/${loc.slug}`}
                          className="w-full py-2  bg-amber-500 backdrop-blur-md text-white text-center text-xs font-bold rounded-xl transition-all duration-300 border border-white/20 hover:border-transparent"
                        >
                          استكشف العقارات
                        </Link>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Regions;