import React from 'react'
import Image from "next/image";
import Link from 'next/link';
const BlogDeatils = ({project}) => {

  
  if (!project) return null;

  return (
    <article className="py-25 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="p-4  ">
              <div className="  flex gap-4">
                <Link href="/" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
                  
                  العودة للرئيسية
                  /
                </Link>
              
                  <Link href="/blogs" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
                  
                 المدونة
                  /
                </Link>
             
                
                      <span className="inline-flex items-center text-amber-700 transition-colors">
                
                  {project?.blogTietal}
                </span>
              </div>
            </div>

        {/* Image */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden mb-10">
          <Image
            src={project.blogImageCutmez?.url}
            alt={project.blogTietal}
            fill
            className="object-cover"
          />
        </div>
  <header className="mb-10">
          <span className="text-sm text-amber-600 font-semibold">
            {project.blogCatgeoray}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            {project.blogTietal}
          </h1>

          <p className="text-sm text-gray-400">
                             <span className="text-xs text-gray-400">
                              {new Date(project.createdAt).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}
                  </span>
          </p>
        </header>
        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
           <p className="text-sm text-gray-600 line-clamp-3 mb-5">
                  {project.blogDeatils}
                </p>

          <p>
            في الختام، تظل القدس واحدة من أهم المدن التي تحمل فرصًا استثمارية
            طويلة الأمد في القطاع العقاري.
          </p>
        </div>

      </div>
    </article>
  );
}

export default BlogDeatils