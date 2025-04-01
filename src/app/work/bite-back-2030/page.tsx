import ProjectPage from "@/app/ProjectPage";
import { Project, projects } from "@/app/consts";
export default function BiteBack2030() {
  const project = projects.find(project => project.name === "It's Not Your Fault You Can't Resist");
  
  return (
    <ProjectPage project={project as Project} />
  );
}