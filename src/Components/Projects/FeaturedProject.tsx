import { ProjectType } from "./ProjectData"
import ProjectTech from "./ProjectTech"
import ViewProject from "./ViewProject"

type Props = {
  project: ProjectType
}

export default function FeaturedProject({ project }: Props) {
  const { image, gitHubUrl, liveUrl, name, explanation, alt, tech } = project

  return (
    <div className="col-span-2 flex flex-col lg:grid grid-cols-2 my-8 gap-8">
      <img
        src={image}
        alt={alt}
        className="rounded-xl crusor-pointer cursor-pointer duration-300 ease-in-out hover:shadow-xl"
      />
      <div className="flex flex-col justify-center gap-3 lg:gap-2 mt-5 px-6">
        <h2 className="text-3xl font-semibold text-left lg:text-center my-2">
          {project.name}
        </h2>
        <p className="text-gray-dark-text text-lg">{project.explanation}</p>
        <ProjectTech techs={tech} />
        <ViewProject gitUrl={gitHubUrl} livUrl={liveUrl} />
      </div>
    </div>
  )
}
