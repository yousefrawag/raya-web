"use client"
import { useState } from 'react';

const MapFilter = ({ onFilterChange, isOpen, onToggle }) => {
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    saleType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: ''
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const resetFilters = {
      location: '',
      propertyType: '',
      saleType: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: ''
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const locations = ['رام الله', 'نابلس', 'الخليل', 'بيت لحم', 'جنين', 'قلقيلية', 'طولكرم'];
  const propertyTypes = ['شقة', 'فيلا', 'أرض', 'محل تجاري', 'مكتب'];
  const saleTypes = ['للبيع', 'للإيجار'];

  return (
    <div className={`bg-white   rounded-lg shadow-md transition-all duration-300 ${isOpen ? 'mb-6' : ''}`}>
      {/* Filter Toggle Button */}
        <div className="text-gray-50 p-6 flex items-center justify-between">
                <h3 className="text-lg text-gray-500 font-semibold">فلاتر البحث</h3>
               <span className="cursor-pointer text-amber-500" onClick={onToggle}>
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
      <div className={`  p-4 pt-0 lg:p-4 lg:block ${isOpen ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-1  gap-4">
          {/* Location Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">المنطقة</label>
            <select
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="w-full p-2  border-1 border-[#e1e4e8] outline-none text-slate-900 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            >
              <option value="">جميع المناطق</option>
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          {/* Property Type Filter */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">نوع العقار</label>
            <select
              value={filters.propertyType}
              onChange={(e) => handleFilterChange('propertyType', e.target.value)}
              className="w-full border-1 border-[#e1e4e8] outline-none text-slate-900 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            >
              <option value="">جميع الأنواع</option>
              {propertyTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Sale Type Filter */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">نوع العرض</label>
            <select
              value={filters.saleType}
              onChange={(e) => handleFilterChange('saleType', e.target.value)}
              className="w-full p-2 border-1 border-[#e1e4e8] outline-none text-slate-900 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            >
              <option value="">الكل</option>
              {saleTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">السعر الأدنى</label>
            <input
              type="number"
              placeholder="من"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              className="w-full p-2  border-1 border-[#e1e4e8] outline-none text-slate-900  rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium  text-slate-900  mb-2">السعر الأعلى</label>
            <input
              type="number"
              placeholder="إلى"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              className="w-full p-2  border-1 border-[#e1e4e8] outline-none text-slate-900 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            />
          </div>

          {/* Bedrooms */}
          <div>
            <label className="block text-sm font-mediumtext-slate-900 mb-2">غرف النوم</label>
            <select
              value={filters.bedrooms}
              onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
              className="w-full p-2 border-1 border-[#e1e4e8] outline-none text-slate-900 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            >
              <option value="">أي عدد</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
          </div>

          {/* Bathrooms */}
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">الحمامات</label>
            <select
              value={filters.bathrooms}
              onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
              className="w-full p-2 border-1 border-[#e1e4e8] outline-none text-slate-900 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            >
              <option value="">أي عدد</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
        </div>

        {/* Reset Button */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={resetFilters}
            className="px-4 py-2 text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-lg transition-colors duration-200"
          >
            إعادة تعيين الفلاتر
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapFilter;