"use client";

import { Project } from "@/app/consts";
import { ReactNode } from 'react';
import ProjectFooter from './ProjectFooter';
import ProjectHeaderMobile from './ProjectHeaderMobile';

interface ProjectPageProps {
  project: Project;
  sections: ReactNode[];
}

export default function MobileProjectPage({ project, sections }: ProjectPageProps) {
  if (!project) {
    return <div>Project not found</div>;
  }


  return (
    <div className="flex flex-col w-full justify-center gap-5 mb-5">
      <ProjectHeaderMobile project={project as Project} />
      
      <div className="pt-[80vh] flex flex-col gap-40 justify-center items-center max-w-[1200px] mx-auto">
        {sections && sections.map((section, index) => (
          <div key={index} className="w-full flex justify-center">
            {section}
          </div>
        ))}
      </div>
     
      <ProjectFooter project={project as Project} isMobile={true} />
    </div>
    
      
    
  );
}