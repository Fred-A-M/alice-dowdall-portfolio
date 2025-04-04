"use client";

import { Project } from "@/app/consts";
import { motion } from 'framer-motion';
import Image from "next/image";
import { useState } from 'react';

interface ProjectPageProps {
  project: Project | undefined;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="relative w-full h-full my-10 px-20">
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
    </div>
  );
}