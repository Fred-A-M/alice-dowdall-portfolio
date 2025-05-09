import { Project } from "@/app/consts";
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
      width={2000}
      height={1406}
      style={{
        width: "1200px",
        height: "auto",
      }}
    />,

    <Image 
      key="1"
      src={project.gallery[1].image}
      alt={project.name}
      width={2400}
      height={1406}
      style={{
        width: "1200px",
        height: "auto",
      }}
    />,

    <Image 
      key="2"
      src={project.gallery[2].image}
      alt={project.name}
      width={2400}
      height={1406}
      style={{
        width: "1200px",
        height: "auto",
      }}
    />,

  ];
};

export const CallalySectionsMobile = (project: Project): ReactNode[] => {
  return [
    <VideoEmbed key="video" video={project.video as string} />,
    
    <Image 
      key="0"
      src={project.gallery[0].image}
      alt={project.name}
      width={2000}
      height={1406}
      style={{
        width: "650px",
        height: "auto",
      }}
    />,

    <Image 
      key="1"
      src={project.gallery[1].image}
      alt={project.name}
      width={2400}
      height={1406}
      style={{
        width: "650px",
        height: "auto",
      }}
    />,

    <Image 
      key="2"
      src={project.gallery[2].image}
      alt={project.name}
      width={2400}
      height={1406}
      style={{
        width: "650px",
        height: "auto",
      }}
    />,
  ];
};

  