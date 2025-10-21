"use client";
import React, { useEffect, useRef, useState } from "react";

const SearchHook = ({ options = [], name, value, onChange, placeholder = "بحث..." }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const root = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (root.current && !root.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    // keep input in sync if parent sets value programmatically
    setQuery(options.find((o) => o.value === value)?.label || "");
  }, [value, options]);

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(query.trim().toLowerCase())
  );

  const pick = (opt) => {
    onChange(opt.value);
    setQuery(opt.label);
    setIsOpen(false);
  };

  const clear = (e) => {
    e.stopPropagation();
    onChange("");
    setQuery("");
  };

  return (
    <div className="relative w-60" ref={root}>
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-md border border-[#e1e4e8] bg-white cursor-text"
        onClick={() => setIsOpen(true)}
      >
        <input
          className="flex-1 outline-none text-sm bg-transparent"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          aria-label={placeholder}
        />
        {query ? (
          <button onClick={clear} className="text-sm px-1" aria-label="مسح">
            ✕
          </button>
        ) : (
          <span className="text-sm opacity-60"></span>
        )}
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-[#e1e4e8] rounded-lg shadow z-30 p-2 max-h-52 overflow-auto">
          {filtered.length === 0 && <div className="p-2 text-sm text-slate-500">لا توجد نتائج</div>}
          <ul className="flex flex-col gap-1">
            {filtered.map((opt) => (
              <li
                key={opt.value}
                onClick={() => pick(opt)}
                className={`p-2 rounded-md cursor-pointer text-gray-700 hover:bg-gray-50 ${
                  value === opt.value ? "bg-purple-50 font-semibold text-amber-700" : ""
                }`}
              >
                {opt.label}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex justify-end gap-2">
            <button
              onClick={() => {
                onChange("");
                setQuery("");
                setIsOpen(false);
              }}
              className="px-3 py-1 rounded-md border text-sm"
            >
              مسح
            </button>
            <button
              onClick={() => setIsOpen(false)}
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

export default SearchHook;
