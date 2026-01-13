"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Bed, Bath, Square, Phone, Mail, MessageCircle, Star, Check, Image as ImageIcon, FileText, CreditCard } from 'lucide-react';
import MapSection from '@/components/common/MapSection';

const ProertyContent = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const handleWhatsApp = () => {
    const message = `مرحباً، أود الاستفسار عن ${data.title}`;
    const whatsappUrl = `https://wa.me/${+972568700632}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  const heroImage =
    data.seriesimagesCutmez[selectedImage]?.url ||
    "https://via.placeholder.com/800x450?text=No+Image";
  return (
    <div>
      {/* Hero + Thumbnails */}
      <div className="flex flex-col lg:flex-row gap-5 w-full py-8">
        {/* Hero Section */}
        <div className="relative w-full lg:w-[80%] h-96 rounded-md overflow-hidden">
          <Image
            src={heroImage}
            alt={data.title}
          fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 right-6 text-white">
            <div className="bg-amber-500 px-3 py-1 rounded-full text-sm font-semibold mb-2">
              {data.typeOfproject}
            </div>
            <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
            <div className="flex items-center text-lg mb-2">
              <MapPin size={20} className="ml-2" />
              {data.city}
            </div>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        <div className="bg-white py-4 w-full lg:w-[20%] shadow-md rounded-md">
          <div className="container mx-auto px-6">
            <div className="flex lg:flex-col flex-row gap-3 items-center overflow-x-auto">
              {data.seriesimagesCutmez.slice(0, 3).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`cursor-pointer flex-shrink-0 w-20 h-20 lg:w-40 lg:h-30 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-amber-500' : 'border-gray-200'
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image?.url}
                      alt={`صورة ${index + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Section */}
        <div className="lg:col-span-2">
          {/* Property Info Bar */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 space-x-reverse">
                <div className="flex items-center">
                  <Bed size={20} className="text-amber-500 ml-2" />
                  <span className="font-bold text-slate-800">{data.bedrooms} غرف نوم</span>
                </div>
                <div className="flex items-center">
                  <Bath size={20} className="text-amber-500 ml-2" />
                  <span className="font-bold text-slate-800">{data.bathrooms} حمامات</span>
                </div>
                <div className="flex items-center">
                  <Square size={20} className="text-amber-500 ml-2" />
                  <span className="font-bold text-slate-800">{data.area} متر مربع</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-lg mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex flex-col lg:flex-row space-x-8 space-x-reverse px-6">
                {[
                  { id: 'overview', label: 'نظرة عامة', icon: Square },
                  { id: 'features', label: 'المميزات', icon: Star },
                  { id: 'map', label: 'الخريطة', icon: MapPin },
                  { id: 'payment', label: 'خيارات الدفع', icon: CreditCard },
                  { id: 'gallery', label: 'المعرض', icon: ImageIcon },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`cursor-pointer flex items-center py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-amber-500 text-amber-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <tab.icon size={16} className="ml-2" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {/* Overview */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">وصف العقار</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{data.details}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-lg font-bold text-slate-800 mb-4">تفاصيل العقار</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-semibold text-slate-800">غرف النوم:</span>
                          <span className="text-gray-600">{data.bedrooms}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-slate-800">الحمامات:</span>
                          <span className="text-gray-600">{data.bathrooms}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-slate-800">المساحة:</span>
                          <span className="text-gray-600">{data.area} م²</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-slate-800">النوع:</span>
                          <span className="text-gray-600">{data.typeOfproject}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-lg font-bold text-slate-800 mb-4">المواصفات</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-semibold text-slate-800">سنة البناء:</span>
                          <span className="text-slate-800">{data?.buildingage}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-slate-800">المواقف:</span>
                          <span className="text-gray-600">{data?.barkingStauts}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-slate-800">الأثاث:</span>
                          <span className="text-gray-600">{data?.furniture}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Features */}
              {activeTab === 'features' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">مميزات العقار</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {data.projectFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="text-green-500 ml-3" size={20} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">المرافق القريبة</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {data.propertiesServies.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="text-amber-500 ml-3" size={20} />
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Map */}
              {activeTab === "map" && <MapSection map3d={data?.d3map} map={data?.map} />}

              {/* Payment */}
              {activeTab === 'payment' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">خيارات الدفع</h3>
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CreditCard className="text-white" size={24} />
                        </div>
                        <h4 className="font-bold text-slate-800 mb-2">الدفعة الأولى</h4>
                        <p className="text-gray-600">{data?.firstPayemnt}</p>
                      </div>

                      <div className="text-center">
                        <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FileText className="text-white" size={24} />
                        </div>
                        <h4 className="font-bold text-slate-800 mb-2">مدة السداد</h4>
                        <p className="text-gray-600">{data?.installemntPeriod}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Gallery */}
              {activeTab === 'gallery' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">معرض الصور</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.seriesimagesCutmez.map((image, index) => (
                      <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <Image
                          src={image?.url}
                          alt={`صورة ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-6">تواصل معنا</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Phone className="text-amber-500 ml-3" size={20} />
                <span className="text-gray-700">+972 59-270-0633</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-amber-500 ml-3" size={20} />
                <span className="text-gray-700">akaratalraya@gmail.com</span>
              </div>
            </div>
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <MessageCircle size={20} className="ml-2" />
              تواصل عبر الواتساب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProertyContent;
