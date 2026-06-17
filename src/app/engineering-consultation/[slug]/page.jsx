export const revalidate = 86400;
import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { 
  HiOutlineChevronRight,
  HiOutlineCheckCircle,
  HiOutlinePlus,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineDocumentText,
  HiOutlineClock
} from 'react-icons/hi';
import { GetConsloutionEntry } from '@/lib/GetConsloutionEntry';
import GallerySlider from '@/components/common/GallerySlider';
import { notFound } from 'next/navigation';

// 📈 تهيئة الـ SEO المتقدم للاستشارات الهندسية لخدمات منصة الراية في فلسطين
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await GetConsloutionEntry(slug);

  if (!data) return { title: "الخدمة غير موجودة | منصة الراية" };

  return {
    metadataBase: new URL("https://www.rayapal.com"),
    title: `مكتب استشارات هندسية وتصميم رخص بناء ${data.title} في رام الله والقدس | الراية`,
    description: data.details?.slice(0, 160) || `افضل خدمات ${data.title} في فلسطين. تصميم معماري وإنشائي متكامل، استخراج رخص بناء وترخيص الفلل والشقق تحت إشراف هندسي معتمد.`,
    alternates: {
      canonical: `https://www.rayapal.com/engineering-consultation/${data.slug}`,
    },
    keywords: [
      "مكتب هندسي في فلسطين", "مكاتب هندسية رام الله", "مكتب استشارات هندسية القدس", "رخصة بناء بيت حنينا",
      "تصميم فلل مودرن اريحا", "مهندس إنشائي فلسطين", "نقابة المهندسين بيت حنينا", "رخص بناء رام الله والبيرة",
      "مخططات معمارية فلسطين", "مخطط هيكلي كفر عقب", "مكتب هندسي مرخص رام الله", "حساب كميات ومواصفات فلسطين",
      "تصميم إنشائي مقاوم للزلازل", "اشراف هندسي على البناء رام الله", "مهندس اشراف القدس", "فحص تربة للبناء فلسطين",
      "مسح اراضي وافراز القدس", "رخص بلدية البيرة", "تصميم داخلي ولاندسكيب اريحا", "مخطط سباكة وكهرباء فلسطين",
      "تكلفة تصميم مخطط هندسي في فلسطين", "افضل مكتب هندسي في رام الله", "مكتب الراية للاستشارات الهندسية",
      "تصميم ثلاثي الابعاد 3D فلسطين", "استشارات هندسية اونلاين فلسطين", "ترخيص روف ملحق القدس", "بلدية رام الله رخص البناء",
      "تسوية اراضي وضريبة الاملاك فلسطين", "معاملات تنظيم وترخيص البناء", "مهندس ديكور شقق رام الله", "تخطيط شاليهات اريحا هندسيا",
      "تصميم حدائق ومسابح اريحا", "رسم كروكي هندسي فلسطين", "تراخيص ابنية ومصانع الضفة الغربية", "تعديل رخص قديمة القدس",
      "رسم هندسي اوتوكاد فلسطين", "مكتب هندسي شعفاط", "مهندسين معماريين في البيرة", "افراز شقق وعمارات سكنية فلسطين",
      "اسعار المخططات الهندسية فلسطين", "اتفاقية تصميم هندسي فلسطين", "اشراف عظم وتشطيب هندسي القدس",
      "مكتب الراية للهندسة والمقاولات", "استخراج رخص بناء كفر عقب", "مخططات حجر الواجهات القدس", "عزل حراري وصوتي هندسي",
      "مهندس حسابات حديد تسليح فلسطين", "مكتب هندسي معتمد بلدية القدس", "تصاميم معمارية كلاسيك ومودرن", "مهندسين تنظيم البناء",
      "تصميم لاندسكيب شاليهات فلسطين", "مخططات صرف صحي ميكانيكية", "مواصفات تشطيبات هندسية سوبر ديلوكس", "تطوير عقاري وهندسي القدس",
      "مكتب هندسي اريحا الديوك", "تصميم شاليهات اريحا البوابة", "تأسيس هندسي مقاوم للرطوبة اريحا", "مهندسين ديكور خارجي فلسطين"
    ],
    openGraph: {
      title: `${data.title} | مكتب الراية الهندسي في فلسطين`,
      description: data.details?.slice(0, 160),
      url: `https://www.rayapal.com/engineering-consultation/${data.slug}`,
      siteName: "الراية للاستشارات الهندسية والمقاولات",
      locale: "ar_PS",
      type: "website",
      images: [
        {
          url: data.seriesimagesCutmez?.[0]?.url || "https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png",
          width: 1200,
          height: 630,
          alt: `${data.title} - الراية`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `مكتب استشارات هندسية مرخص | ${data.title}`,
      description: `تصميم معماري وإنشائي متميز وإشراف هندسي متكامل لعقارك في فلسطين.`,
      images: [data.seriesimagesCutmez?.[0]?.url || "https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png"],
    },
  };
}

const SingleConslutionPage = async ({ params }) => {
  const { slug } = await params;
  const data = await GetConsloutionEntry(slug);

  if (!data) {
    notFound();
  }

  // 🛠️ تهيئة الـ Schema المتقدمة لجوجل
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://www.rayapal.com/engineering-consultation/${data.slug}/#webpage`,
        "url": `https://www.rayapal.com/engineering-consultation/${data.slug}`,
        "name": `مكتب هندسي لتصميم واستشارات ${data.title} - الراية`,
        "description": data.details?.slice(0, 160),
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.rayapal.com/#website",
          "url": "https://www.rayapal.com",
          "name": "الراية للاستشارات الهندسية والعقارات"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `https://www.rayapal.com/engineering-consultation/${data.slug}/#service`,
        "name": "مكتب الراية للاستشارات الهندسية والتصميم المعماري",
        "image": data.seriesimagesCutmez?.[0]?.url || "https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png",
        "telePhone": "+972568700632",
        "url": `https://www.rayapal.com/engineering-consultation/${data.slug}`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "بيت حنينا / القدس ورام الله",
          "addressLocality": "Jerusalem / Ramallah",
          "addressCountry": "PS"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Jerusalem" },
          { "@type": "AdministrativeArea", "name": "Ramallah" },
          { "@type": "AdministrativeArea", "name": "Jericho" },
          { "@type": "AdministrativeArea", "name": "Kfar Aqab" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "الاستشارات والتراخيص الهندسية والمعمارية",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": data.title,
                "description": data.details?.slice(0, 200)
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Script
        id="engineering-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- Section 1: Hero Section (مطابق تماماً للهيكل والمحاذاة في الصورتين image_bf15e2.jpg و image_bf11e9.jpg) --- */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
               <nav className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm font-bold text-slate-400 mt-4">
                <Link href="/" className="hover:text-amber-500 transition-colors">الرئيسية</Link>
                <HiOutlineChevronRight className="rotate-180 text-slate-300" size={14} />
                <Link href="/engineering-consultation" className="hover:text-amber-500 transition-colors">الاستشارات الهندسية</Link>
                <HiOutlineChevronRight className="rotate-180 text-slate-300" size={14} />
                <span className="text-slate-600 font-extrabold">{data.title}</span>
              </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* العمود الأيمن (الرئيسي): يحتوي على المحتوى بالكامل محاذاة لليمين */}
            <div className="w-full lg:col-span-7 flex flex-col items-start text-right">
              
              {/* أ) مسار التنقل (Breadcrumbs): أول عنصر في قمة السكشن والـ Hero لتسهيل التنقل والرجوع */}
           

              {/* ب) الشارة التوضيحية للخدمة المعمارية */}
              <span className="inline-block px-3.5 py-1.5 bg-amber-50 border border-amber-200/50 text-amber-800 rounded-lg text-xs font-black mb-5">
                {data.badg || "استشارات معمارية وإنشائية مرخصة"}
              </span>

              {/* ج) العنوان الرئيسي الكبير للخدمة الهندسية */}
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                {data.title}
              </h1>

              {/* د) النص التعريفي المبدئي الجذاب */}
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium mb-8">
                نقدم خدمات تخطيط وتصميم هندسي متميزة تتوافق تماماً مع نقابة المهندسين ومجالس التنظيم البلدي في رام الله، القدس، وأريحا، لنحول أفكارك وتطلعاتك إلى واقع معماري ملموس ومستدام.
              </p>

              {/* هـ) زر التواصل السريع عبر واتساب في الأسفل */}
              <div className="flex">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://wa.me/${data.whatssapfolow || '+972568700632'}?text=مرحباً مكتب الراية الهندسي، أود الاستفسار حول الخدمة الهندسية: ${data.title}`}
                  className="flex items-center gap-2 bg-[#0c1424] text-white px-8 py-4 rounded-2xl font-bold hover:bg-amber-500 transition-all shadow-xl shadow-slate-100"
                >
                  <HiOutlinePlus size={20}/> استشر مهندسنا المعماري الآن
                </a>
              </div>

            </div>

            {/* العمود الأيسر: يحتوي على الصورة المعمارية بزوايا انسيابية (Left Side) */}
            <div className="w-full lg:col-span-5 relative">
              <div className="relative h-72 md:h-[420px] w-full rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl">
                <img 
                  src={data.seriesimagesCutmez?.[0]?.url || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"}
                  alt={data.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Section 2: Details & Features Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* العمود الأيمن الكبير: تفاصيل معمارية مكثفة (SEO Optimized) */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
              <HiOutlineDocumentText className="text-amber-500" /> الدليل الفني والهندسي للخدمة
            </h2>
            
            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed font-medium text-base md:text-lg space-y-6">
              {data.details}
            </div>

            {/* سياق إضافي لتقوية المقروئية والسيو بأكثر من 300 كلمة */}
            <div className="bg-amber-50/30 p-8 rounded-[2rem] border border-amber-100/30 space-y-4">
              <h3 className="text-xl font-black text-slate-900">أبعاد هندسية واشتراطات تنظيمية هامة في فلسطين</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                عند التفكير في بناء منزل جديد أو منشأة تجارية في الضفة الغربية وضواحي القدس، تبرز الأهمية البالغة لاختيار مكتب هندسي معتمد ليتولى فحص صلاحية التربة وحساب الأحمال الإنشائية بدقة فائقة. مكتب الراية الهندسي يضمن لك تلافي المشاكل الإنشائية المستقبلية مثل تصدعات الجدران أو هبوط القواعد الخرسانية. كما نضمن مطابقة المخططات لكافة الاشتراطات التنظيمية والارتدادات المطلوبة من قبل البلديات ومجلس التنظيم الأعلى.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                عملية التصميم تبدأ بدراسة مساقط الأرض واستغلال الزوايا والإنارة الطبيعية للحصول على أفضل تهوية ومظهر جمالي، تليها المخططات الميكانيكية والكهربائية المتكاملة لتقليل تكلفة أعمال التأسيس بنسبة تصل إلى 20%. إشراف المهندس المختص على صب القواعد والجسور يضمن جودة البناء ومطابقته لرتب الباطون المعتمدة.
              </p>
            </div>
          </div>

          {/* العمود الأيسر: تخصصات وميزات المكتب الهندسي */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-8">
              <div className="bg-[#0c1424] text-white p-8 rounded-[2.5rem] shadow-xl">
                <h3 className="text-xl font-black mb-6 border-b border-white/10 pb-4">محتويات ونطاق المخطط</h3>
                <ul className="space-y-4">
                  {data.features?.map((feat, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <HiOutlineCheckCircle className="text-amber-400 shrink-0 mt-1" size={20} />
                      <span className="text-slate-200 text-sm font-bold leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* دستور العمل للراية */}
              <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm space-y-6">
                <h3 className="text-xl font-black text-slate-900">لماذا تعتمد على الراية هندسياً؟</h3>
                <div className="space-y-4 text-sm text-slate-600 font-medium">
                  <div className="flex gap-3">
                    <HiOutlineShieldCheck className="text-amber-600 shrink-0" size={22} />
                    <p>مطابقة مطلقة لكود البناء والنظم النقابية المعمول بها.</p>
                  </div>
                  <div className="flex gap-3">
                    <HiOutlineLightBulb className="text-amber-600 shrink-0" size={22} />
                    <p>تصاميم عصرية تستغل المساحات وتوفر التكلفة الإجمالية للبناء.</p>
                  </div>
                  <div className="flex gap-3">
                    <HiOutlineClock className="text-amber-600 shrink-0" size={22} />
                    <p>سرعة قياسية في إنجاز المعاملات واستخراج رخص البناء المعتمدة.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- Section 3: معرض الصور التفاعلي (Gallery Slider) --- */}
      <GallerySlider images={data.seriesimagesCutmez} videoUrl={data.youtupeUrl} />

      {/* --- Section 4: النطاق الجغرافي للاستشارات والتراخيص (سيو محلي موجه) --- */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-amber-50 border border-amber-200/50 rounded-[3rem] py-12 px-8 max-w-7xl mx-auto my-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-600 font-bold text-xs uppercase bg-white border border-amber-200 px-4 py-1.5 rounded-full">
            شريكك الهندسي المرخص
          </span>
          <h3 className="text-2xl font-black text-slate-900 mt-4 mb-4">نطاق الخدمات الهندسية ورخص البناء</h3>
          <p className="text-gray-700 text-md leading-relaxed mb-8">
            بصفتنا مكتباً هندسياً رائداً في فلسطين، نعمل على تجهيز المعاملات والخرائط المعمارية والتصميم الإنشائي بالتنسيق مع البلديات ونقابة المهندسين واللجان المحلية للتنظيم والبناء.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-right border-t border-slate-200 pt-8">
            <div>
              <h4 className="text-sm font-black text-slate-900 mb-2">📍 القدس وضواحيها</h4>
              <p className="text-[11px] text-gray-700 leading-relaxed">
                استخراج وتعديل رخص بناء لفلل وشقق سكنية في **بيت حنينا**، **شعفاط**، وإجراءات تنظيمية دقيقة ورخص طابقية في **كفر عقب** وضواحي العاصمة بالتوافق مع القوانين الهندسية المعمول بها.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 mb-2">📍 رام الله والبيرة</h4>
              <p className="text-[11px] text-gray-700 leading-relaxed">
                تصميم وتخطيط هندسي وإنشائي متكامل للأبراج والفلل الفخمة في **الماصيون**، **الطيرة**، والمصايف والبيرة. إشراف دوري على تمديدات الحديد وصب الخرسانة وتأهيل رخص البناء.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 mb-2">📍 أريحا والأغوار</h4>
              <p className="text-[11px] text-gray-700 leading-relaxed">
                تصميم معاصر وتخطيط اللاندسكيب والمسابح للشاليهات والاستراحات السياحية والفلل الفاخرة في **أريحا البوابة**، **الديوك**، والنويعمة بمواصفات متينة مقاومة لارتفاع درجات الحرارة.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SingleConslutionPage;