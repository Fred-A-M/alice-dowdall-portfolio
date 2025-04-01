import ProjectPage from "@/app/ProjectPage";
import { Project, projects } from "@/app/consts";
export default function WaterAid() {
  const project = projects.find(project => project.name === "There's No Rainbow Without Water");
  
  return (
    <ProjectPage project={project as Project} />
  );
}