import React from 'react';
import { Home, Key, TrendingUp, FileText, Building2, Calculator } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: 'شراء العقارات',
      description: 'اعثر على منزلك المثالي مع قوائم العقارات الواسعة والإرشاد المتخصص طوال عملية الشراء.'
    },
    {
      icon: Key,
      title: 'بيع العقارات',
      description: 'اعظم قيمة عقارك مع نهجنا التسويقي الاستراتيجي وخبرة التفاوض المتميزة.'
    },
    {
      icon: Building2,
      title: 'تأجير العقارات',
      description: 'خدمات تأجير شاملة لكل من الملاك والمستأجرين مع عمليات شفافة.'
    },
    {
      icon: FileText,
      title: 'الاستشارات العقارية',
      description: 'نصائح مهنية حول اتجاهات السوق وتقييم العقارات واستراتيجيات الاستثمار.'
    },
    {
      icon: TrendingUp,
      title: 'إدارة الاستثمارات',
      description: 'بناء وإدارة محفظتك العقارية مع إرشادنا الاستثماري المتخصص.'
    },
    {
      icon: Calculator,
      title: 'تقييم العقارات',
      description: 'تقييمات عقارية دقيقة باستخدام أحدث بيانات السوق وطرق التقييم.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            خدماتنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            حلول عقارية شاملة مصممة لتلبية احتياجاتك وأهدافك الفريدة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;