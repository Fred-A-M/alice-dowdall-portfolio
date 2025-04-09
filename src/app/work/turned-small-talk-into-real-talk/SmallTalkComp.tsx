"use client";

import { Project, projects } from "@/app/consts";
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import FloatingImage from '@/app/components/FloatingImage';
interface ProjectPageProps {
  project: Project | undefined;
}

export default function SmallTalkComp({ project }: ProjectPageProps) {


  if (!project) {
    return <div>Project not found</div>;
  }

  const projectIndex = projects.findIndex(p => p.name === project.name);
  const nextProject = projects[projectIndex + 1];
  const previousProject = projects[projectIndex - 1];

  return (
    <div className="flex flex-col gap-10 w-full h-full mb-10 md:pt-10">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-col gap-2 text-4xl">
            <p className="radio-canada-big-bold">{project.name}</p>
            <p>{project.client}</p>
          </div>
          <div className="flex flex-col gap-2">
            {project.description.map((description, index) => (
              <p key={index} className="text-lg">{description}</p>
            ))}
          </div>
        </div>
        <div className="flex justify-center h-full">
          <FloatingImage 
            src={project.gallery[0].image} 
            alt={project.name} 
            position={{ x: 0, y: 0 }}
            scale={project.gallery[0].scale}
            rotateAmount={3}
            floatAmount={3}
            floatDuration={3}
            floatDelay={1}
          />
        </div>
      </div>

      <div className="grid grid-cols-10 gap-4 items-center ">
        <div className="col-span-2 flex justify-center h-full pb-30">
            <FloatingImage 
              src={project.gallery[1].image} 
              alt={project.name} 
              position={{ x: 0, y: 0 }}
              scale={project.gallery[1].scale}
              rotateAmount={4}
              floatAmount={3}
              floatDuration={5}
              floatDelay={1}
            />
        </div>
        
        <div className="col-span-6 aspect-video ">
          <iframe
            src={project.video}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full min-h-[450px] rounded-sm "
          />
        </div>
        
        <div className="col-span-2 flex justify-center h-full items-end pb-25">
          <FloatingImage 
            src={project.gallery[2].image} 
            alt={project.name} 
            position={{ x: 0, y: 0 }}
            scale={project.gallery[2].scale}
            rotateAmount={3}
            floatAmount={2}
            floatDuration={2}
            floatDelay={1}
          />
        </div>
      </div>

      {/* <div className="flex justify-center">
        <Image src="/projects/SmallTalk/group2.png" 
          alt={project.name} 
          width={800} 
          height={800} 
          className="w-full h-full object-cover" 
        />
      </div> */}

      {/* <div className="flex justify-center">
        <Image src="/projects/SmallTalk/group2.png" 
          alt={project.name} 
          className="flex justify-center w-full h-full object-cover"  
          width={1000} 
          height={1000} 
          style={{
            filter: 'drop-shadow(0 8px 8px rgba(0, 0, 0, 0.3))'
          }}
        />
      </div> */}

      <div className="relative flex justify-center mx-auto h-[600px] w-full ">
        
        <FloatingImage 
          src={project.gallery[3].image} 
          alt={project.name} 
          position={{ x: '8%', y: '7%' }}
          scale={project.gallery[3].scale}
          rotateAmount={2}
          floatAmount={1}
          floatDuration={3}
          floatDelay={2}
          isAbsolute={true}
        />

        <FloatingImage 
          src={project.gallery[4].image} 
          alt={project.name} 
          position={{ x: '52%', y: '13%' }}
          scale={project.gallery[4].scale}
          rotateAmount={2}
          floatAmount={2}
          floatDuration={4}
          floatDelay={1}
          isAbsolute={true}
        />

        <FloatingImage 
          src={project.gallery[5].image} 
          alt={project.name} 
          position={{ x: '-5%', y: '45%' }}
          scale={project.gallery[5].scale}
          rotateAmount={1}
          floatAmount={1}
          floatDuration={3}
          floatDelay={1}
          isAbsolute={true}
        />

        <FloatingImage 
          src={project.gallery[6].image} 
          alt={project.name} 
          position={{ x: '25%', y: '57%' }}
          scale={project.gallery[6].scale}
          rotateAmount={1}
          floatAmount={2}
          floatDuration={4}
          floatDelay={1}
          isAbsolute={true}
        />

        <FloatingImage 
          src={project.gallery[7].image} 
          alt={project.name} 
          position={{ x: '60%', y: '0%' }}
          scale={project.gallery[7].scale}
          rotateAmount={1}
          floatAmount={4}
          floatDuration={5}
          floatDelay={1}
          isAbsolute={true}
        />
      </div>


      <div className="grid grid-cols-2 items-center text-3xl">
        <div className="flex justify-start">
          {previousProject && (
            <Link href={`${previousProject.link}`} scroll={false}>
              <div className="flex items-center gap-2 hover:underline">
                <ChevronLeftIcon className="w-8 h-8 stroke-2 transition-all duration-200" />
                <span className="radio-canada-big-bold">{previousProject.tagline}</span>
              </div>
            </Link>
          )}
        </div>
        <div className="flex justify-end hover:underline">
          {nextProject && (
            <Link href={`${nextProject.link}`} scroll={false}>
              <div className="flex items-center gap-2 hover:underline">
                <span className="radio-canada-big-bold text-right">{nextProject?.tagline}</span>
                <ChevronRightIcon className="w-8 h-8 stroke-2 transition-all duration-200" />
              </div>
            </Link>
          )}
        </div>
      </div>
      
    </div>
  );
}