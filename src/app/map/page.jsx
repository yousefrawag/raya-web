"use client"
import { useState, useEffect } from 'react';
import MapFilter from '@/components/common/MapFilter';
import MapSection from '@/components/sections/MapSection';
import PropertyCard from '@/components/common/PropertyCard';
// Mock data for demonstration
const mockProperties = [
  {
    id: 1,
    title: 'بيت مطل على البحر',
    location: 'الكريتين، جدة',
    price: '4,200,000 ريال',
    type: 'sale',
    area: 300,
      tax: false ,
    bedrooms: 3,
    bathrooms: 4,
    lat: 31.9466,
    lng: 35.3027,
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    title: 'شقة عصرية في دبي',
    location: 'بني مريا، دبي',
    price: '8,500 ريال/شهر',
    type: 'rent',
     tax: false ,
    area: 120,
    bedrooms: 2,
    bathrooms: 2,
    lat: 31.8,
    lng: 35.2,
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    title: 'فيلا فاخرة في الرياض',
    location: 'حي الملقا، الرياض',
    price: '2,500,000 ريال',
    type: 'sale',
    area: 450,
    bedrooms: 4,
     tax: false ,
    bathrooms: 5,
    lat: 32.1,
    lng: 35.1,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    title: 'شقة مفروشة للإيجار',
    location: 'رام الله، فلسطين',
    price: '1,200 دولار/شهر',
    type: 'rent',
     tax: false ,
    area: 85,
    bedrooms: 2,
    bathrooms: 1,
    lat: 31.7,
    lng: 35.4,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    title: 'محل تجاري في نابلس',
    location: 'البلدة القديمة، نابلس',
    price: '150,000 دولار',
    type: 'sale',
     tax: false ,
    area: 60,
    lat: 32.2226,
    lng: 35.2622,
    image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 6,
    title: 'أرض للبيع في الخليل',
    location: 'حلحول، الخليل',
    price: '80,000 دولار',
     tax: false ,
    type: 'sale',
    area: 1000,
    lat: 31.5326,
    lng: 35.0998,
    image: 'https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 7,
    title: 'شقة في القدس القديمة',
    location: 'القدس، فلسطين',
    price: '250,000 دولار',
    type: 'sale',
    area: 110,
     tax: false ,
    bedrooms: 3,
    bathrooms: 2,
    lat: 31.7683,
    lng: 35.2137,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 8,
    title: 'بيت في بيت لحم',
    location: 'بيت لحم، فلسطين',
    price: '120,000 دولار',
    type: 'sale',
    area: 150,
     tax: false ,
    bedrooms: 3,
    bathrooms: 2,
    lat: 31.7054,
    lng: 35.2024,
    image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 9,
    title: 'شقة عائلية',
    location: 'جنين، فلسطين',
    price: '90,000 دولار',
     tax: false ,
    type: 'sale',
    area: 140,
    bedrooms: 3,
    bathrooms: 2,
    lat: 32.4646,
    lng: 35.2933,
    image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 10,
    title: 'محل تجاري',
    location: 'طولكرم، فلسطين',
    price: '75,000 دولار',
    type: 'sale',
     tax: false ,
    area: 90,
    lat: 32.3104,
    lng: 35.0293,
    image: 'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 11,
    title: 'شقة قريبة من البحر',
    location: 'غزة، فلسطين',
    price: '650 دولار/شهر',
    type: 'rent',
    area: 100,
     tax: true ,
    bedrooms: 2,
    bathrooms: 1,
    lat: 31.5,
    lng: 34.47,
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 12,
    title: 'منزل عائلي',
    location: 'قلقيلية، فلسطين',
    price: '95,000 دولار',
    tax: true ,
    type: 'sale',
    area: 130,
    bedrooms: 3,
    bathrooms: 2,
    lat: 32.1896,
    lng: 34.9706,
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 13,
    title: 'شقة حديثة',
    location: 'أريحا، فلسطين',
    tax: true ,
    price: '110,000 دولار',
    type: 'sale',
    area: 125,
    bedrooms: 2,
    bathrooms: 2,
    lat: 31.8569,
    lng: 35.459,
    image: 'https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 14,
    title: 'فيلا مطلة على البحر',
    location: 'رفح، فلسطين',
    price: '300,000 دولار',
    type: 'sale',
    tax: true ,
    area: 400,
    bedrooms: 5,
    bathrooms: 4,
    lat: 31.287,
    lng: 34.259,
    image: 'https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 15,
    title: 'أرض استثمارية',
    location: 'خان يونس، فلسطين',
    price: '200,000 دولار',
    tax: true ,
    type: 'sale',
    area: 1500,
    lat: 31.343,
    lng: 34.302,
    image: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 16,
    title: 'شقة صغيرة',
    location: 'سلفيت، فلسطين',
    price: '70,000 دولار',
    tax: true ,
    type: 'sale',
    area: 95,
    bedrooms: 2,
    bathrooms: 1,
    lat: 32.0853,
    lng: 35.1803,
    image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 17,
    title: 'شقة للإيجار',
    location: 'طوباس، فلسطين',
    price: '500 دولار/شهر',
    tax: true ,
    type: 'rent',
    area: 90,
    bedrooms: 2,
    bathrooms: 1,
    lat: 32.3209,
    lng: 35.3694,
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 18,
    title: 'منزل ريفي',
    location: 'بيتونيا، فلسطين',
    price: '85,000 دولار',
    type: 'sale',
    area: 140,
    tax: true ,
    bedrooms: 3,
    bathrooms: 2,
    lat: 31.9,
    lng: 35.15,
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 19,
    title: 'أرض زراعية',
    location: 'دير البلح، فلسطين',
    price: '60,000 دولار',
    type: 'sale',
    area: 2000,
    lat: 31.417,
    tax: true ,
    lng: 34.35,
    image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 20,
    title: 'بيت تراثي',
    location: 'عكا، فلسطين',
    price: '180,000 دولار',
    type: 'sale',
    area: 160,
    tax: true ,
    bedrooms: 4,
    bathrooms: 2,
    lat: 32.927,
    lng: 35.0818,
    image: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];



const PropertySearch = () => {
  const [properties, setProperties] = useState(mockProperties);
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'map'

  const handleFilterChange = (filters) => {
    let filtered = properties;

    if (filters.location) {
      filtered = filtered.filter(property => 
        property.location.includes(filters.location)
      );
    }

    if (filters.saleType) {
      const saleType = filters.saleType === 'للبيع' ? 'sale' : 'rent';
      filtered = filtered.filter(property => property.type === saleType);
    }

    if (filters.bedrooms) {
      filtered = filtered.filter(property => 
        property.bedrooms >= parseInt(filters.bedrooms)
      );
    }

    if (filters.bathrooms) {
      filtered = filtered.filter(property => 
        property.bathrooms >= parseInt(filters.bathrooms)
      );
    }

    if (filters.minPrice && filters.maxPrice) {
      filtered = filtered.filter(property => {
        const price = parseInt(property.price.replace(/[^\d]/g, ''));
        const minPrice = parseInt(filters.minPrice);
        const maxPrice = parseInt(filters.maxPrice);
        return price >= minPrice && price <= maxPrice;
      });
    }

    setFilteredProperties(filtered);
  };

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10" dir="rtl">
      <div >
        {/* Header */}
        {/* <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">البحث عن العقارات</h1>
          <p className="text-gray-600">اعثر على العقار المناسب لك في فلسطين</p>
        </div> */}

        {/* Filter Section */}
  

        {/* View Toggle */}
        {/* <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="text-gray-600">
              {filteredProperties.length} عقار متاح
            </span>
          </div>
          
          <div className="flex bg-white rounded-lg shadow-sm border border-gray-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-r-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
              </svg>
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-l-lg transition-colors ${
                viewMode === 'map' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
        </div> */}

        {/* Main Content */}
   
          // Map View
          <div className="grid grid-cols-1 lg:grid-cols-3 h-[600px]">
            <div className=' py-5 overflow-y-auto'>
                  <MapFilter
          onFilterChange={handleFilterChange}
          isOpen={isFilterOpen}
          onToggle={() => setIsFilterOpen(!isFilterOpen)}
        />
            </div>

            <div className="lg:col-span-2">
              <MapSection
                properties={filteredProperties}
                onPropertySelect={handlePropertySelect}
              />
            </div>

            {/* <div className="overflow-y-auto">
              <div className="space-y-4">
                {filteredProperties.map((property) => (
                  <div
                    key={property.id}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedProperty?.id === property.id 
                        ? 'ring-2 ring-orange-500' 
                        : ''
                    }`}
                    onClick={() => handlePropertySelect(property)}
                  >
                    <PropertyCard property={property} />
                  </div>
                ))}
              </div>
            </div> */}
          </div>
      

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">لا توجد عقارات مطابقة</h3>
            <p className="text-gray-500">حاول تعديل معايير البحث للعثور على المزيد من العقارات</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertySearch;