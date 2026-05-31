
import React from 'react'

import AllProperties from '@/components/sections/AllProperties'
import mapImage from "@/images/Hero-images/srp-map-bg-ar.svg"
import Script from "next/script";

import FixedFilter from '@/components/sections/FixedFilter'

import { getProperties } from '@/lib/GetpropertiesEntry'
export async function generateMetadata({ searchParams }) {
  const {
    city,
    propertyType,
    area,
    bedrooms,
    region,
    opeartion // لاحظت وجود خطأ إملائي في كلمة operation في الكود الأصلي، سأبقيها كما هي لتعمل مع الـ API الخاص بك
  } = searchParams || {}

  // --- . تحسين النصوص لتكون أكثر جاذبية (SEO copywriting) ---
  const cityText = city ? `في ${city}` : 'في القدس وفلسطين';
  const regionText = region ? `منطقة ${region}` : '';
  const typeText = propertyType || 'عقارات';
  

  let opText = 'للبيع والإيجار';
  if (opeartion === 'sale') opText = 'للبيع بالتقسيط والكاش';
  if (opeartion === 'rent') opText = 'للإيجار (سنوي/شهري)';
  if (opeartion) opText = opeartion; 
  const bedroomsText = bedrooms ? `بعدد ${bedrooms} غرف` : '';
  const areaText = area ? `بمساحة تبدأ من ${area} م²` : '';

 
  // الهدف: استهداف (النوع + العملية + المكان + اسم البراند)
  const title = `${typeText} ${opText} ${cityText} ${regionText} | أرخص الأسعار | منصة الراية`.trim();

  // --- 3. بناء الوصف (Description)  بالكلمات المفتاحية ---
  const description = `
    ابحث عن أفضل ${typeText} ${opText} ${cityText} ${regionText}. 
    خيارات متنوعة تشمل ${bedroomsText} ${areaText}. 
    استكشف عقارات لقطة في بيت حنينا، كفر عقب، صور باهر، وأريحا بأسعار تنافسية. 
    صور حقيقية، خريطة تفاعلية، وتواصل مباشر مع المالك عبر منصة الراية العقارية.
  `.trim().replace(/\s+/g, ' '); // تنظيف المسافات الزائدة

  // --- 4. توليد كلمات مفتاحية ديناميكية للصفحة الحالية ---
  const currentKeywords = [
    `${typeText} ${cityText}`,
    `${typeText} ${opText}`,
    `عقارات ${cityText}`,
    `شقق للبيع في ${city || 'القدس'}`,
    `اراضي للبيع ${cityText}`,
    "الراية العقارية",
    "عقارات فلسطين بالتقسيط",
    "مكتب عقاري في القدس"
  ];

  return {
    title,
    description,
    keywords: currentKeywords, // إضافة الكلمات المفتاحية بناءً على الفلترة

    // تحسين الـ Canonical ليكون رابط كامل وصحيح
    alternates: {
      canonical: `https://www.rayapal.com/properties?${new URLSearchParams(
        Object.entries(searchParams || {}).filter(
          ([, v]) => typeof v === 'string' && v !== ''
        )
      ).toString()}`
    },

    // تحسين الـ OpenGraph لمشاركة الروابط
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://www.rayapal.com/properties`,
      siteName: 'الراية العقارية',
      locale: 'ar_PS', // فلسطين
      images: [
        {
          url: 'https://www.rayapal.com/icon.png',
          width: 1200,
          height: 630,
          alt: `عرض ${typeText} في ${cityText}`,
        },
      ],
    },

    // إضافة إعدادات الروبوتات لهذه الصفحة تحديداً
    robots: {
      index: true,
      follow: true,
      nocache: true, // لأن نتائج البحث متغيرة باستمرار
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.rayapal.com/icon.png'],
    },
  }
}

const Projects = async ({searchParams}) => {
  const {city , propertyType , area, bedrooms ,region , opeartion} = await searchParams
   const newdata = await  getProperties(city , propertyType , area, bedrooms ,region , opeartion)
const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",

  name:
    "شقق للبيع في القدس ورام الله واريحا | عقارات فلسطين | منصة الراية العقارية",

  description:
    "استكشف أفضل الشقق والأراضي والفلل والعقارات للبيع والإيجار في القدس ورام الله وأريحا. عقارات في بيت حنينا، كفر عقب، صور باهر، البيرة، المصايف، وأم طوبا بأسعار مميزة عبر منصة الراية العقارية.",

  keywords: [
    "شقق للبيع في القدس",
    "عقارات القدس",
    "شقق للبيع في رام الله",
    "عقارات رام الله",
    "شقق للبيع في اريحا",
    "اراضي للبيع في القدس",
    "فلل للبيع في رام الله",
    "عقارات بيت حنينا",
    "عقارات كفر عقب",
    "شقق في صور باهر",
    "شقق في البيرة",
    "عقارات المصايف",
    "شقق للبيع في شعفاط",
    "عقارات فلسطين",
    "عقارات بالتقسيط",
    "شقق للبيع",
    "اراضي للبيع",
    "فلل للبيع",
    "عقارات للايجار"
  ],

  url: "https://www.rayapal.com/properties",

  mainEntity: {
    "@type": "ItemList",

    numberOfItems: newdata?.length || 0,

    itemListElement: newdata?.slice(0, 15).map((property, index) => ({
      "@type": "ListItem",

      position: index + 1,

      url: `https://www.rayapal.com/properties/${property.id}`,

      name: property.title
    }))
  }
};
  return (
    <div  className='pt-20 min-h-screen bg-[#f7f7f7]'>
    <Script
      id="properties-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
<FixedFilter />
      
<div className='  container mx-auto px-4' >
  
  {/* قسم الفلترة - يمين */}
  
<div className='flex flex-col lg:flex-row gap-1'>
   
 

  {/* قسم العقارات */}
  <main className=" lg:px-4 w-full lg:w-full">

    <AllProperties propertiesServerdata={newdata} />
  </main>


</div>
    </div>


</div>
  )
}

export default Projects