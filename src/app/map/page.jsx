


import PropertyCard from '@/components/common/PropertyCard';
import { GetallEntry } from '@/lib/GetallEntry';
import { getProperties } from '@/lib/GetpropertiesEntry';

import MapPageContentent from '@/components/sections/MapPageContentent';

const PropertySearch = async ({searchParams}) => {
  const {city , propertyType , area, bedrooms ,region , opeartion} = await searchParams
 const data = await getProperties(city , propertyType , area, bedrooms ,region , opeartion)

  return (
    <div className="min-h-screen bg-gray-50 py-10" dir="rtl">
      <div >
     
   

        {/* Main Content */}
   
      
         
      <MapPageContentent  data={data}/>

        {/* No Results */}
        {data.length === 0 && (
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