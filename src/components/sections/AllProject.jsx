"use client"
import React from 'react';
import Link from 'next/link';
import { MapPin, Calendar, Users, Building } from 'lucide-react';
import { FaHeart } from "react-icons/fa";
import Image from 'next/image';
const AllProject = ({CurrentView}) => {
  const projects = [
    {
      title: "فال - مشروع رسين ريجان قبلا- للبيع",
      location: "العازض، شمال، الرياض",
      priceMin: "2.96M",
      priceMax: "4.59M",
      type: "فيلا",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
      logo: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000",
    },
    {
      title: "فال - مشروع رسين ريجان قبلا- للبيع",
      location: "العازض، شمال، الرياض",
      priceMin: "2.96M",
      priceMax: "4.59M",
      type: "فيلا",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
      logo: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000",
    },
    {
      title: "فال - مشروع رسين ريجان قبلا- للبيع",
      location: "العازض، شمال، الرياض",
      priceMin: "2.96M",
      priceMax: "4.59M",
      type: "فيلا",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
      logo: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000",
    },
    {
      title: "فال - مشروع رسين ريجان قبلا- للبيع",
      location: "العازض، شمال، الرياض",
      priceMin: "2.96M",
      priceMax: "4.59M",
      type: "فيلا",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
      logo: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000",
    },
    {
      title: "سما الورود - 2 فلل للبيع",
      location: "الورود الثاني، الانساء",
      priceMin: "656.38K",
      priceMax: "962.59K",
      type: "فيلا",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000",
      logo: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000",
    },
    {
      title: "شمس الرياض - فلل فاخرة",
      location: "شرق الرياض",
      priceMin: "80.01M",
      priceMax: "97.09M",
      type: "فيلا",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000",
      logo: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
    

        {/* Projects Grid */}
        <div className= "grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((item, index) => (
          <div key={index} className="flex justify-center">
            <div className="relative w-[320px] bg-white rounded-[25px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              {/* صورة المشروع */}
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={item.image}
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
                  {item.type}
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
                      src={item.logo}
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
                  <p className="text-gray-600 text-sm mb-4">{item.location}</p>

                  {/* الأسعار */}
                  <div className="bg-gray-50 rounded-2xl py-3 px-4 mb-4">
                    <div className="flex justify-between items-center text-gray-900">
                      <span className="text-sm font-medium">مبلغ</span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">{item.priceMax}</span>
                        <span className="text-gray-400">-</span>
                        <span className="text-lg font-bold">{item.priceMin}</span>
                      </div>
                    </div>
                  </div>

                  {/* معلومات إضافية */}
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center">
                      <Building size={16} className="text-amber-500 ml-2" />
                      <span className="text-sm text-gray-600">12 وحدة</span>
                    </div>
                    <span className="text-amber-600 font-medium cursor-pointer hover:text-amber-700">
                      تفاصيل
                    </span>
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