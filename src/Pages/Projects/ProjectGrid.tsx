import FeaturedProject from "./FeaturedProject"
import Project from "./Project"
import { projects } from "./ProjectData"

export default function ProjectGrid() {
  const notFeatured = projects.filter((project) => project.featured === false)
  const featured = projects.find((project) => project.featured)!
  return (
    <div className="grid grid-cols-2 gap-8 w-full">
      <FeaturedProject project={featured} />
      {notFeatured.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  )
}
