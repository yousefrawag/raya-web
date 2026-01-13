"use client"
import React, { useState, useEffect , useTransition } from 'react'
import { useRouter, useSearchParams } from "next/navigation";
import SelectOne from './SelectOne';

const MapFilter = () => {
    const router = useRouter();
      const [isPending, startTransition] = useTransition();
       const [relatedLocations , setRelatedLocations] = useState([])
    const params = useSearchParams();

    const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
        propertyType:"",
      city:"",
      opeartion:"",
      bedrooms:"",
      area:"" ,
      region:""
  });
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
  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    console.log();
    
    onFilterChange(filters);
  };

  const resetFilters = () => {
    const resetFilters = {
     city: '',
    propertyType: '',
    saleType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '' ,
    opeartion:""
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

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
  router.push("/map")
  };
useEffect(() => {
  setFilters({
    propertyType: params.get("propertyType") || "",
    city: params.get("city") || "",
    opeartion: params.get("operation") || "",
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
    router.push(`/map?${query.toString()}`);
  });
}, [filters]);



  return (
    <div className={`bg-white   rounded-lg shadow-md transition-all duration-300 ${isFilterOpen ? 'mb-6' : ''}`}>
      {/* Filter Toggle Button */}
        <div className="text-gray-50 p-6 flex items-center justify-between">
                <h3 className="text-lg text-gray-500 font-semibold">فلاتر البحث</h3>
               <span className="cursor-pointer text-amber-500" onClick={() => setIsFilterOpen(!isFilterOpen)}>
   <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
                </svg>
               </span>
             
              </div>


      {/* Filter Content */}
      <div className={`  p-4 pt-0 lg:p-4 lg:block ${isFilterOpen ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-1  gap-4">
      <SelectOne  data={propertyTypes} titale="نوع العقار" name="propertyType" currentValue={filters.propertyType} setFormData={setFilters} />

  <SelectOne  data={regions} titale="المنطقة" name="city" currentValue={filters.city} setFormData={setFilters} />
  <SelectOne  data={cities} titale="الموقع" name="region" currentValue={filters.region} setFormData={setFilters} />

  <SelectOne  data={OpeartionType} titale="نوع العملية" name="opeartion" currentValue={filters.opeartion} setFormData={setFilters} />

  <SelectOne  data={rooms} titale="عدد الغرف" name="bedrooms" currentValue={filters.bedrooms} setFormData={setFilters} />
  <SelectOne  data={area} titale="المساحة" name="area" currentValue={filters.area} setFormData={setFilters} />
          {/* Price Range */}
      

      
       
        </div>

        {/* Reset Button */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleClearAll}
            className="px-4 py-2 cursor-pointer  bg-gradient-to-r from-amber-500 to-amber-600 text-white  hover:bg-gradient-to-r from-amber-50 to-amber-60  rounded-lg transition-colors duration-200"
          >
            إعادة تعيين الفلاتر
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapFilter;