"use client";
import { Project } from '@/app/consts';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeaderDesktop({ project }: ProjectHeaderProps) {
  const { scrollY } = useScroll();
  
  // Transform for the description - moves out of view as user scrolls
  const descriptionY = useTransform(
    scrollY, 
    [0, window.innerHeight], 
    ["0vh", "100vh"]
  );
  
  // Transform for opacity - fades out as user scrolls
  const descriptionOpacity = useTransform(
    scrollY, 
    [0, window.innerHeight * 0.5], 
    [1, 0]
  );
  
  // Transform for the title container - moves to center
  const y = useTransform(
    scrollY, 
    [0, window.innerHeight], 
    ["0vh", "15vh"]
  );

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[50%] w-[90%] z-[-1]" >
      <div 
        className="flex flex-col gap-2 justify-center items-center text-center w-full text-4xl"
      >
        <motion.div 
          style={{ y }}
        >
          <h1 className="radio-canada-big-bold">{project.name}</h1>
          <h2>{project.client}</h2>
        </motion.div>
        <motion.div 
          className="mt-2 text-xl"
          style={{ 
            y: descriptionY,
            opacity: descriptionOpacity
          }}
        >
          {project.description.map((line, index) => (
            <p key={index}>
              {line}
            </p>
          ))}
        </motion.div>
      </div>
    </div>
  );
}