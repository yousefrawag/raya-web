
import React from 'react';
import Link from 'next/link';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { getProperties } from '@/lib/GetpropertiesEntry';

const AllProperties = ({ propertiesServerdata}) => {
 

  
  // const [properties , setProperties] = useState(  [
  //   {
  //     id: 1,
  //     city:"المصايف",
  //     propertyType:"فيلا",
  //     title: 'فيلا فاخرة في الرياض',
  //     location: 'المصايف,  القدس',
  //     price: '2,500,000',
  //     image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //     bedrooms: "5",
  //     bathrooms: 4,
  //     area: "450",
  //     opeartion: 'بيع'
  //   },
  //   {
  //     id: 2,
  //     city:"ام طوبا",
  //     propertyType:"شقة",
  //     title: 'شقة عصرية في دبي',
  //     location: 'ام طوبا,  القدس',
  //     price: '8,500',
  //     image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //     bedrooms: "2",
  //     bathrooms: 2,
  //     area: "120",
  //     opeartion: 'ايجار'
  //   },
  //   {
  //     id: 3,
  //       propertyType:"فيلا",
  //     city:"جبل المكبر",
  //     title: 'بنتهاوس مطل على البحر',
  //     location: 'جبل المكبر, القدس',
  //     price: '4,200,000',
  //     image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //     bedrooms: "4",
  //     bathrooms: 3,
  //     area: "300",
  //     opeartion: 'بيع'
  //   },
  //   {
  //     id: 4,
  //     propertyType:"مكتب",
  //     city:"كفر عقرب",
  //     title: 'مكتب استثمارية',
  //     location: ' كفر عقرب, رام الله',
  //     price: '1,200',
  //     image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //     bedrooms: "1",
  //     bathrooms: 1,
  //     area: "80",
  //     opeartion: 'ايجار'
  //   },
  //   {
  //     id: 5,
  //       propertyType:"مستودع",
  //     city:"شعفاط السهل",
  //     title: 'مستودع مع حديقة',
  //     location: ' شعفاط السهل, القدس',
  //     price: '1,800,000',
  //     image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //     bedrooms: "4",
  //     bathrooms: 3,
  //     area: "350",
  //     opeartion: 'بيع'
  //   },
  //   {
  //     id: 6,
  //     city:"صور باهر",
  //       propertyType:"استوديو",
  //     title: 'استوديو حديث',
  //     location: ' صور باهر,  القدس',
  //     price: '4,500',
  //     image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //     bedrooms: "1",
  //     bathrooms: 1,
  //     area: "60",
  //     opeartion: 'بيع'
  //   } ,
  //     {
  //     id: 12,
  //       propertyType:"فيلا",
  //     title: 'فيلا فاخرة في الرياض',
  //     city:"القدس",
  //     location: ' القدس,  القدس',
  //     price: '2,500,000',
  //     image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //     bedrooms: "5",
  //     bathrooms: 4,
  //     area: "450",
  //     opeartion: 'ايجار'
  //   }, 
  //     {
  //     id: 11,
  //       propertyType:"استوديو",
  //       city:"صور باهر",
  //     title: 'فيلا فاخرة في الرياض',
  //     location: 'حي الملقا، الرياض',
  //     price: '2,500,000',
  //     image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //     bedrooms: "5",
  //     bathrooms: 4,
  //     area: "450",
  //     opeartion: 'ايجار'
  //   },
  // ]) 
// const properties =[
//     {
//       id: 1,
//       city:"المصايف",
//       propertyType:"فيلا",
//       title: 'فيلا فاخرة في الرياض',
//       location: 'المصايف,  القدس',
//       price: '2,500,000',
//       image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
//       bedrooms: "5",
//       bathrooms: 4,
//       area: "450",
//       opeartion: 'بيع'
//     },
//     {
//       id: 2,
//       city:"ام طوبا",
//       propertyType:"شقة",
//       title: 'شقة عصرية في دبي',
//       location: 'ام طوبا,  القدس',
//       price: '8,500',
//       image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
//       bedrooms: "2",
//       bathrooms: 2,
//       area: "120",
//       opeartion: 'ايجار'
//     },
//     {
//       id: 3,
//         propertyType:"فيلا",
//       city:"جبل المكبر",
//       title: 'بنتهاوس مطل على البحر',
//       location: 'جبل المكبر, القدس',
//       price: '4,200,000',
//       image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
//       bedrooms: "4",
//       bathrooms: 3,
//       area: "300",
//       opeartion: 'بيع'
//     },
//     {
//       id: 4,
//       propertyType:"مكتب",
//       city:"كفر عقرب",
//       title: 'مكتب استثمارية',
//       location: ' كفر عقرب, رام الله',
//       price: '1,200',
//       image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
//       bedrooms: "1",
//       bathrooms: 1,
//       area: "80",
//       opeartion: 'ايجار'
//     },
//     {
//       id: 5,
//         propertyType:"مستودع",
//       city:"شعفاط السهل",
//       title: 'مستودع مع حديقة',
//       location: ' شعفاط السهل, القدس',
//       price: '1,800,000',
//       image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
//       bedrooms: "4",
//       bathrooms: 3,
//       area: "350",
//       opeartion: 'بيع'
//     },
//     {
//       id: 6,
//       city:"صور باهر",
//         propertyType:"استوديو",
//       title: 'استوديو حديث',
//       location: ' صور باهر,  القدس',
//       price: '4,500',
//       image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
//       bedrooms: "1",
//       bathrooms: 1,
//       area: "60",
//       opeartion: 'بيع'
//     } ,
//       {
//       id: 12,
//         propertyType:"فيلا",
//       title: 'فيلا فاخرة في الرياض',
//       city:"القدس",
//       location: ' القدس,  القدس',
//       price: '2,500,000',
//       image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
//       bedrooms: "5",
//       bathrooms: 4,
//       area: "450",
//       opeartion: 'ايجار'
//     }, 
//       {
//       id: 11,
//         propertyType:"استوديو",
//         city:"صور باهر",
//       title: 'فيلا فاخرة في الرياض',
//       location: 'حي الملقا، الرياض',
//       price: '2,500,000',
//       image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
//       bedrooms: "5",
//       bathrooms: 4,
//       area: "450",
//       opeartion: 'ايجار'
//     },
//   ]


  return (
    <section id="properties" className="py-10 ">
      <div className="container mx-auto px-6">
        {/* Header */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            العقارات المتاحة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف مجموعة متنوعة من العقارات المتميزة للبيع والإيجار
          </p>
        </div> */}

        {/* Properties Grid */}
        {/* <div className={`grid grid-col-1 gap-4 w-full"}`}>
          {properties.map((property) => (
            <div 
              key={property.id}
              className="bg-white mb-4 border-1 border-[#e1e4e8] rounded-lg flex lg:flex-row flex-col gap-1  overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative w-full overflow-hidden">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {property.type}
                </div>
            
              </div>
              
              <div className="p-6 relative w-full ">
                    <button className="absolute top-4 left-5 cursor-pointer hover:bg-white p-2 rounded-full transition-colors duration-300">
                  <Heart size={16} className="text-gray-600 hover:text-red-500" />
                </button>
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
                
                <div className="flex flex-col lg:flex-row  items-center justify-between">
                  <div className="text-2xl font-bold text-amber-600">
                    {property.price} {property.type === 'للبيع' ? 'ريال' : 'ريال/شهر'}
                  </div>
                  <Link 
                    href={`/Propertyes/${property.id}`}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 mt-8 w-full text-center lg:w-auto md:mt-5 sm:mt-5 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    تفاصيل
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div> */}
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