"use client";
import React, { useState } from "react";
import Link from "next/link";
import SelectOne from "../common/SelectOne";
// استيراد أيقونات للتوضيح (تأكد من وجود react-icons أو استبدلها بـ SVGs)
import { HiOutlineLocationMarker, HiOutlineHome, HiOutlineSearch, HiOutlineMap } from "react-icons/hi";

const FilterSection = () => {
  const [searchData, setSearchData] = useState({
    price: "",
    propertyType: "",
    city: "",
    opeartion: "بيع", // جعل القيمة الافتراضية "بيع" لتتناسب مع الـ Tabs
  });

  const propertyTypes = ["شقة", "فيلا", "مكتب", "مشروع", "أرض", "مستودعات", "روف"];

  const cities = [
    "القدس", "صور باهر", "شعفاط", "كفر عقب", "بيت حنينا", "جبل المكبر", "اريحا", "رام الله", "البيرة"
  ];

  const OpeartionType = ["بيع", "إيجار" , "إستثمار"];

  return (
    <div className="w-full bg-white rounded-[2rem] md:rounded-[3rem] p-2 md:p-4 transition-all">
      {/* 1. التبويبات العلوية (Tabs) - UX محسن */}
      <div className="flex items-center gap-2 mb-4 pr-4">
        {OpeartionType.map((op) => (
          <button
            key={op}
            onClick={() => setSearchData({ ...searchData, opeartion: op })}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              searchData.opeartion === op
                ? "bg-amber-500 text-white shadow-md shadow-amber-200"
                : "bg-transparent text-slate-500 hover:bg-slate-50"
            }`}
          >
            {op}
          </button>
        ))}
      </div>

      {/* 2. شبكة المدخلات (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center">
        
        {/* اختيار الموقع */}
        <div className="md:col-span-4 relative group border-l border-transparent md:border-slate-100 px-4 py-2">
          <div className="flex items-center gap-3">
            <HiOutlineLocationMarker className="text-amber-500 text-xl" />
            <div className="w-full">
              <p className="text-[10px] text-slate-400 font-bold mb-1 mr-1">الموقع</p>
              <SelectOne 
                data={cities} 
                name="city" 
                titale="اختر المدينة" 
                currentValue={searchData.city} 
                setFormData={setSearchData} 
              />
            </div>
          </div>
        </div>

        {/* اختيار نوع العقار */}
        <div className="md:col-span-4 relative group px-4 py-2">
          <div className="flex items-center gap-3">
            <HiOutlineHome className="text-amber-500 text-xl" />
            <div className="w-full">
              <p className="text-[10px] text-slate-400 font-bold mb-1 mr-1">نوع العقار</p>
              <SelectOne 
                data={propertyTypes} 
                name="propertyType" 
                titale="كل الأنواع" 
                currentValue={searchData.propertyType} 
                setFormData={setSearchData} 
              />
            </div>
          </div>
        </div>

        {/* أزرار الأكشن */}
        <div className="md:col-span-4 flex items-center gap-2 pr-2">
          <Link
            href={{
              pathname: "/Propertyes",
              query: searchData,
            }}
            className="flex-1 h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl md:rounded-[1.5rem] flex items-center justify-center gap-2 font-bold transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            <HiOutlineSearch size={20} />
            بحث
          </Link>

          <Link
            href={{
              pathname: "/map",
              query: searchData,
            }}
            className="w-14 h-14 border-2 border-slate-100 text-slate-600 rounded-2xl md:rounded-[1.5rem] flex items-center justify-center hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 transition-all shadow-sm"
            title="البحث على الخريطة"
          >
            <HiOutlineMap size={24} />
          </Link>
        </div>
      </div>
      
      {/* لمسة إضافية: نص صغير توضيحي */}
      <div className="mt-4 pr-6 hidden md:block">
        <p className="text-[11px] text-slate-400">
            * يمكنك أيضاً تصفية النتائج حسب السعر والمساحة في صفحة البحث المتقدم
        </p>
      </div>
    </div>
  );
};

export default FilterSection;