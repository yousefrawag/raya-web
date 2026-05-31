export const revalidate = 86400;
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

// لنفترض أن مصفوفة المناطق مستوردة من ملف البيانات لديك كما هي
// تأكد من أن بنية الكائن تحتوي على name, slug, description, و locations الفرعية
import { regions } from '@/data/regions';
import { GetEntryByquery } from '@/lib/GetEntryByquery';

// 🚀 توليد الـ SEO Metadata الديناميكي والمكثف (أكثر من 200 كلمة مفتاحية تلقائياً)
export async function generateMetadata({ params }) {
  const { city } = await params;
  const currentCity = regions.find((item) => item.slug === city);
  
  const cityName = currentCity?.name || "المدينة";
  const cityDesc = currentCity?.description || "";
  
  // استخراج أسماء الأحياء التابعة للمدينة لدمجها في الـ Keywords
  const subLocations = currentCity?.locations?.map(l => l.name) || [];

  // القوالب الأساسية للعبارات العقارية الأكثر بحثاً لتوليد +200 كلمة مفتاحية مركبّة ديناميكياً
  const corePhrases = [
    "عقارات للبيع في", "شقق للبيع في", "اراضي للبيع في", "شقق للايجار في", "اسعار الشقق في",
    "شقق طابو في", "اراضي طابو في", "فلل للبيع في", "شقق بالتقسيط في", "محلات تجارية للبيع في",
    "استثمار عقاري في", "شقق عظم للبيع في", "اسعار الاراضي في", "دليل عقارات", "بيوت مستقلة للبيع في",
    "مشاريع سكنية في", "مكاتب للايجار في", "اراضي استثمارية في", "شاليهات للبيع في", "افضل شقق في",
    "شقق رخيصة في", "عمارات للبيع في", "اراضي بناء مرخصة في", "اسكانات جديدة في", "فرص استثمار في",
    "شقق فاخرة للبيع في", "دليل احياء", "خريطة عقارات", "تطوير عقاري في", "بيع وشراء العقارات في"
  ];

  // 1. توليد مصفوفة الكلمات للمدينة الرئيسية
  let dynamicKeywords = [
    `عقارات ${cityName}`, `موقع عقارات ${cityName}`, `منصة الراية العقارية ${cityName}`, `دليل ${cityName} العقاري`,
    ...corePhrases.map(phrase => `${phrase} ${cityName}`)
  ];

  // 2. تكرار وتوليد الكلمات لكل حي فرعي تابع للمدينة لضمان تغطية شاملة تتعدى الـ 200 كلمة
  subLocations.forEach(loc => {
    dynamicKeywords.push(`عقارات ${loc}`, `شقق للبيع ${loc}`, `اراضي ${loc}`, `اسعار العقارات في ${loc}`);
    corePhrases.forEach(phrase => {
      dynamicKeywords.push(`${phrase} ${loc}`);
      dynamicKeywords.push(`${phrase} ${loc} ${cityName}`); // تركيب ثلاثي (طويل الذيل)
    });
  });

  // تنظيف المصفوفة من التكرارات الزائدة وضمان بقاء ما فوق الـ 200 كلمة
  const finalKeywords = Array.from(new Set(dynamicKeywords)).slice(0, 230);

  return {
    metadataBase: new URL("https://www.rayapal.com"),
    title: `عقارات وأراضي للبيع في ${cityName} | دليل الأحياء - منصة الراية`,
    description: `تصفح مئات العقارات، الشقق، الأراضي، والمشاريع الاستثمارية المتاحة للبيع والايجار في ${cityName} وأحيائها. ابحث عن عقارك المثالي بالتقسيط أو كاش مع الراية. ${cityDesc}`,
    alternates: {
      canonical: `https://www.rayapal.com/regions/${city}`,
    },
    keywords: finalKeywords,
    openGraph: {
      title: `دليل عقارات وأراضي ${cityName} | منصة الراية العقارية`,
      description: `استكشف أفضل فرص الاستثمار العقاري والشقق السكنية في مدينة ${cityName} ومناطقها التابعة.`,
      url: `https://www.rayapal.com/regions/${city}`,
      siteName: "الراية العقارية",
      locale: "ar_PS",
      type: "website",
    }
  };
}

const RegionByCity = async ({ params }) => {
  const { city } = await params;
  
  // البحث عن بيانات المدينة الحالية من ملف الداتا الثابتة
  const currentCity = regions.find((item) => item.slug === city);
  
  // جلب العقارات من السيرفر بناءً على اسم المدينة
  const propertiesServerdata = await GetEntryByquery(currentCity?.name) || [];
const subLocationsNames = currentCity.locations?.map(l => l.name) || [];
  if (!currentCity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800" dir="rtl">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">المنطقة غير موجودة</h1>
          <Link href="/regions" className="text-amber-500 hover:underline">العودة لدليل المناطق</Link>
        </div>
      </div>
    );
  }

  // 🚀 إعداد هيكل السكيما (Structured Data) التفاعلية والديناميكية للمدينة الحالية
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 1️⃣ سكيما مسار التنقل (Breadcrumbs)
    {
      "@type": "BreadcrumbList",
      "@id": `https://www.rayapal.com/regions/${city}/#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "الرئيسية",
          "item": "https://www.rayapal.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": currentCity.name,
          "item": `https://www.rayapal.com/regions/${city}`
        }
      ]
    },

    // 2️⃣ سكيما الصفحة التجميعية الجغرافية للمدينة (CollectionPage & Place)
    {
      "@type": "CollectionPage",
      "@id": `https://www.rayapal.com/regions/${city}/#webpage`,
      "url": `https://www.rayapal.com/regions/${city}`,
      "name": `عقارات وأراضي للبيع في ${currentCity.name} - منصة الراية`,
      "description": `دليل عقاري تفصيلي يضم كافة الشقق، الأراضي، والمشاريع السكنية المتاحة في ${currentCity.name} والمناطق التابعة لها.`,
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.rayapal.com/#website",
        "url": "https://www.rayapal.com",
        "name": "الراية العقارية"
      },
      "about": {
        "@type": "AdministrativeArea",
        "name": currentCity.name,
        "description": `منطقة عقارية رئيسية مسجلة في دليل منصة الراية وتشمل أحياء: ${subLocationsNames.join('، ')}.`
      }
    },

    // 3️⃣ سكيما القائمة العقارية الديناميكية (Real Estate Properties ItemList)
    {
      "@type": "ItemList",
      "@id": `https://www.rayapal.com/regions/${city}/#properties-list`,
      "name": `أحدث العقارات والمشاريع المتاحة في ${currentCity.name}`,
      "numberOfItems": propertiesServerdata.length,
      "itemListElement": propertiesServerdata.map((property, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "RealEstateListing",
          "name": property.title || `عقار في ${currentCity.name}`,
          "url": `https://www.rayapal.com/properties/${property.id}`,
          "image": decodeURIComponent(property.seriesimagesCutmez?.[0]?.url || ''),
          "description": `${property.typeOfproject || 'عقار'} مميز يقع في ${property.adress || currentCity.name}. يحتوي على ${property.bedrooms || 0} غرف و ${property.bathrooms || 0} حمام بمساحة تبلغ ${property.area || 0} متر مربع.`
        }
      }))
    },

    // 4️⃣ سكيما تكشيف الأحياء التابعة (Sub-Locations ItemList) لربط البنية الداخلية للموقع
    {
      "@type": "ItemList",
      "@id": `https://www.rayapal.com/regions/${city}/#sublocations-list`,
      "name": `دليل أحياء ومناطق ${currentCity.name}`,
      "numberOfItems": currentCity.locations?.length || 0,
      "itemListElement": (currentCity.locations || []).map((loc, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "WebPage",
          "name": `عقارات حي ${loc.name}`,
          "url": `https://www.rayapal.com/regions/${city}/${loc.slug}`
        }
      }))
    },

    // 5️⃣ سكيما الأسئلة الشائعة الموسعة والمحسنة (FAQPage)
    {
      "@type": "FAQPage",
      "@id": `https://www.rayapal.com/regions/${city}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": `ما هي متوسط اسعار العقارات في ${currentCity.name}؟`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `تتفاوت الأسعار في ${currentCity.name} بناءً على الحي السكني المطلوب، نوع العقار (سواء شقة سكنية، أرض طابو، أو فيلا مستقلة)، ومدى قربه من الخدمات التجارية الحيوية. توفر منصة الراية خيارات استثمارية وسكنية تناسب جميع الميزانيات كاش وبالتقسيط.`
          }
        },
        {
          "@type": "Question",
          "name": `ما هي الأحياء والمناطق التابعة لمدينة ${currentCity.name} العقارية؟`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `تضم مدينة ${currentCity.name} مجموعة من الأحياء والمناطق العقارية الهامة المتاحة للتصفح عبر منصة الراية وهي: ${subLocationsNames.length > 0 ? subLocationsNames.join('، ') : 'كافة أحيائها وضواحيها المحيطة'}.`
          }
        },
        {
          "@type": "Question",
          "name": `هل تتوفر عقارات بالتقسيط في مدينة ${currentCity.name} عبر منصة الراية؟`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `نعم، توفر منصة الراية العقارية باقة منوعة من الشقق المعروضة للبيع بالتقسيط المباشر مع المطورين أو الشركات الإسكانية، بالإضافة إلى عروض الأراضي والبيوت المستقلة كاش وبخطط دفع مرنة داخل كافة أحياء ${currentCity.name}.`
          }
        }
      ]
    }
  ]
};

  return (
    <div className="min-h-screen bg-slate-50/50" dir="rtl">
      
      {/* حقن السكيما الديناميكية للـ SEO الفني الخاص بجوجل في الـ Client Side بدون إبطاء الصفحة */}
      <Script
        id={`city-${city}-schema`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1️⃣ Hero Section: تصميم الصفحة بناءً على المدينة المختارة */}
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-100/70 border-b border-amber-100/50">
  
  {/* 🌟 كرات التوهج الضبابية الفخمة بالهوية الذهبية - تعوض غياب الصور وتملأ الخلفية بانسيابية */}
  <div className="absolute inset-0 opacity-45 pointer-events-none">
    {/* توهج ذهبي عملاق في أعلى اليمين */}
    <div className="absolute -top-16 -right-16 w-96 h-96 bg-amber-400/40 rounded-full blur-3xl animate-float"></div>
    {/* توهج ذهبي دافئ إضافي في الجهة اليسرى السفلية */}
    <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-amber-500/25 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
    {/* لمسة زرقاء ملكية خفيفة جداً لمنع الجفاف البصري وتحقيق توازن الألوان */}
    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
    
    {/* 🏷️ شارة الدليل الفرعية بتصميم مضيء وأنيق */}
    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-xs font-bold mb-6 border border-amber-200/60 shadow-xs">
      <HiOutlineLocationMarker className="text-amber-500 text-sm" /> دليل المحافظات العقارية
    </span>
    
    {/* 🏙️ العنوان الرئيسي المطور بالتدرج الفخم ثلاثي الأبعاد */}
    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
      عقارات ومشاريع <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 drop-shadow-xs">{currentCity.name}</span>
    </h1>
    
    {/* 📝 الوصف النصي المقروء والمثالي لمحركات البحث SEO */}
    <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto font-medium leading-relaxed">
      {currentCity.description || `استكشف أفضل الفرص العقارية، الشقق الفاخرة، الأراضي الاستثمارية، والفيلات المعروضة للبيع أو الاستثمار في كافة أحياء وضواحي المحافظة. نوفر لك عروضاً موثوقة كاش وبالتقسيط المباشر عبر منصة الراية.`}
    </p>
    
  </div>
</section>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        {/* الـ Sidebar الجانبي ويحتوي على الأحياء المرتبطة بالمنطقة */}
        <aside className="lg:col-span-1 space-y-8">
          {/* 3️⃣ عرض المواقع المرتبطة بالمنطقة الحالية (الأحياء والمناطق التابعة لها) */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
            <h3 className="text-lg font-black text-slate-900 mb-4 pb-2 border-b border-gray-100">
              الأحياء التابعة لـ {currentCity.name}
            </h3>
            {currentCity.locations && currentCity.locations.length > 0 ? (
              <div className="flex flex-col gap-2.5">
                {currentCity.locations.map((loc, idx) => (
                  <Link
                    key={idx}
                    href={`/regions/${currentCity.slug}/${loc.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-amber-50 text-slate-700 hover:text-amber-700 font-bold text-sm transition-all duration-200 border border-transparent hover:border-amber-100 group"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-gray-400 group-hover:text-amber-500 transition-colors" />
                      <span>{loc.name}</span>
                    </div>
                    <span className="text-xs font-normal text-gray-400 bg-white group-hover:bg-amber-500 group-hover:text-white px-2 py-0.5 rounded-md border border-gray-100 transition-all">
                      استكشف
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 text-center py-4">لا توجد أحياء فرعية مضافة حالياً.</p>
            )}
          </div>
        </aside>

        {/* 2️⃣ عرض العقارات بناءً على المدينة المختارة */}
        <main className="lg:col-span-3 space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              العقارات المتاحة في {currentCity.name}
            </h2>
            <span className="text-sm font-semibold text-gray-500 bg-white px-3 py-1.5 rounded-lg shadow-xs border border-gray-100">
              عدد النتائج: {propertiesServerdata.length} عقار
            </span>
          </div>

          {propertiesServerdata.length > 0 ? (
            /* تطبيق نفس هيكل كود تصميم الـ Cards الخاص بك تماماً */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {propertiesServerdata.map((property) => (
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
            /* في حال عدم توفر عقارات في هذه المدينة حالياً */
            <div className="bg-white rounded-2xl p-16 text-center border border-gray-100 shadow-xs">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-500">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">لا توجد عقارات متاحة حالياً</h3>
              <p className="text-gray-500 max-w-md mx-auto text-sm">
                لم يتم إدراج عقارات جديدة بعد في منطقة {currentCity.name}، يمكنك تصفح الأحياء الفرعية المجاورة أو معاودة الزيارة لاحقاً.
              </p>
            </div>
          )}
        </main>

      </div>
    </div>
  );
};

export default RegionByCity;