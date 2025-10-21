"use client"
import React, { useState, useEffect } from 'react';
import { Home, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
const Hedaer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const CheckCurrentpage = pathname === "/"
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { id: '/', label: 'الرئيسية' },

    { id: '/Projects', label: 'مشاريعنا' },
    { id: '/Propertyes', label: 'العقارات' },
     { id: '/map', label: 'ابحث على الخريطة' },

  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${CheckCurrentpage ? "bg-transparent" :"bg-white shadow-lg"} ${
      isScrolled && CheckCurrentpage ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-amber-500 p-2 rounded-full ml-3">
              <Home size={24} className="text-white" />
            </div>
            <h1 className={`text-xl font-bold ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}>
              الراية
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-5 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                className={`font-medium transition-colors  duration-300 hover:text-amber-500 ${CheckCurrentpage ? "":"text-slate-700"} ${
                  isScrolled   ? 'text-slate-700' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden cursor-pointer ${isScrolled ? 'text-slate-800' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white  flex flex-col gap-5 shadow-lg rounded-lg mt-2  p-4">
            {navItems.map((item) => (
           <Link
                key={item.id}
                href={item.id}
                className={`font-medium transition-colors duration-300 hover:text-amber-500 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Hedaer;