"use client"
import React, { useState } from 'react'

const MapSection = ({map3d , map}) => {
  const [is3D, setIs3D] = useState(true)

  const options = [
    { label: "ثلاثى الأبعاد", value: true },
    { label: "خريطة", value: false },
  ]

  // روابط حسب الحالة
  const iframeSrc = is3D
    ? map3d
    : map
  return (
    <div className="w-full h-[600px] flex flex-col">
      {/* الأزرار */}
      <div className="flex gap-3 mb-4">
        {options.map((btn) => (
          <button
            key={btn.label}
            onClick={() => setIs3D(btn.value)}
            className={`px-4 py-2 cursor-pointer rounded-md text-white transition 
              ${is3D === btn.value ? "bg-amber-600" : "bg-amber-400 hover:bg-amber-500"}`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* الخريطة */}
      <div className="flex-1 w-full overflow-hidden rounded-lg shadow">
        <iframe
          src={iframeSrc}
          className="w-full h-full"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default MapSection
