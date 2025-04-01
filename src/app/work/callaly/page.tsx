import ProjectPage from "@/app/ProjectPage";
import { Project, projects } from "@/app/consts";
export default function Callaly() {
  const project = projects.find(project => project.name === "Unboxing: 1930");
  
  return (
    <ProjectPage project={project as Project} />
  );
}