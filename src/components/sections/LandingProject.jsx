"use client";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Building } from 'lucide-react';
import Link from "next/link";
import { 
  HiOutlineLocationMarker, 
  HiOutlineArrowsExpand, 
  HiOutlineSearch,
  HiOutlineBadgeCheck,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlinePlus
} from 'react-icons/hi';
export default function LandingProject({data}) {
 console.log("data" , data);
 

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto"> {/* Added container with max-width */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
             الفرص الإستثمارية المتاحة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             أستكشف العقارات التي تم اختيارها بعناية 
             من
             فريقنا
          </p>
        </div>
      
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="relative !pb-20"
          autoplay={{ delay: 3000 }}
          navigation
          breakpoints={{
            640: { 
              slidesPerView: 1,
              centeredSlides: true, // Center slides on mobile
            },
            768: { 
              slidesPerView: 2,
              centeredSlides: false,
            },
            1024: { 
              slidesPerView: 2,
              centeredSlides: false,
            },
            1280: { 
              slidesPerView: 2,
              centeredSlides: false,
            },
          }}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={item.id} className="!flex !justify-center">
         <PropertyCard 
            
             image={item?.seriesimagesCutmez[0]?.url || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800"}
             title={item?.title}
             location={`${item?.city} - ${item?.region}`}
             price={item?.price}
             area={item?.area}
             type={item?.type}
             desc={item?.details}
                id={item?.id}
          />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
const PropertyCard = ({ image, title, location, price, area, type, desc , id }) => (
  <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row h-full">
    <div className="md:w-5/12 relative h-60 md:h-auto overflow-hidden">
      <img src={image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-amber-600 px-4 py-1 rounded-xl text-[10px] font-black uppercase">فرصة حصرية</span>
    </div>
    <div className="md:w-7/12 p-8 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-amber-500 transition-colors">{title}</h3>
        <div className="flex items-center text-slate-400 text-xs mb-4">
          <HiOutlineLocationMarker className="text-amber-500 ml-1" size={16}/> {location}
        </div>
        <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-2">{desc}</p>
        <div className="flex gap-4 py-4 border-t border-slate-50 mb-4 text-[10px] font-bold text-slate-600">
           <span className="flex items-center gap-1"><HiOutlineArrowsExpand size={14}/> {area} م²</span>
           <span className="flex items-center gap-1 uppercase tracking-tighter bg-amber-50 px-2 py-0.5 rounded text-amber-700">{type}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-black text-slate-900"><span className="text-amber-500 text-sm ml-1">$</span>{price}</div>
        <Link href={`/investment/${id}`} className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-amber-500 transition-all">التفاصيل</Link>
      </div>
    </div>
  </div>
);