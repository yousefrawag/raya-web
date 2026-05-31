"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaBuilding,
  FaChartLine,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from "react-icons/fa";

const InvestMentHndelimagesClient = ({ images = [], data }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div>
      <section className="bg-white border-b shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* معرض الصور */}
            <div className="lg:col-span-7 space-y-4">

              {/* الصورة الرئيسية */}
              <div
                onClick={() => setIsOpen(true)}
                className="
                  group
                  relative
                  aspect-[16/10]
                  rounded-3xl
                  overflow-hidden
                  shadow-2xl
                  border-4
                  border-white
                  cursor-pointer
                "
              >
                <Image
                  src={images[selectedImage]?.url}
                  alt={data.title}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 700px"
                  className="
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    group-hover:bg-black/30
                    transition-all
                    duration-300
                    flex
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      opacity-0
                      scale-75
                      group-hover:opacity-100
                      group-hover:scale-100
                      transition-all
                      duration-300
                      bg-white
                      p-4
                      rounded-full
                      shadow-xl
                    "
                  >
                    <FaExpand className="text-xl text-gray-700" />
                  </div>
                </div>
              </div>

              {/* الصور المصغرة */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`
                        relative
                        aspect-video
                        rounded-xl
                        overflow-hidden
                        transition-all
                        duration-300
                        hover:scale-105
                        ${
                          selectedImage === idx
                            ? "ring-4 ring-orange-500 shadow-lg"
                            : "border border-gray-200"
                        }
                      `}
                    >
                      <Image
                        src={img.url}
                        alt={`${data.title}-${idx}`}
                        fill
                        sizes="200px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ملخص الاستثمار والبيانات المالية */}
            <div className="lg:col-span-5 space-y-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
              <div>
                <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                  <FaChartLine className="text-base" />
                  فرصة استثمارية حصرية
                </span>

                <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-3">
                  {data.title}
                </h1>

                <p className="flex items-center text-gray-600 text-lg mb-6">
                  <FaMapMarkerAlt className="ml-3 text-orange-500 text-xl" />
                  {data.city} - {data.region}
                </p>

                <div className="grid grid-cols-2 gap-5 mb-8">
                  <div className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm text-center flex flex-col items-center">
                    <FaRulerCombined className="text-3xl text-orange-400 mb-3" />
                    <p className="text-gray-400 text-sm mb-1">
                      المساحة الإجمالية
                    </p>
                    <p className="font-extrabold text-2xl text-gray-800">
                      {data.area} م²
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm text-center flex flex-col items-center">
                    <FaBuilding className="text-3xl text-orange-400 mb-3" />
                    <p className="text-gray-400 text-sm mb-1">
                      نوع العقار
                    </p>
                    <p className="font-extrabold text-2xl text-gray-800">
                      {data.type}
                    </p>
                  </div>
                </div>

                {/* باقى التفاصيل عندك هنا */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Popup */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
            fixed
            inset-0
            bg-black/95
            backdrop-blur-md
            z-[99999]
            flex
            flex-col
            items-center
            justify-center
            p-4
          "
        >

          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="
              absolute
              top-6
              right-6
              text-white
              text-3xl
              z-50
            "
          >
            <FaTimes />
          </button>

          {/* Previous */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="
                absolute
                left-4
                md:left-8
                text-white
                text-5xl
                z-50
              "
            >
              <FaChevronLeft />
            </button>
          )}

          {/* Main Popup Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              h-[80vh]
              flex
              items-center
              justify-center
            "
          >
            <Image
              src={images[selectedImage]?.url}
              alt={data.title}
              width={1920}
              height={1080}
              priority
              className="
                max-w-[95vw]
                max-h-[80vh]
                w-auto
                h-auto
                object-contain
                rounded-2xl
                shadow-2xl
              "
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="
                absolute
                right-4
                md:right-8
                text-white
                text-5xl
                z-50
              "
            >
              <FaChevronRight />
            </button>
          )}

          {/* Gallery داخل Popup */}
          {images.length > 1 && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="
                flex
                gap-3
                overflow-x-auto
                max-w-[90vw]
                mt-4
                pb-2
              "
            >
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`
                    relative
                    w-28
                    h-20
                    rounded-lg
                    overflow-hidden
                    shrink-0
                    transition-all
                    duration-300
                    ${
                      selectedImage === idx
                        ? "ring-4 ring-orange-500 scale-105"
                        : "opacity-60 hover:opacity-100"
                    }
                  `}
                >
                  <Image
                    src={img.url}
                    alt={`thumb-${idx}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InvestMentHndelimagesClient;