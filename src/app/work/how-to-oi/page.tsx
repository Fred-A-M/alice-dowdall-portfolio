import ProjectPage from "@/app/ProjectPage";
import { Project, projects } from "@/app/consts";
export default function HowToOi() {
  const project = projects.find(project => project.name === "Taught People How to Oi!");
  return (
    <ProjectPage project={project as Project} />
  );
}