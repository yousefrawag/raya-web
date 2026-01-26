import React from 'react'
import BlogDeatils from '@/components/sections/BlogDeatils'
import { GetBlogEntry } from '@/lib/GetBlogEntry'
export async function generateMetadata({ params }) {
  const { id } = await params
  const project = await GetBlogEntry(id)

  if (!project) {
    return {
      title: 'مقال غير متوفر | شركة الراية العقارية'
    }
  }

  const title = project?.blogTietal || 'مقال عقاري'
  const description =
    project?.blogDeatils ||
    project?.shortDescription ||
    'مقال عقاري من شركة الراية للتطوير والاستثمار العقاري'

  const image =
    project?.blogImageCutmez?.url|| '/images/og-default.jpg'

  return {
    title: `${title} | شركة الراية للتطوير والاستثمار العقاري`,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: 'article'
    }
  }
}
const BlogPage = async ({params}) => {
    const {id} = await params
    const project = await GetBlogEntry(id)
  return <BlogDeatils project={project} />
}

export default BlogPage