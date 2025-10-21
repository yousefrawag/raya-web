"use client"
import React from "react";
import { useState } from "react";
import image from "@/images/Hero-images/searchsection.webp"
import Link from "next/link";

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
  const priceRanges = [
    { value: "", label: "السعر" },
    { value: "0-500000", label: "0 - 500,000 ريال" },
    { value: "500000-1000000", label: "500,000 - 1,000,000 ريال" },
    { value: "1000000-2000000", label: "1,000,000 - 2,000,000 ريال" },
    { value: "2000000+", label: "أكثر من 2,000,000 ريال" },
  ];

  const propertyTypes = [
    { value: "", label: "نوع العقار" },
    { value: "apartment", label: "شقة" },
    { value: "villa", label: "فيلا" },
    { value: "office", label: "مكتب" },
    { value: "commercial", label: "تجاري" },
    { value: "land", label: "أرض" },
  ];

  const cities = [
    { value: "", label: "اختر المدينة" },
    { value: "riyadh", label: "الرياض" },
    { value: "jeddah", label: "جدة" },
    { value: "dammam", label: "الدمام" },
    { value: "makkah", label: "مكة المكرمة" },
    { value: "madinah", label: "المدينة المنورة" },
  ];
  const OpeartionType = [
    {
      value:"" , label:"نوع الصفقة",
      value:"rent" , label:"إيجار",
      value:"buy" , label:"شراء",
      value:"eere" , label:"بيع"
    }
  ]

  const handleInputChange = (field, value) => {
    setSearchData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSearch = () => {
    setCurrentPage("advanced");
  };

  return (
<section className="max-w-6xl bg-[url('/images/Hero-images/searchsection.webp')] bg-cover bg-center mx-auto  bg-white  rounded-2xl shadow-xl p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
    {/* Operation */}
    <select name="opeartion" onChange={handelSelect}  className="w-full p-3 outline-none  text-gray-800 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400">
      <option>نوع الصفقة</option>
      <option>إيجار</option>
      <option>شراء</option>
      <option>بيع</option>
    </select>

    {/* City */}
    <select name="city" onChange={handelSelect}  className="w-full p-3 text-gray-800 outline-none rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400">
      <option>اختر المدينة</option>
      <option>الرياض</option>
      <option>جدة</option>
      <option>مكة</option>
    </select>

    {/* Property */}
    <select name="propertyType" onChange={handelSelect}  className="w-full p-3 outline-none  text-gray-800 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400">
      <option>نوع العقار</option>
      <option>شقة</option>
      <option>فيلا</option>
      <option>مكتب</option>
    </select>

    {/* Price */}
    <select name="price" onChange={handelSelect}  className="w-full p-3 outline-none text-gray-800 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400">
      <option>السعر</option>
      <option>0 - 500,000 ريال</option>
      <option>500,000 - 1,000,000 ريال</option>
    </select>
  </div>

  {/* Buttons */}
  <div className="mt-6 flex flex-col md:flex-row justify-center w-full gap-4 ">
    <Link   href={{
    pathname: "/Propertyes",
    query: {
      price: searchData.price,
      propertyType: searchData.propertyType,
      city: searchData.city,
      operation: searchData.opeartion,
    },
  }} className="px-12 py-3 cursor-pointer  bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition">
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
  className="px-10 py-3 cursor-pointer border-2 border-amber-500 text-amber-500 rounded-xl font-semibold hover:bg-amber-50 transition"
>
  البحث على الخريطة
</Link>
  </div>
</section>

  );
};

export default FilterSection;
