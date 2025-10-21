"use client"
import React from 'react';
import Link from 'next/link';
import { Bed, Bath, Square, MapPin, Heart, Star } from 'lucide-react';

const Properties = ({ CurrentView }) => {
  const properties = [
    {
      id: 1,
      title: 'بنتهاوس مثل على البحر',
      location: 'الكورنيش، جدة',
      price: '4,200,000',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      bedrooms: 4,
      bathrooms: 3,
      area: 300,
      type: 'للبيع',
      featured: true,
      rating: 4.8
    },
     {
      id: 11,
      title: 'بنتهاوس مثل على البحر',
      location: 'الكورنيش، جدة',
      price: '4,200,000',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      bedrooms: 4,
      bathrooms: 3,
      area: 300,
      type: 'للبيع',
      featured: true,
      rating: 4.8
    },
    
    {
      id: 2,
      title: 'شقة عصرية في دبي مارينا',
      location: 'دبي مارينا، دبي',
      price: '8,500',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      bedrooms: 2,
      bathrooms: 2,
      area: 120,
      type: 'للإيجار',
      featured: false,
      rating: 4.5
    },
    {
      id: 3,
      title: 'فيلا فاخرة في الرياض',
      location: 'حي الملقا، الرياض',
      price: '2,500,000',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      bedrooms: 5,
      bathrooms: 4,
      area: 450,
      type: 'للبيع',
      featured: true,
      rating: 4.9
    }
  ];

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            العقارات المتاحة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف مجموعة متنوعة من العقارات المتميزة للبيع والإيجار
          </p>
        </div>

        {/* Properties Grid */}
        <div className={`grid ${
          CurrentView === "list" ? "grid-cols-1 lg:grid-cols-2 gap-8" : 
          CurrentView === "module" ? "grid-cols-1 gap-8" : 
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        }`}>
          {properties.map((property) => (
            <div 
              key={property.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 relative"
            >
              {/* Featured Badge */}
              {property.featured && (
                <div className="absolute top-4 right-4 z-10 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  متميز
                </div>
              )}

              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4 bg-white/95 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {property.type}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 left-14 flex gap-2">
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-all duration-300 shadow-md">
                    <Heart size={16} className="text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                </div>

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
                    <span className="text-sm truncate">{property.location}</span>
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
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        size={14}
                        className={`${
                          star <= Math.floor(property.rating) 
                            ? 'fill-amber-400 text-amber-400' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({property.rating})</span>
                </div>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-2xl font-bold text-amber-600">
                    {property.price} 
                    <span className="text-sm font-normal text-gray-600 mr-1">
                      {property.type === 'للبيع' ? 'ريال' : 'ريال/شهر'}
                    </span>
                  </div>
                  <Link 
                    href={`/Propertyes/1`}
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
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r cursor-pointer from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            عرض المزيد من العقارات
          </button>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Properties;