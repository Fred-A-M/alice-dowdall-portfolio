import { Project } from "@/app/consts";
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

    <Image 
      src={project.image.image} 
      alt={project.name}
      width={project.image.width}
      height={project.image.height}
      style={{
        width: "650px",
        height: "auto",
      }}
      key="0"
    />,

    <Image 
      src={project.gallery[2].image} 
      alt={project.name}
      width={1800}
      height={1179}
      style={{
        width: "200px",
        height: "auto",
      }}
      key="1"
    />,
  
    <Image 
      src={project.gallery[1].image} 
      alt={project.name} 
      width={683}
      height={1170}
      style={{
        width: "650px",
        height: "auto",
      }}
      key="2"
    />,      
  
    <Image 
      src={project.gallery[3].image}
      alt={project.name}
      width={1702}
      height={956}
      style={{
        width: "650px",
        height: "auto",
      }}
      key="3"
    />,
  
    <Image 
      src={project.gallery[4].image}
      alt={project.name}
      width={1920}
      height={1080}
      style={{
        width: "650px",
        height: "auto",
      }}
      key="4"
    />
    
  ];
};

  