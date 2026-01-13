import React from 'react';
import { Award, Users, Star } from 'lucide-react';
import Image from 'next/image';
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          عن الراية
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              تأسست منصة  الراية في عام 2012، وكانت في المقدمة في صناعة العقارات، 
              حيث ساعدت آلاف العائلات في العثور على منازلهم المثالية والمستثمرين في اكتشاف الفرص المربحة. 
              التزامنا بالتميز ورضا العملاء جعلنا واحدة من أكثر الأسماء الموثوقة في العقارات.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نؤمن أن كل معاملة عقارية هي أكثر من مجرد صفقة تجارية - إنها تتعلق بمساعدة الناس 
              على تحقيق أحلامهم وبناء مستقبلهم. فريقنا ذو الخبرة يجمع بين خبرة السوق والخدمة 
              الشخصية لتقديم نتائج استثنائية.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-amber-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-slate-800">+12</div>
                <div className="text-sm text-gray-600">سنة خبرة</div>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-amber-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-slate-800">+500</div>
                <div className="text-sm text-gray-600">عميل راضٍ</div>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="text-amber-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-slate-800">4.9</div>
                <div className="text-sm text-gray-600">تقييم العملاء</div>
              </div>
            </div>
          </div>

          {/* Team Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
              width={100}
              height={100}
                loading="lazy"
                src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="فريقنا المحترف"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold">موثوق</div>
              <div className="text-sm">منذ 2012</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;