"use client"
import React from "react";
import { useState } from "react";
import image from "@/images/Hero-images/searchsection.webp"
import Link from "next/link";
import SelectOne from "../common/SelectOne";
const FilterSection = ({ setCurrentPage }) => {
 const [searchData, setSearchData] = useState({
    price: "",
    propertyType: "",
    city: "",
    opeartion:""
  });
const handelSelect = (e) => {
  const name = e.target.name
  const value = e.target.value
  setSearchData((data) => ({...data , [name]:value}))
}


  const propertyTypes = [
   "نوع العقار",
  "شقة",
    "فيلا"
    ,
   "مكتب"
    ,
  "مشروع"
    ,
   "أرض" ,
   "مستودعات" ,
   "روف"
   
  ];

  const cities = [
    "اختر المدينة",
  "القدس",
  "صور باهر",
  "شعفاط السهل",
  "شعفاط",
  "بيت صفافا - الشرفات",
  "كفر عقب",
  "بيت حنينا تل الفول",
  "بيت حنينا حي الهجرة",
  "جبل المكبر",
  "بيت حنينا حي العقبة",
  "بيت حنينا قرب جامع شومان",
  "ام طوبا",
  "بيت حنينا حى الاشقريه",
  "بيت حنينا",
  "عمارات نسيبة",
  "راس العمود",
 
  "اريحا",
  "البوابه",
    "رام الله",
    "سطح مرحبا",
    "المصايف",
    "البيرة",
    "طلعه مشتل قلقيلية"
  
    
  ];
  const OpeartionType = [
      "بيع",
    "شراء",
      "إيجار",
  
   
  ]

  // const handleInputChange = (field, value) => {
  //   setSearchData((prev) => ({
  //     ...prev,
  //     [field]: value,
  //   }));
  // };

  const handleSearch = () => {
    setCurrentPage("advanced");
  };

  return (
<section className="max-w-6xl  bg-cover bg-center mx-auto  bg-white  rounded-2xl shadow-xl p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    {/* Operation */}
  <SelectOne  data={propertyTypes} titale="نوع العقار" name="propertyType" currentValue={searchData.propertyType} setFormData={setSearchData} />

    {/* City */}
  <SelectOne  data={cities} name="city" titale="الموقع" currentValue={searchData.city} setFormData={setSearchData} />


    {/* Property */}
  <SelectOne  data={OpeartionType} name="opeartion" titale="نوع العملية" currentValue={searchData.opeartion} setFormData={setSearchData} />



  </div>

  {/* Buttons */}
  <div className="mt-6 flex flex-col md:flex-row justify-center w-full gap-4 ">
    <Link   href={{
    pathname: "/Propertyes",
    query: {
      price: searchData.price,
      propertyType: searchData.propertyType,
      city: searchData.city,
      opeartion: searchData.opeartion,
    },
  }} className="px-12 py-3  text-md flex items-center justify-center cursor-pointer  bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition">
      بحث
    </Link>
<Link
  href={{
    pathname: "/map",
    query: {
      price: searchData.price,
      propertyType: searchData.propertyType,
      city: searchData.city,
      operation: searchData.opeartion,
    },
  }}
  className="px-10 py-3 flex items-center justify-center text-md cursor-pointer border-2 border-amber-500 text-amber-500 rounded-xl font-semibold hover:bg-amber-50 transition"
>
  البحث على الخريطة
</Link>
  </div>
</section>

  );
};

export default FilterSection;
