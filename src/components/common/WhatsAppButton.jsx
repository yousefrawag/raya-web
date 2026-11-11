import React from 'react';
import { MessageCircle } from 'lucide-react';

// ⚡ كان client component بـ onClick + window.open.
// دلوقتي لينك عادي (<a>) فمش بيحتاج أي JavaScript، وكمان جوجل يقدر يقرأه كلينك.
const phoneNumber = '972568700632'; // رقم الواتساب (wa.me بياخده من غير +)
const message = 'مرحباً، أود الاستفسار عن خدماتكم العقارية';
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const WhatsAppButton = () => {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-15 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group"
      aria-label="تواصل عبر الواتساب"
    >
      <MessageCircle size={24} />

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        تواصل عبر الواتساب
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
      </div>

      {/* Pulse Animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
    </a>
  );
};

export default WhatsAppButton;
