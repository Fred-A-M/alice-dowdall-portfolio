import { Project } from "@/app/consts";
import { ReactNode } from "react";
import VideoEmbed from '../components/VideoEmbed';
import Image from 'next/image';
// Create a function that takes the project and returns the sections
export const WindInTheWillowsSections = (project: Project): ReactNode[] => {
  return [
    // Section 1: Video
    <VideoEmbed key="video" video={project.video as string} />,

    <Image 
      key="image0"
      src={project.gallery[0].image} 
      alt={project.name} 
      width={1280}
      height={1810}
      style={{
        width: "600px",
        height: "auto",
      }}
    />,
 
    <Image 
      key="image1"
      src={project.gallery[1].image} 
      alt={project.name} 
      width={1500}
      height={791}
      style={{
        width: "1200px",
        height: "auto",
      }}
    />,

    <Image 
      key="image2"
      src={project.gallery[2].image} 
      alt={project.name} 
      width={1920}
      height={1080}
      style={{
        width: "1200px",
        height: "auto",
      }}
    />,

    <Image 
      key="image3"
      src={project.gallery[5].image} 
      alt={project.name} 
      width={1250}
      height={659}
      style={{
        width: "1200px",
        height: "auto",
      }}
    />,

    <div key="gallery" className="grid grid-cols-4 gap-20 items-center mx-auto w-full">
      <div className="col-span-3 flex justify-start">  
        <Image
          src={project.gallery[3].image} 
          alt={project.name} 
          width={1800}
          height={874}
          style={{
            width: "1100px",
            height: "auto",
          }}
        />
      </div>
      <div className="col-span-1 flex justify-start">
        <Image 
          src={project.gallery[4].image} 
          alt={project.name} 
          width={796}
          height={1572}
          style={{
            width: "300px",
            height: "auto",
          }}
        />
      </div>
    </div>
    
  ];
};

export const WindInTheWillowsSectionsMobile = (project: Project): ReactNode[] => {
  return [
    <VideoEmbed key="video" video={project.video as string} />,

    <Image 
      key="image0"
      src={project.gallery[0].image} 
      alt={project.name} 
      width={1280}
      height={1810}
      style={{
        width: "300px",
        height: "auto",
      }}
    />,
 
    <Image 
      key="image1"
      src={project.gallery[1].image} 
      alt={project.name} 
      width={1500}
      height={791}
      style={{
        width: "650px",
        height: "auto",
      }}
    />,

    <Image 
      key="image2"
      src={project.gallery[2].image} 
      alt={project.name} 
      width={1920}
      height={1080}
      style={{
        width: "650px",
        height: "auto",
      }}
    />,

    <Image 
      key="image3"
      src={project.gallery[5].image} 
      alt={project.name} 
      width={1250}
      height={659}
      style={{
        width: "650px",
        height: "auto",
      }}
    />,

    <Image 
      key="image4"
      src={project.gallery[4].image} 
      alt={project.name} 
      width={796}
      height={1572}
      style={{
        width: "200px",
        height: "auto",
      }}
    />,

    
    <Image
      key="image5"
      src={project.gallery[3].image} 
      alt={project.name} 
      width={1800}
      height={874}
      style={{
        width: "650px",
        height: "auto",
      }}
    />,
    
  ];
};

  