"use client";
import { Project } from '@/app/consts';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeaderMobile({ project }: ProjectHeaderProps) {
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
    [0, window.innerHeight * 0.5], 
    ["0vh", "30vh"]
  );

  return (
    <div className="fixed left-1/2 top-28 -translate-x-1/2 lg:w-[50%] w-[90%] z-[-1]" >
      <div 
        className="flex flex-col justify-center items-center text-center w-full text-2xl"
      >
        <motion.div 
          style={{ y }}
        >
          <h1 className="radio-canada-big-bold">{project.name}</h1>
          <h2>{project.client}</h2>
        </motion.div>
        <motion.div 
          className="mt-4 text-lg gap-1 flex flex-col"
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