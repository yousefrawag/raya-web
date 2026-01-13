"use client"
import React from 'react';
import { Home, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-amber-500 p-2 rounded-full ml-3">
                <Home size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">العقارات المتميزة</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              شريكك الموثوق في العقارات لأكثر من عقد من الزمن. نحول أحلامك العقارية 
              إلى حقيقة بالخبرة والنزاهة والخدمة الشخصية المتميزة.
            </p>
            <div className="flex  gap-4 space-x-4 space-x-reverse">
              <a href="https://www.facebook.com/akaratalraya" className="bg-slate-800 hover:bg-amber-500 p-3 rounded-full transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/akaratalraya/" className="bg-slate-800 hover:bg-amber-500 p-3 rounded-full transition-colors duration-300">
                <Instagram size={20} />
              </a>
            
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  من نحن
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  خدماتنا
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  مشاريعنا
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('properties')}
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  العقارات
                </button>
              </li>
              <li>
  
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">معلومات التواصل</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                +972 59-270-0633
              </p>
              <p>
                akaratalraya@gmail.com
              </p>
            
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 العقارات المتميزة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;