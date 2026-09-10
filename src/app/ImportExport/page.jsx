export const revalidate = 86400;
import React from 'react';
import Script from 'next/script';
import TradeMap from '@/components/sections/Trademap';
import AddImportExportRequest from '@/components/sections/AddImportExportRequest';
import {
  HiOutlineShieldCheck,
  HiOutlinePlus,
  HiOutlineCheckCircle,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup
} from 'react-icons/hi';

// ===== SEO & Metadata (مستقر ومطوّر بالكامل) =====
export const metadata = {
  metadataBase: new URL("https://www.rayapal.com"),
  title: "شركة استيراد وتصدير في القدس وفلسطين | الاستيراد من الصين | منصة الراية",
  description:
    "أفضل شركة استيراد وتصدير في القدس، رام الله، وأريحا. متخصصون في الاستيراد من الصين إلى فلسطين (كوانزو، إيوو)، التخليص الجمركي بميناء أشدود وحيفا ومعبر الكرامة، الشحن البحري والجوي والتخزين.",
  alternates: {
    canonical: "https://www.rayapal.com/ImportExport",
  },
  keywords: [
    // --- الاستيراد من الصين (كوانزو، إيوو، شينزن، التكاليف) ---
    "الاستيراد من الصين إلى فلسطين", "كيفية الاستيراد من الصين القدس", "شركات الاستيراد من الصين في فلسطين",
    "مكاتب الاستيراد من الصين رام الله", "استيراد بضائع من الصين أريحا", "شحن بضائع من الصين إلى القدس",
    "استيراد من الصين بدون سفر", "شروط الاستيراد من الصين فلسطين", "دليل الاستيراد من الصين فلسطين",
    "أفضل بضائع للاستيراد من الصين", "استيراد بالجملة من الصين", "طلب بضاعة من الصين القدس",
    "استيراد من كوانزو إلى فلسطين", "مكتب شراء في كوانزو القدس", "شحن من كوانزو إلى رام الله",
    "سوق إيوو الصين استيراد فلسطين", "مكتب استيراد في إيوو فلسطين", "استيراد إلكترونيات من شينزن",
    "مترجم تجاري في كوانزو الصين", "فحص بضائع في كوانزو", "شحن جزئي LCL من كوانزو",
    "استيراد مواد بناء من الصين فلسطين", "استيراد أثاث من الصين القدس", "استيراد ملابس من الصين رام الله",
    "استيراد أدوات منزلية من الصين", "استيراد معدات مصانع من الصين", "استيراد قطع غيار سيارات من الصين",
    "استيراد طاقة شمسية من الصين فلسطين", "استيراد بديل رخام من الصين فلسطين", "فحص جودة البضائع في الصين",
    "أسعار شحن الحاوية من الصين إلى فلسطين", "تكلفة شحن حاوية 20 قدم من الصين", "تكلفة شحن حاوية 40 قدم من الصين",
    "جمارك البضائع القادمة من الصين", "وسيط علي بابا في القدس", "شحن FOB من الصين فلسطين", "شحن CIF ميناء أشدود",

    // --- القدس والمناطق ---
    "شركة استيراد وتصدير في القدس", "شركات استيراد وتصدير القدس", "مكتب استيراد وتصدير القدس",
    "أفضل شركة استيراد في القدس", "خدمات التخليص الجمركي القدس", "شحن دولي من وإلى القدس",
    "استيراد بضائع بيت حنينا", "شركة شحن في شعفاط", "استيراد وتصدير كفر عقب", "مكاتب شحن في الرام",
    "تخليص جمركي العيزرية", "استيراد وتصدير صور باهر", "تجار القدس استيراد وتصدير", "إفراج جمركي القدس",
    "شركة استيراد وتصدير في أريحا", "تخليص جمركي معبر الكرامة", "شحن بري عبر معبر الكرامة",
    "مستودعات تخزين في أريحا", "تخزين مبرد أريحا", "شركة استيراد وتصدير في رام الله",
    "مكاتب تخليص جمركي رام الله", "شركات الشحن الدولي في رام الله", "استيراد وتصدير البيرة",
    "تخليص بضائع بيتونيا", "شركة استيراد وتصدير في الخليل", "شركة استيراد وتصدير في نابلس",
    "شركة استيراد وتصدير في جنين", "شركة استيراد وتصدير في طولكرم", "شركة استيراد وتصدير في قلقيلية",

    // --- التخليص الجمركي والموانئ المعنية ---
    "تخليص جمركي ميناء أشدود", "تخليص جمركي ميناء حيفا", "تخليص جمركي مطار بن غوريون",
    "تخليص جمركي معبر الكرامة أريحا", "تخليص جمركي معبر ترقوميا", "شحن حاويات عبر ميناء أشدود",
    "تعرفة الجمارك الفلسطينية", "قيمة الجمرك على البضائع في فلسطين", "حساب الجمرك في فلسطين",
    "إعفاء جمركي فلسطين", "بيان جمركي فلسطين", "مقاصة جمركية القدس وفلسطين",
    "ضريبة القيمة المضافة على الاستيراد فلسطين", "معهد المواصفات للبضائع المستوردة", "بطاقة مستورد فلسطين",

    // --- الشحن اللوجستي وتصدير المنتجات الفلسطينية ---
    "شحن بحري إلى فلسطين", "شحن حاوية كاملة FCL فلسطين", "شحن جزئي تجميعي LCL فلسطين",
    "شحن جوي سريع إلى فلسطين", "تغليف وتعبئة للتصدير", "توزيع بضائع للمتاجر القدس",
    "تصدير المنتجات الفلسطينية للخارج", "تصدير زيت الزيتون الفلسطيني", "تصدير التمور المجففة من أريحا",
    "تصدير تمر المجهول الفلسطيني", "تصدير الحجر والرخام الفلسطيني", "شهادة المنشأ للمنتجات الفلسطينية"
  ],
  openGraph: {
    title: "شركة استيراد وتصدير في القدس وفلسطين | الاستيراد من الصين | منصة الراية",
    description:
      "حلول متكاملة للاستيراد والتصدير، الشحن والتخليص الجمركي للبضائع من الصين والعالم إلى القدس، رام الله، أريحا وكافة مدن فلسطين.",
    url: "https://www.rayapal.com/ImportExport",
    siteName: "الراية العقارية والتجارية",
    locale: "ar_PS",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "الاستيراد والتصدير - الراية القدس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة استيراد وتصدير في القدس | الاستيراد من الصين",
    description: "حلول شحن وتخليص جمركي واستيراد من الصين إلى القدس وفلسطين عبر منصة الراية.",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  category: "Import and Export Services",
};

const ImportExportPage = () => {
  const services = [
    {
      id: "china-import",
      num: "01",
      title: "الاستيراد من الصين إلى فلسطين والقدس",
      badge: "تخصص رئيسي",
      desc: "نوفر خدمات استيراد متكاملة من الصين (كوانزو، إيوو، شينزن، وشنغهاي) إلى القدس، رام الله، وأريحا. نساعدك في التواصل مع المصانع الصينية، فحص جودة البضائع، ترتيب الشحن البحري والجوي، وإجراءات التخليص الجمركي المباشر.",
      features: [
        "البحث عن موردين ومصانع موثوقة في أسواق كوانزو وإيوو",
        "فحص الجودة والمعاينة الفنية للمعدات والبضائع قبل الشحن",
        "شحن حاويات كاملة (FCL) وشحن جزئي تجميعي (LCL)",
        "تخليص جمركي شامل وتوصيل إلى القدس، رام الله، والضفة"
      ],
      img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "shipping",
      num: "02",
      title: "الشحن الدولي (بحري - جوي - بري)",
      badge: "لوجستيات عالمية",
      desc: "نقدم خدمات الشحن الدولي من الصين، أوروبا، تركيا، ودول الخليج إلى فلسطين عبر موانئ حيفا وأشدود ومطار بن غوريون ومعبر الكرامة بأفضل تكلفة وأعلى أمان.",
      features: [
        "شحن حاويات 20 قدم و40 قدم بأسعار تنافسية",
        "شحن جوي سريع للبضائع العاجلة إلى القدس ورام الله",
        "شحن بري ونقل لوجستي يربط فلسطين والمنطقة",
        "تتبع الشحنات أونلاين لحظة بلحظة"
      ],
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "customs",
      num: "03",
      title: "التخليص الجمركي في القدس والموانئ والمعابر",
      badge: "إفراج جمركي سريع",
      desc: "فريقنا متمرس في معاملات التخليص الجمركي في معبر الكرامة (أريحا)، الموانئ، والمطارات. نضمن الإفراج الجمركي السريع للبضائع المستوردة وإصدار المعاملات الرسمية.",
      features: [
        "تقديم الإقرارات والبيانات الجمركية ومتابعة المقاصة",
        "تخليص جمركي للسيارات والمعدات والبضائع العامة",
        "استشارات حول الرسوم الجمركية والإعفاءات",
        "تسهيل إجراءات تصدير المنتجات الفلسطينية"
      ],
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "warehousing",
      num: "04",
      title: "التخزين في أريحا ورام الله والتوزيع",
      badge: "مستودعات مجهزة",
      desc: "نوفر مستودعات تخزين آمنة ومجهزة في أريحا ورام الله والقدس. نقدم خدمات إدارة المخزون، إعادة التغليف والتعبئة، والتوزيع السريع لكافة مدن الضفة الغربية.",
      features: [
        "مستودعات تخزين مبردة وعادية",
        "إدارة المخزون باستخدام أنظمة لوجستية حديثة",
        "تغليف وتعبئة البضائع حسب مواصفات التصدير",
        "شبكة توزيع تغطي القدس، رام الله، أريحا، الخليل ونابلس"
      ],
      img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "brokerage",
      num: "05",
      title: "الوساطة التجارية وتصدير المنتجات الفلسطينية",
      badge: "تصدير عالمي",
      desc: "نربط التجار والشركات في القدس وفلسطين بالأسواق العالمية. نساعدك في تصدير منتجات زيت الزيتون، التمور من أريحا، والحجر والرخام، مع ترتيب المعاملات المالية.",
      features: [
        "إيجاد مشتريين وموردين موثوقين عالمياً",
        "تصدير المنتجات الزراعية والصناعية الفلسطينية",
        "استخراج شهادات المنشأ والمطابقة الدولية",
        "تسهيل عمليات الدفع والتحويلات المالية الشفافة"
      ],
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // سكشن "لماذا نحن" القديم الأصلي
  const whyUs = [
    {
      icon: <HiOutlineGlobeAlt className="text-3xl text-amber-500" />,
      title: "شبكة عالمية واسعة",
      desc: "علاقات مع شركاء في أكثر من 50 دولة، نضمن لك وصولاً إلى أفضل الأسواق والموردين."
    },
    {
      icon: <HiOutlineUserGroup className="text-3xl text-amber-500" />,
      title: "فريق خبير متكامل",
      desc: "نمتلك كوادر متخصصة في الشحن، الجمارك، والتجارة الدولية لتقديم حلول شاملة."
    },
    {
      icon: <HiOutlineShieldCheck className="text-3xl text-amber-500" />,
      title: "الثقة والشفافية",
      desc: "نعمل بشفافية كاملة، ونضمن حقوقك في كل صفقة مع عقود واضحة ومتابعة مستمرة."
    }
  ];

  const faqs = [
    {
      q: "كيف أبدأ الاستيراد من الصين إلى القدس أو رام الله عبر منصة الراية؟",
      a: "يمكنك التواصل معنا وتزويدنا بتفاصيل المنتجات أو المصانع في الصين (كوانزو أو إيوو). نقوم بتنسيق فحص الجودة، وحساب تكاليف الشحن البحري أو الجوي، والتخليص الجمركي في ميناء أشدود أو معبر الكرامة وصولاً لمستودعك."
    },
    {
      q: "ما هي تكلفة شحن الحاوية 20 قدم أو 40 قدم من الصين إلى فلسطين؟",
      a: "تختلف التكلفة بحسب الموسم وميناء التحميل (نينغبو، شنغهاي، كوانزو) ونوع الشحن (FOB أو CIF). نضمن لك الحصول على أفضل سعر شحن مع تغطية التأمين الجمركي."
    },
    {
      q: "هل توفرون خدمة التخليص الجمركي في معبر الكرامة بأريحا وميناء أشدود؟",
      a: "نعم، لدينا طاقم متخصص للتخليص الجمركي في كافة المنافذ: ميناء أشدود، ميناء حيفا، معبر الكرامة (أريحا)، ومطار بن غوريون لضمان سرعة الإفراج عن البضائع."
    },
    {
      q: "كيف يتم تصدير المنتجات الفلسطينية كزيت الزيتون والتمور إلى الخارج؟",
      a: "نوفر إجراءات التصدير كاملة بما فيها استخراج شهادة المنشأ، ترتيب التغليف والتعبئة المطابقة للمواصفات الدولية، والشحن الجوي أو البحري للأسواق العالمية."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.rayapal.com/ImportExport/#webpage",
        "url": "https://www.rayapal.com/ImportExport",
        "name": "شركة استيراد وتصدير في القدس وفلسطين | الاستيراد من الصين | منصة الراية",
        "description": "خدمات الاستيراد والتصدير، الاستيراد من الصين، التخليص الجمركي، والشحن في القدس، رام الله، وأريحا.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.rayapal.com/#website",
          "url": "https://www.rayapal.com",
          "name": "الراية العقارية والتجارية",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.rayapal.com/ImportExport/#organization",
        "name": "الراية للاستيراد والتصدير والتجارة الدولية",
        "url": "https://www.rayapal.com/ImportExport",
        "telephone": "+972568700632",
        "email": "info@rayapal.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jerusalem",
          "addressCountry": "PS",
        },
        "areaServed": [
          { "@type": "City", "name": "Jerusalem" },
          { "@type": "City", "name": "Ramallah" },
          { "@type": "City", "name": "Jericho" },
          { "@type": "Country", "name": "China" },
          { "@type": "Country", "name": "Palestine" }
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Script
        id="import-export-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- HERO SECTION الأصلي القديم --- */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-amber-50/40 via-white to-amber-50/20">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-xs font-bold mb-6">
            منصة الراية للاستيراد والتصدير
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            نربط العالم <span className="text-amber-500">بجسر تجاري</span> من القدس
          </h1>

          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-10">
            من خلال شبكتنا الواسعة من الموردين والمشترين حول العالم، نقدم حلولاً متكاملة للاستيراد والتصدير تضمن وصول منتجاتك بأمان وسرعة.
          </p>

          <div className="flex justify-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/+972568700632?text=مرحباً شركة الراية، أود الاستفسار عن خدمات الاستيراد والتصدير.`}
              className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-amber-500 hover:text-slate-900 transition-all shadow-xl shadow-slate-200"
            >
              <HiOutlinePlus size={20}/> اطلب عرض سعر الآن
            </a>
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <TradeMap />
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold text-sm bg-amber-50 px-4 py-1.5 rounded-full">خدماتنا الشاملة</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-3">حلول الاستيراد والتصدير والشحن والتخزين</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">تغطية متكاملة لخدمات الشحن البحري والجوي، فحص البضائع في الصين، والتخليص الجمركي.</p>
        </div>

        <div className="space-y-20">
          {services.map((service, idx) => (
            <div 
              key={service.id}
              id={service.id}
              className={`flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400/30 to-amber-200/30 rounded-[2.5rem] blur-lg transition-all"></div>
                <div className="relative h-72 md:h-[400px] w-full rounded-[2.5rem] overflow-hidden border border-amber-200 shadow-sm bg-amber-50/50">
                  <img 
                    src={service.img}
                    alt={`${service.title} - شركة استيراد وتصدير في القدس`}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute bottom-6 right-6 bg-amber-500 text-slate-950 font-black text-xl h-12 w-12 rounded-xl flex items-center justify-center shadow-sm">
                    {service.num}
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-md">
                  {service.badge}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-3 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                  {service.desc}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-slate-800 text-xs md:text-sm font-semibold">
                      <HiOutlineCheckCircle className="text-amber-500 shrink-0" size={18} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY US SECTION الأصلي القديم --- */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-bold text-xs bg-amber-50 px-4 py-1.5 rounded-full">لماذا نحن</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-3">ثقتكم تبدأ من خبرتنا</h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">نعمل بمعايير عالمية ونقدم خدمات لوجستية وتجارية تلبي تطلعاتكم.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyUs.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ADD REQUEST SECTION --- */}
      <AddImportExportRequest />

      {/* --- FAQ SECTION (آخر سكشن في الصفحة بعد تقديم الطلب) --- */}
      <section className="max-w-5xl mx-auto px-6 py-16 mb-12">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-bold text-xs bg-amber-50 px-4 py-1.5 rounded-full">الأسئلة الشائعة</span>
          <h2 className="text-3xl font-black text-slate-900 mt-3 mb-2">دليل وإرشادات الاستيراد والتصدير والتخليص الجمركي</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ImportExportPage