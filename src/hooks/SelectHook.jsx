"use client";
import React, { useEffect, useRef, useState } from "react";

const SelectHook = ({
  options = [],
  name,
  value,
  onChange,
  placeholder = "أختر",
  gradientButton = false, // لو true نخلي الزرار الأساسي بتدرج اللون
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    const handler = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (opt) => {
    onChange(opt.value);
    setIsOpen(false);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange("");
  };

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setIsOpen((s) => !s)}
        className={`flex items-center gap-3 px-4 py-2 rounded-md border border-[#e1e4e8] min-w-[160px] ${
          gradientButton ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white" : "bg-white text-slate-900"
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate">
          {options.find((o) => o.value === value)?.label || placeholder}
        </span>

        <div className="flex items-center gap-2">
          {value && (
            <button
              onClick={handleClear}
              className="p-1 rounded-full text-sm bg-white/60"
              aria-label={`مسح ${name}`}
            >
              ✕
            </button>
          )}
          <span className="text-xs">▾</span>
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 left-0 mt-2 w-64 bg-white rounded-lg border border-[#e1e4e8] shadow-lg z-30 p-3">
          <ul className="flex flex-col gap-2 max-h-60 ">
            {options.map((opt) => {
              const active = opt.value === value;
              return (
                <li
                  key={opt.value}
                  onClick={() => handleSelect(opt)}
                  className={`p-3 rounded-md cursor-pointer text-gray-700 flex items-center justify-between ${
                    active ? "bg-purple-50 text-amber-700 font-semibold" : "hover:bg-gray-50"
                  }`}
                >
                  <span>{opt.label}</span>
                  {active && <span className="text-xs">محدد</span>}
                </li>
              );
            })}
          </ul>

          {/* bottom actions */}
          <div className="mt-3 flex justify-between">
            <button
              onClick={() => {
                onChange(""); // مسح
              }}
              className="px-3 py-1 rounded-md border text-sm"
            >
              مسح
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="px-3 py-1 rounded-md text-white bg-gradient-to-r from-amber-500 to-amber-600 text-sm"
            >
              حفظ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectHook;
