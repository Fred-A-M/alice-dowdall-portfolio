import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import { ReactNode } from "react";
import VideoEmbed from '../components/VideoEmbed';

// Create a function that takes the project and returns the sections
export const WaterAidSections = (project: Project): ReactNode[] => {
  return [
    // Section 1: Video
    <VideoEmbed key="video" video={project.video as string} />,

    // Section 2: Gallery grid
    <div key="gallery-grid" className="grid grid-cols-2 mx-auto w-full">
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

  