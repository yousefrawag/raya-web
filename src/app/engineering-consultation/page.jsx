export const revalidate = 86400;
import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { 
  HiOutlineLocationMarker, 
  HiOutlineBadgeCheck,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlinePlus,
  HiOutlineOfficeBuilding,
  HiOutlineClipboardList
} from 'react-icons/hi';
import { GetAllConslutions } from '@/lib/GetAllConslutions';
import Link from 'next/link';

// 📈 تهيئة الـ SEO المتقدم والمتوافق كلياً مع الاستشارات الهندسية لمنصة الراية في فلسطين
export const metadata = {
  metadataBase: new URL("https://www.rayapal.com"),

  title: "مكتب استشارات هندسية وتصميم معماري في القدس ورام الله | الراية العقارية",
  
  description: "افضل مكتب استشارات هندسية في القدس، رام الله، وأريحا. نقدم خدمات التصميم المعماري والإنشائي، الإشراف الهندسي، استخراج رخص البناء، وتصميم الديكور الداخلي بأعلى كفاءة مع شركة الراية.",
  
  alternates: {
    canonical: "https://www.rayapal.com/engineering-consultation",
  },
 
  keywords: [
    "استشارات هندسية في فلسطين", "مكتب استشارات هندسية فلسطين", "افضل مهندس معماري في", 
    "تصميم معماري وإنشائي فلسطين", "مكاتب هندسية في القدس ورام الله", "مخططات هندسية للبيع فلسطين", 
    "تراخيص البناء في فلسطين", "اشراف هندسي على المباني فلسطين", "تكلفة التصميم الهندسي في فلسطين", 
    "استشارات عقارية وهندسية فلسطين", "شركات تطوير عقاري وهندسي القدس", "تصميم ديكور داخلي في فلسطين", 
    "مهندس ديكور داخلي فلسطين", "حساب الكميات والمواصفات فلسطين", "فحص التربة والأساسات فلسطين",
    "الراية للاستشارات الهندسية", "منصة الراية العقارية والهندسية", "شركة الراية للتطوير العقاري", "مكتب هندسي فلسطين",
    "مخططات فلل مودرن فلسطين", "تراخيص بناء الشقق في فلسطين", "تصميم هندسي خارجي فلسطين", "مهندسين نقابة فلسطين",
    "مكتب هندسي في القدس", "تراخيص بناء في القدس", "تصميم معماري القدس", "مهندسين ديكور في القدس الشرقية",
    "مخططات هندسية القدس", "استشارات هندسية بيت حنينا", "مكتب هندسي كفر عقب", "تراخيص بلدية القدس للبناء", 
    "مكاتب هندسية في شعفاط", "مهندس إنشائي في القدس", "تصميم داخلي شقق القدس", "مكتب ديكور في القدس", 
    "رخص بناء عظم القدس", "استشارات هندسية صور باهر", "اسعار المخططات الهندسية في القدس",
    "تخطيط عمراني في القدس", "تصميم حدائق وفلل القدس", "مكتب هندسي جبل المكبر", "مكتب هندسي ام طوبا",
    "مكتب هندسي في بيت حنينا", "مهندس ديكور بيت حنينا", "تراخيص البناء بيت حنينا", 
    "تصميم فلل فاخرة بيت حنينا", "مكتب هندسي حي الهجرة بيت حنينا", "مخططات سكنية بيت حنينا القدس", 
    "اشراف هندسي على المقاولات بيت حنينا", "تعديل مخططات هندسية بيت حنينا", "ديكورات شقق بيت حنينا", 
    "استشارات هندسية عقارية في بيت حنينا", "تأهيل مباني في بيت حنينا", "بيوت مستقلة تصميم بيت حنينا",
    "مهندس معماري محترف بيت حنينا", "شراء ارض وبنائها بيت حنينا", "تصميم داخلي مودرن بيت حنينا",
    "مكاتب هندسية في كفر عقب", "تراخيص بناء كفر عقب", "اشراف انشائي كفر عقب", 
    "مكتب تصميم ديكور كفر عقب", "مهندس معماري كفر عقب", "تصميم اسكانات جديدة في كفر عقب", 
    "مخططات عمارات سكنية كفر عقب", "فحص سلامة المباني كفر عقب", "ديكورات داخلية كفر عقب",
    "مكتب هندسي معتمد كفر عقب", "تخطيط شقق عظم كفر عقب", "تصميم واجهات كلادينج كفر عقب",
    "مكتب هندسي في أريحا", "تصميم شاليهات مودرن أريحا", "مهندس معماري فلل أريحا", "تراخيص بناء فلل أريحا", 
    "مخططات مزارع واستراحات أريحا", "تصميم فلل سياحية في أريحا", "مكتب هندسي اريحا البوابة", 
    "مخططات هندسية اريحا البوابة", "اشراف على بناء المسابح أريحا", "استشارات هندسية انشائية أريحا", 
    "مشاريع هندسية سياحية أريحا", "تصميم حدائق فلل أريحا", "استشارات لاندسكيب أريحا", 
    "مهندس ديكور داخلي شاليهات اريحا", "تراخيص اراضي طابو اريحا البوابة", "مكتب هندسي الديوك اريحا",
    "مكتب هندسي في رام الله", "مكاتب استشارات هندسية رام الله والبيرة", "تصميم ابراج سكنية رام الله", "تراخيص بناء رام الله", 
    "استشارات هندسية في الماصيون", "مكتب هندسي الطيرة رام الله", "تصميم مكاتب تجارية في الارسال رام الله", 
    "مهندس ديكور داخلي رام الله", "مكتب تصميم داخلي المصايف رام الله", "مخططات هندسية البيرة", 
    "اشراف هندسي على المشاريع رام الله", "تصميم واجهات معمارية رام الله", "مكتب هندسي معتمد نقابة المهندسين رام الله", 
    "حساب كميات وتثمين عقاري رام الله", "تصميم لاندسكيب فلل رام الله", "ديكورات شركات ومحلات رام الله", 
    "مكتب هندسي المصايف", "تصميم شقق مودرن الماصيون رام الله", "تخطيط مشاريع التطوير العقاري رام الله",
    "افضل مكتب استشارات هندسية لتصميم الفلل في فلسطين", "كيفية استخراج رخص البناء في القدس وضواحيها", "اسعار تصميم المخططات المعمارية والإنشائية رام الله",
    "مكتب هندسي متخصص في اشراف بناء شاليهات اريحا البوابة", "تصميم داخلي وخارجي للشقق عظم في بيت حنينا", "تخطيط وعمل كروكي هندسي لاراضي طابو في الماصيون",
    "مكتب هندسي لترخيص المباني وفحص التربة بالقدس الشرقية", "تصوير واجهات ثنائية وثلاثية الأبعاد 3D للمباني فلسطين", "مهندس ديكور لفرش وتأثيث الفلل الفاخرة بالطيرة",
    "دليل المكاتب الهندسية المعتمدة in القدس ورام الله وأريحا", "تعديل وتوسيع المخططات الإنشائية للمباني القديمة بفلسطين", "استشارات هندسية مجانية قبل شراء الأراضي في فلسطين",
    "موقع الراية للاستشارات الهندسية والتطوير العقاري بفلسطين", "تصميم معماري مودرن متوافق مع كود البناء الفلسطيني", "مهندس اشراف على صب الخرسانة والقواعد الانشائية"
  ],

  openGraph: {
    title: "مكتب استشارات هندسية وتصميم معماري | منصة الراية",
    description: "استكشف خدماتنا الهندسية الشاملة من تصميم معماري وإنشائي ورخص بناء وإشراف فني في القدس، رام الله، وأريحا.",
    url: "https://www.rayapal.com/engineering-consultation",
    siteName: "الراية العقارية",
    locale: "ar_PS",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png",
        width: 1200,
        height: 630,
        alt: "الاستشارات الهندسية - الراية العقارية",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "خدمات الاستشارات الهندسية في  | الراية العقارية",
    description: "نصنع الحلول الهندسية ونستخرج تراخيص البناء ونصمم أرقى الديكورات في القدس ورام الله وأريحا.",
    images: ["https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png"],
  },
  category: "engineering consultation and architecture",
};

const EngineeringConsultation = async () => {
  const data = await GetAllConslutions()
  
  const servicesData = [
    {
      id: "architecture",
      title: "التصميم المعماري والإنشائي المتكامل",
      description: "نبتكر حلولاً هندسية تجمع بين الإبداع المعماري الاستثنائي والكفاءة الإنشائية المستدامة. يحرص مهندسونا على تصميم مخططات ذكية تستغل كل شبر في المساحة وتتوافق تماماً مع كود البناء الفلسطيني ومعايير السلامة العالمية للزلازل والأحمال الفنية، سواء كانت مشاريعكم فلل سياحية في أريحا أو أبراج سكنية وتجارية في رام الله والقدس.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "licensing",
      title: "إستخراج تراخيص البناء والمعاملات القانونية",
      description: "نتولى كافة الإجراءات البيروقراطية والمعاملات الفنية والخرائط المساحية اللازمة لترخيص المباني والمنشآت بالتنسيق مع البلديات ونقابة المهندسين والجهات الرسمية في ضواحي القدس، بيت حنينا، كفر عقب، ورام الله. نوفر عليك الجهد والوقت ونضمن سلامة أوراق عقارك القانونية بنسبة 100% لتفادي أي عوائق مستقبلية لمشروعك.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "interior",
      title: "التصميم الداخلي والديكور (3D Interior Design)",
      description: "نحول الفراغات الخرسانية الصامتة إلى لوحات فنية تنبض بالفخامة والعملية. نقدم دراسات متكاملة في توزيع الإضاءة، فرش المساحات، واختيار الخامات ومواد التشطيب بجودة ممتازة متناسبة مع ميزانيتك. نوفر لك لقطات ومخططات ثلاثية الأبعاد (3D Perspective) تظهر أدق التفاصيل لترى بيتك المستقبلي قبل بدء التأسيس والتشطيب.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "supervision",
      title: "الإشراف الهندسي الميداني وإدارة المشاريع",
      description: "الجودة تكمن في دقة التنفيذ على أرض الواقع. يقوم طاقم الإشراف الفني لدينا بمتابعة مراحل البناء خطوة بخطوة؛ بدءاً من حفر القواعد وفحص التربة، وصب الخرسانة المسلحة، ومتابعة أعمال البناء العظم وحتى التشطيبات النهائية. نضمن مطابقة كافة المواد والمواصفات للمخططات المعتمدة والجدول الزمني المحدد للمشروع.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.rayapal.com/engineering-consultation/#webpage",
        "url": "https://www.rayapal.com/engineering-consultation",
        "name": "خدمات الاستشارات الهندسية والتصميم المعماري في فلسطين - الراية العقارية",
        "description": "استشارات هندسية متكاملة تشمل التصميم المعماري، تراخيص البناء، الإشراف الميداني والتصميم الداخلي في القدس، رام الله، وأريحا.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.rayapal.com/#website",
          "url": "https://www.rayapal.com",
          "name": "الراية العقارية"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "الراية العقارية للاستشارات الهندسية",
        "image": "https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png",
        "telePhone": "+972568700632",
        "url": "https://www.rayapal.com/engineering-consultation",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "بيت حنينا, القدس / رام الله",
          "addressLocality": "Jerusalem / Ramallah",
          "addressCountry": "PS"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "هل تشمل خدماتكم الإشراف الهندسي على المباني قيد الإنشاء (العظم)؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، توفر منصة الراية طاقماً هندسياً متكاملاً للإشراف الميداني على صب الخرسانات والأساسات ومطابقة المواصفات الإنشائية في القدس ورام الله وأريحا لضمان الأمان وجودة البناء."
            }
          },
          {
            "@type": "Question",
            "name": "كيف يتم حساب تكلفة التصميم المعماري والديكور الداخلي لديكم？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تعتمد التكلفة على مساحة العقار الإجمالية بالمتر المربع ونوع التصميم المطلوب (مودرن، كلاسيك، تجاري) ونقدم باقات تنافسية ممتازة تناسب كافة المستثمرين والعملاء بفلسطين."
            }
          },
          {
            "@type": "Question",
            "name": "ما هي المناطق التي يغطيها مكتب استشارات الراية الهندسي؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نحن نغطي ونقدم خدماتنا المعتمدة في القدس (بيت حنينا، شعفاط، كفر عقب) ورام الله (الماصيون، الطيرة، الإرسال) بالإضافة إلى مشاريع الشاليهات والفلل السياحية في أريحا البوابة."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      
      <Script
        id="engineering-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- Section 1: Hero Section (مشرق وبألوان الهوية) --- */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-lg text-xs font-black mb-6">
            قسم الاستشارات والحلول الهندسية المعتمدة في 
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            الاستشارات <span className="text-amber-500">الهندسية والمعمارية</span>
          </h1>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            في منصة الراية، لا نقتصر على الحلول التسويقية، بل نوفر ركيزة هندسية وفنية متكاملة تضمن صياغة مشاريعكم بأعلى معايير الدقة، الجودة، والتصميم المبتكر المتوافق مع متطلبات السوق .
          </p>

          <div className="flex justify-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/+972568700632?text=مرحباً شركة الراية، أرغب في الحصول على استشارة هندسية وفنية بخصوص مشروعي.`}
              className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-amber-500 transition-all shadow-xl shadow-slate-200"
            >
              <HiOutlinePlus size={20}/> احصل على استشارتك الفنية الآن
            </a>
          </div>
        </div>
      </section>

      {/* --- Section 2: Why Us --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           <FeatureCard 
              icon={<HiOutlineTrendingUp className="text-amber-500" size={30}/>}
              title="رؤية معمارية حديثة"
              desc="نصمم واجهات ومخططات تواكب خطوط الديكور العالمية والمحلية الفاخرة."
           />
           <FeatureCard 
              icon={<HiOutlineUserGroup className="text-amber-600" size={30}/>}
              title="طاقم مهندسين ذوي خبرة"
              desc="فريق متخصص مسجل بنقابة المهندسين يمتلك خبرة طويلة بمشاريع القدس."
           />
           <FeatureCard 
              icon={<HiOutlineShieldCheck className="text-amber-500" size={30}/>}
              title="اعتماد وتراخيص سريعة"
              desc="نمتلك الدراية الكاملة بكافة قوانين تنظيم البناء لتسهيل المعاملات السريعة."
           />
           <FeatureCard 
              icon={<HiOutlineBadgeCheck className="text-amber-600" size={30}/>}
              title="دقة الحسابات الإنشائية"
              desc="ندرس تفاصيل التسليح وفحص التربة لضمان أقصى درجات الأمان والسلامة."
           />
        </div>
      </section>

      {/* --- Section 3: خدمات المكاتب الهندسية --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-amber-50/40 rounded-[3rem] my-12">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold text-sm tracking-wider uppercase bg-amber-100/60 px-4 py-1.5 rounded-full">حلولنا الهندسية </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-4">نصنع الفارق في تفاصيل بنائك</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">مجموعة واسعة من الحلول الفنية والخدمات الاستشارية التي ترافقك خطوة بخطوة من الفكرة وحتى الاستلام النهائي.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image 
                    fill
                    sizes="(max-w: 768px) 100vw, (max-w: 1200px) 50vw, 25vw"
                    src={service.seriesimagesCutmez[0]?.url} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <span className="absolute top-4 right-4 bg-amber-500 text-slate-950 px-3 py-1 rounded-xl text-[11px] font-black shadow-sm">
                    خدمة معتمدة ✨
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-amber-500 transition-colors min-h-[3.5rem] flex items-center">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-normal line-clamp-5">
                    {service.details?.substring(0 , 100)}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-slate-50 bg-slate-50/30">
                <div className="flex items-center text-slate-400 text-[11px] mb-4">
                  <HiOutlineLocationMarker className="text-amber-500 ml-1 shrink-0" size={14}/> 
                  <span className="truncate text-slate-500">القدس • رام الله • أريحا</span>
                </div>
                
                <Link
                 
                  rel="noopener noreferrer"
                  href={`/engineering-consultation/${service.slug}`}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-bold text-xs hover:bg-amber-500 transition-all group-hover:shadow-lg group-hover:shadow-amber-500/10"
                >
                تفاصيل الخدمة
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 4: قسم الأرقام والإحصائيات (تعديل الألوان ليصبح مشرقاً) --- */}
      <section className="bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 py-12 my-16 rounded-[2.5rem] max-w-7xl mx-auto px-6 shadow-xl shadow-amber-500/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-bold">
          <div>
            <div className="text-3xl md:text-4xl font-black mb-1 text-slate-950">+150</div>
            <div className="text-slate-900 text-xs md:text-sm">مخطط معماري وإنشائي معتمد</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black mb-1 text-slate-950">+85</div>
            <div className="text-slate-900 text-xs md:text-sm">رخصة بناء مستخرجة بنجاح</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black mb-1 text-slate-950">+12</div>
            <div className="text-slate-900 text-xs md:text-sm">عاماً من الخبرة الهندسية </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black mb-1 text-slate-950">100%</div>
            <div className="text-slate-900 text-xs md:text-sm">مطابقة لكود البناء </div>
          </div>
        </div>
      </section>

      {/* --- Section 5: آلية ورحلة العمل الهندسي المتكامل --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold text-sm tracking-wider uppercase bg-amber-50 px-4 py-1.5 rounded-full">آلية العمل الهندسي</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-4">كيف نعمل على تخطيط وتنفيذ مشروعك؟</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">خطوات مدروسة ونظام صارم نلتزم به لضمان تحويل فكرتك إلى تصميم معماري آمن ومطابق للتراخيص القانونية.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {[
            { step: "01", title: "الاستشارة الفنية المبدئية", desc: "جلسة عمل أولية لفهم طموحاتك، دراسة مساحة وموقع الأرض في  وتقدير ميزانية البناء التقديرية للتصميم." },
            { step: "02", title: "التخطيط ورسم المخططات", desc: "إعداد المقترحات المعمارية الأولى وتوزيع المساحات الداخلية والخارجية (2D) ومناقشتها وتعديلها خطوة بخطوة." },
            { step: "03", title: "التصاميم النهائية والـ 3D", desc: "تطوير المخططات الإنشائية والتنفيذية الكاملة، خرائط التراخيص للبلدية، واللقطات ثلاثية الأبعاد (3D Perspective) للواجهات." },
            { step: "04", title: "الإشراف الهندسي الميداني", desc: "النزول إلى الموقع لمطابقة أعمال الحفر، فحص التربة، حديد التسليح وصب الخرسانة المسلحة لضمان السلامة المطلقة لعقارك." }
          ].map((item, index) => (
            <div key={index} className="relative p-8 rounded-3xl bg-amber-50/40 border border-amber-100/60 group hover:bg-amber-500 transition-all duration-500">
              <span className="text-4xl font-black text-amber-600/20 group-hover:text-slate-950 transition-colors absolute top-4 left-6">
                {item.step}
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-950 transition-colors mt-4 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-900 transition-colors text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 6: باقات وحلول الاستشارات الهندسية (تم تحويله لخلفية فاتحة ومشرقة) --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-br from-amber-50 via-white to-amber-50 border border-amber-100 rounded-[3rem] my-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center p-4 md:p-8">
          <div className="lg:col-span-1">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-md">حلول معمارية مرنة</span>
            <h2 className="text-3xl font-black mt-3 mb-4 text-slate-900 leading-tight">جاهز لبدء مشروعك الإنشائي؟</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              نوفر خدمات وحلولاً هندسية مخصصة تلائم تطلعاتك الاستثمارية، بدءاً من مخططات الفلل المودرن في أريحا وحتى تراخيص الأبراج والإسكانات الكبرى في القدس ورام الله.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-amber-200/60 p-6 rounded-2xl shadow-sm hover:border-amber-500 transition-all">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-lg mb-2">
                <HiOutlineOfficeBuilding size={20}/>
                <h3 className="text-slate-900">مخططات السكني والفلل الفاخرة</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">تشمل تصميم المخطط المعماري الشامل، الحسابات الإنشائية للأحمال والزلازل، مع لقطات ومخططات ثلاثية الأبعاد جذابة ومودرن لواجهات الفلل.</p>
              <span className="inline-block text-[11px] text-amber-700 bg-amber-100 px-3 py-1 rounded-lg font-bold">الأكثر طلباً في أريحا ورام الله</span>
            </div>
            
            <div className="bg-white border border-amber-200/60 p-6 rounded-2xl shadow-sm hover:border-amber-500 transition-all">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-lg mb-2">
                <HiOutlineClipboardList size={20}/>
                <h3 className="text-slate-900">معاملات التراخيص والمصادقات</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">تجهيز ملف الترخيص القانوني والفني بالكامل، خرائط المساحة المعتمدة، فحص التربة، ومتابعة نقابة المهندسين والبلديات في كفر عقب وضواحي القدس.</p>
              <span className="inline-block text-[11px] text-amber-700 bg-amber-100 px-3 py-1 rounded-lg font-bold">توفير كامل للوقت والمعاملات البيروقراطية</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 7: قسم الأسئلة الشائعة المرئي (Visual FAQ) --- */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-bold text-xs uppercase bg-amber-50 px-4 py-1.5 rounded-full">دليل المعرفة الهندسي</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-3 mb-2">الأسئلة الشائعة حول المكاتب الهندسية </h2>
          <p className="text-slate-500 text-sm font-medium">إجابات سريعة وموثوقة على أهم الأسئلة التي تدور في ذهنك قبل بدء التصميم أو الترخيص</p>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-base font-bold text-slate-900 mb-2">🤔 هل تشمل خدماتكم الإشراف الهندسي على المباني قيد الإنشاء (العظم)؟</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              نعم، توفر منصة الراية طاقماً هندسياً متكاملاً للإشراف الميداني على صب الخرسانات والأساسات ومطابقة المواصفات الإنشائية في القدس ورام الله وأريحا لضمان الأمان وجودة البناء.
            </p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-base font-bold text-slate-900 mb-2">📐 كيف يتم حساب تكلفة التصميم المعماري والديكور الداخلي لديكم؟</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              تعتمد التكلفة على مساحة العقار الإجمالية بالمتر المربع ونوع التصميم المطلوب (مودرن، كلاسيك، تجاري) ونقدم باقات تنافسية ممتازة تناسب كافة المستثمرين والعملاء .
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-base font-bold text-slate-900 mb-2">📍 ما هي المناطق والمدن التي يغطيها مكتب استشارات الراية الهندسي؟</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              نحن نغطي ونقدم خدماتنا الهندسية والتراخيص القانونية المعتمدة في مدينة القدس بالكامل (بيت حنينا، شعفاط، كفر عقب) ومحافظة رام الله والبيرة (الماصيون، الطيرة، الإرسال، المصايف) ومشاريع الفلل السياحية والاستراحات في أريحا البوابة والديوك.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
    <div className="mb-4">{icon}</div>
    <h4 className="text-xl font-bold text-slate-800 mb-2">{title}</h4>
    <p className="text-slate-500 text-base leading-relaxed">{desc}</p>
  </div>
);

export default EngineeringConsultation;