
import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Bed, Bath, Square, Phone, Mail, MessageCircle, Star, Check, Image as ImageIcon, FileText, CreditCard, User } from 'lucide-react';
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
        <div className="  flex gap-1 flex-col lg:flex-row lg:gap-4">
          <Link href="/" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            العودة للرئيسية
            /
          </Link>
        
            <Link href="/properties" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            العقارات
            /
          </Link>
                 <Link 
                  href={{
    pathname: "/properties",
    query: {
  
      city: property.city,
   
    },
  }} className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            {property?.city}
            /
          </Link>
          
                <span className="inline-flex items-center text-amber-700 transition-colors">
          
            {property?.title}
          </span>
        </div>
      </div>
<ProertyContent data={property}/>

    <h2 className='text-slate-900 text-2xl'> عقارات ذات صلة </h2>
    <PropertiesRelatedServer city={property?.city} />
    </div>
    </div>
  );
};

export default PropertyDetail;