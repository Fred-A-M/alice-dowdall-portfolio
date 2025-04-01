import ProjectPage from "@/app/ProjectPage";
import { Project, projects } from "@/app/consts";
export default function WorldWithoutSoil() {
  const project = projects.find(project => project.name === "Picture a World Without Soil");
  return (
    <ProjectPage project={project as Project} />
  );
}