import React from 'react'
import Carousel from "../common/Carousel";
import Link from "next/link";
import Image from 'next/image';

// ⚡ كان client component بـ Swiper. دلوقتي server component والكروت بتترندر على السيرفر،
// والنقط + التشغيل التلقائي من Carousel الخفيف (~2KB بدل Swiper).
const BlogSection = ({ data }) => {
  return (
    <div className="py-12 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          المدونة
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          اكتشف مجموعة متنوعة من المقالات وكيفية الإستثمار
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <Carousel>
          {data?.slice(0, 5).map((post) => (
            <article
              key={post.id}
              className="snap-start shrink-0 w-[85%] sm:w-[48%] lg:w-[31.5%] xl:w-[23.5%] bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                {post.blogImageCutmez?.url && (
                  <Image
                    src={post.blogImageCutmez.url}
                    alt={post.blogTietal || "مقال عقاري"}
                    fill
                    sizes="(max-width:640px) 85vw, (max-width:1024px) 48vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  {post.blogCatgeoray}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2">
                  {post.blogTietal}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {post.blogDeatils}
                </p>

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-xs text-gray-400">
                    {post.createdAt &&
                      new Date(post.createdAt).toLocaleDateString("ar-EG", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                  </span>

                  <Link
                    href={`/blogs/${post.id}`}
                    className="text-amber-600 font-semibold text-sm hover:underline flex items-center gap-1"
                  >
                    اقرأ المقال
                    <svg
                      className="w-4 h-4 rtl:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default BlogSection
