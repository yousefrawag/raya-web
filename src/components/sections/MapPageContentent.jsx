"use client"
import React from 'react'
import dynamic from 'next/dynamic';
const MapSection = dynamic(() => import('@/components/sections/MapSection'), {
  ssr: false,
  loading: () => <div className="h-[600px] bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">جاري تحميل الخريطة...</div>
});

const MapFilter = dynamic(() => import('@/components/common/MapFilter'), {
  ssr: false
});
const MapPageContentent = ({data}) => {
  return (
 <div className="grid grid-cols-1 lg:grid-cols-3 h-[600px]">
            <div className=' py-5 overflow-y-auto'>
                  <MapFilter
        
       
        />
            </div>

            <div className="lg:col-span-2 w-full h-full">
              <MapSection
              data={data}
                // onPropertySelect={handlePropertySelect}
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
  )
}

export default MapPageContentent