import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
import StaticImage from '@/app/components/StaticImage';
import { ReactNode } from "react";
import VideoEmbed from '../components/VideoEmbed';

// Create a function that takes the project and returns the sections
export const SmallTalkSections = (project: Project): ReactNode[] => {
  return [
    // Section 1: Video
    <div key="video-section" className="grid grid-cols-10 gap-4 items-center ">
      <div className="col-span-1 lg:col-span-2 flex justify-center h-full pt-10">
          <FloatingImage 
            src={project.gallery[1].image} 
            alt={project.name} 
            rotateAmount={4}
            floatAmount={2}
            floatDuration={3}
            floatDelay={0.5}
            width={170}
            height={170}
          />
      </div>
      
      <div className="col-span-8 lg:col-span-6">
        <VideoEmbed key="video" video={project.video as string} />
      </div>
      
      <div className="col-span-1 lg:col-span-2 flex justify-center h-full items-end pb-10">
        <FloatingImage 
          src={project.gallery[2].image} 
          alt={project.name} 
          rotateAmount={5}
          floatAmount={2}
          floatDuration={3}
          floatDelay={1}
          width={140}
          height={140}
        />
      </div>
    </div>,

    <div key="gallery" className="grid lg:grid-cols-10 lg:gap-0 grid-cols-6 gap-20 items-center xl:w-[80%] mx-auto w-full ">
      <div className="col-span-6">
        <div className="flex flex-col gap-20 justify-center h-full">
          <div className="grid grid-cols-6">
            <div className="col-span-4">
              <StaticImage 
                src={project.gallery[3].image} 
                alt={project.name} 
                rotation={2}
              />
            </div>
            <div className="col-span-2 flex lg:justify-end justify-start items-center">
              <FloatingImage 
                src={project.gallery[4].image} 
                alt={project.name} 
                rotation={-15}
                rotateAmount={3}
                floatAmount={2}
                floatDuration={3}
                floatDelay={1.5}
                width={130}
                height={130}
              />
            </div>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-span-2 flex items-end lg:justify-start justify-end">
              <FloatingImage 
                src={project.gallery[5].image} 
                alt={project.name} 
                rotateAmount={4}
                floatAmount={2}
                floatDuration={3}
                floatDelay={2}
                width={170}
                height={170}
              />
            </div>
            <div className="col-span-4 flex lg:justify-start justify-end">
              <StaticImage 
                src={project.gallery[6].image} 
                alt={project.name} 
                rotation={-2}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 col-span-6 flex lg:justify-end justify-center items-center h-full">
        <StaticImage 
          src={project.gallery[7].image} 
          alt={project.name} 
          width={400}
          height={400}
        />
      </div>
    </div>,
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
                width={60}
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
                width={100}
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
          width={80}
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
          width={50}
        />
      </div>
    </div>,
  ];
};

  