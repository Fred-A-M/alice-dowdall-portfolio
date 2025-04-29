import { Project } from "@/app/consts";
import StaticImage from '@/app/components/StaticImage';
import { ReactNode } from "react";
import VideoEmbed from '../components/VideoEmbed';
import Image from 'next/image';
export const CallalySections = (project: Project): ReactNode[] => {
  return [
    <VideoEmbed key="video" video={project.video as string} />,
    
    <Image 
      key="0"
      src={project.gallery[0].image}
      alt={project.name}
      width={1200}
      height={1200}
    />,

    <Image 
      key="1"
      src={project.gallery[1].image}
      alt={project.name}
      width={1200}
      height={1200}
    />,

    <Image 
      key="2"
      src={project.gallery[2].image}
      alt={project.name}
      width={1200}
      height={1200}
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

  