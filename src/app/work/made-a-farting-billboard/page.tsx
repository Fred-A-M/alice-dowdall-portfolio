import ProjectPage from "@/app/ProjectPage";
import { Project, projects } from "@/app/consts";
export default function MadeAFartingBillboard() {
  const project = projects.find(project => project.name === "Farting Billboard");
  
  return (
    <ProjectPage project={project as Project} />
  );
}