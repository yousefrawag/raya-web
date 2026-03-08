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
  ...new Set(data?.map((item) => item.blogCatgeoray))
];
  const filteredBooks = data.filter(book => {
    const matchesSearch = book?.blogTietal.includes(searchTerm) ;
    const matchesCategory = selectedCategory === 'الكل' ;
    return matchesSearch && matchesCategory;
  });

 return (
    <section className="py-25 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            المدونة العقارية
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            مقالات وتحليلات حول سوق العقارات والتطوير العمراني في القدس
          </p>
        </div>

    {/* <section className="relative py-24 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-12 mt=10">
            
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up mt-10" >
                مكتبة <span className="text-gradient">الكتب</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                مجموعة شاملة من الكتب المتخصصة في المجال العقاري والقانوني
              </p>
            
            </div>

            {/* Search and Filter */}
            {/* <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="ابحث في الكتب..."
                  // value={searchTerm}
                  // onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-12 h-14 text-lg"
                />
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {categories?.map((category) => (
                  <ButtonTow
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category)}
                    className="hover-scale"
                  >
                    {category}
                  </ButtonTow>
                ))}
              </div>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border-2 border-primary/20 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl font-bold text-gradient mb-2">{data.length}</div>
                <div className="text-sm text-muted-foreground">إجمالي الكتب</div>
              </div>
      
         
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border-2 border-primary/20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="text-3xl font-bold text-gradient mb-2">3K+</div>
                <div className="text-sm text-muted-foreground">صفحات</div>
              </div>
            </div> */}
          {/* </div>
        </section> */}


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