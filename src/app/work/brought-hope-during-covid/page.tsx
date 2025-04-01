import ProjectPage from "@/app/ProjectPage";
import { Project, projects } from "@/app/consts";
export default function BroughtHopeDuringCovid() {
  const project = projects.find(project => project.name === "Brought Hope During Covid");
  return (
    <ProjectPage project={project as Project} />
  );
}