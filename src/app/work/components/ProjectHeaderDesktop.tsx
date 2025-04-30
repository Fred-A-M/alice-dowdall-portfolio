"use client";
import { Project } from '@/app/consts';
import { useEffect, useState } from 'react';

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeaderDesktop({ project }: ProjectHeaderProps) {
  const [showDescription, setShowDescription] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.6; // 10% of viewport height
      setShowDescription(scrollPosition < threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[50%] w-[90%] z-[-1]" >
      <div 
        className="flex flex-col gap-2 justify-center items-center text-center w-full text-4xl"
      >
        <p className="radio-canada-big-bold">{project.name}</p>
        <p>{project.client}</p>
        {showDescription &&  
          <div className="mt-2 text-xl">
            {project.description.map((line, index) => (
              <p key={index}>
              {line}
              </p>
            ))}
          </div>}
      </div>
    </div>
  );
}