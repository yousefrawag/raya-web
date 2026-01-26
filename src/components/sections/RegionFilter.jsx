"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import quets from "../../images/regions/qutes.jpeg";
import ramella from "../../images/regions/ramall.jpeg";
import phetahnen from "../../images/regions/pethanen.jpeg";
import akrab from "../../images/regions/akrab.jpeg";
import surbare from "../../images/regions/SurBahir.webp";
import Link from "next/link";

const regions = [
  {
    id: 1,
    name: "القدس",
    image: quets,
    propertyCount: 245,
    avgPrice: "850,000 ريال",
    description: "العاصمة الإدارية وقلب فلسطين النابض",
  },
  {
    id: 2,
    name: "رام الله",
    image: ramella,
   
    propertyCount: 189,
    avgPrice: "720,000 ريال",
    description: "جبل النار ومدينة التجارة والصناعة",
  },
  {
    id: 3,
    name: "بيت حنينا",
    image: phetahnen,
    region: "القدس",
    propertyCount: 167,
    avgPrice: "680,000 ريال",
    description: "مدينة الأنبياء والتاريخ العريق",
  },
  {
    id: 4,
    name: "كفر عقب",
     region: "القدس",
    image: akrab,
    propertyCount: 134,
    avgPrice: "900,000 ريال",
    description: "مدينة المهد والسياحة الدينية",
  },
  {
    id: 5,
    name: "صور باهر",
     region: "القدس",
    image: surbare,
    propertyCount: 98,
    avgPrice: "580,000 ريال",
    description: "عروس الشمال وسلة فلسطين الخضراء",
  },
];

const RegionFilter = () => {
  return (
    <div className="min-h-screen py-7 px-4  " dir="rtl">
      <div className="max-w-7xl mx-auto py-10 pb-15  ">
        <div className="text-center mb-16 mt-6">
          <h2 className="text-lg md:text-5xl font-bold text-slate-800 mb-6">
            تصفح العقارات حسب المدينة
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
           className="relative !pb-20"
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {regions.map((region) => (
            <SwiperSlide key={region.id}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 right-4 text-white text-xl font-bold">
                    {region.name}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3">
                  <Link  href={{
    pathname: "/Propertyes",
    query: {
  
      city: region.region ? region.region : region.name,
      region :region.region ? region.name : ""
    
    },
  }} className="w-full bg-gradient-to-r text-center cursor-pointer from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg">
                    استعرض العقارات
                  </Link>
                      <Link   href={{
    pathname: "/map",
    query: {
  
      city: region.name,
    
    },
  }} className="w-full py-3 cursor-pointer border-2 border-amber-500 text-amber-500 rounded-xl text-center font-semibold hover:bg-amber-50 transition">
      البحث على الخريطة
    </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RegionFilter;
