"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from 'next/image';
const BlogSection = ({data}) => {
  return (
    <div className="py-12 px-4">
      <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
        المدونة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف مجموعة متنوعة من المقالات وكيفية الإستثمار
          </p>
        </div>
        <div className="max-w-7xl mx-auto"> {/* Added container with max-width */}
        
        
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
                slidesPerView: 3,
                centeredSlides: false,
              },
              1280: { 
                slidesPerView: 4,
                centeredSlides: false,
              },
            }}
          >
           {data.map((post) => (
  <SwiperSlide
    key={post.id}
    className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group"
  >
    {/* Image */}
    <div className="relative overflow-hidden">
      <Image
        src={post.blogImageCutmez?.url}
        alt={post.blogTietal}
        width={500}
        height={300}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
        {post.blogCatgeoray}
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2">
        {post.blogTietal}
      </h3>

      <p className="text-sm text-gray-600 line-clamp-3 mb-4">
        {post.blogDeatils}
      </p>

      <div className="flex items-center justify-between pt-4 border-t">
        <span className="text-xs text-gray-400">
            {new Date(post.createdAt).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}
        </span>

        <Link
          href={`/blogs/${post.id}`}
          className="text-amber-600 font-semibold text-sm hover:underline flex items-center gap-1"
        >
          اقرأ المقال
          <svg
            className="w-4 h-4 rtl:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      </div>
    </div>
  </SwiperSlide>
))}

          </Swiper>
        </div>
      </div>
  )
}

export default BlogSection