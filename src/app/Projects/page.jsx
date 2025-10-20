"use client"
import React from 'react'
import ProjectSection from '@/components/sections/ProjectSection'
import AdvancedSearch from '@/components/sections/AdvancedSearch'
import GridFilter from '@/components/common/GridFilter'
import { useState } from 'react'
import Link from 'next/link'
import AllProject from '@/components/sections/AllProject'
const Projects = () => {
  const [CurrentView , setCurrentView] = useState("list")
  return (
    <div  className='pt-20 min-h-screen bg-gray-50'>
  <div className="p-4  mt-1 px-4 ">
        <div className="  flex gap-4 px-4">
          <Link href="/" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            العودة للرئيسية
            /
          </Link>
        
            <Link href="/project" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            المشاريع
            
          </Link>
  
        </div>
      </div>
      
<div className="px-4 grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-10">
  
  {/* قسم الفلترة - يمين */}
  
    
      <AdvancedSearch />
   
 

  {/* قسم المشاريع */}
  <main className="  p-4">
    <AllProject CurrentView={CurrentView} />
  </main>

</div>
    </div>



  )
}

export default Projects