"use client";

import { Project, projectsMobile } from "@/app/consts";
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

  const projectIndex = projectsMobile.findIndex(p => p.name === project.name);
  const nextProject = projectsMobile[projectIndex + 1];
  const previousProject = projectsMobile[projectIndex - 1];

  // Create an interleaved array of descriptions and images
  const createInterleavedContent = () => {
    const result = [];
    const maxLength = Math.max(
      Array.isArray(project.description) ? project.description.length : 1, 
      project.gallery.length
    );
    
    for (let i = 0; i < maxLength; i++) {
      // Add gallery item if available first
      if (i < project.gallery.length) {
        result.push({
          type: 'image',
          content: project.gallery[i],
          index: i
        });
      }
      
      // Add description item if available
      if (Array.isArray(project.description) && i < project.description.length) {
        result.push({
          type: 'description',
          content: project.description[i],
          index: i
        });
      } else if (!Array.isArray(project.description) && i === 0) {
        // Handle case where description is a string
        result.push({
          type: 'description',
          content: project.description,
          index: 0
        });
      }
    }
    
    return result;
  };
  
  const interleavedContent = createInterleavedContent();

  return (
    <div className="relative w-full h-full mb-10 sm:mt-10">
      <div className="grid grid-cols-1 gap-5">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-col text-xl">
            <p className="radio-canada-big-bold">{project.client}</p>
            <p>{project.name}</p>
          </div>
          
          <div className="flex flex-col gap-2">
            {/* Interleaved content */}
            {interleavedContent.map((item, ) => {
              if (item.type === 'description') {
                // Render description paragraph
                return (
                  <div key={`desc-${item.index}`} className="w-full mb-8">
                    <p className="text-md">{item.content}</p>
                  </div>
                );
              } else {
                // Render gallery image with animation
                const image = item.content;
                const rotation = Math.random() * 10 - 5; // Random rotation between -5 and 5 degrees
                const floatAmount = 5;
                const rotateAmount = 2;
                const floatDuration = 3 + (item.index % 3);
                const floatDelay = item.index * 0.1;
                const isHovered = hoveredIndex === item.index;
                
                return (
                  <div key={`img-${item.index}`} className="flex items-center justify-center mb-8">
                    <motion.div 
                      className=""
                      style={{
                        transformOrigin: 'center center',
                      }}
                      initial={{
                        rotate: rotation,
                        x: item.index % 2 === 0 ? -50 : 50,
                        y: item.index % 2 === 0 ? 50 : -50,
                      }}
                      animate={
                        isHovered 
                          ? {
                              rotate: rotation,
                              scale: 1.4,
                              x: item.index % 2 === 0 ? -50 : 50,
                              y: item.index % 2 === 0 ? 50 : -50,
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
                                item.index % 2 === 0 ? -10 : 10,
                                item.index % 2 === 0 ? -10 + floatAmount : 10 + floatAmount,
                                item.index % 2 === 0 ? -10 : 10,
                                item.index % 2 === 0 ? -10 - floatAmount : 10 - floatAmount,
                                item.index % 2 === 0 ? -10 : 10
                              ],
                              y: [
                                item.index % 2 === 0 ? 10 : -10,
                                item.index % 2 === 0 ? 10 - floatAmount : -10 - floatAmount,
                                item.index % 2 === 0 ? 10 : -10,
                                item.index % 2 === 0 ? 10 + floatAmount : -10 + floatAmount,
                                item.index % 2 === 0 ? 10 : -10
                              ],
                              scale: [1, 1, 1, 1, 1], // Prevent scaling issues
                              zIndex: 40,
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
                              scale: { duration: 0 } // Prevent scale animation
                            }
                      }
                      onHoverStart={() => setHoveredIndex(item.index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                    >
                      <Image 
                        src={image} 
                        alt={`${project.name} image ${item.index + 1}`}
                        width={800}
                        height={800}
                        style={{
                          maxWidth: "250px",
                          maxHeight: "300px",
                          width: "auto",
                          height: "auto",
                          filter: 'drop-shadow(0 8px 8px rgba(0, 0, 0, 0.3))'
                        }}
                      />
                    </motion.div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      
      {/* Navigation links */}
      <div className="grid grid-cols-2 text-md text-center items-center gap-4">
        <div className="flex justify-start">
          {previousProject && (
            <Link href={`${previousProject.link}`} scroll={false}>
              <div className="flex items-center gap-2 hover:underline">
                <ChevronLeftIcon className="w-8 h-8 stroke-2 transition-all duration-200" />
                <span className="radio-canada-big-bold">Previous</span>
              </div>
            </Link>
          )}
        </div>
        <div className="flex justify-end hover:underline">
          {nextProject && (
            <Link href={`${nextProject.link}`} scroll={false}>
              <div className="flex items-center gap-2">
                <span className="radio-canada-big-bold">Next</span>
                <ChevronRightIcon className="w-8 h-8 stroke-2 transition-all duration-200" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}