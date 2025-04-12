import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import StaticImage from '@/app/components/StaticImage';
import { ReactNode } from "react";
import VideoEmbed from '../components/VideoEmbed';
// Create a function that takes the project and returns the sections
export const WindInTheWillowsSections = (project: Project): ReactNode[] => {
  return [
    // Section 1: Video
    <VideoEmbed key="video" video={project.video as string} />,

    <div key="image1" className="flex justify-center items-center w-full">
      <StaticImage 
        src={project.gallery[1].image} 
        alt={project.name} 
        rotation={-2}
        width={900}
        height={900}
      />
    </div>,

    <div key="image2" className="flex justify-center items-center w-full">
      <StaticImage 
        src={project.gallery[2].image} 
        alt={project.name} 
        rotation={2}
        width={900}
        height={900}
      />
    </div>,

    <div key="gallery" className="grid grid-cols-3 items-center mx-auto w-full lg:w-[80%]">
      <div className="col-span-2 flex justify-start">  
        <StaticImage
          src={project.gallery[3].image} 
          alt={project.name} 
          width={675}
        />
      </div>
      <div className="col-span-1 flex justify-end">
        <FloatingImage 
          src={project.gallery[4].image} 
          alt={project.name} 
          rotateAmount={4}  
          floatAmount={2}
          floatDuration={3}
          floatDelay={0.5}
        />
      </div>
    </div>
    
  ];
};

export const WindInTheWillowsSectionsMobile = (project: Project): ReactNode[] => {
  return [
    <VideoEmbed key="video" video={project.video as string} />,

    <div key="gallery1" className="grid grid-cols-1 items-center mx-auto w-full sm:w-[80%]">
      <div className="flex justify-end items-center w-full">
        <StaticImage 
          src={project.gallery[1].image} 
          alt={project.name} 
          rotation={6}
          width={300}
          height={300}
        />
      </div>

      <div className="flex justify-start items-center w-full">
        <StaticImage 
          src={project.gallery[2].image} 
          alt={project.name} 
          rotation={-6}
          width={300}
          height={300}
        />
      </div>
    </div>,

    <div key="gallery2" className="grid grid-cols-3 items-center mx-auto w-full sm:w-[80%]">
      <div className="col-span-2 flex justify-start">  
        <StaticImage 
          src={project.gallery[3].image} 
          alt={project.name} 
          width={275}
        />
      </div>
      <div className="col-span-1 flex justify-end">
        <FloatingImage 
          src={project.gallery[4].image} 
          alt={project.name} 
          rotateAmount={4}  
          floatAmount={2}
          floatDuration={3}
          floatDelay={0.5}
          isMobile={true}
        />
      </div>
    </div>
    
  ];
};

  