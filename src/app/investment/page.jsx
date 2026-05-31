export const revalidate = 86400;
import { GetAllinvestment } from '@/lib/GetAllinvestment';
import Link from 'next/link';
import Image from 'next/image';
// import React, { useState } from 'react';
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
export const metadata = {
  metadataBase: new URL("https://www.rayapal.com"),

  title: "فرص استثمار عقاري في القدس، أريحا، ورام الله | منصة الراية العقارية",
  
  description: "اكتشف أفضل الفرص الاستثمارية العقارية وأراضي للبيع في القدس، بيت حنينا، كفر عقب، أريحا، ورام الله. عوائد استثمارية مضمونة وتسهيلات عقارية مع شركة الراية.",
  
  alternates: {
    canonical: "https://www.rayapal.com/investment",
  },

  // 🚀 مصفوفة الكلمات المفتاحية الشاملة والموسعة (تغطي كل المدن والمناطق الاستثمارية بالتفصيل)
  keywords: [
    // الكلمات الاستثمارية العامة في فلسطين
    "استثمار عقاري في فلسطين", "فرص استثمارية عقارية فلسطين", "أفضل عوائد استثمارية في فلسطين", 
    "عقارات تجارية للبيع في فلسطين", "مشاريع عقارية استثمارية فلسطين", "شراء عقارات للاستثمار فلسطين", 
    "شقق استثمارية للبيع في فلسطين", "أراضي للبيع والاستثمار فلسطين", "استشارات عقارية في فلسطين", 
    "تسويق عقاري استثماري فلسطين", "شركات تطوير عقاري في القدس", "شقق عظم للاستثمار في فلسطين", 
    "أفضل المناطق للاستثمار العقاري فلسطين", "سوق العقارات في فلسطين", "اسعار العقارات في فلسطين",
    "الراية العقارية", "منصة الراية العقارية", "شركة الراية للتسويق العقاري", "مكتب عقارات فلسطين",

    // القدس ومناطقها (استثمار، بيع، شراء)
    "استثمار عقاري في القدس", "أراضي استثمارية القدس", "عقارات القدس للبيع", "عقارات القدس الشرقية",
    "شقق للبيع في القدس", "شراء شقة في القدس", "شقق للايجار في القدس", "أراضي للبيع في القدس", 
    "بيوت للبيع في القدس", "عقارات تجارية للبيع في القدس", "شقق عظم للبيع في القدس", 
    "محلات تجارية للبيع في القدس", "فرص استثمارية في القدس", "اسعار الشقق في القدس",
    "شقق طابو للبيع في القدس", "مشاريع سكنية في القدس", "مكاتب للايجار في القدس",

    // بيت حنينا بالتفصيل (بما فيها حي الهجرة)
    "فرص استثمار بيت حنينا", "شقق للبيع في بيت حنينا", "شقق للإيجار في بيت حنينا", 
    "عقارات بيت حنينا القدس", "أراضي للبيع في بيت حنينا", "شقق استثمارية في بيت حنينا", 
    "شقق عظم للبيع في بيت حنينا", "شقق للبيع في حي الهجرة بيت حنينا", "عقارات حي الهجرة بيت حنينا", 
    "فرص استثمارية عقارية في بيت حنينا", "أسعار الشقق في بيت حنينا", "بيوت مستقلة للبيع في بيت حنينا",
    "محلات تجارية للايجار في بيت حنينا", "شراء ارض في بيت حنينا", "فلل للبيع في بيت حنينا",

    // كفر عقب بالتفصيل
    "شقق للبيع في كفر عقب", "شقق للإيجار في كفر عقب", "عقارات كفر عقب القدس", 
    "استثمار عقاري في كفر عقب", "شراء شقة في كفر عقب", "أسعار العقارات في كفر عقب", 
    "أراضي للبيع في كفر عقب", "شقق عظم للبيع في كفر عقب", "محلات تجارية للبيع كفر عقب",
    "شقق قيد الانشاء كفر عقب", "فرص عقارية مميزة في كفر عقب", "إيجار رخيص كفر عقب",

    // أريحا ومناطقها (بما فيها البوابة)
    "عقارات استثمارية أريحا", "شقق للبيع في أريحا", "شقق للإيجار في أريحا", "فلل للبيع في أريحا", 
    "شراء أرض في أريحا", "فلل سياحية للاستثمار في أريحا", "شاليهات للبيع في أريحا", 
    "عقارات أريحا البوابة", "شقق للبيع في البوابة أريحا", "أراضي استثمارية في أريحا", 
    "مشاريع عقارية في أريحا", "أراضي طابو للبيع في أريحا", "استثمار عقاري سياحي في أريحا", 
    "شراء مزرعة في أريحا", "فلل مع مسبح للبيع في أريحا", "شاليهات للايجار اليومي اريحا",
    "اسعار الاراضي في اريحا البوابة", "مشاريع زراعية استثمارية اريحا", "بيوت استجمام للبيع اريحا",

    // رام الله والبيرة ومناطقها
    "عقارات رام الله", "شقق للبيع في رام الله", "شقق للإيجار في رام الله", "عقارات رام الله والبيرة", 
    "استثمار عقاري في رام الله", "أراضي للبيع في رام الله", "شقق للبيع في البيرة", 
    "عقارات البيرة رام الله", "شقق للبيع في المصايف", "عقارات المصايف رام الله", 
    "شقق للبيع في الماصيون", "عقارات الماصيون رام الله", "شقق للبيع في الإرسال رام الله", 
    "شقق للبيع في الطيرة رام الله", "عقارات الطيرة رام الله", "مكاتب تجارية للبيع في رام الله", 
    "محلات تجارية للاستثمار في رام الله", "شقق عظم للبيع في رام الله", "فلل للبيع في رام الله",
    "شقق مفروشة للايجار في رام الله", "اراضي طابو للبيع في رام الله",

    // باقي أحياء القدس الهامة بالتفصيل لضمان تغطية جغرافية كاملة
    "شقق للبيع في شعفاط", "عقارات شعفاط القدس", "شراء شقة في شعفاط", "شقق للايجار في شعفاط",
    "شقق للبيع في بيت صفافا", "عقارات بيت صفافا", "شراء ارض في بيت صفافا", 
    "شقق للبيع في جبل المكبر", "عقارات جبل المكبر القدس", "اراضي للبيع جبل المكبر",
    "شقق للبيع في صور باهر", "عقارات صور باهر القدس", "شراء شقة صور باهر",
    "شقق للبيع في رأس العمود", "عقارات رأس العمود", "شراء شقة في رأس العمود",
    "شقق للبيع في أم طوبا", "عقارات أم طوبا القدس", "اراضي استثمارية ام طوبا",
    "شقق للبيع في الشيخ جراح", "عقارات الشيخ جراح", "بيوت للبيع الشيخ جراح",
    "شقق للبيع في سلوان", "عقارات سلوان القدس", "شقق للبيع في الطور", "عقارات الطور القدس",
    "شقق للبيع في العيسوية", "عقارات العيسوية", "عقارات ضواحي القدس"
  ],

  openGraph: {
    title: "فرص استثمار عقاري في القدس، أريحا، ورام الله | منصة الراية",
    description: "اكتشف أفضل الفرص الاستثمارية العقارية في القدس، بيت حنينا، كفر عقب، أريحا، ورام الله. عوائد مضمونة مع شركة الراية.",
    url: "https://www.rayapal.com/investment",
    siteName: "الراية العقارية",
    locale: "ar_PS",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png",
        width: 1200,
        height: 630,
        alt: "فرص الاستثمار العقاري - الراية العقارية",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "فرص استثمار عقاري في فلسطين | الراية العقارية",
    description: "ابحث عن أفضل العقارات الاستثمارية والأراضي في القدس، أريحا ورام الله.",
    images: ["https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png"],
  },

  category: "real estate investment",
};
const Investment =  async() => {

const investmentPrperties = await GetAllinvestment()
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      
      {/* --- Section 1: Hero & Partner Invitation --- */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-transparent">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* النص التعريفي */}
            <div className="text-right">
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-lg text-xs font-black mb-6">
               منصة الراية لخدمات الاستثمار والتسويق
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight text-center">
                حول عقارك إلى <span className="text-amber-500 ">فرصة استثمارية</span> ناجحة
              </h1>
              <p className="text-gray-600 text-xl mb-8 leading-relaxed font-medium">
                نحن في "الراية" لا نعرض العقارات فحسب، بل نصنع الفرص. اعرض عقارك معنا لتصل إلى أكبر شبكة مستثمرين وتضمن أفضل عائد استثماري في السوق الفلسطيني.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                target='_balank'
               href={`https://wa.me/+972568700632?text=أرغب في الحصول على استشارة استثمارية بخصوص عقار `} // عدل الرقم ورسالة الـ واتساب

                className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-amber-500 transition-all shadow-xl shadow-slate-200">
                  <HiOutlinePlus size={20}/>  تواصل معنا و اعرض عقارك الآن 
                </a>
           
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
            <p className="text-slate-500 font-medium"
            >استكشف العقارات التي تم اختيارها بعناية
             من
             فريقنا
            
            </p>
          </div>
          
          {/* الفلترة */}
          {/* <div className="flex flex-wrap gap-2">
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
          </div> */}
        </div>

        {/* كروت العقارات (تصميم رشيق) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {
            investmentPrperties?.map((item) => {
              return <PropertyCard 
              key={item?.id}
             image={item?.seriesimagesCutmez[0]?.url || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800"}
             title={item?.title}
             location={`${item?.city} - ${item?.region}`}
             price={item?.price}
             area={item?.area}
             type={item?.type}
             desc={item?.details}
             id={item?.id}
          />
            })
          }
   
          {/* <PropertyCard 
             image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800"
             title="أرض تجارية - ناصية"
             location="خانيونس - السطر الشرقي"
             price="310,000"
             area="650"
             type="ارض"
             desc="فرصة نادرة لأرض تجارية حاصلة على تراخيص بناء مجمع تجاري، تقع على شارعين رئيسيين."
          /> */}
        </div>
      </section>
    </div>
  );
};

// مكون صغير للميزات
const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-[2rem] border border-slate-50 shadow-sm hover:shadow-md transition-all">
    <div className="mb-4">{icon}</div>
    <h4 className="text-xl font-bold text-slate-800 mb-2">{title}</h4>
    <p className="text-slate-500 text-lg leading-relaxed">{desc}</p>
  </div>
);

// مكون الكارت المطور
const PropertyCard = ({ image, title, location, price, area, type, desc  , id}) => (
  <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row h-full">
    <div className="md:w-6/12 relative h-60 md:h-auto overflow-hidden">
      <Image    fill
    sizes="(max-width:768px) 100vw, 50vw" src={image} alt="" className="w-full h-full  group-hover:scale-110 transition-transform duration-700" />
      <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-amber-600 px-4 py-1 rounded-xl text-[10px] font-black uppercase">فرصة حصرية</span>
    </div>
    <div className="md:w-6/12 p-8 flex flex-col justify-between">
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
        {/* <div className="text-2xl font-black text-slate-900"><span className="text-amber-500 text-sm ml-1">$</span>{price}</div> */}
        <Link href={`/investment/${id}`} className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-amber-500 transition-all">التفاصيل</Link>
      </div>
    </div>
  </div>
);

export default Investment;