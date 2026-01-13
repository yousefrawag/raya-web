
import React from 'react'

import AdvancedSearch from '@/components/sections/AdvancedSearch'

import Link from 'next/link'
import AllProject from '@/components/sections/AllProject'
import { GetProjectEntry } from '@/lib/GetProjectEntry'
const Projects = async ({searchParams}) => {
  const {city ,projectType ,region ,bedrooms ,area } = await searchParams
  const data = await GetProjectEntry(city ,projectType ,region ,bedrooms ,area)
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