"use client";
import React, { useState } from "react";

const SelectHook = ({ options = [], name, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option.value); // يغير القيمة في الـ parent
    setIsOpen(false);
  };


  return (
    <div className="relative ">
      {/* زرار الاختيار */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-auto flex justify-between cursor-pointer items-center px-3 py-2 border-1 border-[#e1e4e8] rounded-md bg-white text-slate-900 "
      >
        <span>{options.find((o) => o.value === value)?.label || placeholder}</span>
        <span className="ml-2">▼</span>
      </button>

      {/* القائمة */}
      {isOpen && (
        <ul className="absolute flex flex-col p-4 gap-3 z-20 mt-2 w-60 bg-white  rounded-lg border-1 border-[#e1e4e8] min-h-10  text-slate-900 ">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`w-full p-4 h-10 flex  items-center jsutify-center rounded-md cursor-pointer hover:bg-gray-100 ${
                value === option.value ? "bg-purple-100 text-amber-700" : ""
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectHook;
