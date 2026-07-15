export const revalidate = 86400;

import React from 'react';
import Link from 'next/link';
import { 
  HiOutlineChevronRight,
  HiOutlineCheckCircle,
  HiOutlinePlus,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineDocumentText,
  HiOutlineClock
} from 'react-icons/hi';
import Script from "next/script";

import { propertiesData } from "@/data/index";
import { getPropertiey } from '@/lib/GetEntry';
import ProertyContent from '@/components/common/ProertyContent';
import PropertiesRelatedServer from '@/components/sections/PropertiesRelatedServer';
export async function generateMetadata({ params }) {
  const { id } = await params
  const project = await getPropertiey(id)

  if (!project) {
    return {
      title: 'عقار غير موجود | شركة الراية',
      robots: {
        index: false,
        follow: false
      }
    }
  }

  const title = `${project.title} في ${project.city} | عقار ${project.typeOfproject} من منصة الراية`

  const description = `
${project.title} عقار ${project.typeOfproject} في ${project.city}.
${project.details?.slice(0, 140) || 'مشروع عقاري مميز بموقع استراتيجي وأنظمة سداد مرنة.'}
  `.trim()

  

  return {
    title,
    description,

    alternates: {
      canonical: `/properties/${id}`
    },

    openGraph: {
      title,
      description,
      type: 'article',
      locale: 'ar_AR',
      images: project.seriesimagesCutmez?.[0]?.url
        ? [{ url: project.seriesimagesCutmez[0].url }]
        : []
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  }
}
const PropertyDetail =  async ({params}) => {
   const { id } = await params;
const property = await getPropertiey(id)
  


 const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",

    name: property.title,

    description: property.details,

    url: `https://rayapal.com/properties/${id}`,

    image: property.seriesimagesCutmez?.map(
      (img) => img.url
    ),

    address: {
      "@type": "PostalAddress",
      addressLocality: property.city,
      addressCountry: "Palestine"
    },

    numberOfRooms: property.bedrooms || undefined,

    floorSize: property.area
      ? {
          "@type": "QuantitativeValue",
          value: property.area,
          unitCode: "MTK"
        }
      : undefined,

  
  };




  return (
    <div className="min-h-screen  bg-gray-50">
    <Script
        id="property-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <div className="container mx-auto px-3 ">
      {/* Header */}
      <div className="p-4  mt-25 ">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm font-bold text-slate-400 mt-4">
                <Link href="/" className="hover:text-amber-500 transition-colors">الرئيسية</Link>
                <HiOutlineChevronRight className="rotate-180 text-slate-300" size={14} />
                <Link href="/properties" className="hover:text-amber-500 transition-colors">العقارات</Link>
                <HiOutlineChevronRight className="rotate-180 text-slate-300" size={14} />
                   <Link href={`/properties/?city=${property?.city}`} className="hover:text-amber-500 transition-colors">{property?.city}</Link>
                <HiOutlineChevronRight className="rotate-180 text-slate-300" size={14} />
                <span className="text-slate-600 font-extrabold">{property.title}</span>
              </nav> 
      </div>

  
<ProertyContent data={property}/>

    <h2 className='text-slate-900 text-2xl'> عقارات ذات صلة </h2>
    <PropertiesRelatedServer city={property?.city} />
    </div>
    </div>
  );
};

export default PropertyDetail;