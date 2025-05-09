import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import { ReactNode } from "react";
import VideoEmbed from '../components/VideoEmbed';
import Image from 'next/image';
// Create a function that takes the project and returns the sections
export const SmallTalkSections = (project: Project): ReactNode[] => {
  return [
    <div key="0" className="w-full flex justify-center">
      <Image 
        src={project.gallery[0].image}
        alt={project.name}
        width={884}
        height={926}
        style={{
          width: "800px",
          height: "auto",
        }}
        priority={true}
        loading="eager"
      />
    </div>,

    <div key="video-section" className="grid grid-cols-10 gap-4 items-center w-full">
      <div className="col-span-1 flex justify-center h-full pt-10">
        <FloatingImage 
          src={project.gallery[1].image} 
          alt={project.name} 
          rotateAmount={4}
          floatAmount={2}
          floatDuration={3}
          floatDelay={0.5}
          width={2084}
          height={2084}
          stylesWidth={200}
        />
      </div>
      
      <div className="col-span-8 ">
        <VideoEmbed key="video" video={project.video as string} />
      </div>
      
      <div className="col-span-1  flex justify-center h-full items-end pb-10">
        <FloatingImage 
          src={project.gallery[2].image} 
          alt={project.name} 
          rotateAmount={5}
          floatAmount={2}
          floatDuration={3}
          floatDelay={1}
          width={278}
          height={360}
          stylesWidth={150}
        />
      </div>
    </div>,

    <Image
      src={project.gallery[3].image}
      alt={project.name}
      width={2500}
      height={1406}
      style={{
        width: "1200px",
        height: "auto",
      }}
      key="1"
    />,

    <div key="5" className="grid grid-cols-4 gap-4">
      <div className="col-span-1 flex justify-center items-start">
        <FloatingImage
          src={project.gallery[4].image}
          alt={project.name}
          rotateAmount={4}
          floatAmount={2}
          floatDuration={3}
          width={258}
          height={385}
          stylesWidth={150}
        />
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <Image
          src={project.gallery[7].image}
          alt={project.name}
          width={1260}
          height={1424}
          style={{
            width: "500px",
            height: "auto",
          }}
        />
      </div>
      <div className="flex justify-center items-end gap-4 col-span-1">
        <FloatingImage
          src={project.gallery[5].image}
          alt={project.name}
          rotateAmount={4}
          floatAmount={2}
          floatDuration={3}
          width={1708}
          height={1556}
          stylesWidth={210}
        />
      </div>
    </div>,

    <Image
      src={project.gallery[6].image}
      alt={project.name}
      width={2500}
      height={1406}
      style={{
        width: "1200px",
        height: "auto",
      }}
      key="4"
    />,
  ];
};

export const SmallTalkSectionsMobile = (project: Project): ReactNode[] => {
  return [
    <Image 
      key="0"
      src={project.gallery[0].image}
      alt={project.name}
      width={884}
      height={926}
      style={{
        width: "300px",
        height: "auto",
      }}
      priority={true}
      loading="eager"
    />,

    <VideoEmbed key="video" video={project.video as string} />,

    <div key="1" className="grid grid-cols-2 gap-5 sm:gap-10 items-center w-full">
      <div className="col-span-1 flex justify-center h-full pt-20">
        <FloatingImage 
          src={project.gallery[1].image} 
          alt={project.name} 
          rotateAmount={4}
          floatAmount={2}
          floatDuration={3}
          floatDelay={0.5}
          width={2084}
          height={2084}
          stylesWidth={210}
        />
      </div>
      
      <div className="col-span-1  flex justify-center h-full items-end pb-20">
        <FloatingImage 
          src={project.gallery[2].image} 
          alt={project.name} 
          rotateAmount={5}
          floatAmount={2}
          floatDuration={3}
          floatDelay={1}
          width={278}
          height={360}
          stylesWidth={170}
        />
      </div>
    </div>,

    <Image
      src={project.gallery[3].image}
      alt={project.name}
      width={2500}
      height={1406}
      style={{
        width: "650px",
        height: "auto",
      }}
      key="2"
    />,

    <div key="3" className="grid grid-cols-2 gap-5 sm:gap-10">
      <div className="col-span-1 flex justify-center items-start pb-20">
        <FloatingImage
          src={project.gallery[4].image}
          alt={project.name}
          rotateAmount={4}
          floatAmount={2}
          floatDuration={3}
          width={258}
          height={385}
          stylesWidth={150}
        />
      </div>
  
      <div className="flex justify-center items-end gap-4 col-span-1 pt-20">
        <FloatingImage
          src={project.gallery[5].image}
          alt={project.name}
          rotateAmount={4}
          floatAmount={2}
          floatDuration={3}
          width={1708}
          height={1556}
          stylesWidth={210}
        />
      </div>
    </div>,

    <Image
      src={project.gallery[7].image}
      alt={project.name}
      width={1260}
      height={1424}
      style={{
        width: "300px",
        height: "auto",
      }}
      key="4"
    />,
    
    <Image
      src={project.gallery[6].image}
      alt={project.name}
      width={2500}
      height={1406}
      style={{
        width: "650px",
        height: "auto",
      }}
      key="5"
    />,
  ];
};

  