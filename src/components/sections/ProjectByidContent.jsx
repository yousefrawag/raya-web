"use client"
import React from 'react'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowRight, MapPin, Calendar, Building, Users, Phone, Mail, MessageCircle, Star, Check, Image as ImageIcon, FileText, CreditCard } from 'lucide-react';
import { projectsData } from "@/data/index";
import MapSection from '@/components/common/MapSection';
import Image from 'next/image';
import { useState } from 'react';
const ProjectByidContent = ({project}) => {
const [selectedImage, setSelectedImage] = useState(0);
const [activeTab, setActiveTab] = useState('overview');

  const handleWhatsApp = () => {
    const message = `مرحباً، أود الاستفسار عن مشروع ${project.title}`;
    const whatsappUrl = `https://wa.me/${+972568700632}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = () => {
    const subject = `استفسار عن مشروع ${project.title}`;
    const body = `مرحباً،\n\nأود الحصول على مزيد من المعلومات حول مشروع ${project.title}.\n\nشكراً لكم.`;
    window.location.href = `mailto:${project.contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div>
        <div className='flex flex-col lg:flex-row gap-5 w-full py-8  '>
      {/* Hero Section */}
     
      <div className="relative w-full lg:w-[80%] h-96 overflow-hidden shadow-md">
        <Image
          src={project.seriesimagesCutmez[selectedImage]?.url}
          alt={project.title}
            loading="lazy"
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-6 right-6 text-white">
          <div className="bg-amber-500 px-3 py-1 rounded-full text-sm font-semibold mb-2">
            {project.projectType }
          </div>
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          <div className="flex items-center text-lg">
            <MapPin size={20} className="ml-2" />
            {project.adress}
          </div>
        </div>
      </div>

      {/* Gallery Thumbnails */}
      <div className=" w-full lg:w-[20%] py-4 bg-white shadow overflow-auto ">
        <div className="w-full px-4">
          <div className="flex flex-row lg:flex-col gap-4 items-center space-x-4 space-x-reverse ">
            {project.seriesimagesCutmez?.slice(0 ,3)?.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 cursor-pointer w-20 h-20 lg:w-40 lg:h-30 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index ? 'border-amber-500' : 'border-gray-200'
                }`}
              >
                <Image   loading="lazy" src={image?.url} alt={`صورة ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
</div>

      <div >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-lg mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex flex-col lg:flex-row space-x-8 space-x-reverse px-6">
                  {[
                    { id: 'overview', label: 'نظرة عامة', icon: Building },
                    { id: 'features', label: 'المميزات', icon: Star },
                    { id: 'payment', label: 'خيارات الدفع', icon: CreditCard },
                         { id: 'map', label: 'الخريطة', icon: MapPin },
                    { id: 'gallery', label: 'المعرض', icon: ImageIcon },
                    { id: 'plans', label: 'المخططات', icon: FileText }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex cursor-pointer items-center py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
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
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">وصف المشروع</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{project.details}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="text-lg font-bold text-slate-900 mb-4">تفاصيل المشروع</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-900 ">عدد الوحدات:</span>
                            <span className="font-semibold text-gray-600">{project.numberofunits} وحدة</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-900 ">سنة التسليم:</span>
                            <span className="font-semibold text-gray-600">{project.projectdeatline}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-900 ">المطور:</span>
                            <span className="font-semibold text-gray-600">{project.realstateDevelopment}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-900">السعر يبدا : </span>
                            <span className="font-semibold text-gray-600 ">{project.startingPrice + "" + "$"}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="text-lg font-bold text-slate-800 mb-4">المواصفات</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-900">المساحة الإجمالية:</span>
                            <span className="font-semibold text-gray-600">{project.area}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-900">ارتفاع المبنى:</span>
                            <span className="font-semibold text-gray-600 ">{project.buildingheight + "طابق"}</span>
                          </div>
                          {/* <div className="flex justify-between">
                            <span className=" text-slate-900">مواقف السيارات:</span>
                            <span className="font-semibold text-gray-600">{project.specifications.parkingSpaces}</span>
                          </div> */}
                          <div className="flex justify-between">
                            <span className=" text-slate-900">المصاعد:</span>
                            <span className="font-semibold text-gray-600">{project.numberoftall}</span>
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
                      <h3 className="text-2xl font-bold text-slate-800 mb-6">مميزات المشروع</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.projectFeatures.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <Check className="text-green-500 ml-3" size={20} />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-6">المرافق والخدمات</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.projectservies.map((amenity, index) => (
                          <div key={index} className="flex items-center">
                            <Check className="text-amber-500 ml-3" size={20} />
                            <span className="text-gray-700">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment Tab */}
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
                          <p className="text-gray-600">{project.firstPayemnt + "$"}</p>
                        </div>
                        {/* <div className="text-center">
                          <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Calendar className="text-white" size={24} />
                          </div>
                          <h4 className="font-bold text-slate-800 mb-2">نظام الأقساط</h4>
                          <p className="text-gray-600">{project.paymentOptions.installments}</p>
                        </div> */}
                        <div className="text-center">
                          <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Building className="text-white" size={24} />
                          </div>
                          <h4 className="font-bold text-slate-800 mb-2">مدة السداد</h4>
                          <p className="text-gray-600">{project.installemntPeriod}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

{
  activeTab === "map" && <MapSection  map={project?.map} map3d={project.map3d}/>
}
                {/* Gallery Tab */}
                {activeTab === 'gallery' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">معرض الصور</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.seriesimagesCutmez.map((image, index) => (
                        <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                          <Image   loading="lazy" src={image?.url} alt={`صورة ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Plans Tab */}
                {activeTab === 'plans' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">المخططات</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.projectfiles.map((plan, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                          <a href={plan?.url} alt={`مخطط ${index + 1}`} className="w-full h-64 object-cover" >عرض</a>
                          <div className="p-4">
                            <h4 className="font-bold text-slate-800">مخطط الطابق {index + 1}</h4>
                          </div>
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
             
        
                    {/* Contact Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-6">تواصل معنا</h3>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center">
                          <Phone className="text-amber-500 ml-3" size={20} />
                          <span className="text-gray-700">
                            +972568700632
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="text-amber-500 ml-3" size={20} />
                          <span className="text-gray-700">raya90@gmail.com</span>
                        </div>
                      </div>
        
                      <div className="space-y-3">
                        <button
                          onClick={handleWhatsApp}
                          className="w-full  cursor-pointer  bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                        >
                          <MessageCircle size={20} className="ml-2" />
                          تواصل عبر الواتساب
                        </button>
                     
                      </div>
                    </div>
        
                  
           
                  </div>
        </div>
         
      </div>
    </div>
  )
}

export default ProjectByidContent