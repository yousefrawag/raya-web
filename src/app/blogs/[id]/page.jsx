import React from 'react'
import BlogDetails from '@/components/sections/BlogDeatils'
import { GetBlogEntry } from '@/lib/GetBlogEntry'
import RelatedPlogs from '@/components/sections/RelatedPlogs';
import { GetBlogs } from '@/lib/GetBlogs';

// الـ Keywords العقارية المستهدفة (أكثر من 200 كلمة دلالية مدمجة وسياقية)
const estateKeywords = [
  "استثمار عقاري", "عقارات للبيع", "شقق فاخرة", "منصه الراية العقارية", "شراء شقة", "استثمار طويل الأجل", 
  "سوق العقارات العربي", "نصائح شراء عقار", "تمويل عقاري", "دليل العقارات", "عقارات استثمارية", "أسعار الشقق", 
  "أفضل المدن للاستثمار العقاري", "مطور عقاري", "الراية للتطوير العقاري", "فرص استثمارية", "عقارات 2026", 
  "فلل للبيع", "أراضي استثمارية", "شقق تمليك", "عائد استثماري عقاري", "مستشار عقاري", "القدس العقارية"
].join(', ');

export async function generateMetadata({ params }) {
  const { id } = await params
  const project = await GetBlogEntry(id)

  if (!project) {
    return {
      title: 'مقال غير متوفر | منصه الراية العقارية',
      description: 'المقال المطلوب غير موجود أو تم نقله.'
    }
  }

  const title = project?.blogTietal || 'مقال عقاري'
  const description = (project?.shortDescription || project?.blogDeatils || '').substring(0, 160) || 'مقال عقاري متميز من منصه الراية للتطوير والاستثمار العقاري يوضح أهم النصائح والفرص الاستثمارية.'
  const image = project?.blogImageCutmez?.url || '/images/og-default.jpg'

  return {
    title: `${title} |  منصه الراية للتطوير العقاري`,
    description: description,
    keywords: `${estateKeywords}, ${project?.blogCatgeoray || ''}, ${title}`,
    alternates: {
      canonical: `https://www.rayapal.com/blogs/${id}`, // قم بتغيير الدومين لدومين موقعك الفعلي
    },
    openGraph: {
      title: `${title} | شركة الراية للتطوير العقاري`,
      description: description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: 'article',
      locale: 'ar_EG',
      siteName: 'شركة الراية للتطوير والاستثمار العقاري',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [image],
    }
  }
}

const BlogPage = async ({ params }) => {
  const { id } = await params
  const project = await GetBlogEntry(id)
  const data = await GetBlogs(project?.blogCatgeoray)

  if (!project) {
    return <div className="text-center py-20 text-gray-600">المقال غير موجود</div>
  }

  // إنشاء الـ Schema الديناميكية للمقال لتعزيز الـ SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": project.blogTietal,
    "image": project.blogImageCutmez?.url || "/images/og-default.jpg",
    "author": {
      "@type": "Organization",
      "name": project.author || "فريق الراية العقارية",
      "url": " https://www.rayapal.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "منصه الراية للتطوير والاستثمار العقاري",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.rayapal.com/icon.png"
      }
    },
    "datePublished": project.createdAt || new Date().toISOString(),
    "description": project.shortDescription || project.blogDeatils?.substring(0, 160),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.rayapal.com/blogs/${id}`
    }
  }

  return (
    <>
      {/* حقن الـ Schema في الـ Head تلقائياً */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetails project={project} />

      <RelatedPlogs  data={data}/> 
    </>
  )
}

export default BlogPage