
import React from 'react';
import Link from 'next/link';

import { ArrowRight, MapPin, Calendar, Building, Users, Phone, Mail, MessageCircle, Star, Check, Image as ImageIcon, FileText, CreditCard } from 'lucide-react';
import { projectsData } from "@/data/index";

import ProjectsRelated from '@/components/sections/ProjectsRelated';
import { GetProjectByid } from '@/lib/GetProjectByid';
import ProjectByidContent from '@/components/sections/ProjectByidContent';
import ProjectsRelatedServer from '@/components/sections/ProjectsRelatedServer';
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
        
            <Link href="/project" className="inline-flex items-center text-slate-900 hover:text-amber-700 transition-colors">
            
            المشاريع
            /
          </Link>
                 <Link href={{
    pathname: "/project",
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