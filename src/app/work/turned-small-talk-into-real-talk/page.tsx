import ProjectPage from "@/app/ProjectPage";
import { Project, projects } from "@/app/consts";
export default function TurnedSmallTalkIntoRealTalk() {
  const project = projects.find(project => project.name === "Turned Small Talk Into Real Talk");
  return (
    <ProjectPage project={project as Project} />
  );
}