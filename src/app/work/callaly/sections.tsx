import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import { ReactNode } from "react";
import VideoEmbed from '../components/VideoEmbed';

export const CallalySections = (project: Project): ReactNode[] => {
  return [
    <VideoEmbed key="video" video={project.video as string} />,

    <div key="gallery" className="grid grid-cols-1 mx-auto lg:w-[80%] w-full">
      <div className="flex justify-start items-start">
        <FloatingImage 
          src={project.gallery[1].image}
          alt={project.name}
          rotateAmount={project.gallery[1].rotate}  
          floatAmount={project.gallery[1].floatAmount}
          floatDuration={project.gallery[1].floatDuration}
          width={550}
        />
      </div>
      <div className="flex justify-end items-end">
        <FloatingImage 
          src={project.gallery[2].image}
          alt={project.name}
          rotateAmount={project.gallery[2].rotate}  
          floatAmount={project.gallery[2].floatAmount}
          floatDuration={project.gallery[2].floatDuration}
          width={550}
        />
      </div>
    </div>,
  ];
};

export const CallalySectionsMobile = (project: Project): ReactNode[] => {
  return [
    <VideoEmbed key="video" video={project.video as string} />,

    <div key="gallery" className="grid grid-cols-1 mx-auto sm:w-[80%] w-full">
      <div className="flex justify-start items-start">
        <FloatingImage 
          src={project.gallery[1].image}
          alt={project.name}
          rotation={-5}
          rotateAmount={project.gallery[1].rotate}  
          floatAmount={project.gallery[1].floatAmount}
          floatDuration={project.gallery[1].floatDuration}
          isMobile={true}
        />
      </div>
      <div className="flex justify-end items-end">
        <FloatingImage 
          src={project.gallery[2].image}
          alt={project.name}
          rotation={5}
          rotateAmount={project.gallery[2].rotate}  
          floatAmount={project.gallery[2].floatAmount}
          floatDuration={project.gallery[2].floatDuration}
          isMobile={true}
        />
      </div>
    </div>,
  ];
};

  