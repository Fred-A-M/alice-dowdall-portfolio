import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import { ReactNode } from "react";
import VideoEmbed from '../components/VideoEmbed';
// Create a function that takes the project and returns the sections
export const WindInTheWillowsSections = (project: Project): ReactNode[] => {
  return [
    // Section 1: Video
    <VideoEmbed key="video" video={project.video as string} />,

    <div key="image1" className="flex justify-center items-center w-full">
      <FloatingImage 
        src={project.gallery[1].image} 
        alt={project.name} 
        position={{ x: 0, y: 0 }}
        scale={project.gallery[1].scale}
        rotateAmount={project.gallery[1].rotate}  
        floatAmount={project.gallery[1].floatAmount}
        isWideImage={true}
      />
    </div>,

    <div key="image2" className="flex justify-center items-center w-full">
      <FloatingImage 
        src={project.gallery[2].image} 
        alt={project.name} 
        position={{ x: 0, y: 0 }}
        scale={project.gallery[2].scale}
        rotateAmount={project.gallery[1].rotate}  
        floatAmount={project.gallery[1].floatAmount}
        isWideImage={true}
      />
    </div>,

    <div key="gallery" className="flex justify-center items-center mx-20">
      <FloatingImage 
        src={project.gallery[3].image} 
        alt={project.name} 
        position={{ x: 0, y: 0 }}
        scale={project.gallery[3].scale}
        rotateAmount={project.gallery[3].rotate}  
        floatAmount={project.gallery[3].floatAmount}
        floatDuration={project.gallery[3].floatDuration}
        isWideImage={true}
      />
      <FloatingImage 
        src={project.gallery[4].image} 
        alt={project.name} 
        position={{ x: 0, y: 0 }}
        scale={project.gallery[4].scale}
        rotateAmount={project.gallery[4].rotate}  
        floatAmount={project.gallery[4].floatAmount}
        floatDuration={project.gallery[4].floatDuration}
      />
    </div>
    
  ];
};

  