import React from 'react';
import Link from 'next/link';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';

const Properties = ({CurrentView}) => {
  const properties = [
    {
      id: 1,
      title: 'فيلا فاخرة في الرياض',
      location: 'حي الملقا، الرياض',
      price: '2,500,000',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      bedrooms: 5,
      bathrooms: 4,
      area: 450,
      type: 'للبيع'
    },
    {
      id: 2,
      title: 'شقة عصرية في دبي',
      location: 'دبي مارينا، دبي',
      price: '8,500',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      bedrooms: 2,
      bathrooms: 2,
      area: 120,
      type: 'للإيجار'
    },
    {
      id: 3,
      title: 'بنتهاوس مطل على البحر',
      location: 'الكورنيش، جدة',
      price: '4,200,000',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      bedrooms: 4,
      bathrooms: 3,
      area: 300,
      type: 'للبيع'
    },
    {
      id: 4,
      title: 'شقة استثمارية',
      location: 'وسط البلد، الكويت',
      price: '1,200',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      bedrooms: 1,
      bathrooms: 1,
      area: 80,
      type: 'للإيجار'
    },
    {
      id: 5,
      title: 'فيلا مع حديقة',
      location: 'الشارقة، الإمارات',
      price: '1,800,000',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      bedrooms: 4,
      bathrooms: 3,
      area: 350,
      type: 'للبيع'
    },
    {
      id: 6,
      title: 'استوديو حديث',
      location: 'الخليج التجاري، دبي',
      price: '4,500',
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      bedrooms: 1,
      bathrooms: 1,
      area: 60,
      type: 'للإيجار'
    } ,
      {
      id: 12,
      title: 'فيلا فاخرة في الرياض',
      location: 'حي الملقا، الرياض',
      price: '2,500,000',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      bedrooms: 5,
      bathrooms: 4,
      area: 450,
      type: 'للبيع'
    }, 
      {
      id: 11,
      title: 'فيلا فاخرة في الرياض',
      location: 'حي الملقا، الرياض',
      price: '2,500,000',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      bedrooms: 5,
      bathrooms: 4,
      area: 450,
      type: 'للبيع'
    },
  ];

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
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
        <div className={`grid ${CurrentView === "list"? "grid-cols-3 gap-8" : CurrentView === "module" ? "grid-cols-1 gap-8" : "lg:grid-cols-3 md:grid-cols-2 gap-8"}`}>
          {properties.map((property) => (
            <div 
              key={property.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {property.type}
                </div>
                <button className="absolute top-4 left-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors duration-300">
                  <Heart size={16} className="text-gray-600 hover:text-red-500" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin size={16} className="ml-2" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="flex items-center">
                      <Bed size={16} className="text-amber-500 ml-1" />
                      <span className="text-sm text-gray-600">{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath size={16} className="text-amber-500 ml-1" />
                      <span className="text-sm text-gray-600">{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square size={16} className="text-amber-500 ml-1" />
                      <span className="text-sm text-gray-600">{property.area}م²</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-amber-600">
                    {property.price} {property.type === 'للبيع' ? 'ريال' : 'ريال/شهر'}
                  </div>
                  <Link 
                    href={`/Propertyes/${property.id}`}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    تفاصيل
                  </Link>
                </div>
              </div>
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
    </section>
  );
};

export default Properties;