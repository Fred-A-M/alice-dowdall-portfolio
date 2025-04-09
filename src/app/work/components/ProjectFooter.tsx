import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Project, projects } from '@/app/consts';

interface ProjectFooterProps {
  project: Project;
}

export default function ProjectFooter({ project }: ProjectFooterProps) {
  const projectIndex = projects.findIndex(p => p.name === project.name);
  const nextProject = projects[projectIndex + 1];
  const previousProject = projects[projectIndex - 1];

  return (
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
  );
}