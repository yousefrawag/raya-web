"use client"
import React from 'react';
import { Home, Facebook, Instagram, Linkedin, Twitter  } from 'lucide-react';
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
// import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navItems = [
    { id: '/', label: 'الرئيسية' },
    { id: '/regions', label: 'المناطق' },
    { id: '/properties', label: 'العقارات' },
        { id: '/investment', label: 'إستثمار' }, 
    { id: '/contracting', label: 'المقاولات' }, 

    { id: '/engineering-consultation', label: 'إستشارات هندسية' }, 
    
    { id: '/map', label: 'الخريطة' },
    { id: '/blogs', label: "المدونة" }, 
  ];

  return (
    <>
      <footer className="bg-[#FFF9E6] text-slate-900 py-12">
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
            <p className="text-gray-700 mb-6 leading-relaxed">
              شريكك الموثوق في العقارات لأكثر من عقد من الزمن. نحول أحلامك العقارية 
              إلى حقيقة بالخبرة والنزاهة والخدمة الشخصية المتميزة.
            </p>
            <div className="flex  gap-4 space-x-4 space-x-reverse">
              <a target='_blank' href="https://www.facebook.com/akaratalraya" className="bg-amber-500 p-3 rounded-full transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a target='_blank' href="https://www.instagram.com/akaratalraya/" className="bg-amber-500 p-3 rounded-full transition-colors duration-300">
                <Instagram size={20} />
              </a>
                 <a target='_blank' href="https://x.com/akaratalraya" className="bg-amber-500 p-3 rounded-full transition-colors duration-300">
                <FaXTwitter size={20} />
              </a>
                    <a href="https://www.tiktok.com/@akaratalraya?_r=1&_t=ZS-94U8XiehrcW" target='_blank' className="bg-amber-500 p-3 rounded-full transition-colors duration-300">
                <FaTiktok size={20} />
              </a>
                        <a target='_blank' href="https://www.snapchat.com/add/akaratalraya?share_id=u2bNKV7lgWE&locale=en-EG" className="bg-amber-500 p-3 rounded-full transition-colors duration-300">
                <FaSnapchatGhost size={20} />
              </a>
            
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 grid grid-cols-2">
              <li>
                <Link href='/' 
                 
                  className="text-gray-700 hover:text-amber-500 transition-colors duration-300"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link 
                href='/#about'
                 
                  className="text-gray-700 hover:text-amber-500 transition-colors duration-300"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link 
                  href='/#services'
                 
                  className="text-gray-700 hover:text-amber-500 transition-colors duration-300"
                >
                  خدماتنا
                </Link>
              </li>
                       <li>
                <Link 
                href='/regions'
                  
                  className="text-gray-700 hover:text-amber-500 transition-colors duration-300"
                >
                  المناطق
                </Link>
              </li>
                   <li>
                <Link 
                href='/properties'
                  
                  className="text-gray-700 hover:text-amber-500 transition-colors duration-300"
                >
                  العقارات
                </Link>
              </li>
              <li>
                <Link 
                 href='/investment'
        
                  className="text-gray-700 hover:text-amber-500 transition-colors duration-300"
                >
                  إستثمار
                </Link>
              </li>
                     <li>
                <Link 
                 href='/contracting'
        
                  className="text-gray-700 hover:text-amber-500 transition-colors duration-300"
                >
                  مقاولات
                </Link>
              </li>
                     <li>
                <Link 
                 href='/engineering-consultation'
        
                  className="text-gray-700 hover:text-amber-500 transition-colors duration-300"
                >
                  إستشارات هندسية
                </Link>
              </li>
         
              <li>
  
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">معلومات التواصل</h4>
            <div className="space-y-2 text-gray-700">
              <p>
               +972568700632
              </p>
              <p>
          rayapalinfo@gmail.com
              </p>
            
            </div>
          </div>
        </div>

        {/* Copyright */}
     
      </div>
     
    </footer>
        <div className="border-t bg-[#FEEECD] border-[#FEEECD]  pt-8 pb-10 h-full w-full text-center text-gray-700">
          <p>&copy; 2026 العقارات المتميزة. جميع الحقوق محفوظة.</p>
        </div>
    </>
  
  );
};

export default Footer;