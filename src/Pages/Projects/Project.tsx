import { ProjectType } from "./ProjectData"
import ProjectTech from "./ProjectTech"
import ViewProject from "./ViewProject"

type Props = {
  project: ProjectType
}

export default function Project({ project }: Props) {
  const { tech } = project
  return (
    <div className="rounded-xl font-dm overflow-hidden p-3 flex flex-col bg-white shadow-sm duration-300 ease-in-out hover:shadow-xl">
      <img src={project.image} alt="" className="rounded-xl cursor-pointer" />
      <div className="flex flex-col gap-2 mt-5 px-6">
        <h2 className="text-2xl font-semibold">{project.name}</h2>
        <p className="text-gray-dark-text text-lg">{project.explanation}</p>
        <ProjectTech techs={tech} />
        <ViewProject />
      </div>
    </div>
  )
}
