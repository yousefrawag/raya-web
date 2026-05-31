import React from 'react';
import Link from 'next/link';
import { 
  HiOutlineHome, 
  HiOutlineTrendingUp, 
  HiOutlineOfficeBuilding, 
  HiOutlineUserGroup, 
  HiOutlineBriefcase,
  HiOutlineArrowSmLeft
} from 'react-icons/hi';

const ServicesSection = () => {
  // تجميع الخدمات الجديدة والمختصرة بدقة مع تحديد المسارات القانونية لها
  const services = [
    {
      title: 'بيع وتأجير العقارات',
      description: 'اعثر على مساحتك المثالية أو اعرض عقارك للبيع والتأجير بأعلى قيمة استثمارية. نغطي تشكيلة واسعة من الشقق، الأراضي، والفلل الفاخرة في القدس ورام الله وأريحا.',
      icon: HiOutlineHome,
      link: '/properties', // يوجه لصفحة العقارات
      hasPage: true,
      actionText: 'استكشف العقارات المتاحة'
    },
    {
      title: 'إدارة الاستثمار العقاري',
      description: 'نفتح لك أبواباً لفرص استثمارية هائلة وعوائد ربحية مضمونة في السوق الفلسطيني، إلى جانب قدرتنا الاحترافية المتقدمة على تسويق عقارك وجذب المشترين المستهدفين.',
      icon: HiOutlineTrendingUp,
      link: '/investment', // يوجه لصفحة الاستثمار
      hasPage: true,
      actionText: 'تصفح الفرص الاستثمارية'
    },
    {
      title: 'المقاولات العامة والبناء',
      description: 'تعهدات إنشائية متكاملة تبدأ من أعمال الحفر وتأسيس الخرسانة المسلحة (العظم) وحتى تسليم المفتاح بأعلى مواصفات التشطيب سوبر ديلوكس وتلبيس الحجر القدسي.',
      icon: HiOutlineOfficeBuilding,
      link: '/contracting', // يوجه لصفحة المقاولات الجديدة
      hasPage: true,
      actionText: 'اطلب تسعير البناء'
    },
    {
      title: 'الاستشارات الهندسية',
      description: 'حلول معمارية وهندسية معتمدة تشمل إعداد المخططات التنفيذية الذكية، استخراج تراخيص البناء من البلديات، فحص التربة، والإشراف الميداني الصارم على جودة صب الباطون.',
      icon: HiOutlineUserGroup,
      link: '/engineering-consultation', // يوجه لصفحة الاستشارات الهندسية
      hasPage: true,
      actionText: 'احصل على استشارة فنية'
    },
    {
      title: 'التسويق للمشاريع العقارية',
      description: 'صناعة هوية بصرية وخطط تسويقية استراتيجية متكاملة للمشاريع الكبرى والإسكانات الحديثة لضمان سرعة البيع والانتشار بأساليب ترويجية رقمية وميدانية مبتكرة.',
      icon: HiOutlineBriefcase,
      link: '#', // ليس لها صفحة بعد
      hasPage: false,
      actionText: 'خدمة قادمة قريباً ✨'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-amber-50/40 to-white overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* رأس القسم بتصميم ناعم ومشرق */}
        <div className="text-center mb-20 relative z-10">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-xs font-black mb-3">
            منظومة خدمات الراية المتكاملة
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            حلولنا العقارية <span className="text-amber-500">والإنشائية</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            مجموعة مدمجة ومحترفة من الخدمات المصممة خصيصاً لتلبية طموحاتك الاستثمارية والمعمارية في فلسطين من الفكرة وحتى الاستلام.
          </p>
        </div>

        {/* شبكة الخدمات المبتكرة وغير التقليدية */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            // محتوى الكارت الداخلي المشترك لعدم تكرار الكود
            const CardContent = (
              <div className="h-full flex flex-col justify-between p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-500 group relative overflow-hidden">
                {/* تأثير خلفية ناعم يظهر عند التحويم بالماوس */}
                <div className="absolute inset-0 bg-gradient-to-bl from-amber-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* الأيقونة بهوية دافئة ومشرقة */}
                  <div className="bg-amber-50 border border-amber-100 text-amber-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-500 transition-all duration-500">
                    <IconComponent size={26} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* زر الإجراء السفلي الذكي */}
                <div className="mt-8 pt-4 border-t border-slate-50 relative z-10 flex items-center justify-between">
                  <span className={`text-xs font-bold ${service.hasPage ? 'text-slate-900 group-hover:text-amber-600' : 'text-slate-400'} transition-colors`}>
                    {service.actionText}
                  </span>
                  {service.hasPage && (
                    <HiOutlineArrowSmLeft 
                      className="text-slate-400 group-hover:text-amber-500 transform group-hover:-translate-x-2 transition-all duration-300" 
                      size={20} 
                    />
                  )}
                </div>
              </div>
            );

            // شرط التوجيه: إذا كانت الخدمة تملك صفحة يتم لفها برابط Next.js، وإلا تعرض كعنصر عادي
            return service.hasPage ? (
              <Link href={service.link} key={index} className="block h-full transform hover:-translate-y-2 transition-transform duration-500">
                {CardContent}
              </Link>
            ) : (
              <div key={index} className="h-full opacity-85 select-none">
                {CardContent}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;