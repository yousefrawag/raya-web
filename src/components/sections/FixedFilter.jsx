"use client"
import React, { useState, useEffect , useTransition } from 'react'
import { useRouter, useSearchParams } from "next/navigation";
import SelectOne from '../common/SelectOne'

const defaultCityOptions = [
  { label: "بيت حنين", value: "بيت حنين" },
  { label: "القدس", value: "القدس" },
  { label: "كفر عقرب", value: "كفر عقرب" },
];

export default function FixedFilter() {
  // قيم الفلاتر

  const router = useRouter();
    const [isPending, startTransition] = useTransition();
     const [relatedLocations , setRelatedLocations] = useState([])
  const params = useSearchParams();
   const [filters, setFilters] = useState({
    propertyType:"",
    city:"",
    opeartion:"",
    bedrooms:"",
    area:"" ,
    region:""
   });
  const [isFixed, setIsFixed] = useState(false);
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
   "روف" ,
   "استوديو"
   
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
  
const regions = [
  {
    id: "jerusalem",
    name: "القدس",
    locations: [
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
      "بيت حنينا حي الاشقريه",
      "بيت حنينا",
      "عمارات نسيبة",
      "راس العمود"
    ]
  },
  {
    id: "jericho",
    name: "أريحا",
    locations: [
      "أريحا",
      "البوابة"
    ]
  },
  {
    id: "ramallah",
    name: "رام الله",
    locations: [
      "رام الله",
      "سطح مرحبا",
      "المصايف",
      "البيرة",
      "طلعة مشتل قلقيلية"
    ]
  }
];
  const OpeartionType = [
      "بيع",
    "شراء",
      "إيجار",
  
   
  ]
  const rooms =  ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10"]
    const area =  ["100" , "120" , "130" , "140" , "150" , "160" , "170" , "180" , "190" , "200" ,
      "220",
      "230",
      "240",
      "250",
      "260",
      "270",
      "280",
      "290",
      "300",
      "310",
      "320",
      "330",
      "340",
      "350",
      "360",
      "370",
      "380",
      "400",
      "420",
      "440",
      "460"
    ]
  // تثبيت عند السكروول
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const handleClearAll = () => {
  setFilters({
    price: "",
    propertyType: "",
    city: "",
    opeartion:"" ,
    bedrooms:"" ,
    area:"" ,
    region:""
  })
  router.push("/Propertyes")
  };
useEffect(() => {
  setFilters({
    propertyType: params.get("propertyType") || "",
    city: params.get("city") || "",
    opeartion: params.get("opeartion") || "",
    bedrooms: params.get("bedrooms") || "", 
    area: params.get("area") || "",
    region: params.get("region") || ""
  });
    const relatedLocations = regions?.find(item => item.name === filters.city )
  setRelatedLocations(relatedLocations?.locations)
}, []);

useEffect(() => {
  if (!Object.values(filters).some(Boolean)) return;

  const query = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value) query.set(key, value);
  });
  const relatedLocations = regions?.find(item => item.name === filters.city )
  setRelatedLocations(relatedLocations?.locations)
  startTransition(() => {
    router.push(`/Propertyes?${query.toString()}`);
  });
}, [filters]);


  return (
    <div
      className={`w-full z-50 transition-all  duration-300 mb-5 ${
        isFixed
          ? "fixed top-0 left-0   right-0 shadow-md bg-white/95 backdrop-blur-sm border-b-[1px] border-[#e1e4e8] py-3"
          : "relative bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* container of filters: responsive - scroll horizontal on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 items-center  py-2">
          <SelectOne  data={propertyTypes} titale="نوع العقار" name="propertyType" currentValue={filters.propertyType || params.get("propertyType")}  setFormData={setFilters} />
  <SelectOne  data={regions} titale="المنطقة" name="city" currentValue={ filters.city || params.get("city")} setFormData={setFilters} />

  <SelectOne  data={relatedLocations} titale="الموقع" name="region" currentValue={ filters.region || params.get("region")} setFormData={setFilters} />

  <SelectOne  data={OpeartionType} titale="نوع العملية" name="opeartion" currentValue={filters.propertyType  || params.get("opeartion")} setFormData={setFilters} />

  <SelectOne  data={rooms} titale="عدد الغرف" name="bedrooms" currentValue={filters.propertyType  || params.get("bedrooms")} setFormData={setFilters} />
  <SelectOne  data={area} titale="المساحة" name="area" currentValue={ filters.propertyType || params.get("area")} setFormData={setFilters} />




          {/* زر الحفظ والمسح */}
          <div className="flex items-center gap-3 ml-2">
        

            <button
              onClick={handleClearAll}
              className="px-10 py-4 cursor-pointer rounded-md text-white text-md bg-gradient-to-r from-amber-500 to-amber-600 shadow"
              aria-label="حفظ الفلاتر"
            >
              مسح
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

