import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import StaticImage from '@/app/components/StaticImage';
import { ReactNode } from "react";
import VideoEmbed from '../components/VideoEmbed';
import Image from 'next/image';
// Create a function that takes the project and returns the sections
export const BiteBackSections = (project: Project): ReactNode[] => {
  return [
    <VideoEmbed key="video" video={project.video as string} />,

    <Image 
      src={project.image} 
      alt={project.name}
      width={1000}
      height={1000}
      key="0"
    />,

    <div key="gallery" className="grid grid-cols-4 mx-auto w-full gap-20 lg:w-[80%]">
      <div className="flex w-full justify-center col-span-3">
        <Image 
          src={project.gallery[1].image} 
          alt={project.name}
          width={800}
          height={800}
        />
      </div>
      <div className="flex w-full justify-center items-center col-span-1">
        <Image 
          src={project.gallery[2].image} 
          alt={project.name} 
          width={600}
          height={600}
        />      
      </div>
    </div>,

    <div key="gallery2" className="grid grid-cols-2 lg:gap-20 gap-10 mx-auto w-full">
      <div className="flex justify-center pb-30">
        <Image 
          src={project.gallery[3].image}
          alt={project.name}
          width={650}
          height={650}
        />
      </div>
      <div className="flex justify-center pt-30">
        <Image 
          src={project.gallery[4].image}
          alt={project.name}
          width={650}
          height={650}
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

  