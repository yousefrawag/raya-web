"use client"
import React, { useState } from 'react'

const MapSection = () => {
  const [is3D, setIs3D] = useState(true)

  const options = [
    { label: "ثلاثى الأبعاد", value: true },
    { label: "خريطة", value: false },
  ]

  // روابط حسب الحالة
  const iframeSrc = is3D
    ? "https://www.google.com/maps/embed?pb=!4v1758022831541!6m8!1m7!1swn__9inkInOtBbfPJ0PpUA!2m2!1d25.14526922751279!2d55.39802759382794!3f0!4f0!5f0.7820865974627469"
    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.091144437613!2d55.396!3d25.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d5d5d5d5d5d%3A0x123456789abcdef!2sDubai!5e0!3m2!1sen!2sae!4v1758022831541"

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
