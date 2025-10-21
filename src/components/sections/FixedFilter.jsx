"use client"
import React, { useState, useEffect } from 'react'
import SelectHook from '@/hooks/SelectHook'
import SearchHook from '@/hooks/SearchHook'


const defaultCityOptions = [
  { label: "بيت حنين", value: "بيت حنين" },
  { label: "القدس", value: "القدس" },
  { label: "كفر عقرب", value: "كفر عقرب" },
];

export default function FixedFilter() {
  // قيم الفلاتر
  const [operation, setOperation] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("");

  const [isFixed, setIsFixed] = useState(false);

  // تثبيت عند السكروول
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // لما تضغط حفظ - هنا تقدر تبعت req أو تعمل ريديرك
  const handleSave = () => {
    const payload = { operation, type, city, area, rooms };
    console.log("حفظ الفلاتر:", payload);
    // TODO: تنفيذ البحث أو حفظ الإعدادات
  };

  const handleClearAll = () => {
    setOperation("");
    setType("");
    setCity("");
    setArea("");
    setRooms("");
  };

  return (
    <div
      className={`w-full z-50 transition-all overflow-auto duration-300 mb-5 ${
        isFixed
          ? "fixed top-0 left-0   right-0 shadow-md bg-white/95 backdrop-blur-sm border-b-[1px] border-[#e1e4e8] py-3"
          : "relative bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* container of filters: responsive - scroll horizontal on mobile */}
        <div className="flex gap-3 lg:gap-6 items-center  py-2">
          <SelectHook
            options={[
              { label: "بيع", value: "بيع" },
              { label: "إيجار", value: "إيجار" },
            ]}
            name="operation"
            value={operation}
            onChange={setOperation}
            placeholder="نوع العملية"
            gradientButton
          />

          <SelectHook
            options={[
              { label: "شقة", value: "شقة" },
              { label: "فيلا", value: "فيلا" },
              { label: "أرض", value: "أرض" },
              { label: "دور", value: "دور" },
            ]}
            name="type"
            value={type}
            onChange={setType}
            placeholder="النوع"
          />

          <SearchHook
            options={defaultCityOptions}
            value={city}
            onChange={setCity}
            name="city"
            placeholder="أختر المدينة"
          />

          <SelectHook
            options={[
              { label: "حي المطار", value: "حي المطار" },
              { label: "حي النخيل", value: "حي النخيل" },
            ]}
            name="area"
            value={area}
            onChange={setArea}
            placeholder="المنطقة"
          />

          <SelectHook
            options={[
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3+", value: "3+" },
            ]}
            name="rooms"
            value={rooms}
            onChange={setRooms}
            placeholder="الغرف"
          />

          {/* زر الحفظ والمسح */}
          <div className="flex items-center gap-3 ml-2">
            <button
              onClick={handleClearAll}
              className="px-3 py-2 rounded-md border border-[#e1e4e8] bg-white text-sm"
              aria-label="مسح الفلاتر"
            >
              مسح
            </button>

            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-md text-white text-sm bg-gradient-to-r from-amber-500 to-amber-600 shadow"
              aria-label="حفظ الفلاتر"
            >
              حفظ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

