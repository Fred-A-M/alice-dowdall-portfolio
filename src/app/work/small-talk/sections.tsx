import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import StaticImage from '@/app/components/StaticImage';
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
        width={900}
        height={900}
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
            width={200}
            height={200}
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
          width={180}
          height={180}
        />
      </div>
    </div>,

    <Image
      src={project.gallery[3].image}
      alt={project.name}
      width={1200}
      height={1200}
      key="1"
      className="shadow-lg shadow-black/30"
    />,
    <div key="5" className="grid grid-cols-4 gap-4">
      <div className="col-span-1 flex justify-center items-start">
        <FloatingImage
          src={project.gallery[4].image}
          alt={project.name}
          rotateAmount={4}
          floatAmount={2}
          floatDuration={3}
        />
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <Image
          src={project.gallery[7].image}
          alt={project.name}
          width={500}
          height={500}
          className="shadow-lg shadow-black/30"
        />
      </div>
      <div className="flex justify-center items-end gap-4 col-span-1">
        <FloatingImage
          src={project.gallery[5].image}
          alt={project.name}
          rotateAmount={4}
          floatAmount={2}
          floatDuration={3}
          width={300}
          height={300}
        />
      </div>
    </div>,
    <Image
      src={project.gallery[6].image}
      alt={project.name}
      width={1200}
      height={1200}
      key="4"
      className="shadow-lg shadow-black/30"
    />,
  ];
};

export const SmallTalkSectionsMobile = (project: Project): ReactNode[] => {
  return [
    <VideoEmbed key="video" video={project.video as string} />,

  

    <div key="gallery" className="grid grid-cols-6 items-center mx-auto w-full sm:w-[70%]">
      <div className="col-span-6">
        <div className="flex flex-col gap-5 justify-center h-full">
          <div className="grid grid-cols-6">
            <div className="col-span-4">
              <StaticImage 
                src={project.gallery[3].image} 
                alt={project.name} 
                rotation={2}
                isMobile={true}
              />
            </div>
            <div className="col-span-2 flex justify-start items-center">
              <FloatingImage 
                src={project.gallery[4].image} 
                alt={project.name} 
                rotation={-15}
                rotateAmount={4}
                floatAmount={2}
                floatDuration={3}
                floatDelay={0.5}
                width={110}
              />
            </div>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-span-2 flex items-end justify-end pl-10">
              <FloatingImage 
                src={project.gallery[5].image} 
                alt={project.name} 
                rotateAmount={3}
                floatAmount={2}
                floatDuration={3}
                floatDelay={1}
                width={160}
              />
            </div>
            <div className="col-span-4 flex justify-end">
              <StaticImage 
                src={project.gallery[6].image} 
                alt={project.name} 
                rotation={-2}
                isMobile={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>,

    <div key="gallery-2" className="grid grid-cols-6 mx-auto w-full sm:w-[70%]">
      <div className="col-span-1 flex justify-center items-start">
        <FloatingImage 
          src={project.gallery[1].image} 
          alt={project.name} 
          rotateAmount={5}
          floatAmount={2}
          floatDuration={3}
          floatDelay={1.5}
          width={140}
          zIndex={30}
        />
      </div>
      <div className="col-span-4 flex justify-center items-center">
        <StaticImage 
          src={project.gallery[7].image} 
          alt={project.name} 
          width={240}
        />
      </div>
      <div className="col-span-1 flex justify-center items-end">
        <FloatingImage 
          src={project.gallery[2].image} 
          alt={project.name} 
          rotateAmount={4}
          floatAmount={2}
          floatDuration={3}
          floatDelay={1}
          width={110}
        />
      </div>
    </div>,
  ];
};

  