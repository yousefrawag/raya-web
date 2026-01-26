import React from 'react'
import BlogSection from './BlogSection'
import { GetBlogs } from '@/lib/GetBlogs'
const BlogServerRendering = async () => {
  const data = await GetBlogs()
//     const data  =   [
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
  return <BlogSection data={data} />
}

export default BlogServerRendering