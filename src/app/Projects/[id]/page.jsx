
import React from 'react';
import Link from 'next/link';

import { ArrowRight, MapPin, Calendar, Building, Users, Phone, Mail, MessageCircle, Star, Check, Image as ImageIcon, FileText, CreditCard } from 'lucide-react';
import { projectsData } from "@/data/index";

import ProjectsRelated from '@/components/sections/ProjectsRelated';
import { GetProjectByid } from '@/lib/GetProjectByid';
import ProjectByidContent from '@/components/sections/ProjectByidContent';
import ProjectsRelatedServer from '@/components/sections/ProjectsRelatedServer';
export async function generateMetadata({ params }) {
  const { id } = await params
  const project = await GetProjectByid(id)

  if (!project) {
    return {
      title: 'مشروع غير موجود | شركة الراية',
      robots: {
        index: false,
        follow: false
      }
    }
  }

  const title = `${project.title} في ${project.city} | مشروع ${project.projectType} من شركة الراية`

  const description = `
${project.title} مشروع ${project.projectType} في ${project.city}.
${project.details?.slice(0, 140) || 'مشروع عقاري مميز بموقع استراتيجي وأنظمة سداد مرنة.'}
  `.trim()

  return {
    title,
    description,

    alternates: {
      canonical: `/projects/${id}`
    },

    openGraph: {
      title,
      description,
      type: 'article',
      locale: 'ar_AR',
      images: project.seriesimagesCutmez?.[0]?.url
        ? [{ url: project.seriesimagesCutmez[0].url }]
        : []
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  }
}

const ProjectDetail = async ({params}) => {
 const { id } = await params;

 const project = await GetProjectByid(id)
 

  // if (!project) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-center">
  //         <h2 className="text-2xl font-bold text-slate-800 mb-4">المشروع غير موجود</h2>
  //         <Link href="/" className="text-amber-600 hover:text-amber-700">العودة للرئيسية</Link>
  //       </div>
  //     </div>
  //   );
  // }


  return (
    <div className="h-full ">
      <div className='container mx-auto px-6  '>

      {/* Header */}
      <div className="p-4  mt-25 ">
        <div className="  flex gap-4">
          <Link href="/" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            العودة للرئيسية
            /
          </Link>
        
            <Link href="/Projects" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            المشاريع
            /
          </Link>
                 <Link href={{
    pathname: "/Projects",
    query: {
  
      city: project.city,
   
    },
  }}  className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            {
              project?.city
            }
            /

          </Link>
          
                <span className="inline-flex items-center text-amber-700 transition-colors">
          
           {
            project?.title
           }
          </span>
        </div>
      </div>
    
           <ProjectByidContent  project={project} />
      
          <h2 className='text-slate-900 text-2xl'> مشاريع ذات صلة </h2>
      <ProjectsRelatedServer city={project?.city} />
      </div>

  
    </div>
  );
};

export default ProjectDetail;