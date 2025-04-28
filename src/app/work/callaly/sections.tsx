import { Project } from "@/app/consts";
import StaticImage from '@/app/components/StaticImage';
import { ReactNode } from "react";
import VideoEmbed from '../components/VideoEmbed';

export const CallalySections = (project: Project): ReactNode[] => {
  return [
    <div key="video" className="w-full">
      <VideoEmbed key="video" video={project.video as string} />
    </div>,

    
    <StaticImage 
      key="1"
      src={project.gallery[1].image}
      alt={project.name}
      width={1000}
    />,

    <StaticImage 
      key="2"
      src={project.gallery[2].image}
      alt={project.name}
      width={900}
    />,

  ];
};

export const CallalySectionsMobile = (project: Project): ReactNode[] => {
  return [
    <VideoEmbed key="video" video={project.video as string} />,

    <div key="gallery" className="grid grid-cols-1 mx-auto sm:w-[80%] w-full">
      <div className="flex justify-start items-start">
        <StaticImage 
          src={project.gallery[1].image}
          alt={project.name}
          rotation={-5}
          isMobile={true}
        />
      </div>
      <div className="flex justify-end items-end">
        <StaticImage 
          src={project.gallery[2].image}
          alt={project.name}
          rotation={5}
          isMobile={true}
        />
      </div>
    </div>,
  ];
};

  