import React from 'react'
import { GetAllProjectsEntry } from '@/lib/GetAllProjectsEntry';
import LandingProject from './LandingProject';
const ProjectServerDataLanding = async () => {
 const data = await GetAllProjectsEntry();

  if (!data || data.length === 0) return null;

  return <LandingProject data={data} />;
}

export default ProjectServerDataLanding