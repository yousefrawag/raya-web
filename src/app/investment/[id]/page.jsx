import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaRulerCombined, FaDollarSign, FaBuilding, FaHandHoldingUsd, FaFileContract, FaWhatsapp, FaChartLine } from 'react-icons/fa';
import {GeyINvestmentEntry} from "@/lib/GeyINvestmentEntry"
import Link from 'next/link';
// 1. تحسين محركات البحث (Dynamic Metadata for SEO)
export async function generateMetadata({ params }) {
  const { id } = await params;
  
  // نفترض هنا أنك تجلب البيانات الأساسية للـ SEO
  // إذا كانت دالة fetch لديك تأخذ وقتاً، Next.js سيقوم بعمل cache لها تلقائياً
  const investment = await GeyINvestmentEntry(id);

  if (!investment) {
    return {
      title: 'فرصة استثمارية | الراية للعقارات',
      description: 'اكتشف أفضل الفرص الاستثمارية العقارية في فلسطين مع شركة الراية.',
    };
  }

  // تجهيز الكلمات المفتاحية (Keywords) بشكل ديناميكي
  const keywords = [
    `استثمار عقاري في ${investment.city}`,
    `${investment.type} للبيع استثمار`,
    `فرصة استثمارية ${investment.title}`,
    'عقارات فلسطين',
    'شركة الراية للعقارات',
    `عقار في منطقة ${investment.region}`
  ].join(', ');

  const description = investment.details ? investment.details.substring(0, 160).replace(/(\r\n|\n|\r)/gm, " ") : `فرصة استثمارية استثنائية: ${investment.type} بمساحة ${investment.area} متر مربع في ${investment.city}. السعر: ${Number(investment.price).toLocaleString()} دولار.`;
  const mainImage = investment.seriesimagesCutmez && investment.seriesimagesCutmez.length > 0 ? investment.seriesimagesCutmez[0].url : "https://your-domain.com/default-share-image.jpg"; // ضع صورة افتراضية للمشاركة

  return {
    title: `${investment.title} | ${investment.type} في ${investment.city} | فرصة استثمارية من الراية`,
    description: description,
    keywords: keywords,
    alternates: {
      canonical: `https://your-domain.com/investment/${id}`, // ضع رابط موقعك الحقيقي هنا
    },
    openGraph: {
      title: `${investment.title} - فرصة استثمارية عقارية`,
      description: description,
      url: `https://your-domain.com/investment/${id}`,
      siteName: 'الراية للعقارات',
      images: [
        {
          url: mainImage,
          width: 1200,
          height: 630,
          alt: investment.title,
        },
      ],
      locale: 'ar_PS',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: investment.title,
      description: description,
      images: [mainImage],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}


// 2. تصميم الصفحة الكاملة (Single Investment Page Layout)
const SingleInvestmentPage = async ({ params }) => {
  const { id } = await params;
  
  // جلب كافة تفاصيل العقار الاستثماري
  const data = await GeyINvestmentEntry(id);

  // حالة عدم وجود بيانات
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-center px-4">
        <div className="max-w-md p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
          <FaBuilding className="text-6xl text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-3">العقار غير موجود</h1>
          <p className="text-gray-600 mb-6">نعتذر، ولكن يبدو أن العقار الذي تبحث عنه لم يعد متاحاً أو أن الرابط غير صحيح.</p>
          <a href="/investments" className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-orange-600 transition">
            العودة لجميع الفرص
          </a>
        </div>
      </div>
    );
  }

  // معالجة الصور (تأكد من وجود مصفوفة صور)
  const images = data.seriesimagesCutmez && data.seriesimagesCutmez.length > 0 
    ? data.seriesimagesCutmez 
    : [{ url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef" }]; // صورة افتراضية

  return (
    <div className="min-h-screen bg-gray-50 pb-16 text-right" dir="rtl">
      
       <div className="p-4  mt-25 ">
        <div className="  flex gap-4">
          <Link href="/" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            العودة للرئيسية
            /
          </Link>
        
            <Link href="/investment" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            إستثمار
            /
          </Link>
      
          
                <span className="inline-flex items-center text-amber-700 transition-colors">
          
            {data?.title}
          </span>
        </div>
      </div>
      {/* 1. قسم البطل (Hero Section) & معرض الصور (Gallery) */}
      <section className="bg-white border-b shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* معرض الصور - تصميم شبكي متقدم */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src={images[0].url} 
                  alt={data.title}
                  fill
                  className="object-cover"
                  priority={true} // تحميل سريع لأول صورة
                  sizes="(max-w-7xl) 100vw, 700px"
                />
              </div>
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {images.slice(1, 5).map((img, idx) => (
                    <div key={idx} className="relative aspect-video rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition border border-gray-100">
                      <Image 
                        src={img.url} 
                        alt={`${data.title} - صورة ${idx + 2}`}
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                    </div>
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
                <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-3">{data.title}</h1>
                <p className="flex items-center text-gray-600 text-lg mb-6">
                  <FaMapMarkerAlt className="ml-3 text-orange-500 text-xl" />
                  {data.city} - {data.region}
                </p>

                {/* كروت البيانات الأساسية */}
                <div className="grid grid-cols-2 gap-5 mb-8">
                  <div className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm text-center flex flex-col items-center">
                    <FaRulerCombined className="text-3xl text-orange-400 mb-3" />
                    <p className="text-gray-400 text-sm mb-1">المساحة الإجمالية</p>
                    <p className="font-extrabold text-2xl text-gray-800">{data.area} م²</p>
                  </div>
                  <div className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm text-center flex flex-col items-center">
                    <FaBuilding className="text-3xl text-orange-400 mb-3" />
                    <p className="text-gray-400 text-sm mb-1">نوع العقار</p>
                    <p className="font-extrabold text-2xl text-gray-800">{data.type}</p>
                  </div>
                </div>

                {/* السعر - العنصر الأهم */}
                <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                    {/* خلفية جمالية */}
                    <div className="absolute -bottom-10 -right-10 text-gray-800 text-9xl transform rotate-12 opacity-50">
                        <FaDollarSign />
                    </div>
                    <p className="text-gray-400 text-sm mb-1.5 relative z-10">السعر المطلوب للاستثمار</p>
                    <p className="text-5xl font-black text-orange-400 relative z-10 leading-none">
                        {Number(data.price).toLocaleString()} <span className="text-xl font-medium text-white mr-1">دولار</span>
                    </p>
                </div>
              </div>

              {/* زر التواصل الرئيسي - WhatsApp */}
           
            </div>
          </div>
        </div>
      </section>

      {/* 2. قسم التفاصيل والتحليل (Details & Analysis Section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* العمود الرئيسي: الوصف والتحليل */}
          <div className="lg:col-span-2 space-y-10">
            {/* وصف العقار */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100">وصف الفرصة الاستثمارية</h3>
              <div className="prose prose-lg prose-orange max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                {data.details}
              </div>
            </div>

            {/* قسم إضافي مقترح: التحليل المالي (Financial Analysis) */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100 flex items-center gap-3">
                <FaChartLine className="text-orange-500" />
                التحليل الاستثماري المتوقع
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <p className="text-gray-500 text-sm mb-1">عائد إيجاري سنوي متوقع</p>
                    <p className="text-2xl font-bold text-orange-600">6% - 8%</p> {/* بيانات افتراضية، يجب جلبها إذا توفرت */}
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <p className="text-gray-500 text-sm mb-1">نمو رأس المال السنوي</p>
                    <p className="text-2xl font-bold text-orange-600">4% - 6%</p> {/* بيانات افتراضية */}
                </div>
                <div className="md:col-span-2 bg-orange-50 p-6 rounded-xl border border-orange-100 text-orange-950">
                    <p className="font-semibold mb-2">رؤية الراية للاستثمار:</p>
                    <p className="text-sm">هذا العقار يمثل فرصة استثنائية نظراً لموقعه الاستراتيجي الواعد، والذي من المتوقع أن يشهد نمواً كبيراً في الطلب والقيمة الإيجارية خلال السنوات القادمة.</p>
                </div>
              </div>
            </div>
          </div>

          {/* العمود الجانبي: مميزات استثمارية وضمانات */}
          <div className="space-y-8">
            {/* كرت المميزات الاستثمارية */}
            <div className="bg-orange-50 p-8 rounded-3xl border-2 border-orange-100 shadow-inner">
              <h4 className="text-xl font-bold text-orange-950 mb-6 flex items-center gap-3">
                <FaHandHoldingUsd className="text-2xl text-orange-600" />
                لماذا ننصح بهذا الاستثمار؟
              </h4>
              <ul className="space-y-4 text-orange-950">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <div>
                    <p className="font-semibold">موقع استراتيجي</p>
                    <p className="text-sm text-orange-800">قريب من الخدمات والشبكات الحيوية.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <div>
                    <p className="font-semibold">جاهزية الأوراق القانونية</p>
                    <p className="text-sm text-orange-800">طابو وفحص قانوني كامل.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <div>
                    <p className="font-semibold">طلب إيجاري مرتفع</p>
                    <p className="text-sm text-orange-800">منطقة مفضلة للمستأجرين.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* كرت الضمانات/الأوراق (Legal Check) */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md">
                <h4 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-3">
                    <FaFileContract className="text-xl text-gray-500" />
                    الوضع القانوني والوثائق
                </h4>
                <div className="space-y-3">
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-2.5 rounded-lg border">
                        <span className="text-gray-600">نوع الملكية</span>
                        <span className="font-semibold text-gray-800">طابو (ملك صرف)</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-2.5 rounded-lg border">
                        <span className="text-gray-600">الفحص القانوني</span>
                        <span className="font-semibold text-green-600">مكتمل وصحيح</span>
                    </div>
                </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* 3. قسم دعوة لاتخاذ إجراء (Call to Action) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gray-900 text-white p-12 rounded-3xl shadow-2xl text-center flex flex-col items-center gap-6">
            <FaBuilding className="text-6xl text-orange-500" />
            <h2 className="text-3xl font-bold">هل هذه الفرصة مناسبة لمحفظتك الاستثمارية؟</h2>
            <p className="text-gray-300 max-w-2xl">
                فريق خبراء الراية للعقارات جاهز لمناقشة كافة التفاصيل الفنية والمالية، وتقديم استشارة مخصصة لتحديد مدى ملاءمة هذا العقار لأهدافك الاستثمارية.
            </p>
            <a 
                href={`https://wa.me/+972568700632?text=أرغب في الحصول على استشارة استثمارية بخصوص عقار ID: ${data?.title}`} // عدل الرقم ورسالة الـ واتساب
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 bg-white text-gray-900 font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-all"
            >
                <FaWhatsapp className="text-2xl text-green-500" />
                اطلب استشارة مجانية الآن
            </a>
        </div>
      </section>

    </div>
  );
};

export default SingleInvestmentPage;