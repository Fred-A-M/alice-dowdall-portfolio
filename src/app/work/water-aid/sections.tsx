import { Project } from "@/app/consts";
import { ReactNode } from "react";
import VideoEmbed from '../components/VideoEmbed';
import Image from "next/image";

export const WaterAidSections = (project: Project): ReactNode[] => {
  return [
    <VideoEmbed key="video" video={project.video as string} />,

    <Image 
      key="1"
      src={project.gallery[1].image}
      alt={project.name} 
      width={1920}
      height={1080}
      style={{
        width: "1100px",
        height: "auto",
      }}
    />,
  
    <Image 
      key="2"
      src={project.gallery[2].image}
      alt={project.name} 
      width={1610}
      height={1080}
      style={{
        width: "1000px",
        height: "auto",
      }}
    />,

    <Image 
      key="3"
      src={project.gallery[3].image}
      alt={project.name} 
      width={1920}
      height={1080}
      style={{
        width: "1100px",
        height: "auto",
      }}
    />,

  ];
};

export const WaterAidSectionsMobile = (project: Project): ReactNode[] => {
  return [
   
    <VideoEmbed key="video" video={project.video as string} />,

    <Image 
      key="1"
      src={project.gallery[1].image}
      alt={project.name} 
      width={1920}
      height={1080}
      style={{
        width: "650px",
        height: "auto",
      }}
    />,

  
    <Image 
      key="2"
      src={project.gallery[2].image}
      alt={project.name} 
      width={1610}
      height={1080}
      style={{
        width: "650px",
        height: "auto",
      }}
    />,


    <Image 
      key="3"
      src={project.gallery[3].image}
      alt={project.name} 
      width={1920}
      height={1080}
      style={{
        width: "650px",
        height: "auto",
      }}
    />,

    <Image 
      key="4"
      src={project.gallery[0].image}
      alt={project.name} 
      width={1920}
      height={1080}
      style={{
        width: "300px",
        height: "auto",
      }}
    />,
  ];
};

  