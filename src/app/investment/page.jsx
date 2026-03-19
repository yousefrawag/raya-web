"use client";
import React, { useState } from 'react';
import { 
  HiOutlineLocationMarker, 
  HiOutlineArrowsExpand, 
  HiOutlineSearch,
  HiOutlineBadgeCheck,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlinePlus
} from 'react-icons/hi';
import { IoBedOutline, IoWaterOutline } from 'react-icons/io5';

const Investment = () => {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const categories = ["الكل", "فيلا", "ارض", "مخازن", "محل", "شقة", "روف"];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      
      {/* --- Section 1: Hero & Partner Invitation --- */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-transparent">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* النص التعريفي */}
            <div className="text-right">
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-lg text-xs font-black mb-6">
                الراية لتطوير والاستثمار العقاري
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                حول عقارك إلى <span className="text-amber-500">فرصة استثمارية</span> ناجحة
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
                نحن في "الراية" لا نعرض العقارات فحسب، بل نصنع الفرص. اعرض عقارك معنا لتصل إلى أكبر شبكة مستثمرين وتضمن أفضل عائد استثماري في السوق الفلسطيني.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-amber-500 transition-all shadow-xl shadow-slate-200">
                  <HiOutlinePlus size={20}/>  تواصل معنا و اعرض عقارك الآن 
                </button>
           
              </div>
            </div>

            {/* بوكس المميزات للمستثمر (Why Al-Raya?) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <FeatureCard 
                  icon={<HiOutlineTrendingUp className="text-amber-500" size={30}/>}
                  title="أعلى عائد استثماري"
                  desc="نحلل السوق بدقة لنضمن لك تسعير عقارك بأعلى قيمة ممكنة."
               />
               <FeatureCard 
                  icon={<HiOutlineUserGroup className="text-blue-500" size={30}/>}
                  title="قاعدة عملاء ضخمة"
                  desc="عقاراتك ستصل لآلاف المستثمرين والباحثين عن فرص حقيقية."
               />
               <FeatureCard 
                  icon={<HiOutlineShieldCheck className="text-green-500" size={30}/>}
                  title="ضمان قانوني وفني"
                  desc="فريقنا يراجع كافة التراخيص ويضمن سلامة الإجراءات القانونية."
               />
               <FeatureCard 
                  icon={<HiOutlineBadgeCheck className="text-purple-500" size={30}/>}
                  title="تسويق احترافي"
                  desc="تصوير احترافي وعرض مميز يجعل عقارك الخيار الأول دائماً."
               />
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Properties Display & Filter --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">الفرص المتاحة حالياً</h2>
            <p className="text-slate-500 font-medium">استكشف العقارات التي تم اختيارها بعناية من فريقنا</p>
          </div>
          
          {/* الفلترة */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                  selectedCategory === cat 
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-100" 
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* كروت العقارات (تصميم رشيق) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PropertyCard 
             image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800"
             title="برج الراية الاستثماري"
             location="غزة - حي الرمال"
             price="120,000"
             area="180"
             type="شقة"
             desc="شقة سكنية بامتيازات تجارية، موقع استراتيجي يضمن لك عائداً إيجارياً مرتفعاً فور الاستلام."
          />
          <PropertyCard 
             image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800"
             title="أرض تجارية - ناصية"
             location="خانيونس - السطر الشرقي"
             price="310,000"
             area="650"
             type="ارض"
             desc="فرصة نادرة لأرض تجارية حاصلة على تراخيص بناء مجمع تجاري، تقع على شارعين رئيسيين."
          />
        </div>
      </section>
    </div>
  );
};

// مكون صغير للميزات
const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-[2rem] border border-slate-50 shadow-sm hover:shadow-md transition-all">
    <div className="mb-4">{icon}</div>
    <h4 className="text-lg font-bold text-slate-800 mb-2">{title}</h4>
    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

// مكون الكارت المطور
const PropertyCard = ({ image, title, location, price, area, type, desc }) => (
  <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row h-full">
    <div className="md:w-5/12 relative h-60 md:h-auto overflow-hidden">
      <img src={image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-amber-600 px-4 py-1 rounded-xl text-[10px] font-black uppercase">فرصة حصرية</span>
    </div>
    <div className="md:w-7/12 p-8 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-amber-500 transition-colors">{title}</h3>
        <div className="flex items-center text-slate-400 text-xs mb-4">
          <HiOutlineLocationMarker className="text-amber-500 ml-1" size={16}/> {location}
        </div>
        <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-2">{desc}</p>
        <div className="flex gap-4 py-4 border-t border-slate-50 mb-4 text-[10px] font-bold text-slate-600">
           <span className="flex items-center gap-1"><HiOutlineArrowsExpand size={14}/> {area} م²</span>
           <span className="flex items-center gap-1 uppercase tracking-tighter bg-amber-50 px-2 py-0.5 rounded text-amber-700">{type}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-black text-slate-900"><span className="text-amber-500 text-sm ml-1">$</span>{price}</div>
        <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-amber-500 transition-all">التفاصيل</button>
      </div>
    </div>
  </div>
);

export default Investment;