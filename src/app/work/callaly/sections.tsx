import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import { ReactNode } from "react";
import VideoEmbed from '../components/VideoEmbed';
// Create a function that takes the project and returns the sections
export const CallalySections = (project: Project): ReactNode[] => {
  return [
    <VideoEmbed key="video" video={project.video as string} />,

    <div key="gallery" className="grid grid-cols-2 mx-auto h-[500px] lg:w-[80%] w-full">
      <div className="flex justify-start items-start">
        <FloatingImage 
          src={project.gallery[1].image}
          alt={project.name}
          position={{ x: 0, y: 0 }}
          scale={project.gallery[1].scale}
          rotateAmount={project.gallery[1].rotate}  
          floatAmount={project.gallery[1].floatAmount}
          floatDuration={project.gallery[1].floatDuration}
          isWideImage={true}
          width={500}
        />
      </div>
      <div className="flex justify-end items-end">
        <FloatingImage 
          src={project.gallery[2].image}
          alt={project.name}
          position={{ x: 0, y: 0 }}
          scale={project.gallery[2].scale}
          rotateAmount={project.gallery[2].rotate}  
          floatAmount={project.gallery[2].floatAmount}
          floatDuration={project.gallery[2].floatDuration}
          isWideImage={true}
          width={475}
        />
      </div>
    </div>,
  ];
};

  