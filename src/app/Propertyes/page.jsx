
import React from 'react'
import Properties from '@/components/sections/Properties'
import AdvancedSearch from '@/components/sections/AdvancedSearch'
import GridFilter from '@/components/common/GridFilter'
import AllProperties from '@/components/sections/AllProperties'
import mapImage from "@/images/Hero-images/srp-map-bg-ar.svg"

import Image from 'next/image'
import SelectHook from '@/hooks/SelectHook'
import FixedFilter from '@/components/sections/FixedFilter'

import { getProperties } from '@/lib/GetpropertiesEntry'
export async function generateMetadata({ searchParams }) {
  const {
    city,
    propertyType,
    area,
    bedrooms,
    region,
    opeartion
  } = searchParams || {}

  const cityText = city ? `في ${city}` : 'في القدس'
  const typeText = propertyType || 'عقارات'
  const operationText = opeartion || 'للبيع والإيجار'
  const areaText = area ? `منطقة ${area}` : ''
  const bedroomsText = bedrooms ? `${bedrooms} غرف` : ''

  const title = `${typeText} ${operationText} ${cityText} | شركة الراية العقارية`

  const description = `
استعرض أفضل ${typeText} ${operationText} ${cityText}
${areaText ? `بـ ${areaText}` : ''}
${bedroomsText ? `بعدد ${bedroomsText}` : ''}.
فلترة متقدمة، صور حقيقية، مواقع مميزة وأسعار تنافسية.
  `.trim()

  return {
    title,
    description,

    alternates: {
      canonical: `/properties?${new URLSearchParams(
        Object.entries(searchParams || {}).filter(
          ([, v]) => typeof v === 'string'
        )
      ).toString()}`
    },

    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'ar_AR'
    }
  }
}

const Projects = async ({searchParams}) => {
  const {city , propertyType , area, bedrooms ,region , opeartion} = await searchParams
   const newdata = await  getProperties(city , propertyType , area, bedrooms ,region , opeartion)

  return (
    <div  className='pt-20 min-h-screen bg-[#f7f7f7]'>
<FixedFilter />
      
<div className='  container mx-auto px-4' >
  
  {/* قسم الفلترة - يمين */}
  
<div className='flex flex-col lg:flex-row gap-1'>
   
 

  {/* قسم العقارات */}
  <main className=" lg:px-4 w-full lg:w-full">

    <AllProperties propertiesServerdata={newdata} />
  </main>


</div>
    </div>


</div>
  )
}

export default Projects