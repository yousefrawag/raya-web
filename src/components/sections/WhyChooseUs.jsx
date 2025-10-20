"use client"
import React from 'react';
import { Shield, Clock, Users, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: 'موثوق من قبل +500 عميل',
      description: 'عائلتنا المتنامية من العملاء الراضين هي شاهد على التزامنا بالتميز والموثوقية.'
    },
    {
      icon: Clock,
      title: '+12 سنة خبرة في السوق',
      description: 'أكثر من عقد من خبرة السوق يمنحنا رؤى عميقة في اتجاهات العقارات والفرص.'
    },
    {
      icon: Shield,
      title: 'عمليات شفافة',
      description: 'نؤمن بالشفافية الكاملة بدون رسوم خفية أو مفاجآت طوال رحلتك معنا.'
    },
    {
      icon: TrendingUp,
      title: 'سجل حافل بالنجاح',
      description: 'تقديم النتائج باستمرار مع معدل رضا العملاء 95% والمعاملات الناجحة.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            لماذا تختارنا
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نتميز في صناعة العقارات من خلال التزامنا بالتميز ونجاح العملاء
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl p-8 border border-amber-500/30">
            <h3 className="text-2xl font-bold mb-4">مستعد للبدء؟</h3>
            <p className="text-gray-300 mb-6">انضم إلى مئات العملاء الراضين الذين يثقون بنا في احتياجاتهم العقارية</p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              تواصل معنا اليوم
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;