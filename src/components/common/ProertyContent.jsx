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

  const heroImage = data?.seriesimagesCutmez ? 
    data?.seriesimagesCutmez[selectedImage]?.url :
    "https://via.placeholder.com/800x450?text=No+Image";

  return (
    <div className="max-w-7xl mx-auto px-4" dir="rtl">
      {/* --- القسم المطور: Hero + Gallery --- */}
      <div className="flex flex-col lg:flex-row gap-4 py-8">
        
        {/* الصورة الرئيسية الكبيرة */}
        <div className="relative w-full lg:w-[75%] h-[400px] md:h-[500px] rounded-2xl overflow-hidden group shadow-lg">
          <Image
            src={heroImage}
            alt={data.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized
            priority
          />
          {/* Layer Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          {/* تفاصيل العقار فوق الصورة بتصميم أنيق */}
          <div className="absolute bottom-8 right-8 left-8 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
            <div>
              <span className="inline-block bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                {data.typeOfproject}
              </span>
              <h1 className="text-3xl md:text-4xl font-black mb-2 drop-shadow-md">{data.title}</h1>
              <div className="flex items-center text-white/90 font-medium">
                <MapPin size={18} className="ml-1 text-amber-400" />
                {data.city}
              </div>
            </div>
            {/* السعر إن وجد أو حالة العقار */}
            {/* <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 hidden md:block">
               <p className="text-xs text-amber-400 font-bold mb-1">حالة المشروع</p>
               <p className="text-lg font-bold">جاهز للتسليم</p>
            </div> */}
          </div>
        </div>

        {/* الصور المصغرة - تصميم عمودي أنيق */}
        {data.seriesimagesCutmez && (
          <div className="w-full lg:w-[25%] flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto no-scrollbar max-h-[500px]">
            {data.seriesimagesCutmez.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative flex-shrink-0 w-24 h-24 lg:w-full lg:h-32 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  selectedImage === index 
                  ? 'border-amber-500 ring-4 ring-amber-500/10' 
                  : 'border-transparent grayscale-[40%] hover:grayscale-0'
                }`}
              >
                <Image
                  src={image?.url}
                  alt={`صورة ${index + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Overlay خفيف عند الاختيار */}
                {selectedImage !== index && <div className="absolute inset-0 bg-black/10 hover:bg-transparent"></div>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* --- باقي الكود كما هو مع تحسينات بسيطة في الـ Shadows --- */}
      <div className="grid lg:grid-cols-3 gap-8 pb-12">
        <div className="lg:col-span-2">
          {/* Info Bar */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8 flex flex-wrap items-center justify-around gap-4">
             <QuickInfo icon={<Bed className="text-amber-500" />} label="غرف نوم" value={data.bedrooms} />
             <div className="w-px h-10 bg-slate-100 hidden md:block"></div>
             <QuickInfo icon={<Bath className="text-amber-500" />} label="حمامات" value={data.bathrooms} />
             <div className="w-px h-10 bg-slate-100 hidden md:block"></div>
             <QuickInfo icon={<Square className="text-amber-500" />} label="المساحة" value={`${data.area} م²`} />
          </div>

          {/* Tabs Container */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-slate-50/50 border-b border-gray-100 overflow-x-auto">
              <nav className="flex whitespace-nowrap px-4">
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
                    className={`flex items-center py-5 px-6 font-bold text-sm transition-all relative ${
                      activeTab === tab.id
                        ? 'text-amber-600'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <tab.icon size={16} className="ml-2" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 right-0 left-0 h-1 bg-amber-500 rounded-t-full"></div>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-8">
              {activeTab === 'overview' && (
                <div className="animate-in fade-in duration-500">
                  <h3 className="text-xl font-black text-slate-800 mb-4 border-r-4 border-amber-500 pr-4">وصف العقار</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">{data.details}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <DetailBox label="سنة البناء" value={data?.buildingage} />
                    <DetailBox label="المواقف" value={data?.barkingStauts} />
                    <DetailBox label="الأثاث" value={data?.furniture} />
                    <DetailBox label="النوع" value={data.typeOfproject} />
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
                   <div>
                     <h4 className="font-black text-lg mb-4 text-slate-800">مميزات المشروع</h4>
                     <div className="space-y-3">
                        {data?.projectFeatures?.map((f, i) => (
                          <div key={i} className="flex items-center gap-3 text-gray-700">
                            <Check className="text-green-500" size={18} /> {f}
                          </div>
                        ))}
                     </div>
                   </div>
                   <div>
                     <h4 className="font-black text-lg mb-4 text-slate-800">الخدمات القريبة</h4>
                     <div className="space-y-3">
                        {data?.propertiesServies?.map((s, i) => (
                          <div key={i} className="flex items-center gap-3 text-gray-700">
                            <Check className="text-amber-500" size={18} /> {s}
                          </div>
                        ))}
                     </div>
                   </div>
                </div>
              )}

              {activeTab === "map" && <div className="rounded-2xl overflow-hidden h-96"><MapSection map3d={data?.d3map} map={data?.map} /></div>}

              {activeTab === 'payment' && (
                <div className="grid md:grid-cols-2 gap-6 animate-in fade-in duration-500">
                  <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 flex items-center gap-4">
                     <div className="bg-amber-500 p-3 rounded-xl text-white"><CreditCard size={24}/></div>
                     <div>
                       <p className="text-xs text-amber-700 font-bold">الدفعة الأولى</p>
                       <p className="font-black text-lg text-slate-800">{data?.firstPayemnt}</p>
                     </div>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                     <div className="bg-slate-800 p-3 rounded-xl text-white"><FileText size={24}/></div>
                     <div>
                       <p className="text-xs text-slate-500 font-bold">مدة السداد</p>
                       <p className="font-black text-lg text-slate-800">{data?.installemntPeriod}</p>
                     </div>
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-500">
                  {data.seriesimagesCutmez.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-sm group">
                      <Image
                        src={image?.url}
                        alt="Gallery"
                        fill
                        className="object-cover transition-transform group-hover:scale-110"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sticky top-6">
            <h3 className="text-xl font-black text-slate-800 mb-6">احجز موعداً للمعاينة</h3>
            <div className="space-y-4 mb-8">
               <div className="flex items-center p-4 bg-slate-50 rounded-xl gap-4">
                  <Phone className="text-amber-500" size={20} />
                  <span className="font-bold text-slate-700">
                    +972568700632
                  </span>
               </div>
               <div className="flex items-center p-4 bg-slate-50 rounded-xl gap-4">
                  <Mail className="text-amber-500" size={20} />
                  <span className="font-bold text-slate-700 truncate text-sm">rayapalinfo@gmail.com</span>
               </div>
            </div>
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-100 active:scale-95"
            >
              <MessageCircle size={22} /> تواصل عبر الواتساب
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

// مكونات مساعدة للحفاظ على نظافة الكود
const QuickInfo = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="bg-amber-50 p-2 rounded-lg">{icon}</div>
    <div>
      <p className="text-[10px] text-slate-400 font-bold uppercase">{label}</p>
      <p className="font-black text-slate-800">{value}</p>
    </div>
  </div>
);

const DetailBox = ({ label, value }) => (
  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
    <span className="text-slate-500 font-bold text-sm">{label}:</span>
    <span className="text-slate-800 font-black">{value || 'غير متوفر'}</span>
  </div>
);

export default ProertyContent;