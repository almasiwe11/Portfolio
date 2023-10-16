import { ProjectType } from "./ProjectData"
import ProjectTech from "./ProjectTech"
import ViewProject from "./ViewProject"

type Props = {
  project: ProjectType
  row?: boolean
}

export default function Project({ project, row = false }: Props) {
  const { tech, gitHubUrl, liveUrl } = project
  return (
    <div
      className={`rounded-xl font-dm overflow-hidden p-3 pt-1.5 pb-8 flex bg-white shadow-sm duration-300  ease-in-out hover:shadow-xl ${
        row ? "flex-row" : "flex-col"
      }`}
    >
      <img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        className="rounded-xl duration-300 ease-in-out cursor-pointer hover:scale-105"
      />
      <div className="flex flex-col gap-2 mt-5 px-6">
        <h2 className="text-2xl font-semibold my-2">{project.name}</h2>
        <p className="text-gray-dark-text text-lg">{project.explanation}</p>
        <ProjectTech techs={tech} />
        <ViewProject gitUrl={gitHubUrl} livUrl={liveUrl} />
      </div>
    </div>
  )
}
