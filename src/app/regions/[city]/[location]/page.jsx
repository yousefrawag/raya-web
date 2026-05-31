export const revalidate = 86400;
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MapPin, Bed, Bath, Square, ChevronLeft } from 'lucide-react';

// استيراد البيانات والوظائف
import { regions } from '@/data/regions';
import { GetEntryByquery } from '@/lib/GetEntryByquery';

/**
 * 🚀 توليد SEO Metadata مكثف (أكثر من 200 كلمة مفتاحية)
 * مخصص للموقع الفرعي (الحي) داخل المدينة
 */
export async function generateMetadata({ params }) {
  const { city, location } = await params;
  
  const currentCity = regions.find((c) => c.slug === city);
  const currentLocation = currentCity?.locations?.find((l) => l.slug === location);

  const cityName = currentCity?.name || "";
  const locName = currentLocation?.name || "المنطقة";

  // توسيع مصفوفة العبارات العقارية الأكثر بحثاً على الإطلاق (50 عبارة مفتاحية أساسية)
  const corePhrases = [
    "عقارات للبيع في", "شقق للبيع في", "اراضي للبيع في", "شقق للايجار في", "اسعار الشقق في",
    "شقق طابو في", "اراضي طابو في", "فلل للبيع في", "شقق بالتقسيط في", "محلات تجارية للبيع في",
    "استثمار عقاري في", "شقق عظم للبيع في", "اسعار الاراضي في", "دليل عقارات", "بيوت مستقلة للبيع في",
    "مشاريع سكنية في", "مكاتب للايجار في", "اراضي استثمارية في", "شاليهات للبيع في", "افضل شقق في",
    "شقق رخيصة في", "عمارات للبيع في", "اراضي بناء مرخصة في", "اسكانات جديدة في", "فرص استثمار في",
    "شقق فاخرة للبيع في", "دليل احياء", "خريطة عقارات", "تطوير عقاري في", "بيع وشراء العقارات في",
    "اراضي تجارية للبيع في", "شقق مفروشة للايجار في", "شقق استوديو في", "مكاتب تجارية في", "مخازن للبيع في",
    "اراضي زراعية في", "بنايات استثمارية في", "ارخص شقق في", "شقق كاش في", "شقق تقسيط بدون فوائد في",
    "اسعار المتر في", "اراضي طابو مفروزة في", "شقق لقطة للبيع في", "احياء سكنية راقية في", "منزل مستقل للبيع في",
    "شقق ديلوكس في", "شقق سوبر ديلوكس للبيع في", "رووف للبيع في", "بنتهاوس للبيع في", "عقارات تجارية في"
  ];

  // مصفوفة لتجميع الكلمات المفتاحية ديناميكياً
  let dynamicKeywords = [
    `عقارات ${locName}`, 
    `موقع عقارات ${locName}`, 
    `منصة الراية العقارية ${locName}`, 
    `دليل ${locName} العقاري`,
    `عقارات ${locName} ${cityName}`,
    `شقق ${locName} ${cityName}`,
    `اراضي ${locName} ${cityName}`
  ];

  // 1. تركيب ثنائي: العبارة البحثية + اسم الحي
  corePhrases.forEach(phrase => {
    dynamicKeywords.push(`${phrase} ${locName}`);
  });

  // 2. تركيب ثلاثي عميق: العبارة البحثية + اسم الحي + اسم المدينة
  corePhrases.forEach(phrase => {
    dynamicKeywords.push(`${phrase} ${locName} ${cityName}`);
  });

  // 3. تركيب رباعي مستهدف (Long-Tail Keywords): العبارة البحثية + حي + مدينة + (كاش / تقسيط / طابو)
  const modifiers = ["بالتقسيط", "كاش", "طابو", "من المالك مباشرة", "بالقرب من الخدمات"];
  corePhrases.slice(0, 15).forEach(phrase => {
    modifiers.forEach(mod => {
      dynamicKeywords.push(`${phrase} ${locName} ${cityName} ${mod}`);
      dynamicKeywords.push(`${phrase} ${locName} ${mod}`);
    });
  });

  // تنظيف المصفوفة من الفراغات والتكرارات، وتحديد سقف الكلمات ليكون غنياً ومكثفاً جداً (حوالي 320 كلمة مفتاحية فريدة)
  const finalKeywords = Array.from(new Set(dynamicKeywords))
    .map(kw => kw.trim())
    .filter(kw => kw.length > 0)
    .slice(0, 320);

  return {
    metadataBase: new URL("https://www.rayapal.com"),
    title: `عقارات وأراضي للبيع في ${locName}، ${cityName} | دليل الأحياء - منصة الراية`,
    description: `تصفح مئات العقارات، الشقق، الأراضي، والمشاريع الاستثمارية المتاحة للبيع والايجار في منطقة ${locName} بمدينة ${cityName}. ابحث عن عقارك المثالي بالتقسيط أو كاش مع الراية. تصفح الأسعار والتفاصيل الآن.`,
    alternates: {
      canonical: `https://www.rayapal.com/regions/${city}/${location}`,
    },
    keywords: finalKeywords,
    openGraph: {
      title: `دليل عقارات وأراضي ${locName} (${cityName}) | منصة الراية العقارية`,
      description: `استكشف أفضل فرص الاستثمار العقاري والشقق السكنية في منطقة ${locName} وأحيائها التابعة بمدينة ${cityName}.`,
      url: `https://www.rayapal.com/regions/${city}/${location}`,
      siteName: "الراية العقارية",
      locale: "ar_PS",
      type: "website",
    }
  };
}
const RegionLocation = async ({ params }) => {
  const { city, location } = await params;

  // جلب البيانات من الملف الثابت
  const currentCity = regions.find((item) => item.slug === city);
  const currentLocation = currentCity?.locations?.find((item) => item.slug === location);

  // جلب العقارات بناءً على المدينة والحي (الموقع)
  // ملاحظة: تأكد أن GetEntryByquery تدعم استلام الباراميترين
  const propertiesData = await GetEntryByquery(currentCity?.name, currentLocation?.name) || [];

  if (!currentLocation || !currentCity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50" dir="rtl">
        <div className="text-center">
          <h1 className="text-xl font-bold">الموقع غير موجود</h1>
          <Link href="/regions" className="text-amber-500 underline">العودة للمناطق</Link>
        </div>
      </div>
    );
  }

  // 🚀 إعداد السكيما (JSON-LD)
// 🚀 إعداد هيكل السكيما (Structured Data) العميق والمكثف
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. سكيما مسار التنقل (Breadcrumbs)
    {
      "@type": "BreadcrumbList",
      "@id": `https://www.rayapal.com/regions/${city}/${location}/#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://www.rayapal.com" },
        { "@type": "ListItem", "position": 2, "name": currentCity?.name, "item": `https://www.rayapal.com/regions/${city}` },
        { "@type": "ListItem", "position": 3, "name": currentLocation?.name, "item": `https://www.rayapal.com/regions/${city}/${location}` }
      ]
    },
    // 2. سكيما الصفحة العقارية التجميعية (Collection Page)
    {
      "@type": "CollectionPage",
      "@id": `https://www.rayapal.com/regions/${city}/${location}/#webpage`,
      "url": `https://www.rayapal.com/regions/${city}/${location}`,
      "name": `عقارات وأراضي للبيع في ${currentLocation?.name}، ${currentCity?.name} | منصة الراية`,
      "description": `دليل عقاري شامل ومحدث يضم كافة الشقق، الأراضي، الفلل، والمحلات التجارية المتاحة للبيع أو الايجار في منطقة ${currentLocation?.name} بمدينة ${currentCity?.name}.`,
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.rayapal.com/#website",
        "url": "https://www.rayapal.com",
        "name": "الراية العقارية"
      },
      "about": {
        "@type": "Place",
        "name": currentLocation?.name,
        "containedInPlace": {
          "@type": "Place",
          "name": currentCity?.name
        }
      }
    },
    // 3. سكيما القائمة العقارية (Real Estate Listing) لربط العقارات المعروضة بالصفحة
    {
      "@type": "ItemList",
      "@id": `https://www.rayapal.com/regions/${city}/${location}/#propertylist`,
      "name": `أحدث العقارات في ${currentLocation?.name}`,
      "numberOfItems": propertiesData.length,
      "itemListElement": propertiesData.map((property, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "RealEstateAgent", // أو "SingleFamilyResidence" بناء على نوع العقار
          "name": property.title,
          "url": `https://www.rayapal.com/properties/${property.id}`,
          "image": decodeURIComponent(property.seriesimagesCutmez?.[0]?.url || ''),
          "description": `${property.typeOfproject} يحتوي على ${property.bedrooms} غرف و ${property.bathrooms} حمام بمساحة ${property.area} متر مربع في ${property.adress}`
        }
      }))
    },
    // 4. سكيما الأسئلة الشائعة (FAQ Page) لرفع نسبة النقر للظهور في جوجل CTR
    {
      "@type": "FAQPage",
      "@id": `https://www.rayapal.com/regions/${city}/${location}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": `ما هي أنواع العقارات المتوفرة في ${currentLocation?.name}؟`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `تتنوع العقارات في حي ${currentLocation?.name} لتشمل شقق سكنية للبيع، شقق للايجار، أراضي طابو للبناء، محلات تجارية، ومشاريع استثمارية بالتقسيط أو كاش عبر منصة الراية.`
          }
        },
        {
          "@type": "Question",
          "name": `كيف يمكنني شراء شقة بالتقسيط في منطقة ${currentLocation?.name}؟`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `تتيح لك منصة الراية العقارية التواصل المباشر مع أصحاب العقارات والشركات الإسكانية في ${currentLocation?.name} لاستكشاف خيارات الدفع المرنة، والتقسيط المباشر بدون فوائد لبعض المشاريع.`
          }
        },
        {
          "@type": "Question",
          "name": `ما الذي يميز الاستثمار العقاري في ${currentLocation?.name} بمدينة ${currentCity?.name}؟`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `تعتبر منطقة ${currentLocation?.name} من المواقع الحيوية والمطلوبة في ${currentCity?.name} نظراً لقربها من الخدمات والمرافق الأساسية، مما يضمن عائداً استثمارياً مرتفعاً عند إعادة البيع أو التأجير.`
          }
        }
      ]
    }
  ]
};

  return (
    <div className="min-h-screen bg-slate-50/50" dir="rtl">
      <Script
        id="location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1️⃣ Hero Section - تصميم متناسق */}
<section className="relative py-20 md:py-26 overflow-hidden bg-gradient-to-tr from-amber-50 via-white to-amber-100/70 border-b border-amber-100/50">
  
  {/* 🌟 كرات التوهج الضبابية المكثفة البديلة للصور - تعطي عمقاً لونياً فخماً وغير فارغ */}
  <div className="absolute inset-0 opacity-45 pointer-events-none">
    {/* توهج ذهبي عملاق في أعلى اليمين */}
    <div className="absolute -top-16 -right-16 w-96 h-96 bg-amber-400/40 rounded-full blur-3xl animate-float"></div>
    {/* توهج ذهبي دافئ في المنتصف السفلي واليسار */}
    <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-amber-500/25 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
    {/* لمسة زرقاء ملكية خفيفة في أقصى اليسار لتوازن الألوان ومنع الملل البصري */}
    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">
    
    {/* 🗺️ مسار التنقل (Breadcrumbs) - متناسق تماماً مع الخلفية الدافئة */}
    <div className="flex justify-center md:justify-start mb-6">
      <nav className="flex items-center gap-2 text-xs font-bold text-gray-500 bg-white/80 backdrop-blur-md shadow-xs border border-amber-100 rounded-xl px-4 py-2">
        <Link href="/regions" className="hover:text-amber-600 transition-colors">المناطق</Link>
        <ChevronLeft size={12} className="text-gray-400" />
        <Link href={`/regions/${city}`} className="hover:text-amber-600 transition-colors">{currentCity.name}</Link>
        <ChevronLeft size={12} className="text-gray-400" />
        <span className="text-slate-900 font-extrabold">{currentLocation.name}</span>
      </nav>
    </div>

    {/* 🏷️ محتوى العناوين والنصوص */}
    <div className="text-center md:text-right max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
        عقارات ومشاريع <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 drop-shadow-xs">{currentLocation.name}</span>
      </h1>
      
      <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed max-w-3xl">
        تصفح أفضل عروض الشقق، الأراضي، والمشاريع المتاحة في منطقة <span className="text-amber-600 font-bold">{currentLocation.name}</span> بمدينة {currentCity.name}. نوفر لك خيارات متنوعة وموثوقة تناسب تطلعاتك السكنية والاستثمارية كاش أو بالتقسيط المباشر.
      </p>
    </div>

  </div>
</section>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar - الأحياء المجاورة */}
        <aside className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
            <h3 className="text-md font-black text-slate-900 mb-4 pb-2 border-b border-gray-100">
              أحياء أخرى في {currentCity.name}
            </h3>
            <div className="flex flex-col gap-2">
              {currentCity.locations
                ?.filter(loc => loc.slug !== location) // استثناء الحي الحالي
                .slice(0, 10) // عرض 10 أحياء كحد أقصى
                .map((loc, idx) => (
                <Link
                  key={idx}
                  href={`/regions/${currentCity.slug}/${loc.slug}`}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 hover:bg-amber-50 text-slate-700 hover:text-amber-700 font-bold text-sm transition-all border border-transparent hover:border-amber-100"
                >
                  <MapPin size={14} className="text-gray-400" />
                  <span>{loc.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content - عرض العقارات بنفس تصميم الـ Cards */}
        <main className="lg:col-span-3">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-amber-500 rounded-full"></div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">
                نتائج البحث في {currentLocation.name}
                </h2>
            </div>
            <span className="text-xs font-bold text-gray-500 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
              {propertiesData.length} عقار متاح
            </span>
          </div>

          {propertiesData.length > 0 ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {propertiesData.map((property) => (
                       <div 
                         key={property.id}
                         className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 relative"
                       >
                         {/* Featured Badge */}
                         {property.projectFeatures && (
                           <div className="absolute top-4 right-4 z-10 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                             متميز
                           </div>
                         )}
       
                         {/* Image Container */}
                         <div className="relative overflow-hidden">
                           <Image
                             width={400}
                             height={300}
                             loading="lazy"
                             src={decodeURIComponent(property.seriesimagesCutmez?.[0]?.url || '')}
                             alt={property.title || "عقار"}
                             unoptimized
                             className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                           />
                           
                           {/* Type Badge */}
                           <div className="absolute top-4 left-4 bg-white/95 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                             {property.typeOfproject} 
                           </div>
       
                           {/* Overlay on Hover */}
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                         </div>
                         
                         {/* Content */}
                         <div className="p-6">
                           {/* Title and Location */}
                           <div className="mb-4">
                             <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-1">
                               {property.title}
                             </h3>
                             <div className="flex items-center text-gray-600">
                               <MapPin size={16} className="ml-2 flex-shrink-0" />
                               <span className="text-sm truncate">{property.adress}</span>
                             </div>
                           </div>
                           
                           {/* Features */}
                           <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                             <div className="flex items-center space-x-6 space-x-reverse">
                               <div className="flex items-center gap-1">
                                 <Bed size={18} className="text-amber-500" />
                                 <span className="text-sm text-gray-700 font-medium">{property.bedrooms}</span>
                                 <span className="text-xs text-gray-500 mr-1">غرف</span>
                               </div>
                               <div className="flex items-center gap-1">
                                 <Bath size={18} className="text-amber-500" />
                                 <span className="text-sm text-gray-700 font-medium">{property.bathrooms}</span>
                                 <span className="text-xs text-gray-500 mr-1">حمام</span>
                               </div>
                               <div className="flex items-center gap-1">
                                 <Square size={18} className="text-amber-500" />
                                 <span className="text-sm text-gray-700 font-medium">{property.area}</span>
                                 <span className="text-xs text-gray-500 mr-1">م²</span>
                               </div>
                             </div>
                           </div>
                           
                           {/* Price and CTA */}
                           <div className="flex items-center justify-end pt-4 border-t border-gray-200">
                             <Link 
                               href={`/properties/${property.id}`}
                               className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                             >
                               <span>تفاصيل</span>
                               <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                               </svg>
                             </Link>
                           </div>
                         </div>
       
                         {/* Hover Border Effect */}
                         <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-200 transition-all duration-300 pointer-events-none"></div>
                       </div>
                     ))}
                   </div>
          ) : (
            <div className="bg-white rounded-3xl p-20 text-center border border-dashed border-gray-200">
              <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={30} className="text-amber-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">نأسف، لا توجد عقارات حالياً</h3>
              <p className="text-gray-500 text-sm">لم نجد عقارات معروضة في {currentLocation.name} حالياً. جرب تصفح الأحياء المجاورة في {currentCity.name}.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default RegionLocation;