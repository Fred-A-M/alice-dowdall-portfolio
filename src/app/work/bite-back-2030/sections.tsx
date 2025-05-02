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
      src={project.image.image} 
      alt={project.name}
      width={project.image.width}
      height={project.image.height}
      style={{
        width: "1000px",
        height: "auto",
      }}
      key="0"
    />,

    <div key="gallery" className="grid grid-cols-10 mx-auto w-full">
      <div className="flex w-full justify-start col-span-8">
        <Image 
          src={project.gallery[1].image} 
          alt={project.name}
          width={1800}
          height={1179}
          style={{
            width: "800px",
            height: "auto",
          }}
        />
      </div>
      <div className="flex w-full justify-end items-center col-span-2">
        <Image 
          src={project.gallery[2].image} 
          alt={project.name} 
          width={683}
          height={1170}
          style={{
            width: "300px",
            height: "auto",
          }}
        />      
      </div>
    </div>,

    <div key="gallery2" className="grid grid-cols-2 lg:gap-20 gap-10 mx-auto w-full">
      <div className="flex justify-center pb-30">
        <Image 
          src={project.gallery[3].image}
          alt={project.name}
          width={1702}
          height={956}
          style={{
            width: "650px",
            height: "auto",
          }}
        />
      </div>
      <div className="flex justify-center pt-30">
        <Image 
          src={project.gallery[4].image}
          alt={project.name}
          width={1920}
          height={1080}
          style={{
            width: "650px",
            height: "auto",
          }}
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
          width={1800}
          height={1179}
          stylesWidth={270}
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
          width={683}
          height={1170}
          stylesWidth={160}
        />      
      </div>
    </div>,

    <div key="gallery2" className="grid grid-cols-1 w-full sm:w-[80%] mx-auto">
      <div className="flex justify-start items-start">
        <StaticImage 
          src={project.gallery[3].image}
          alt={project.name}
          rotation={-5}
          width={1702}
          height={956}
        />
      </div>
      <div className="flex justify-end items-end">
        <StaticImage 
          src={project.gallery[4].image}
          alt={project.name}
          rotation={5}
          width={1920}
          height={1080}
        />
      </div>
    </div>,

  ];
};

  