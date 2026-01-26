
import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Bed, Bath, Square, Phone, Mail, MessageCircle, Star, Check, Image as ImageIcon, FileText, CreditCard, User } from 'lucide-react';
import MapSection from '@/components/common/MapSection';
import PropertiesRelated from '@/components/sections/PropertiesRelated';
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

  const title = `${project.title} في ${project.city} | عقار ${project.typeOfproject} من شركة الراية`

  const description = `
${project.title} عقار ${project.typeOfproject} في ${project.city}.
${project.details?.slice(0, 140) || 'مشروع عقاري مميز بموقع استراتيجي وأنظمة سداد مرنة.'}
  `.trim()

  return {
    title,
    description,

    alternates: {
      canonical: `/Propertyes/${id}`
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
  


  // if (!property) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-center">
  //         <h2 className="text-2xl font-bold text-slate-800 mb-4">العقار غير موجود</h2>
  //         <Link href="/" className="text-amber-600 hover:text-amber-700">العودة للرئيسية</Link>
  //       </div>
  //     </div>
  //   );
  // }



  return (
    <div className="min-h-screen  bg-gray-50">
      <div className="container mx-auto px-3 ">
      {/* Header */}
      <div className="p-4  mt-25 ">
        <div className="  flex gap-4">
          <Link href="/" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            العودة للرئيسية
            /
          </Link>
        
            <Link href="/Propertyes" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            العقارات
            /
          </Link>
                 <Link 
                  href={{
    pathname: "/Propertyes",
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