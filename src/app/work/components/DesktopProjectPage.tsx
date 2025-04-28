"use client";

import { Project } from "@/app/consts";
import ProjectFooter from '../components/ProjectFooter';
import ProjectHeaderDesktop from '../components/ProjectHeaderDesktop';

interface ProjectPageProps {
  project: Project | undefined;
  sections: React.ReactNode[];
}

export default function DesktopProjectPage({ project, sections }: ProjectPageProps) {

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="relative inset-0 flex flex-col gap-20 w-full h-full mb-10">
      <ProjectHeaderDesktop project={project} />

      <div className="pt-[70vh]">
        {sections && sections.map((section, index) => (
          <div key={index}>
            {section}
          </div>
        ))}
      </div>

      <ProjectFooter project={project} />
    </div>
  );
}