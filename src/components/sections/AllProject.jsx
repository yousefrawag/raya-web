"use client"
import React from 'react';
import Link from 'next/link';
import { MapPin, Calendar, Users, Building } from 'lucide-react';
import { FaHeart } from "react-icons/fa";
import Image from 'next/image';
const AllProject = ({data}) => {


  return (
    <section id="projects" className="py-20 ">
      <div className="container mx-auto px-6">
    

        {/* Projects Grid */}
        <div className= "grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      {data?.map((item, index) => (
            <div key={item.id} className="!flex !justify-center">
              <div className="w-[320px] bg-white rounded-[25px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 mx-auto"> {/* Added mx-auto */}
                {/* صورة المشروع */}
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={item.seriesimagesCutmez[0]?.url}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />

                  {/* زر المفضلة */}
                  <button className="absolute top-4 left-4 bg-white/90 text-gray-700 p-2 rounded-full hover:bg-gray-200 transition">
                    <FaHeart size={16} />
                  </button>

                  {/* نوع المشروع */}
                  <span className="absolute top-4 right-4 bg-white text-gray-800 text-sm px-3 py-1 rounded-full shadow">
                    {item.projectType}
                  </span>
                </div>

                {/* الجزء السفلي مع التصميم المميز */}
                <div className="relative pt-8 pb-6 px-6">
                  {/* الشكل المقطوع مع اللوجو */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full">
                    {/* الخط المنحني */}
                    <div className="relative h-10">
                      <div className="absolute top-0 left-0 w-full h-10 bg-white rounded-t-[50%]"></div>
                      
                      {/* الثقوب الجانبية */}
                      <div className="absolute -top-1 -left-4 w-8 h-8 rounded-full bg-gray-100"></div>
                      <div className="absolute -top-1 -right-4 w-8 h-8 rounded-full bg-gray-100"></div>
                    </div>
                    
                    {/* دائرة اللوجو */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-white shadow-lg rounded-full overflow-hidden z-20">
                      <Image
                        src={item.seriesimagesCutmez[1]?.url}
                        alt="Developer Logo"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* محتوى البطاقة */}
                  <div className="text-center mt-2">
                    {/* العنوان */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {item.title}
                    </h3>

                    {/* الموقع */}
                    <p className="text-gray-600 text-sm mb-4">{item.adress}</p>

                    {/* الأسعار */}
                    <div className="bg-gray-50 rounded-2xl py-3 px-4 mb-4">
                      <div className="flex justify-between items-center text-gray-900">
                        <span className="text-sm font-medium">يبدأ</span>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold">{item.startingPrice + "$"} </span>
                          
                        </div>
                      </div>
                    </div>

                    {/* معلومات إضافية */}
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <div className="flex items-center">
                        <Building size={16} className="text-amber-500 ml-2" />
                        <span className="text-sm text-gray-600">{item?.numberofunits} وحدة</span>
                      </div>
                      <Link href={`/Projects/${item.id}`} className="text-amber-600 font-medium cursor-pointer hover:text-amber-700">
                        تفاصيل
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProject;