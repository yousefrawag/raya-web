"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Input } from '../ui/inputtow';
import { ButtonTow } from '../ui/buttontow';
import { useState } from 'react';
import { Calendar, Clock, Eye, ArrowLeft, Search } from 'lucide-react';
const AllBlogs = ({data}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
const categories = [
  "الكل",
  ...new Set(
    data
      ?.map(item => item.blogCatgeoray?.trim()) // نشيل المسافات
      ?.filter(cat => cat) // نشيل null و undefined و ""
  )
];
  const filteredBooks = data.filter(book => {
    const matchesSearch = book?.blogTietal.includes(searchTerm) ;
    const matchesCategory = selectedCategory === 'الكل' || book.blogCatgeoray === selectedCategory ;
    return matchesSearch && matchesCategory;
  });

 return (
    <section className="py-20 ">
      
        
        {/* Page Header */}
        {/* <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            المدونة العقارية
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            مقالات وتحليلات حول سوق العقارات والتطوير العمراني في القدس
          </p>
        </div> */}

<section className="relative py-28  overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
  
  {/* background shapes */}
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-20 right-20 w-72 h-72 bg-amber-700/30 rounded-full blur-3xl animate-float"></div>
    <div
      className="absolute bottom-20 left-20 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl animate-float"
      style={{ animationDelay: "2s" }}
    ></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">

    {/* title */}
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
        المدونة <span className="text-amber-500">والمقالات</span>
      </h1>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        مقالات وتحليلات في المجال العقاري تساعدك على فهم السوق واتخاذ القرار الصحيح
      </p>
    </div>

    {/* search */}
    <div className="max-w-3xl mx-auto space-y-6">

      <div className="relative">
        <Search className="absolute outline-none border-none right-4 top-1/2 -translate-y-1/2 text-gray-200 w-5 h-5" />

<Input
  type="text"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  placeholder="ابحث في المقالات..."
  className="pr-12 h-14 text-lg rounded-xl shadow-sm bg-white text-black
             border-none outline-none ring-0 focus:ring-0 focus:outline-none"
/>
      </div>

      {/* categories */}
      <div className="flex flex-wrap gap-3 justify-center">

        {categories?.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 cursor-pointer py-2 rounded-lg text-sm font-medium transition 
            ${
              selectedCategory === category
                ? "bg-amber-500 text-white shadow"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}

      </div>

    </div>

  </div>

</section>

<div className="p-10  ">
        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBooks?.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-56">
                <Image
                  src={post.blogImageCutmez?.url}
                  alt={post.blogTietal}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <span className="inline-block mb-3 text-xs font-semibold text-amber-600">
                  {post.blogCatgeoray}
                </span>

                <h2 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2">
                  {post.blogTietal}
                </h2>

                <p className="text-sm text-gray-600 line-clamp-3 mb-5">
                  {post.blogDeatils}
                </p>

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-xs text-gray-400">
                              {new Date(post.createdAt).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}
                  </span>

                  <Link
                    href={`/blogs/${post.id}`}
                    className="text-sm font-semibold text-amber-600 hover:underline"
                  >
                    اقرأ المقال
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AllBlogs