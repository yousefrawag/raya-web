"use client";
import React, { useState } from "react";

const SearchHook = ({ options = [], name, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
    setSearch(option.label); // يظهر الاسم المختار في input
  };

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearch(val);

    // فلترة القايمة
    const filtered = options.filter((item) =>
      item.label.toLowerCase().includes(val.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <div className="relative w-80">
      {/* input */}
      <input
        type="text"
        value={search}
        placeholder={placeholder || "ابحث ..."}
        onChange={handleSearch}
        onFocus={() => {
          setIsOpen(true);
          setFilteredOptions(options); // لما يعمل focus يظهر كل الـ options
        }}
        onBlur={() => {
          setTimeout(() => setIsOpen(false), 200); 
          // delay صغير عشان يقدر يضغط على option قبل ما تختفي القائمة
        }}
        className="w-full outline-none px-3 py-2 border border-[#e1e4e8] rounded-md bg-white text-slate-900"
      />

      {/* القائمة */}
      {isOpen && (
        <ul className="absolute z-20 mt-1 w-full bg-white rounded-lg border border-[#e1e4e8] shadow max-h-60 overflow-y-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`px-4 py-2 text-slate-800 cursor-pointer hover:bg-gray-100 ${
                  value === option.value ? "bg-purple-100 text-amber-700" : ""
                }`}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-400">لا توجد نتائج</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchHook;
