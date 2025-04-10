import { Project } from "@/app/consts";
import FloatingImage from '@/app/components/FloatingImage';
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
            rotateAmount={project.gallery[1].rotate}
            floatAmount={project.gallery[1].floatAmount}
            floatDuration={project.gallery[1].floatDuration}
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
          rotateAmount={project.gallery[2].rotate}
          floatAmount={project.gallery[2].floatAmount}
          floatDuration={project.gallery[2].floatDuration}
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
              <FloatingImage 
                src={project.gallery[3].image} 
                alt={project.name} 
                rotateAmount={project.gallery[3].rotate}
                floatAmount={project.gallery[3].floatAmount}
                floatDuration={project.gallery[3].floatDuration}
              />
            </div>
            <div className="col-span-2 flex lg:justify-end justify-start items-center">
              <FloatingImage 
                src={project.gallery[4].image} 
                alt={project.name} 
                rotation={-15}
                rotateAmount={project.gallery[4].rotate}
                floatAmount={project.gallery[4].floatAmount}
                floatDuration={project.gallery[4].floatDuration}
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
                rotateAmount={project.gallery[5].rotate}
                floatAmount={project.gallery[5].floatAmount}
                floatDuration={project.gallery[5].floatDuration}
                width={170}
                height={170}
              />
            </div>
            <div className="col-span-4 flex lg:justify-start justify-end">
              <FloatingImage 
                src={project.gallery[6].image} 
                alt={project.name} 
                rotateAmount={project.gallery[6].rotate}
                floatAmount={project.gallery[6].floatAmount}
                floatDuration={project.gallery[6].floatDuration}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 col-span-6 flex lg:justify-end justify-center items-center h-full">
        <FloatingImage 
          src={project.gallery[7].image} 
          alt={project.name} 
          rotateAmount={project.gallery[7].rotate}
          floatAmount={project.gallery[7].floatAmount}
          floatDuration={project.gallery[7].floatDuration}
          width={400}
          height={400}
        />
      </div>
    </div>,
  ];
};

export const SmallTalkSectionsMobile = (project: Project): ReactNode[] => {
  return [
    // Section 1: Video
    <div key="video-section" className="flex flex-col gap-4">
      
      <VideoEmbed key="video" video={project.video as string} />
    
    </div>,

    // <div key="small-icons" className="flex justify-between items-center gap-20">
    //   <FloatingImage 
    //     src={project.gallery[1].image} 
    //     alt={project.name} 
    //     rotateAmount={5}
    //     floatAmount={project.gallery[1].floatAmount}
    //     floatDuration={project.gallery[1].floatDuration}
    //     width={100}
    //   />
    //   <div className="pr-10">
    //     <FloatingImage 
    //       src={project.gallery[2].image} 
    //       alt={project.name} 
    //       rotateAmount={4}
    //       floatAmount={project.gallery[2].floatAmount}
    //       floatDuration={project.gallery[2].floatDuration}
    //       width={60}
    //     />
    //   </div>
    // </div>,

    <div key="gallery" className="grid grid-cols-6 items-center mx-auto w-full">
      <div className="col-span-6">
        <div className="flex flex-col gap-5 justify-center h-full">
          <div className="grid grid-cols-6">
            <div className="col-span-4">
              <FloatingImage 
                src={project.gallery[3].image} 
                alt={project.name} 
                rotateAmount={project.gallery[3].rotate}
                floatAmount={project.gallery[3].floatAmount}
                floatDuration={project.gallery[3].floatDuration}
                isMobile={true}
              />
            </div>
            <div className="col-span-2 flex justify-start items-center">
              <FloatingImage 
                src={project.gallery[4].image} 
                alt={project.name} 
                rotation={-15}
                rotateAmount={project.gallery[4].rotate}
                floatAmount={project.gallery[4].floatAmount}
                floatDuration={project.gallery[4].floatDuration}
                width={60}
              />
            </div>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-span-2 flex items-end justify-end pl-10">
              <FloatingImage 
                src={project.gallery[5].image} 
                alt={project.name} 
                rotateAmount={project.gallery[5].rotate}
                floatAmount={project.gallery[5].floatAmount}
                floatDuration={project.gallery[5].floatDuration}
                width={100}
              />
            </div>
            <div className="col-span-4 flex justify-end">
              <FloatingImage 
                src={project.gallery[6].image} 
                alt={project.name} 
                rotateAmount={project.gallery[6].rotate}
                floatAmount={project.gallery[6].floatAmount}
                floatDuration={project.gallery[6].floatDuration}
                isMobile={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>,

    <div key="gallery-2" className="grid grid-cols-6 mx-auto w-full ">
      <div className="col-span-1 flex justify-center items-start">
        <FloatingImage 
          src={project.gallery[1].image} 
          alt={project.name} 
          rotateAmount={5}
          floatAmount={project.gallery[1].floatAmount}
          floatDuration={project.gallery[1].floatDuration}
          width={70}
          zIndex={30}
        />
      </div>
      <div className="col-span-4 flex justify-center items-center">
        <FloatingImage 
          src={project.gallery[7].image} 
          alt={project.name} 
          rotateAmount={project.gallery[7].rotate}
          floatAmount={project.gallery[7].floatAmount}
          floatDuration={project.gallery[7].floatDuration}
          width={240}
        />
      </div>
      <div className="col-span-1 flex justify-center items-end">
        <FloatingImage 
          src={project.gallery[2].image} 
          alt={project.name} 
          rotateAmount={4}
          floatAmount={project.gallery[2].floatAmount}
          floatDuration={project.gallery[2].floatDuration}
          width={50}
        />
      </div>
    </div>,
  ];
};

  