import React from 'react'
import AllBlogs from '@/components/sections/AllBlogs'
import { GetBlogs } from '@/lib/GetBlogs'

export const metadata = {
  title: 'المقالات العقارية | شركة الراية للتطوير والاستثمار العقاري',
  description:
    'تعرّف على أحدث المقالات العقارية من شركة الراية للتطوير والاستثمار العقاري، نصائح شراء العقارات، الاستثمار العقاري، وأخبار السوق العقاري.',
  keywords: [
    'مقالات عقارية',
    'الاستثمار العقاري',
    'شراء عقارات',
    'شركة الراية',
    'عقارات',
    'مشاريع عقارية',
    'سوق العقارات'
  ],
  openGraph: {
    title: 'المقالات العقارية | شركة الراية',
    description:
      'أحدث المقالات والنصائح العقارية من شركة الراية للتطوير والاستثمار العقاري.',
    type: 'website'
  }
}
const Blogspage = async () => {
  const data =  await GetBlogs()
  return <AllBlogs data={data} />
}

export default Blogspage