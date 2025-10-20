"use client"
import React from 'react'
import Properties from '@/components/sections/Properties'
import AdvancedSearch from '@/components/sections/AdvancedSearch'
import GridFilter from '@/components/common/GridFilter'
import AllProperties from '@/components/sections/AllProperties'
import mapImage from "@/images/Hero-images/srp-map-bg-ar.svg"
import { useState } from 'react'
import Image from 'next/image'
import SelectHook from '@/hooks/SelectHook'
import FixedFilter from '@/components/sections/FixedFilter'
const Projects = () => {
  const [CurrentView , setCurrentView] = useState("list")
  const [sort  , setSort] = useState("")
  const sortOptions = [
  { value: "price-asc", label: "السعر - الأقل الى الأعلى" },
  { value: "price-desc", label: "السعر - الأعلى الى الأقل" },
  { value: "newest", label: "الأحدث أولاً" },
  { value: "area-desc", label: "المساحة - الأكبر الى الأصغر" },
  { value: "area-asc", label: "المساحة - الأصغر الى الأكبر" },
  { value: "age-asc", label: "عمر المبنى - الجديد الى القديم" },
  { value: "age-desc", label: "عمر المبنى - القديم الى الجديد" },
];
  return (
    <div  className='pt-20 min-h-screen bg-[#f7f7f7]'>
<FixedFilter />
      
<div className='  container mx-auto px-4' >
  
  {/* قسم الفلترة - يمين */}
  
<div className='flex flex-col lg:flex-row gap-1'>
   
 

  {/* قسم العقارات */}
  <main className=" px-4 w-full lg:w-[70%]">
   <div className='flex  justify-between items-center'>
    <div>
      <h1 className='text-xl font-bold text-slate-900'>عقارات للبيع فى حنين</h1>
<h2 className='text-[#485661] font-bold '> عدد النتائج <span className='text-amber'>23</span></h2>
    </div>
   <SelectHook  options={sortOptions}   name="sort"
  value={sort}
  onChange={setSort}
  placeholder="ترتيب حسب"/>

   </div>
    <AllProperties CurrentView={CurrentView} />
  </main>
<div className='w-full hidden lg:block  mt-10 lg:w-[30%] bg-[#fff] h-[250px] shadow-lg border-1 border-[#e1e4e8] rounded-md p-4'>


  
<Image src={mapImage} alt="map-image" />

</div>
</div>
    </div>


</div>
  )
}

export default Projects