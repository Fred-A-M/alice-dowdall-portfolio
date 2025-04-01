import ProjectPage from "@/app/ProjectPage";
import { Project, projects } from "@/app/consts";
export default function HowToOi() {
  const project = projects.find(project => project.name === "Oi! Observe and Intervene");
  
  return (
    <ProjectPage project={project as Project} />
  );
}