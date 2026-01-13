"use client";
import React, { useState } from "react";

const SelectOne = ({
  currentValue,
  data = [],
  name,
  setFormData,
  titale
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Normalize item (string OR object)
  const normalizeItem = (item) => {
    if (typeof item === "string") {
      return { label: item, value: item };
    }

    return {
      label: item.name,
      value: item.value ?? item.name
    };
  };

  const handleSelect = (value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="relative w-full">
      {/* Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full text-right p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent flex justify-between items-center"
      >
        <span className="text-gray-500">
          {currentValue
            ? `تم اختيار ${currentValue}`
            : `قم باختيار ${titale}`}
        </span>

        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-40 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {/* Search */}
          <div className="p-2 border-b border-gray-200">
            <input
              type="text"
              placeholder="ابحث..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-1 focus:ring-orange-400"
            />
          </div>

          {/* Options */}
          <div className="py-1">
            {data
              ?.filter((item) =>
                normalizeItem(item).label
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              ?.map((item) => {
                const normalized = normalizeItem(item);
                const isSelected = currentValue === normalized.value;

                return (
                  <div
                    key={normalized.value}
                    onClick={() => handleSelect(normalized.value)}
                    className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-blue-50 text-blue-700"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <span className="text-sm font-medium">
                      {(name === "rooms" || name === "bedrooms")
                        ? `${normalized.label} غرفة`
                        : normalized.label}
                    </span>

                    {isSelected && (
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectOne;
