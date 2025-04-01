import ProjectPage from "@/app/ProjectPage";
import { Project, projects } from "@/app/consts";
export default function GiffGaff() {
  const project = projects.find(project => project.name === "Have a Proper Chat");
  
  return (
    <ProjectPage project={project as Project} />
  );
}