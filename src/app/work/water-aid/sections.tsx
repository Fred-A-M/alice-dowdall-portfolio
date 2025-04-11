import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import { ReactNode } from "react";
import VideoEmbed from '../components/VideoEmbed';
import Image from "next/image";

export const WaterAidSections = (project: Project): ReactNode[] => {
  return [
   
    <VideoEmbed key="video" video={project.video as string} />,

    <div key="gallery-grid" className="grid grid-cols-2 mx-auto w-full lg:w-[80%]">
      <div className="flex flex-col gap-8 col-span-1">
        <div className="self-start pl-20">
          <FloatingImage 
            src={project.gallery[1].image} 
            alt={project.name} 
            rotateAmount={project.gallery[1].rotate}
            floatAmount={project.gallery[1].floatAmount}
            floatDuration={project.gallery[1].floatDuration}
          />
        </div>
        <div className="self-end pl-10"> 
          <FloatingImage 
            src={project.gallery[2].image} 
            alt={project.name} 
            rotateAmount={project.gallery[2].rotate}
            floatAmount={project.gallery[2].floatAmount}
            floatDuration={project.gallery[2].floatDuration}
            width={370}
            height={370}
          />
        </div>
      </div>
      
      <div className="flex items-center justify-center col-span-1">
        <div className="">
          <FloatingImage 
            src={project.gallery[3].image} 
            alt={project.name} 
            rotateAmount={project.gallery[3].rotate}
            floatAmount={project.gallery[3].floatAmount}
            floatDuration={project.gallery[3].floatDuration}
          />
        </div>
      </div>
    </div>
  ];
};

export const WaterAidSectionsMobile = (project: Project): ReactNode[] => {
  return [
   
    <VideoEmbed key="video" video={project.video as string} />,

    <div key="gallery-grid" className="grid grid-cols-1 mx-auto w-full sm:w-[80%]">
      <div className="flex justify-start items-center">
        <FloatingImage 
          src={project.gallery[1].image} 
          alt={project.name} 
          rotation={-6}
          rotateAmount={project.gallery[1].rotate}
          floatAmount={project.gallery[1].floatAmount}
          floatDuration={project.gallery[1].floatDuration}
          isMobile={true}
        />
      </div>
      <div className="flex justify-end items-center"> 
        <FloatingImage 
          src={project.gallery[3].image} 
          alt={project.name}
          rotation={6}
          rotateAmount={project.gallery[3].rotate}
          floatAmount={project.gallery[3].floatAmount}
          floatDuration={project.gallery[3].floatDuration}
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

  