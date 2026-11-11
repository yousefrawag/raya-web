// ⚡ ISR: الصفحة بتتعمل أول مرة حد يفتحها وبتتخزن (cache)، وبتتحدث كل ساعة.
// قبل كده كانت بتترندر من الصفر وتكلم Contentful مع كل زيارة (TTFB ~1 ثانية).
export const revalidate = 3600;
export async function generateStaticParams() {
  return [];
}
import React from 'react'
import { notFound } from 'next/navigation'
import BlogDetails from '@/components/sections/BlogDeatils'
import { GetBlogEntry } from '@/lib/GetBlogEntry'
import RelatedPlogs from '@/components/sections/RelatedPlogs';
import { GetBlogs } from '@/lib/GetBlogs';
import { toBlogCard } from '@/lib/toCard';

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

  // notFound هنا (مش بس في الصفحة) عشان الـ status يبقى 404 فعلاً قبل ما الـ streaming يبدأ
  if (!project) notFound()

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
    notFound();
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

      <RelatedPlogs data={(data || []).filter((p) => p.id !== id).map(toBlogCard)} /> 
    </>
  )
}

export default BlogPage