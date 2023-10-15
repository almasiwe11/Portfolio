import Project from "./Project"
import { projects } from "./ProjectData"

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-2 gap-8 w-full">
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  )
}
