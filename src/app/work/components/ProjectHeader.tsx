import FloatingImage from '@/app/components/FloatingImage';
import { Project } from '@/app/consts';

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
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
      <div className="flex justify-center items-center h-full">
        <FloatingImage 
          src={project.gallery[0].image} 
          alt={project.name}
          width={project.gallery[0].width || undefined}
          height={project.gallery[0].height || undefined}
          rotateAmount={project.gallery[0].rotate}
          floatAmount={project.gallery[0].floatAmount}
          floatDuration={project.gallery[0].floatDuration}
        />
      </div>
    </div>
  );
}