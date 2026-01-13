import { GetProjectByquery } from '@/lib/GetProjectByquery';
import React from 'react'
import ProjectsRelated from './ProjectsRelated';
const ProjectsRelatedServer = async ({city}) => {
    const data = await GetProjectByquery(city)
  if (!data || data.length === 0) return null;

  return <ProjectsRelated data={data} />;
}

export default ProjectsRelatedServer