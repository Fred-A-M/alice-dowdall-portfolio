import { Project } from "@/app/consts";
import StaticImage from '@/app/components/StaticImage';
import { ReactNode } from "react";
import Image from "next/image";

// Create a function that takes the project and returns the sections
export const WorldWithoutSoilSections = (project: Project): ReactNode[] => {
  return [
    <Image 
      src={project.gallery[0].image}
      alt={project.name}
      width={800}
      height={800}
      key="0"
    />,
    <video 
      key="video" 
      playsInline 
      preload="none" 
      controls
      poster={project.gallery[4].image}
      className="max-w-[1200px] w-full aspect-video"
    >
      <source src={project.gallery[4].mp4} type="video/mp4" />
      <source src={project.gallery[4].webm} type="video/webm" />
    </video>,
    <Image 
      src={project.gallery[1].image}
      alt={project.name}
      width={1100}
      height={1100}
      key="1"
    />,
    <Image 
      src={project.gallery[2].image}
      alt={project.name}
      width={1100}
      height={1100}
      key="2"
    />,
    <Image 
      src={project.gallery[3].image}
      alt={project.name}
      width={1100}
      height={1100}
      key="3"
    />,
  ];
};

export const WorldWithoutSoilSectionsMobile = (project: Project): ReactNode[] => {
  return [
    <div key="gallery2" className="grid grid-cols-1 mx-auto sm:w-[80%] w-full">
      <div className="flex justify-start items-start">
        <StaticImage 
          src={project.gallery[1].image}
          alt={project.name}
          rotation={-6}
          isMobile={true}
        />
      </div>
      <div className="flex justify-end items-end">
        <StaticImage 
          src={project.gallery[2].image}
          alt={project.name}
          rotation={6}
          isMobile={true}
        />
      </div>
    </div>,

    <div key="large-image" className="flex justify-center items-center w-full">
      <Image 
        src={project.gallery[3].image} 
        alt={project.name} 
        width={450} 
        height={300} 
      />  
    </div>
  ];
};

  