import ProjectPage from "@/app/ProjectPage";
import { Project, projects } from "@/app/consts";
export default function WindInTheWillows() {
  const project = projects.find(project => project.name === "Wind in the Willows");
  return (
    <ProjectPage project={project as Project} />
  );
}