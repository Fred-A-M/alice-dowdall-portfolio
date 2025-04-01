import ProjectPage from "@/app/ProjectPage";
import { Project, projects } from "@/app/consts";
export default function MadeACprBra() {
  const project = projects.find(project => project.name === "Made a CPR Bra");
  return (
    <ProjectPage project={project as Project} />
  );
}