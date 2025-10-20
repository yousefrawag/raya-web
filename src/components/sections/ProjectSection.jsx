import React from 'react';
import Link from 'next/link';
import { MapPin, Calendar, Users, Building } from 'lucide-react';

const ProjectSection = ({CurrentView}) => {
  const projects = [
    {
      id: 1,
      title: 'مجمع الواحة السكني',
      location: 'الرياض، المملكة العربية السعودية',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      units: 150,
      completion: '2024',
      type: 'سكني',
      description: 'مجمع سكني فاخر يضم شقق وفيلات عصرية مع جميع المرافق والخدمات.'
    },
    {
      id: 2,
      title: 'برج النخيل التجاري',
      location: 'دبي، الإمارات العربية المتحدة',
      image: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      units: 80,
      completion: '2025',
      type: 'تجاري',
      description: 'برج تجاري متطور في قلب دبي مع مكاتب ومحلات تجارية راقية.'
    },
    {
      id: 3,
      title: 'منتجع الشاطئ الذهبي',
      location: 'جدة، المملكة العربية السعودية',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      units: 200,
      completion: '2026',
      type: 'سياحي',
      description: 'منتجع سياحي فاخر على الشاطئ مع فيلات ووحدات سكنية مطلة على البحر.'
    } ,
    
    //     {
    //   id: 31,
    //   title: 'مجمع الواحة السكني',
    //   location: 'الرياض، المملكة العربية السعودية',
    //   image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    //   units: 150,
    //   completion: '2024',
    //   type: 'سكني',
    //   description: 'مجمع سكني فاخر يضم شقق وفيلات عصرية مع جميع المرافق والخدمات.'
    // },
    //     {
    //   id: 21,
    //   title: 'برج النخيل التجاري',
    //   location: 'دبي، الإمارات العربية المتحدة',
    //   image: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    //   units: 80,
    //   completion: '2025',
    //   type: 'تجاري',
    //   description: 'برج تجاري متطور في قلب دبي مع مكاتب ومحلات تجارية راقية.'
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
    

        {/* Projects Grid */}
        <div className={`grid ${CurrentView === "list"? "grid-cols-3 gap-8" : CurrentView === "module" ? "grid-cols-1 gap-8" : "lg:grid-cols-3 md:grid-cols-2 gap-8"}`}>
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin size={16} className="ml-2" />
                  <span className="text-sm">{project.location}</span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <Building size={16} className="text-amber-500 ml-2" />
                    <span className="text-sm text-gray-600">{project.units} وحدة</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="text-amber-500 ml-2" />
                    <span className="text-sm text-gray-600">التسليم {project.completion}</span>
                  </div>
                </div>
                
                <Link 
                  href={`/Projects/${project.id}`}
                  className="block  w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center"
                >
                  تفاصيل أكثر
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;