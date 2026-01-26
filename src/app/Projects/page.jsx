
import React from 'react'

import AdvancedSearch from '@/components/sections/AdvancedSearch'

import Link from 'next/link'
import AllProject from '@/components/sections/AllProject'
import { GetProjectEntry } from '@/lib/GetProjectEntry'
export async function generateMetadata({ searchParams }) {
  const {
    city,
    projectType,
    region,
    bedrooms,
    area
  } = searchParams || {}

  const cityText = city ? `في ${city}` : 'في القدس'
  const typeText = projectType || 'مشاريع عقارية'
  const bedroomsText = bedrooms ? ` ${bedrooms} غرف` : ''
  const regionText = region ? ` - ${region}` : ''

  const title = `${typeText} ${cityText}${regionText}${bedroomsText} | شركة الراية للتطوير العقاري`

  const description = `
استعرض أحدث ${typeText} ${cityText}${regionText}.
مشاريع سكنية واستثمارية بمساحات مختلفة، ${bedroomsText || 'غرف متعددة'}،
أنظمة سداد مرنة وأسعار تنافسية من شركة الراية للتطوير والاستثمار العقاري.
  `.trim()

  const params = Object.entries(searchParams || {}).filter(([_, v]) => v)

  return {
    title,
    description,
    keywords: [
      'مشاريع عقارية',
      'مشاريع سكنية',
      'مشاريع استثمارية',
      'مشاريع للبيع',
      'مشاريع جديدة',
      'مشاريع القدس',
      city && `مشاريع عقارية ${city}`,
      projectType && `مشاريع ${projectType}`,
      'شركة الراية للتطوير العقاري',
      'استثمار عقاري',
      'شقق للبيع',
      'عقارات القدس'
    ].filter(Boolean),

    alternates: {
      canonical: `/projects${params.length ? `?${new URLSearchParams(params).toString()}` : ''}`
    },

    openGraph: {
      title,
      description,
      type: 'website'
    }
  }
}

const Projects = async ({searchParams}) => {
  const {city ,projectType ,region ,bedrooms ,area } = await searchParams
  const data = await GetProjectEntry(city ,projectType ,region ,bedrooms ,area)
  if(data?.length === 0) {
    return <span> ليس هناك اى نتائج</span>
  }
  return (
    <div className='pt-20 min-h-screen bg-[#f7f7f7]'>
  {/* <div className="p-4  mt-1 px-4 ">
        <div className="  flex gap-4 px-4">
          <Link href="/" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            العودة للرئيسية
            /
          </Link>
        
            <Link href="/project" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            المشاريع
            
          </Link>
  
        </div>
      </div> */}
          <AdvancedSearch />
<div className='  container mx-auto px-4'>
  
  {/* قسم الفلترة - يمين */}
  
    <div className='flex flex-col lg:flex-row gap-1'>

  <main  className=" lg:px-4 w-full lg:w-full">
    <AllProject data={data} />
  </main>
    </div>
  
   
 

  {/* قسم المشاريع */}


</div>
    </div>



  )
}

export default Projects