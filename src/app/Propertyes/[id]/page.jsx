
import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Bed, Bath, Square, Phone, Mail, MessageCircle, Star, Check, Image as ImageIcon, FileText, CreditCard, User } from 'lucide-react';
import MapSection from '@/components/common/MapSection';
import PropertiesRelated from '@/components/sections/PropertiesRelated';
import { propertiesData } from "@/data/index";
import { getPropertiey } from '@/lib/GetEntry';
import ProertyContent from '@/components/common/ProertyContent';
import PropertiesRelatedServer from '@/components/sections/PropertiesRelatedServer';

const PropertyDetail =  async ({params}) => {
const property = await getPropertiey(params.id)
  


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