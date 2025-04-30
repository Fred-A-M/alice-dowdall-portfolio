import { Project } from "@/app/consts";
import StaticImage from '@/app/components/StaticImage';
import { ReactNode } from "react";
import VideoEmbed from '../components/VideoEmbed';
import Image from "next/image";

export const WaterAidSections = (project: Project): ReactNode[] => {
  return [
    <VideoEmbed key="video" video={project.video as string} />,

    <div key="1">
      <Image 
        src={project.gallery[1].image}
        alt={project.name} 
        width={1100}
        height={1000}
      />
    </div>,
    <div key="2">
      <Image 
        src={project.gallery[2].image}
        alt={project.name} 
        width={1000}
        height={1000}
      />
    </div>,
    <div key="3">
      <Image 
        src={project.gallery[3].image}
        alt={project.name} 
        width={1100}
        height={1000}
      />
    </div>,

  ];
};

export const WaterAidSectionsMobile = (project: Project): ReactNode[] => {
  return [
   
    <VideoEmbed key="video" video={project.video as string} />,

    <div key="gallery-grid" className="grid grid-cols-1 mx-auto w-full sm:w-[80%]">
      <div className="flex justify-start items-center">
        <StaticImage 
          src={project.gallery[1].image} 
          alt={project.name} 
          rotation={-6}
          isMobile={true}
        />
      </div>
      <div className="flex justify-end items-center"> 
        <StaticImage 
          src={project.gallery[3].image} 
          alt={project.name}
          rotation={6}
          isMobile={true}
        />
      </div>
    </div>,

    <div key="large-image" className="flex items-center justify-center">
      <Image 
        src={project.gallery[2].image} 
        alt={project.name} 
        width={500}
        height={500}
        className="rounded-sm"
      />
    </div>
  ];
};

  