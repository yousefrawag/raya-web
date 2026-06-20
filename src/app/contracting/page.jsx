export const revalidate = 86400;
import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { 
  HiOutlineChevronRight,
  HiOutlineOfficeBuilding,
  HiOutlineShieldCheck,
  HiOutlinePlus,
  HiOutlineUserGroup,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineHome
} from 'react-icons/hi';
import { GetAllconstraction } from '@/lib/GetAllconstraction';

// 📈 تهيئة الـ SEO المتقدم لخدمات المقاولات العامة والبناء لمنصة الراية في فلسطين
export const metadata = {
  metadataBase: new URL("https://www.rayapal.com"),

  title: "شركة مقاولات عامة وبناء عظم وتشطيب في القدس ورام الله | الراية العقارية",
  
  description: "افضل شركة مقاولات في رام الله، القدس، وأريحا. نقدم خدمات بناء العظم، التشطيب الداخلي والخارجي الخارق، مقاولات هدم وبناء، وترميم وتأهيل المباني بأعلى جودة مع الراية.",
  
  alternates: {
    canonical: "https://www.rayapal.com/contracting",
  },

  keywords: [
    // ⬇️ كلماتك الأصلية كاملة ومضمونة 100% بدون أي تعديل أو حذف:
    "شركة مقاولات في فلسطين", "مكتب مقاولات رام الله", "شركات مقاولات في القدس", 
    "مقاول بناء عظم فلسطين", "سعر متر البناء عظم في فلسطين", "تشطيب شقق ومباني رام الله", 
    "مقاولات ترميم وتجديد القدس", "تكلفة تشطيب شقة في فلسطين", "بناء فلل وشاليهات أريحا", 
    "شركة بناء واعمار فلسطين", "اسعار الحفر والخرسانة فلسطين", "مقاولات عامة كفر عقب", 
    "تشطيب سوبر ديلوكس القدس", "حساب تكلفة بناء بيت في فلسطين", "دليل شركات المقاولات فلسطين",
    "الراية للمقاولات العامة", "شركة الراية للبناء والتشطيب", "تعهدات ومقاولات انشائية فلسطين",
    "بناء اسكانات وعمارات رام الله", "تشطيب واجهات حجر قدسي", "عزل اسطح ومباني فلسطين",
    "مقاول في بيت حنينا", "بناء عظم بيت حنينا", "تشطيب داخلي بيت حنينا", "تجديد بيوت القدس القديمة",
    "مقاولات كفر عقب", "بناء شقق عظم كفر عقب", "افضل مقاول في رام الله", "تعهدات بناء البيرة",
    "مقاولات بناء شاليهات اريحا", "بناء فلل حديثة اريحا البوابة", "مقاول تشطيبات في اريحا",
    "تأسيس سباكة وكهرباء فلسطين", "ديكورات وتجهيز محلات تجارية رام الله", "مقاول عظم مع المواد فلسطين",

    // ➕ الإضافات والتوسيعات الجديدة لتقوية الـ SEO الشامل:
    "مكاتب هندسة ومقاولات في الضفة", "شركات تعهدات مرخصة فلسطين", "تكلفة صبة الخرسانة في رام الله",
    "تأسيس قواعد وعواميد بنايات", "حديد تسليح ومصانع باطون فلسطين", "تكلفة بناء فيلا عظم", 
    "مخططات بناء هندسية عظم", "حفر وتجهيز اراضي البناء", "جبسم بورد وديكورات اسقف",
    "قصارة وتكحيل جدران فلسطين", "تركيب بلاط وبورسلان نخب اول", "دهانات مقاومة للرطوبة والعفن",
    "تعهدات بناء شعفاط", "ترميم عقارات القدس وضواحيها", "رخص بناء بلدية القدس", 
    "تشطيبات فاخرة في عناتا والرام", "تجهيز مسابح وحدائق في اريحا", "استثمار شاليهات اريحا الديوك", 
    "تخطيط لاندسكيب واستراحات اريحا", "بناء اسوار وتأمين خصوصية اريحا", "مقاول بناء قصور وفلل اريحا",
    
    // 🎯 عبارات بحثية طويلة ومستهدفة (Long-tail Keywords):
    "كم سعر متر التشطيب تسليم مفتاح في رام الله", "افضل شركة مقاولات لبناء الفلل في فلسطين",
    "تجديد البيوت والمباني القديمة بدون هدم", "اسعار حجر جماعين وحجر قباطية للواجهات",
    "عزل مائي وحراري للأسطح والواجهات بحرفية", "شركات مقاولات وتطوير عقاري في كفر عقب",
    "مواصفات باطون ب300 وب350 في الورش الفلسطينية", "اتفاقية عقد مقاولة بناء عظم مع المواد",
    "تكلفة تأسيس شبكة كهرباء وصرف صحي للشقق", "دليل مقاولي البناء والاعمار في القدس ورام الله"
  ],

  openGraph: {
    title: "شركة مقاولات عامة وبناء متكامل | منصة الراية",
    description: "ننفذ مشاريع بناء العظم والتشطيبات الفاخرة للفلل، الإسكانات، والمشاريع التجارية في القدس، رام الله، وأريحا بأعلى معايير الجودة.",
    url: "https://www.rayapal.com/contracting",
    siteName: "الراية العقارية والمقاولات",
    locale: "ar_PS",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png",
        width: 1200,
        height: 630,
        alt: "المقاولات العامة والبناء - الراية",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "شركة تعهدات ومقاولات عامة في فلسطين | الراية",
    description: "من الحفر وحتى تسليم المفتاح، نبني عقارك بأجود المواد الإنشائية وأمهر الأيدي العاملة في الضفة وضواحي القدس.",
    images: ["https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png"],
  },
  category: "General Contracting and Construction",
};

const ContractingPage = async () => {
  const data = await GetAllconstraction()
  
  const contractingServices = [
    {
      id: "structural",
      num: "01",
      title: "بناء العظم والهياكل الخرسانية المسلحة",
      badge: "أساسات مقاومة للأحمال والزلازل",
      desc: "نبدأ معكم من نقطة الصفر؛ تشمل خدماتنا أعمال الحفر، تسوية التربة، صب القواعد والأساسات والرقاب، وبناء الجدران الاستنادية وحصائر حديد التسليح المتينة. نلتزم بأعلى رتب الخرسانة الجاهزة (B300 وما فوق) ومطابقة سماكات الحديد للكود الهندسي لضمان هيكل خرساني صلب يدوم لأجيال، سواء لعمارة سكنية في رام الله أو فيلا خاصة بالقدس.",
      features: ["حفر وتطهير الموقع بالكامل وتجهيز التربة الأساسية", "صب قوالب خرسانية مسلحة مطابقة للمواصفات النقابية", "بناء الطوب الحراري والعازل بحرفية واتزان متناهي"],
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "finishing",
      num: "02",
      title: "التشطيبات الفاخرة وتلبيس الحجر الطبيعي",
      badge: "تسليم مفتاح / سوبر ديلوكس",
      desc: "نمنح العقار هويته الجمالية النهائية عبر تشطيبات داخلية وخارجية متكاملة. يتولى طاقم التعهدات لدينا أعمال القصارة (اللياسة)، تركيب الأرضيات والبورسلان، تمديدات الكهرباء والصرف الصحي المضمونة، الديكورات الجبسية الحديثة، ودهانات الجدران المقاومة للرطوبة، إلى جانب تلبيس الواجهات بأرقى أنواع الحجر القدسي وحجر جماعين المتميز.",
      features: ["تأسيس شبكات البنية التحتية الداخلية بجودة ممتازة", "تركيب بورسلان ورخام نخب أول فرز نقي", "عزل مائي وحراري للأسطح والواجهات بأحدث المواد"],
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "resorts",
      num: "03",
      title: "بناء الشاليهات والاستراحات السياحية العصرية",
      badge: "تخصصنا الإنشائي في أريحا البوابة",
      desc: "نظراً للنمو الاستثماري المتسارع في أريحا, نفرد قسماً خاصاً لبناء وتجهيز الشاليهات السياحية من الألف إلى الياء. ندمج بين سرعة التنفيذ والجمالية العالية؛ من حفر وبناء المسابح العصرية بأنظمة فلترة متطورة، وتخطيط الساحات الخارجية (اللاندسكيب)، وبناء غرف الضيافة الحديثة والمظلات الخشبية (البرجولات) لتجهيز مشروع استثماري مدر للأرباح.",
      features: ["تنفيذ مسابح انسيابية (Overflow) معزولة بالكامل", "تجهيز الحدائق وأنظمة الري الحديثة والنوافير المتطورة", "بناء أسوار خرسانية شاهقة لتأمين خصوصية كاملة للمصطافين"],
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "restoration",
      num: "04",
      title: "الترميم المعماري الشامل وتأهيل المباني القديمة",
      badge: "إحياء المساحات وإضافة الملاحق السكنية",
      desc: "نمتلك الخبرة الحساسة اللازمة لترميم البيوت القديمة والمحافظة على طابعها المعماري الخاص في ضواحي القدس، مع تدعيمها إنشائياً لمقاومة عوامل الزمن. كما نقدم خدمات التوسعة الأفقية والعمودية، وبناء الملاحق (الروف)، ومعالجة الشروخ والتصدعات الخطيرة وإعادة إحياء الواجهات القديمة لتستعيد رونقها الاستثماري وقيمتها السوقية العليا.",
      features: ["تدعيم الأعمدة والجسور الخرسانية المتهالكة هندسياً", "تحديث شبكات المياه والصرف القديمة بدون تدمير الهيكل", "تعديل المساقط الإنشائية وتوسيع الغرف داخلياً بحرية وعناية"],
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // 🛠️ تم تمديد وتطوير الـ Schema وإضافة الـ FAQPage لتغطية كافة المدن جغرافياً بذكاء
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.rayapal.com/contracting/#webpage",
        "url": "https://www.rayapal.com/contracting",
        "name": "شركة مقاولات عامة وتعهدات بناء في فلسطين - الراية",
        "description": "نقدم خدمات بناء العظم والتشطيبات الكاملة وبناء الفلل والشاليهات في القدس، رام الله، وأريحا بمواصفات هندسية دقيقة.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.rayapal.com/#website",
          "url": "https://www.rayapal.com",
          "name": "الراية العقارية"
        }
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.rayapal.com/contracting/#business",
        "name": "الراية للمقاولات العامة وبناء العظم والتشطيب",
        "image": "https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png",
        "telePhone": "+972568700632",
        "url": "https://www.rayapal.com/contracting",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "حي بيت حنينا / رام الله وضواحيها",
          "addressLocality": "Jerusalem / Ramallah / Jericho",
          "addressCountry": "PS"
        },
        // ➕ إضافة النطاق الجغرافي الموسع لإخبار محرك البحث بتغطية بقية المدن بالتساوي
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Jerusalem" },
          { "@type": "AdministrativeArea", "name": "Ramallah" },
          { "@type": "AdministrativeArea", "name": "Jericho" },
          { "@type": "AdministrativeArea", "name": "Al-Bireh" },
          { "@type": "AdministrativeArea", "name": "Kfar Aqab" }
        ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "31.8265",
          "longitude": "35.2214"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "17:50"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "خدمات التعهدات والمقاولات الإنشائية",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "بناء عظم وهياكل خرسانية وتعهدات إنشائية",
                "description": "أعمال الحفر وتأسيس القواعد وصب الخرسانة المسلحة وتجهيز الأبراج والفلل الإسكانية في فلسطين."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "التشطيبات الفاخرة سوبر ديلوكس وتلبيس الحجر",
                "description": "تلبيس الحجر القدسي وأعمال القصارة والدهانات والكهرباء والسباكة والفرش الكامل للتسليم الفوري."
              }
            }
          ]
        }
      },
      // ➕ إضافة الـ FAQ Schema لمساعدة الأسئلة الشائعة على الظهور بشكل احترافي في جوجل
      {
        "@type": "FAQPage",
        "@id": "https://www.rayapal.com/contracting/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ما هي المزايا التي توفرها شركة الراية عند بناء العظم؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نحن نوفر عقوداً قانونية متكاملة تضمن جودة الاسمنت والحديد المسلح المعتمد من نقابة المهندسين ومختبرات فحص المواد مع الالتزام التام بالمخططات الهندسية المعمارية والإنشائية، وتأمين كادر عمالي ماهر ذو خبرة طويلة ببناء الفلل والإسكانات."
            }
          },
          {
            "@type": "Question",
            "name": "هل يمكنني التعاقد معكم على التشطيب الداخلي فقط دون العظم؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "بكل تأكيد. نقدم خدمات التشطيب الجزئي أو الكلي للمباني والشقق المستلمة على العظم. نضع باقة مخصصة تشمل أعمال الديكور والجبسم بورد، التمديدات الصحية والكهربائية الفنية، والدهانات الفاخرة بناءً على رغبة العميل وبما يتناسب مع ميزانيته."
            }
          },
          {
            "@type": "Question",
            "name": "ما هي المدن والمناطق التي تغطيها شركة الراية للمقاولات؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تغطي طواقمنا ومعداتنا الإنشائية كافة أحياء وضواحي القدس (بيت حنينا، شعفاط، كفر عقب) بالإضافة إلى مدينة رام الله والبيرة بالكامل (الماصيون، الطيرة، المصايف) وجميع مشاريع بناء المنتجعات، الفلل، والاستراحات والشاليهات السياحية الفاخرة في مدينة أريحا (أريحا البوابة والديوك)."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      
      <Script
        id="contracting-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- Section 1: Hero Section --- */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-lg text-xs font-black mb-6">
            منصة الراية للمقاولات العامة والإنشاءات والتشطيب
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            نحمل الرؤية.. <span className="text-amber-500">لنبني الواقع</span> بحرفية
          </h1>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            من أعمال الحفر وتأسيس العظم والخرسانة المسلحة، إلى أرقى تشطيبات السوبر ديلوكس وتسليم المفتاح. نلتزم بكود البناء  وبمعايير أمان هندسية مطلقة تضمن استثمارك العقاري في القدس، رام الله، وأريحا.
          </p>

          <div className="flex justify-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/+972568700632?text=مرحباً شركة الراية للمقاولات، أود الاستفسار عن خدمات البناء والتعهدات وعمل كشف لمشروعي.`}
              className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-amber-500 transition-all shadow-xl shadow-slate-200"
            >
              <HiOutlinePlus size={20}/> اطلب تسعير مشروعك الإنشائي الآن
            </a>
          </div>
        </div>
      </section>

      {/* --- Section 2: عرض الخدمات --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <span className="text-amber-600 font-bold text-sm tracking-wider uppercase bg-amber-50 px-4 py-1.5 rounded-full">خدمات التعهدات والإنشاءات</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-4">حلول مقاولات متكاملة من الألف إلى الياء</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-sm md:text-base">
            سواء كنت ترغب في بناء عمارة سكنية، أو تشطيب شقة عظم، أو تأسيس شاليه سياحي؛ نوفر طواقم فنية متخصصة ومقاولين أكفاء تحت إشراف هندسي مباشر.
          </p>
        </div>

        <div className="space-y-24">
          {data?.map((service, index) => (
            <div 
              key={service.id}
              className={`flex flex-col lg:items-center gap-12 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500 to-amber-200 rounded-[2.5rem] opacity-20 blur-lg transition-all"></div>
                <div className="relative h-72 md:h-[400px] w-full rounded-[2.5rem] overflow-hidden border border-amber-100 shadow-sm bg-amber-50/50">
                  <img 
                    src={service.seriesimagesCutmez[0]?.url}
                    alt={service.title}
                    className="h-full w-full  hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute bottom-6 right-6 bg-amber-500 text-slate-950 font-black text-xl h-12 w-12 rounded-xl flex items-center justify-center shadow-sm">
                 { `0${index + 1}`}
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-md">
                  {service.badg}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-3 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-normal">
                  {service.details?.slice(0 , 200) + "..."} 
                </p>

                <ul className="space-y-3">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-slate-800 text-xs md:text-sm font-semibold">
                      <HiOutlineCheckCircle className="text-amber-500 shrink-0" size={18} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    // target="_blank"
                    // rel="noopener noreferrer"
                    href={`contracting/${service?.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-950 hover:text-amber-600 transition-colors"
                  >
                    تفاصيل الخدمة  <HiOutlineChevronRight className="rotate-180" size={16}/>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 3: قيم الراية في التنفيذ --- */}
      <section className="bg-amber-50/40 py-20 rounded-[3rem] my-12 max-w-7xl mx-auto px-6 border border-amber-100/50">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold text-sm bg-white border border-amber-100 px-4 py-1.5 rounded-full">دستور العمل لـ الراية</span>
          <h2 className="text-3xl font-black text-slate-900 mt-3 mb-3">لماذا تسلم مفتاح عقارك لشركة الراية؟</h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">المقاولات أمانة إنشائية ومسؤولية قانونية، ونحن نضع معايير صارمة لا نتحايد عنها أبداً.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-amber-100/50 shadow-sm">
            <div className="bg-amber-100 text-amber-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
              <HiOutlineShieldCheck size={26} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">شفافية العقود وبند المواد</h4>
            <p className="text-slate-600 text-xs leading-relaxed font-normal">
              نلتزم بجدول كميات ومواصفات تفصيلي ومكتوب (نوع الإسمنت، منشأ حديد التسليح، ماركات الأسلاك والمواسير). لا توجد لدينا تكاليف مخفية أو مفاجآت أثناء صب الخرسانات.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-amber-100/50 shadow-sm">
            <div className="bg-amber-100 text-amber-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
              <HiOutlineClock size={26} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">الالتزام الصارم بالوقت</h4>
            <p className="text-slate-600 text-xs leading-relaxed font-normal">
              الوقت هو المال في عالم التطوير العقاري وبناء الشاليهات. نضع مخططاً زمنياً دقيقاً لكل مرحلة (حفر، عظم، قصارة، تشطيب) مع شروط جزائية تضمن تسليم عقارك في الموعد المتفق عليه.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-amber-100/50 shadow-sm">
            <div className="bg-amber-100 text-amber-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
              <HiOutlineUserGroup size={26} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">إشراف هندسي مزدوج</h4>
            <p className="text-slate-600 text-xs leading-relaxed font-normal">
              لا نترك العمال والمقاولين الفرعيين يعملون بمفردهم؛ يتواجد مهندس الموقع والمشرف الفني بشكل دوري لمطابقة تسليح الحديد وفحص جودة الطوب والتشطيب للتأكد من انعدام العيوب الفنية.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 4: آلية التسعير وحساب تكلفة البناء --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 border border-amber-200/80 p-8 md:p-12 rounded-[2.5rem] shadow-sm">
          <div className="max-w-5xl">
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md mb-4">ثقافة معمارية واقتصادية</span>
            <h3 className="text-2xl md:text-3xl font-black mb-4 text-slate-900">كيف نحدد تكلفة بناء العظم والتشطيب الفاخر  </h3>
            
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-normal">
              تختلف تكلفة متر البناء بناءً على عدة محددات جغرافية وفنية؛ منها طبيعة التربة (صخرية تتطلب حفر كبيراً أم رملية بحاجة لقواعد شريطية معقدة)، والموقع الجغرافي ونظام البلديات في القدس أو رام الله وضواحيها، بالإضافة إلى درجة ونوع مواد التشطيب (ديلوكس، سوبر ديلوكس، أو تجاري). نحن في الراية نقدم دراسة جدوى فنية مجانية وحساب كميات دقيق يمنع الهدر المالي ويوفر عليك ما يصل إلى 15% من التكلفة الكلية للمواد.
              <br/><br/>
              إن سوق المقاولات العامة والتطوير العقاري يشهد تطوراً ملحوظاً، والاعتماد على مقاول مرخص ومسجل رسمياً يحميك من المشاكل الإنشائية والقانونية. يبدأ مسار المقاولات الناجح عبر تحليل دقيق لخرائط فحص التربة وتحديد منسوب التأسيس الصحيح لمنع حدوث أي هبوط جزئي في المستقبل في الهياكل الخرسانية المسلحة. 
              عند تعاملك مع طاقم التعهدات التابع لنا، نضمن توفير عمال بناء وحرفيين على أعلى مستوى من التدريب، بجانب تزويد الورش بأحدث المعدات والأدوات الإنشائية لضمان دقة زوايا البناء واستقامة الجدران والطوب. نتحمل المسؤولية القانونية الكاملة عن توريد الرمل النظيف والبحص والخرسانة الجاهزة الخاضعة للفحوصات المخبرية المعتمدة لضمان تحقيق قوة الكسر المطلوبة بعد 28 يوماً من الصب والمتابعة الفنية المستمرة برفع منسوب المياه لترطيب الإسمنت.
              <br/><br/>
              أما في قسم التشطيب الداخلي والخارجي، فإننا نراعي أدق معايير العزل المائي والرطوبي والتمديدات الميكانيكية والكهربائية (تأسيس الكهرباء، السباكة والصرف الصحي) باستخدام علامات تجارية عالمية ومحلية مكفولة. نضمن لك الإشراف المباشر على تركيب ديكورات الجبس والأسقف المستعارة، دهانات الجدران المقاومة للتعفن وعوامل الرطوبة المنتشرة في الجبال المرتفعة، بجانب تلبيس الحجر الخارجي بنظام ميكانيكي متطور لضمان الثبات الكلي والعزل الحراري الممتاز الذي يقلل من استهلاك الطاقة في الشتاء والصيف داخل المباني والإسكانات.
            </p>
            
            <div className="flex flex-wrap gap-3 text-xs font-bold text-amber-900">
              <div className="bg-amber-100 px-4 py-2 rounded-xl">🧱 باقات تسليم عظم شامل المواد والأدوات</div>
              <div className="bg-amber-100 px-4 py-2 rounded-xl">📐 تشطيب خارجي بالحجر الطبيعي والنظام الميكانيكي</div>
              <div className="bg-amber-100 px-4 py-2 rounded-xl">💧 عزل كلي متقدم للمطابخ والحمامات والأسطح</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 5: قسم الأسئلة الشائعة --- */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-bold text-xs uppercase bg-amber-50 px-4 py-1.5 rounded-full">المعرفة الإنشائية</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-3 mb-2">أسئلة شائعة حول البناء والتعهدات </h2>
          <p className="text-slate-500 text-xs md:text-sm font-medium">كل ما تود معرفته عن أسعار المقاولات وآلية التعاقد في الضفة وضواحي القدس</p>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-base font-bold text-slate-900 mb-2">🏗️ ما هي المزايا التي توفرها شركة الراية عند بناء العظم؟</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
              نحن نوفر عقوداً قانونية متكاملة تضمن جودة الاسمنت والحديد المسلح المعتمد من نقابة المهندسين ومختبرات فحص المواد  مع الالتزام التام بالمخططات الهندسية المعمارية والإنشائية، وتأمين كادر عمالي ماهر ذو خبرة طويلة ببناء الفلل والإسكانات.
            </p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-base font-bold text-slate-900 mb-2">💎 هل يمكنني التعاقد معكم على التشطيب الداخلي فقط دون العظم?</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
              بكل تأكيد. نقدم خدمات التشطيب الجزئي أو الكلي للمباني والشقق المستلمة على العظم. نضع باقة مخصصة تشمل أعمال الديكور والجبسم بورد، التمديدات الصحية والكهربائية الفنية، والدهانات الفاخرة بناءً على رغبة العميل وبما يتناسب مع ميزانيته.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-base font-bold text-slate-900 mb-2">📍 ما هي المدن والمناطق التي تغطيها شركة الراية للمقاولات؟</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
              تغطي طواقمنا ومعداتنا الإنشائية كافة أحياء وضواحي القدس (بيت حنينا، شعفاط، كفر عقب) بالإضافة إلى مدينة رام الله والبيرة بالكامل (الماصيون، الطيرة، المصايف) وجميع مشاريع بناء المنتجعات، الفلل، والاستراحات والشاليهات السياحية الفاخرة in مدينة أريحا (أريحا البوابة والديوك).
            </p>
          </div>
        </div>
      </section>

      {/* ➕ --- Section 6: إضافة قسم السيو المحلي الموجه للمناطق (Geo-Targeted Internal Links) --- */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-amber-50 border border-amber-200/80 rounded-[3rem] py-12 px-8 max-w-7xl mx-auto my-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-4">نطاق خدمات المقاولات والتطوير العقاري الشامل</h3>
          <p className="text-gray-700 text-md leading-relaxed mb-8">
            بصفتنا شركة مقاولات رائدة ومسجلة، نمتلك القدرة التشغيلية على تغطية وإدارة الأوراش والمشاريع في مختلف المحافظات والبلدات الفلسطينية بكفاءة عالية وأيدي مهنية خبيرة.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-right border-t border-slate-800 pt-8">
            <div>
              <h4 className="text-sm font-black text-slate-900 mb-2">📍 القدس وضواحيها</h4>
              <p className="text-[11px] text-gray-700 leading-relaxed">
                نوفر مقاول عظم وتشطيبات ديلوكس في **بيت حنينا**, وأعمال حفر وبناء إسكانات في **كفر عقب**, بالإضافة لتجديد البيوت في **شعفاط**, عناتا، والرام بالتوافق مع اشتراطات التراخيص والمواصفات.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 mb-2">📍 رام الله والبيرة</h4>
              <p className="text-[11px] text-gray-700 leading-relaxed">
                تعهدات إنشائية متكاملة لبناء الأبراج السكنية في **الماصيون**, **الطيرة**, والمصايف. أسعار متر بناء منافسة وضمان جودة الباطون والحديد في المزارع والبيرة وكافة قرى المحافظة.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 mb-2">📍 أريحا والأغوار</h4>
              <p className="text-[11px] text-gray-700 leading-relaxed">
                متخصصون في بناء الفلل المودرن والشاليهات السياحية في **أريحا البوابة**, **الديوك**, والنويعمة. تنفيذ مسابح أوفر فلو معزولة بالكامل، لاندسكيب، وبناء أسوار الخصوصية الشاهقة.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContractingPage;