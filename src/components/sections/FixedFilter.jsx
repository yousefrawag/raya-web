"use client"
import React, { useState, useEffect } from 'react'
import SelectHook from '@/hooks/SelectHook'
import SearchHook from '@/hooks/SearchHook'
const FixedFilter = () => {
  const [city, setCity] = useState("")
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // تقدر تغير الرقم حسب المسافة اللي تحب يبدأ منها
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`w-full p-2 bg-white border-b border-[#e1e4e8] z-50 transition-all duration-300 mb-5 ${
        isFixed ? "fixed top-0 left-0 p-4" : "relative"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex gap-6 mx-auto px-4">
          <SelectHook
            options={[
              { label: "بيع", value: "بيع" },
              { label: "إيجار", value: "إيجار" },
           
            ]}
            value={city}
            onChange={setCity}
            name={"opertaion"}
            placeholder= "نوع العملية"
          />
          <SearchHook      options={[
              { label: "بيت حنين", value: "بيت حنين" },
              { label: "القدس", value: "القدس" },
              { label: "كفر عقرب", value: "كفر عقرب" },
            ]}
            value={city}
            onChange={setCity}
            name={"city"} 
                    placeholder="أختر المدينة"
            />
                    <SelectHook
            options={[
              { label: "بيت حنين", value: "بيت حنين" },
              { label: "القدس", value: "القدس" },
              { label: "كفر عقرب", value: "كفر عقرب" },
            ]}
            value={city}
            onChange={setCity}
            name={"city"}
            placeholder="أختر المدينة"
          />
                    <SelectHook
            options={[
              { label: "بيت حنين", value: "بيت حنين" },
              { label: "القدس", value: "القدس" },
              { label: "كفر عقرب", value: "كفر عقرب" },
            ]}
            value={city}
            onChange={setCity}
            name={"city"}
            placeholder="أختر المدينة"
          />
                    <SelectHook
            options={[
              { label: "بيت حنين", value: "بيت حنين" },
              { label: "القدس", value: "القدس" },
              { label: "كفر عقرب", value: "كفر عقرب" },
            ]}
            value={city}
            onChange={setCity}
            name={"city"}
            placeholder="أختر المدينة"
          />
                    <SelectHook
            options={[
              { label: "بيت حنين", value: "بيت حنين" },
              { label: "القدس", value: "القدس" },
              { label: "كفر عقرب", value: "كفر عقرب" },
            ]}
            value={city}
            onChange={setCity}
            name={"city"}
            placeholder="أختر المدينة"
          />
          {/* باقي الفلاتر */}
        </div>
      </div>
    </div>
  )
}

export default FixedFilter
