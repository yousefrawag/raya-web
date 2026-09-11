"use client"

import React, { useState  , useRef} from 'react';
import {
  HiOutlineUser,
  HiOutlinePhone,
  HiOutlineCube,
  HiOutlineLink,
  HiOutlineScale,
  HiOutlineGlobeAlt,
  HiOutlineLocationMarker,
  HiOutlineDocumentText,
  HiOutlineCheck,
  HiOutlineChevronRight,
} from 'react-icons/hi';
import TradeMap from '@/components/sections/Trademap';

import authFetch from '@/utils/authFetch';
import {
  HiOutlineShieldCheck,
  HiOutlinePlus,
  HiOutlineCheckCircle,

  HiOutlineUserGroup
} from 'react-icons/hi';
import { Button } from '../ui/Buttoun';

// -------------------------------------------------------------
// AddImportExportRequest – نموذج طلب استيراد منتج
// متوافق مع هوية موقع الراية (ألوان ذهبية، تصميم أنيق)
// -------------------------------------------------------------
const AddImportExportRequest = () => {
  // حالة النموذج
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    productName: '',
    productLink: '',
    quantity: '',
    manufacturerCountry: '',
    deliveryCity: '',
    additionalDetails: '',
  });
   const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // معالجة التغيير
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // معالجة الإرسال
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.mobile || !formData.productName || !formData.deliveryCity) {
      alert('يرجى ملء جميع الحقول المطلوبة (*).');
      return;
    }

    setLoading(true);

    try {
      const response = await authFetch.post('/importRequest', formData);
      console.log('Response:', response.data);
      setIsSubmitted(true);
      // إعادة تعيين النموذج بعد النجاح
      setFormData({
        name: '',
        mobile: '',
        productName: '',
        productLink: '',
        quantity: '',
        manufacturerCountry: '',
        deliveryCity: '',
        additionalDetails: '',
      });
    } catch (err) {
      console.error('Submission error:', err);
      const backendError =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        'حدث خطأ أثناء الإرسال';
      setError(typeof backendError === 'string' ? backendError : 'حدث خطأ أثناء الإرسال');
    } finally {
      setLoading(false);
    }
  };
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  // إعادة تعيين الحالة للعودة للنموذج
  const handleReset = () => {
    setIsSubmitted(false);
    setError('');
  };
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
  // خطوات توضيحية للجانب الأيسر
  const steps = [
    { icon: <HiOutlineUser />, label: 'تعبئة الطلب', desc: 'أدخل بياناتك واحتياجاتك' },
    { icon: <HiOutlineGlobeAlt />, label: 'البحث عن مورد', desc: 'نبحث عن أفضل الموردين' },
    { icon: <HiOutlineScale />, label: 'تأكيد السعر والكمية', desc: 'نقدم لك عرضاً تنافسياً' },
    { icon: <HiOutlineCheck />, label: 'شحن وتسليم', desc: 'نوصل منتجك إلى مدينتك' },
  ];

  return (
      <div className="min-h-screen bg-white" dir="rtl">
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
            <button
           onClick={scrollToForm}
              className="flex items-center cursor-pointer gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-amber-500 hover:text-slate-900 transition-all shadow-xl shadow-slate-200"
            >
              <HiOutlinePlus size={20}/> اطلب عرض سعر الآن
            </button>
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

    <section
    ref={formRef}
      id="AddImportExportRequest"
      className="py-20 md:py-28 bg-gradient-to-br from-amber-50/30 via-white to-amber-50/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* عنوان القسم */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate__animated animate__fadeInUp">
          <span className="text-amber-600 font-bold text-sm bg-amber-100 px-4 py-1.5 rounded-full inline-block mb-4">
            اطلب منتجك
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
            استيراد <span className="text-amber-500">منتجك</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            أخبرنا بما تحتاجه، وسنتولى الباقي — من التوريد إلى التوصيل.
          </p>
        </div>

        {/* تنسيق عمودين */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* الجانب الأيسر: خطوات */}
          <div className="flex flex-col items-start space-y-8">
            <div className="w-full max-w-sm mx-auto lg:mx-0">
              <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-amber-100/60 border border-amber-300/70 shadow-lg animate-bounce-slow">
                <HiOutlineGlobeAlt className="w-12 h-12 text-amber-500" />
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center animate-pulse">
                  1
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-heading font-bold text-slate-900">
              كيف نعمل معك؟
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              نمر معك بخطوات واضحة لضمان تجربة سلسة وناجحة. فريقنا متخصص في كل مرحلة.
            </p>

            <div className="space-y-5 w-full">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-amber-100/60 shadow-sm hover:shadow-md transition-all duration-300 hover:border-amber-300 animate-slide-in"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="bg-amber-100 text-amber-600 w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{step.label}</h4>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                  </div>
                  <HiOutlineChevronRight className="text-amber-400 mr-auto rotate-180" size={20} />
                </div>
              ))}
            </div>

            <div className="mt-2 p-4 bg-amber-50/80 border border-amber-200/70 rounded-xl w-full shadow-sm">
              <p className="text-sm text-slate-600 italic flex items-center gap-2">
                <span className="text-amber-500 text-xl">“</span>
                نربطك بأسواق العالم — بسرعة وشفافية وموثوقية.
                <span className="text-amber-500 text-xl">”</span>
              </p>
            </div>
          </div>

          {/* الجانب الأيمن: النموذج / رسالة النجاح */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-amber-100/50 backdrop-blur-sm min-h-[600px] flex flex-col justify-center">

            {/* ==================== حالة النجاح ==================== */}
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8 animate-fade-in">
                {/* دائرة النجاح مع أنيميشن */}
                <div className="relative mb-8">
                  {/* حلقات متحركة حول الدائرة */}
                  <span className="absolute inset-0 rounded-full bg-green-400/30 animate-ping-slow"></span>
                  <span
                    className="absolute inset-0 rounded-full bg-green-400/20 animate-ping-slow"
                    style={{ animationDelay: '0.4s' }}
                  ></span>

                  {/* الدائرة الرئيسية */}
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-300/50 animate-scale-in">
                    {/* SVG علامة صح مع رسم متحرك */}
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 27L22 35L38 19"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="40"
                        strokeDashoffset="40"
                        className="animate-draw-check"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-3 animate-fade-in-up">
                  تم إرسال طلبك بنجاح! 🎉
                </h3>

                <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-md mx-auto mb-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  سنقوم بمراجعة طلبك بعناية،
                </p>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-md mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  وسيتم التواصل معك في أقرب وقت ممكن.
                </p>

                {/* معلومات التواصل */}
                <div className="flex items-center gap-3 bg-amber-50 border border-amber-200/70 rounded-xl px-5 py-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <HiOutlineCheck className="text-amber-500" size={20} />
                  <span className="text-sm text-slate-700 font-medium">
                    عادةً نرد خلال 24 ساعة
                  </span>
                </div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold text-sm transition-colors animate-fade-in-up"
                  style={{ animationDelay: '0.5s' }}
                >
                  <HiOutlineChevronRight size={18} />
                  إرسال طلب آخر
                </button>
              </div>
            ) : (
              /* ==================== حالة النموذج ==================== */
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* رسالة الخطأ */}
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm animate-shake">
                    ⚠️ {error}
                  </div>
                )}

                {/* الصف الأول: الاسم + رقم الجوال */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      <HiOutlineUser className="inline-block ml-1 text-amber-500" size={18} />
                      الاسم الكامل <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition disabled:opacity-60"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      <HiOutlinePhone className="inline-block ml-1 text-amber-500" size={18} />
                      رقم الجوال <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition disabled:opacity-60"
                      placeholder="+970 50 000 0000"
                    />
                  </div>
                </div>

                {/* الصف الثاني: اسم المنتج + الكمية */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="productName" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      <HiOutlineCube className="inline-block ml-1 text-amber-500" size={18} />
                      اسم المنتج <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="productName"
                      name="productName"
                      value={formData.productName}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition disabled:opacity-60"
                      placeholder="مثال: بن عربي ممتاز"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      <HiOutlineScale className="inline-block ml-1 text-amber-500" size={18} />
                      الكمية (طن / وحدة)
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition disabled:opacity-60"
                      placeholder="مثال: 20 طن"
                    />
                  </div>
                </div>

                {/* الصف الثالث: بلد المصنع + مدينة الاستلام */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="manufacturerCountry" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      <HiOutlineGlobeAlt className="inline-block ml-1 text-amber-500" size={18} />
                      بلد المصنع
                    </label>
                    <input
                      type="text"
                      id="manufacturerCountry"
                      name="manufacturerCountry"
                      value={formData.manufacturerCountry}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition disabled:opacity-60"
                      placeholder="مثال: البرازيل، إثيوبيا"
                    />
                  </div>
                  <div>
                    <label htmlFor="deliveryCity" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      <HiOutlineLocationMarker className="inline-block ml-1 text-amber-500" size={18} />
                      مدينة الاستلام <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="deliveryCity"
                      name="deliveryCity"
                      value={formData.deliveryCity}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition disabled:opacity-60"
                      placeholder="مدينة الاستلام"
                    />
                  </div>
                </div>

                {/* الصف الرابع: رابط المنتج */}
                <div>
                  <label htmlFor="productLink" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    <HiOutlineLink className="inline-block ml-1 text-amber-500" size={18} />
                    رابط المنتج (اختياري)
                  </label>
                  <input
                    type="url"
                    id="productLink"
                    name="productLink"
                    value={formData.productLink}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition disabled:opacity-60"
                    placeholder="https://example.com/product"
                  />
                </div>

                {/* الصف الخامس: تفاصيل إضافية */}
                <div>
                  <label htmlFor="additionalDetails" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    <HiOutlineDocumentText className="inline-block ml-1 text-amber-500" size={18} />
                    تفاصيل إضافية
                  </label>
                  <textarea
                    id="additionalDetails"
                    name="additionalDetails"
                    rows={4}
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-y disabled:opacity-60"
                    placeholder="أي متطلبات خاصة، شهادات، تفضيلات التغليف..."
                  />
                </div>

                {/* زر الإرسال مع حالة الـ loading */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-amber-200/60 hover:shadow-xl hover:shadow-amber-300/70 flex items-center justify-center gap-2 disabled:opacity-80 disabled:cursor-not-allowed disabled:hover:from-amber-500 disabled:hover:to-amber-600"
                >
                  {loading ? (
                    <>
                      {/* Spinner متحرك */}
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>جاري إرسال الطلب...</span>
                    </>
                  ) : (
                    <>
                      <span>إرسال الطلب</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center mt-4">
                  بإرسالك الطلب، فإنك توافق على سياسة الخصوصية. سنرد عليك خلال 24 ساعة.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* أنماط CSS للأنيميشن */}
      <style>{`
        /* حركة الطفو للأيقونة */
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        /* حركة دخول الخطوات */
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.6s ease forwards;
          opacity: 0;
        }

        /* ظهور ناعم لرسالة النجاح */
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease forwards;
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease forwards;
          opacity: 0;
        }

        /* تكبير دائرة النجاح */
        @keyframes scale-in {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* رسم علامة الصح */
        @keyframes draw-check {
          from { stroke-dashoffset: 40; }
          to { stroke-dashoffset: 0; }
        }
        .animate-draw-check {
          animation: draw-check 0.6s ease-out 0.3s forwards;
        }

        /* حلقات النبض حول النجاح */
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        /* اهتزاز رسالة الخطأ */
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </section>

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

export default AddImportExportRequest;