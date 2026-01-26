
import React from 'react';
import Link from 'next/link';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { getProperties } from '@/lib/GetpropertiesEntry';
import { SearchX } from "lucide-react";

import Image from 'next/image';
const AllProperties = ({ propertiesServerdata}) => {
if (propertiesServerdata?.length === 0) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 text-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-4">
        <SearchX className="w-8 h-8 text-red-500" />
      </div>

      <h3 className="text-lg font-semibold text-gray-700">
        لا توجد نتائج مطابقة
      </h3>

      <p className="text-sm text-gray-500 mt-2 max-w-md">
        لم نعثر على عقارات تطابق معايير البحث الحالية.  
        جرّب تعديل الفلاتر أو تغيير نطاق البحث.
      </p>
    </div>
  );
}


  return (
    <section id="properties" className="py-10 ">
      <div className="container mx-auto px-6">

   <div className={`grid ${
        
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        }`}>
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
               width={400}               // حجم مناسب للبطاقة
        height={300}  
                  loading="lazy"
                  src={property.seriesimagesCutmez[0]?.url}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4 bg-white/95 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {property.typeOfproject} 
                </div>

                {/* Action Buttons */}
                {/* <div className="absolute top-4 left-14 flex gap-2">
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-all duration-300 shadow-md">
                    <Heart size={16} className="text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                </div> */}

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
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  {/* <div className="text-2xl font-bold text-amber-600">
                    {property.price} 
                    <span className="text-sm font-normal text-gray-600 mr-1">
                      {property.type === 'للبيع' ? 'ريال' : 'ريال/شهر'}
                    </span>
                  </div> */}
                  <Link 
                    href={`/Propertyes/${property.id}`}
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
        {/* View More Button */}
    
      </div>
    </section>
  );
};

export default AllProperties;