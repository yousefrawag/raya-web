"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowRight, MapPin, Bed, Bath, Square, Phone, Mail, MessageCircle, Star, Check, Image as ImageIcon, FileText, CreditCard, User } from 'lucide-react';
import MapSection from '@/components/common/MapSection';

import { propertiesData } from "@/data/index";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = propertiesData.find(p => p.id === parseInt(id || '0'));
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">العقار غير موجود</h2>
          <Link href="/" className="text-amber-600 hover:text-amber-700">العودة للرئيسية</Link>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = `مرحباً، أود الاستفسار عن ${property.title}`;
    const whatsappUrl = `https://wa.me/${property.contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = () => {
    const subject = `استفسار عن ${property.title}`;
    const body = `مرحباً،\n\nأود الحصول على مزيد من المعلومات حول ${property.title}.\n\nشكراً لكم.`;
    window.location.href = `mailto:${property.contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleAgentWhatsApp = () => {
    const message = `مرحباً ${property.agent.name}، أود الاستفسار عن ${property.title}`;
    const whatsappUrl = `https://wa.me/${property.agent.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-3 ">
      {/* Header */}
      <div className="p-4  mt-25 ">
        <div className="  flex gap-4">
          <Link href="/" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            العودة للرئيسية
            /
          </Link>
        
            <Link href="/project" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            المشاريع
            /
          </Link>
                 <Link href="/project" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            الرياض
            /
          </Link>
          
                <span className="inline-flex items-center text-amber-700 transition-colors">
          
            شقه سكنية فى غزة
          </span>
        </div>
      </div>
<div className='flex flex-col lg:flex-row gap-5 w-full py-8  '>
      {/* Hero Section */}
      <div className="relative w-full lg:w-[80%] h-96 overflow-hidden">
        <img 
          src={property.gallery[selectedImage]}
          alt={property.title}
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-6 right-6 text-white">
          <div className="bg-amber-500 px-3 py-1 rounded-full text-sm font-semibold mb-2">
            {property.type}
          </div>
          <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
          <div className="flex items-center text-lg mb-2">
            <MapPin size={20} className="ml-2" />
            {property.location}
          </div>
          <div className="text-3xl font-bold text-amber-400">
            {property.price} {property.type === 'للبيع' ? 'ريال' : 'ريال/شهر'}
          </div>
        </div>
      </div>

      {/* Gallery Thumbnails */}
      <div className="bg-white py-4 w-full lg:w-[20%] shadow-md rounded-md">
        <div className="container mx-auto px-6">
          <div className="flex lg:flex-col flex-row gap-3 items-center space-x-4 space-x-reverse overflow-x-auto">
            {property.gallery.slice(0 , 3).map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`cursor-pointer flex-shrink-0 w-20 h-20 lg:w-40 lg:h-30 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index ? 'border-amber-500' : 'border-gray-200'
                }`}
              >
                <img src={image} alt={`صورة ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
</div>

     
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Info Bar */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6 space-x-reverse">
                  <div className="flex items-center">
                    <Bed size={20} className="text-amber-500 ml-2" />
                    <span className="font-bold text-slate-800">{property.bedrooms} غرف نوم</span>
                  </div>
                  <div className="flex items-center">
                    <Bath size={20} className="text-amber-500 ml-2" />
                    <span className="font-bold text-slate-800">{property.bathrooms} حمامات</span>
                  </div>
                  <div className="flex items-center">
                    <Square size={20} className="text-amber-500 ml-2" />
                    <span className="font-bold text-slate-800 ">{property.area} متر مربع</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-amber-600">
                  {property.price} {property.type === 'للبيع' ? 'ريال' : 'ريال/شهر'}
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
                    { id: 'floorplan', label: 'المخطط', icon: FileText }
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
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">وصف العقار</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{property.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="text-lg font-bold text-slate-800 mb-4">تفاصيل العقار</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="font-semibold text-slate-800 ">غرف النوم:</span>
                            <span className=" text-gray-600">{property.bedrooms}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold text-slate-800">الحمامات:</span>
                            <span className=" text-gray-600">{property.bathrooms}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold text-slate-800">المساحة:</span>
                            <span className=" text-gray-600">{property.area} م²</span>
                          </div>
                          <div className="flex justify-between">
                            <span className=" font-semibold text-slate-800">النوع:</span>
                            <span className=" text-gray-600">{property.type}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="text-lg font-bold text-slate-800 mb-4">المواصفات</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className=" font-semibold text-slate-800">سنة البناء:</span>
                            <span className=" text-slate-800">{property.specifications.builtYear}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold text-slate-800">المواقف:</span>
                            <span className=" text-gray-600">{property.specifications.parking}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold text-slate-800">الأثاث:</span>
                            <span className=" text-gray-600 ">{property.specifications.furnishing}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold text-slate-800">الإطلالة:</span>
                            <span className=" text-gray-600">{property.specifications.view}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Features Tab */}
                {activeTab === 'features' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-6">مميزات العقار</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {property.features.map((feature, index) => (
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
                        {property.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center">
                            <Check className="text-amber-500 ml-3" size={20} />
                            <span className="text-gray-700">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
{
  activeTab === "map" && <MapSection />
}
                {/* Payment Tab */}
                {activeTab === 'payment' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">خيارات الدفع</h3>
                    <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CreditCard className="text-white" size={24} />
                          </div>
                          <h4 className="font-bold text-slate-800 mb-2">الدفعة الأولى</h4>
                          <p className="text-gray-600">{property.paymentOptions.downPayment}</p>
                        </div>
                        <div className="text-center">
                          <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Square className="text-white" size={24} />
                          </div>
                          <h4 className="font-bold text-slate-800 mb-2">نظام الأقساط</h4>
                          <p className="text-gray-600">{property.paymentOptions.installments}</p>
                        </div>
                        <div className="text-center">
                          <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FileText className="text-white" size={24} />
                          </div>
                          <h4 className="font-bold text-slate-800 mb-2">مدة السداد</h4>
                          <p className="text-gray-600">{property.paymentOptions.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Gallery Tab */}
                {activeTab === 'gallery' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">معرض الصور</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {property.gallery.map((image, index) => (
                        <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                          <img src={image} alt={`صورة ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Floor Plan Tab */}
                {activeTab === 'floorplan' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">مخطط العقار</h3>
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                      <img src={property.floorPlan} alt="مخطط العقار" className="w-full h-auto" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            {/* <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4">الوكيل العقاري</h3>
              <div className="flex items-center mb-4">
                <img 
                  src={property.agent.photo}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover ml-4"
                />
                <div>
                  <h4 className="font-bold text-slate-800">{property.agent.name}</h4>
                  <p className="text-gray-600">وكيل عقاري معتمد</p>
                </div>
              </div>
              <button
                onClick={handleAgentWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center mb-3"
              >
                <MessageCircle size={20} className="ml-2" />
                تواصل مع الوكيل
              </button>
            </div> */}

            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-6">تواصل معنا</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Phone className="text-amber-500 ml-3" size={20} />
                  <span className="text-gray-700">{property.contactInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-amber-500 ml-3" size={20} />
                  <span className="text-gray-700">{property.contactInfo.email}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <MessageCircle size={20} className="ml-2" />
                  تواصل عبر الواتساب
                </button>
                <button
                  onClick={handleEmail}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Mail size={20} className="ml-2" />
                  إرسال إيميل
                </button>
              </div>
            </div>

            {/* Quick Info */}
            {/* <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">معلومات سريعة</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>النوع:</span>
                  <span className="font-semibold">{property.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>المساحة:</span>
                  <span className="font-semibold">{property.area} م²</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>الغرف:</span>
                  <span className="font-semibold">{property.bedrooms}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>السعر:</span>
                  <span className="font-semibold">{property.price} ريال</span>
                </div>
              </div>
            </div> */}
          </div>

      </div>
    </div>
    </div>
  );
};

export default PropertyDetail;