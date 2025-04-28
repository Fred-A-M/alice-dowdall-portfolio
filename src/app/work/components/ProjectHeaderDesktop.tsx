"use client";

import { Project } from '@/app/consts';


// Wrapper component for an animated paragraph


interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeaderDesktop({ project }: ProjectHeaderProps) {


  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] z-[-1]" >
      <div 
        className="flex flex-col gap-2 justify-center w-full sm:text-4xl text-xl"
      >
        <p className="radio-canada-big-bold">{project.name}</p>
        <p>{project.client}</p>
        {project.description.map((line, index) => (
          <p key={index} className="text-xl">{line}</p>
        ))}
      </div>
    </div>
  );
}