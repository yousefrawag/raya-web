"use client"
import { useState } from "react";


function AdvancedSearch({ setCurrentPage }) {
  const [searchFilters, setSearchFilters] = useState({
    propertyType: "",
    city: "",
    district: "",
    minPrice: "",
    maxPrice: "",
    minArea: "",
    maxArea: "",
    bedrooms: "",
    bathrooms: "",
    propertyAge: "",
    furnishingStatus: "",
    features: [],
  });

  const [searchResults] = useState([
    {
      id: 1,
      title: "شقة فاخرة في الرياض",
      price: "850,000",
      area: "180",
      bedrooms: 3,
      bathrooms: 2,
      location: "الرياض - حي الملقا",
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: true,
    },
    {
      id: 2,
      title: "فيلا عصرية بحديقة",
      price: "1,200,000",
      area: "350",
      bedrooms: 5,
      bathrooms: 4,
      location: "جدة - حي البساتين",
      image:
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: false,
    },
    {
      id: 3,
      title: "مكتب تجاري مميز",
      price: "2,500,000",
      area: "250",
      bedrooms: 0,
      bathrooms: 2,
      location: "الرياض - حي العليا",
      image:
        "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: true,
    },
  ]);

  const propertyTypes = [
    { value: "", label: "نوع العقار" },
    { value: "apartment", label: "شقة" },
    { value: "villa", label: "فيلا" },
    { value: "office", label: "مكتب" },
    { value: "commercial", label: "تجاري" },
    { value: "land", label: "أرض" },
  ];

  const cities = [
    { value: "", label: "المدينة" },
    { value: "riyadh", label: "الرياض" },
    { value: "jeddah", label: "جدة" },
    { value: "dammam", label: "الدمام" },
  ];

  const bedroomOptions = [
    { value: "", label: "عدد الغرف" },
    { value: "1", label: "1 غرفة" },
    { value: "2", label: "2 غرفة" },
    { value: "3", label: "3 غرف" },
    { value: "4", label: "4 غرف" },
    { value: "5+", label: "5+ غرف" },
  ];

  const features = [
    "مواقف سيارات",
    "مصعد",
    "حديقة",
    "مسبح",
    "صالة رياضية",
    "أمن 24 ساعة",
  ];

  const handleFilterChange = (field, value) => {
    setSearchFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFeatureToggle = (feature) => {
    setSearchFilters((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  return (
  
   

  
    

    
          <div className=" lg:sticky top-28">
            <div className="bg-white rounded-2xl shadow-xl border overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold">فلاتر البحث</h3>
               <span className="cursor-pointer">
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

              <div className="p-6 space-y-6">
                {/* Property Type */}
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-sm">
                    نوع العقار
                  </label>
                  <select
                    className="w-full p-3 border-2 border-gray-200 rounded-xl text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    value={searchFilters.propertyType}
                    onChange={(e) =>
                      handleFilterChange("propertyType", e.target.value)
                    }
                  >
                    {propertyTypes.map((type) => (
                      <option key={type.value} value={type.value} className="font-semibold text-gray-700 p-6">
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="block font-semibold text-gray-800 mb-2 text-sm">
                    المدينة
                  </label>
                  <select
                    className="w-full p-3 border-2 text-gray-700 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    value={searchFilters.city}
                    onChange={(e) =>
                      handleFilterChange("city", e.target.value)
                    }
                  >
                    {cities.map((city) => (
                      <option className="text-gray-700" key={city.value} value={city.value}>
                        {city.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block font-semibold text-gray-800 mb-2 text-sm">
                    نطاق السعر (شيكل)
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="الحد الأدنى"
                      className="w-full p-3 border-2 border-gray-200 text-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                      value={searchFilters.minPrice}
                      onChange={(e) =>
                        handleFilterChange("minPrice", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      placeholder="الحد الأعلى"
                      className="w-full p-3 border-2 text-gray-700 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                      value={searchFilters.maxPrice}
                      onChange={(e) =>
                        handleFilterChange("maxPrice", e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block font-semibold text-gray-800 mb-2 text-sm">
                    عدد غرف النوم
                  </label>
                  <select
                    className="w-full p-3 border-2 text-gray-700 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    value={searchFilters.bedrooms}
                    onChange={(e) =>
                      handleFilterChange("bedrooms", e.target.value)
                    }
                  >
                    {bedroomOptions.map((option) => (
                      <option className="text-gray-700" key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Features */}
                <div>
                  <label className="block font-semibold text-gray-800 mb-2 text-sm">
                    المميزات
                  </label>
                  <div className="space-y-3">
                    {features.map((feature) => (
                      <label
                        key={feature}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={searchFilters.features.includes(feature)}
                          onChange={() => handleFeatureToggle(feature)}
                          className="w-5 h-5 cursor-pointer rounded-md text-orange-500 focus:ring-orange-400"
                        />
                        <span className="text-gray-700 text-sm font-medium">
                          {feature}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <button className=" cursor-pointer w-full py-3 rounded-xl bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition">
                    تطبيق الفلاتر
                  </button>
                  <button
                   
                    className="w-full py-3 cursor-pointer rounded-xl border-2 border-orange-500 text-orange-500 font-semibold text-sm hover:bg-orange-50 transition"
                  >
                    عرض على الخريطة
                  </button>
                </div>
              </div>
            </div>
          </div>

    
      
 
  );
}

export default AdvancedSearch;
