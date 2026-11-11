import React from "react";
import Carousel from "../common/Carousel";
import Image from "next/image";
import Link from "next/link";

import quets from "../../images/regions/qutes.jpeg";
import ramella from "../../images/regions/ramall.jpeg";
import phetahnen from "../../images/regions/pethanen.jpeg";
import akrab from "../../images/regions/akrab.jpeg";
import surbare from "../../images/regions/SurBahir.webp";

// ⚡ كان client component بـ Swiper (JS + 3 ملفات CSS).
// دلوقتي server component + Carousel خفيف (~2KB) للنقط والتشغيل التلقائي.
//
// 🔎 SEO: زرار "استعرض العقارات" بقى يودّي على صفحة المنطقة (/regions/...)
// بدل /properties?city=... — صفحات المناطق هي اللي عايزينها تظهر في جوجل
// لكلمات زي "عقارات كفر عقب"، وصفحات الفلاتر بقت noindex.
const regions = [
  { id: 1, name: "القدس", image: quets, href: "/regions/jerusalem", mapCity: "القدس" },
  { id: 2, name: "رام الله", image: ramella, href: "/regions/ramallah", mapCity: "رام الله" },
  { id: 3, name: "بيت حنينا", image: phetahnen, href: "/regions/jerusalem/beit-hanina", mapCity: "بيت حنينا" },
  { id: 4, name: "كفر عقب", image: akrab, href: "/regions/jerusalem/kafr-aqab", mapCity: "كفر عقب" },
  { id: 5, name: "صور باهر", image: surbare, href: "/regions/jerusalem/sur-baher", mapCity: "صور باهر" },
];

const RegionFilter = () => {
  return (
    <div className="py-7 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto py-10 pb-15">
        <div className="text-center mb-16 mt-6">
          <h2 className="text-lg md:text-5xl font-bold text-slate-800 mb-6">
            تصفح العقارات حسب المدينة
          </h2>
        </div>

        <Carousel>
          {regions.map((region) => (
            <div
              key={region.id}
              className="snap-start shrink-0 w-[85%] sm:w-[48%] lg:w-[31.5%] xl:w-[23.5%]"
            >
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={region.image}
                    alt={`عقارات ${region.name}`}
                    fill
                    sizes="(max-width:640px) 85vw, (max-width:1024px) 48vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 right-4 text-white text-xl font-bold">
                    {region.name}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3">
                  <Link
                    href={region.href}
                    className="w-full bg-gradient-to-r text-center cursor-pointer from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    عقارات {region.name}
                  </Link>
                  <Link
                    href={{ pathname: "/map", query: { city: region.mapCity } }}
                    className="w-full py-3 cursor-pointer border-2 border-amber-500 text-amber-500 rounded-xl text-center font-semibold hover:bg-amber-50 transition"
                  >
                    البحث على الخريطة
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default RegionFilter;
