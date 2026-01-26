import React from 'react'
import Image from "next/image";
import Link from "next/link";
const AllBlogs = ({data}) => {
//         const data  =   [
//   {
//     id: "blog-1",
//     title: "مستقبل التطوير العقاري في القدس خلال السنوات القادمة",
//     slug: "future-of-real-estate-in-jerusalem",
//     excerpt:
//       "يشهد قطاع التطوير العقاري في القدس تطورًا ملحوظًا مدفوعًا بزيادة الطلب على المشاريع السكنية والتجارية، إلى جانب التوجه نحو الاستدامة.",
//     category: "تحليل عقاري",
//     publishDate: "10 يناير 2025",
//     image:
//       "https://images.unsplash.com/photo-1544986581-efac024faf62",
//   },
//     {
//     id: "blog-1ثق",
//     title: "مستقبل التطوير العقاري في القدس خلال السنوات القادمة",
//     slug: "future-of-real-estate-in-jerusalem",
//     excerpt:
//       "يشهد قطاع التطوير العقاري في القدس تطورًا ملحوظًا مدفوعًا بزيادة الطلب على المشاريع السكنية والتجارية، إلى جانب التوجه نحو الاستدامة.",
//     category: "تحليل عقاري",
//     publishDate: "10 يناير 2025",
//     image:
//       "https://images.unsplash.com/photo-1544986581-efac024faf62",
//   },
//   {
//     id: "blog-2",
//     title: "لماذا تعتبر القدس وجهة استثمار عقاري آمنة؟",
//     slug: "why-jerusalem-is-safe-investment",
//     excerpt:
//       "يبحث المستثمرون دائمًا عن الاستقرار طويل المدى، وهو ما توفره القدس بفضل موقعها وقيمتها التاريخية والعمرانية.",
//     category: "استثمار",
//     publishDate: "2 ديسمبر 2024",
//     image:
//       "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
//   },
//   {
//     id: "blog-3",
//     title: "التوازن بين الحداثة والطابع المعماري المقدسي",
//     slug: "modern-vs-heritage-architecture",
//     excerpt:
//       "تمثل القدس تحديًا فريدًا للمطورين العقاريين في الجمع بين العمارة الحديثة والحفاظ على الهوية التاريخية.",
//     category: "عمارة",
//     publishDate: "1 فبراير 2025",
//     image:
//       "https://images.unsplash.com/photo-1505842465776-3ac269c8a29a",
//   },
//   {
//     id: "blog-4",
//     title: "كيف تؤثر المشاريع الجديدة على سوق العقارات في القدس؟",
//     slug: "new-projects-impact-market",
//     excerpt:
//       "تؤدي المشاريع العقارية الكبرى إلى تحريك السوق ورفع قيمة المناطق المحيطة بها بشكل تدريجي.",
//     category: "سوق العقارات",
//     publishDate: "18 يناير 2025",
//     image:
//       "https://images.unsplash.com/photo-1484154218962-a197022b5858",
//   },
// ]
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

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((post) => (
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