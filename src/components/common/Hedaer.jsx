"use client";
import React, { useState, useEffect } from 'react';
import { Home, Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: '/', label: 'الرئيسية' },
    { id: '/Projects', label: 'مشاريع' },
    { id: '/Propertyes', label: 'العقارات' },
    { id: '/se', label: 'إستثمار' },
    { id: '/map', label: 'الخريطة' },
    { id: '/blogs', label: "المدونة" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[30] transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* 1. Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-amber-500 p-2 rounded-xl shadow-lg shadow-amber-200 group-hover:scale-110 transition-transform">
              <Home size={22} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tight leading-none ${
                isScrolled || !isHomePage ? 'text-slate-900' : 'text-slate-900' // جعلناه داكناً دائماً لأن خلفية النص بيضاء في الـ Hero الجديد
              }`}>
                الراية
              </span>
              <span className="text-[10px] text-amber-600 font-bold uppercase tracking-widest mt-1">للعقارات</span>
            </div>
          </Link>

          {/* 2. Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.id}
                  className={`relative text-sm font-bold transition-all duration-300 hover:text-amber-500 ${
                    isActive ? "text-amber-500" : "text-slate-600"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 right-0 w-full h-0.5 bg-amber-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* 3. Action Button (Call to Action) */}
          {/* <div className="hidden md:flex items-center gap-4">
             <Link 
              href="/contact" 
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-md"
            >
              <Phone size={16} />
              اتصل بنا
            </Link>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* 4. Mobile Menu Layout */}
        <div className={`
          md:hidden fixed inset-x-4 top-20 bg-white shadow-2xl rounded-[2rem] border border-slate-50 p-6 transition-all duration-300 origin-top
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}>
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold p-3 rounded-xl transition-colors ${
                  pathname === item.id ? "bg-amber-50 text-amber-600" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <hr className="border-slate-100 my-2" />
            {/* <Link 
              href="/contact"
              className="bg-amber-500 text-white p-4 rounded-2xl text-center font-bold shadow-lg shadow-amber-100"
            >
              تواصل معنا الآن
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;