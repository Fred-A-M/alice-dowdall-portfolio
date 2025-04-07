"use client";

import { Project, projects } from "@/app/consts";
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface ProjectPageProps {
  project: Project | undefined;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!project) {
    return <div>Project not found</div>;
  }

  const projectIndex = projects.findIndex(p => p.name === project.name);
  const nextProject = projects[projectIndex + 1];
  const previousProject = projects[projectIndex - 1];

  return (
    <div className="relative w-full h-full mb-10 sm:mt-10">
      <div className="grid grid-cols-2 gap-10">

        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-col gap-2 text-4xl">
            <p className="radio-canada-big-bold">{project.client}</p>
            <p>{project.name}</p>
          </div>
          <div className="flex flex-col gap-2">
            {project.description.map((description, index) => (
              <p key={index} className="text-lg">{description}</p>
            ))}
          </div>
        </div>
        
        {/* Gallery images fill the rest of the grid */}
        {project.gallery.map((image, index) => {
          const rotation = index % 2 === 0 ? -5 : 5;
          const isHovered = hoveredIndex === index;
          const floatDuration = 3 + (index % 2);
          const floatDelay = index * 0.05;
          const floatAmount = 3;
          const rotateAmount = 7;

          return (
            <div key={index} className={`flex items-center justify-center`}>
              <motion.div 
                className=""
                style={{
                  transformOrigin: 'center center',
                }}
                initial={{
                  rotate: rotation,
                  x: index % 2 === 0 ? -50 : 50,
                  y: index % 2 === 0 ? 50 : -50,
                }}
                animate={
                  isHovered 
                    ? {
                        rotate: rotation,
                        scale: 1.4,
                        x: index % 2 === 0 ? -50 : 50,
                        y: index % 2 === 0 ? 50 : -50,
                        zIndex: 100,
                      }
                    : {
                        rotate: [
                          rotation, 
                          rotation + rotateAmount, 
                          rotation, 
                          rotation - rotateAmount, 
                          rotation
                        ],
                        x: [
                          index % 2 === 0 ? -10 : 10,
                          index % 2 === 0 ? -10 + floatAmount : 10 + floatAmount,
                          index % 2 === 0 ? -10 : 10,
                          index % 2 === 0 ? -10 - floatAmount : 10 - floatAmount,
                          index % 2 === 0 ? -10 : 10
                        ],
                        y: [
                          index % 2 === 0 ? 10 : -10,
                          index % 2 === 0 ? 10 - floatAmount : -10 - floatAmount,
                          index % 2 === 0 ? 10 : -10,
                          index % 2 === 0 ? 10 + floatAmount : -10 + floatAmount,
                          index % 2 === 0 ? 10 : -10
                        ],
                        scale: 1,
                        zIndex: 50,
                      }
                }
                transition={
                  isHovered
                    ? {
                        duration: 0.3,
                        ease: "easeOut",
                      }
                    : {
                        duration: floatDuration,
                        ease: "easeInOut",
                        times: [0, 0.25, 0.5, 0.75, 1],
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: floatDelay,
                        scale: { duration: 0.3 }
                      }
                }
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <Image 
                  src={image} 
                  alt={project.name} 
                  width={800}
                  height={800}
                  style={{
                    maxWidth: "450px",
                    maxHeight: "600px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    filter: 'drop-shadow(0 8px 8px rgba(0, 0, 0, 0.3))'
                  }}
                  
                />
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 mt-20 text-3xl">
        <div className="flex justify-start">
          {previousProject && (
            <Link href={`${previousProject.link}`} scroll={false}>
              <div className="flex items-center gap-2 hover:underline">
                <ChevronLeftIcon className="w-8 h-8 stroke-2 transition-all duration-200" />
                <span className="radio-canada-big-bold">{previousProject.tagline}</span>
              </div>
            </Link>
          )}
        </div>
        <div className="flex justify-end hover:underline">
          {nextProject && (
            <Link href={`${nextProject.link}`} scroll={false}>
              <div className="flex items-center gap-2 hover:underline">
                <span className="radio-canada-big-bold">{nextProject?.tagline}</span>
                <ChevronRightIcon className="w-8 h-8 stroke-2 transition-all duration-200" />
              </div>
            </Link>
          )}
        </div>
        
      </div>
    </div>
  );
}