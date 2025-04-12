import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import StaticImage from '@/app/components/StaticImage';
import { ReactNode } from "react";
import VideoEmbed from '../components/VideoEmbed';

// Create a function that takes the project and returns the sections
export const BiteBackSections = (project: Project): ReactNode[] => {
  return [
    <VideoEmbed key="video" video={project.video as string} />,

    <div key="gallery" className="grid grid-cols-4 mx-auto w-full lg:w-[80%]">
      <div className="flex w-full justify-center col-span-3">
        <StaticImage 
          src={project.gallery[1].image} 
          alt={project.name}
          width={700}
        />
      </div>
      <div className="flex w-full justify-center items-center col-span-1">
        <FloatingImage 
          src={project.gallery[2].image} 
          alt={project.name} 
          rotation={-5}
          rotateAmount={4} 
          floatAmount={1} 
          floatDuration={3} 
          width={600}
        />      
      </div>
    </div>,

    <div key="gallery2" className="grid grid-cols-1 mx-auto lg:w-[80%] w-full">
      <div className="flex justify-start items-start">
        <StaticImage 
          src={project.gallery[3].image}
          alt={project.name}
          rotation={-5}
          width={500}
        />
      </div>
      <div className="flex justify-end items-end">
        <StaticImage 
          src={project.gallery[4].image}
          alt={project.name}
          rotation={5}
          width={450}
        />
      </div>
    </div>,

  ];
};

export const BiteBackSectionsMobile = (project: Project): ReactNode[] => {
  return [
    <VideoEmbed key="video" video={project.video as string} />,

    <div key="gallery" className="grid grid-cols-4 w-full sm:w-[80%] mx-auto">
      <div className="flex w-full justify-center items-center col-span-3">
        <StaticImage 
          src={project.gallery[1].image} 
          alt={project.name} 
          width={270}
        />
      </div>
      <div className="flex w-full justify-center items-center col-span-1">
        <FloatingImage 
          src={project.gallery[2].image} 
          alt={project.name} 
          rotation={-5}
          rotateAmount={4} 
          floatAmount={1} 
          floatDuration={3} 
          width={100}
        />      
      </div>
    </div>,

    <div key="gallery2" className="grid grid-cols-1 w-full sm:w-[80%] mx-auto">
      <div className="flex justify-start items-start">
        <StaticImage 
          src={project.gallery[3].image}
          alt={project.name}
          rotation={-5}
          isMobile={true}
        />
      </div>
      <div className="flex justify-end items-end">
        <StaticImage 
          src={project.gallery[4].image}
          alt={project.name}
          rotation={5}
          isMobile={true}
        />
      </div>
    </div>,

  ];
};

  