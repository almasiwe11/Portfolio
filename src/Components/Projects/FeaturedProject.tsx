import { useEffect } from "react"
import { ProjectType } from "./ProjectData"
import ProjectTech from "./ProjectTech"
import ViewProject from "./ViewProject"
import AOS from "aos"
import "aos/dist/aos.css"

type Props = {
  project: ProjectType
}

export default function FeaturedProject({ project }: Props) {
  const { image, gitHubUrl, liveUrl, name, explanation, alt, tech } = project
  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])

  return (
    <div
      className="col-span-2 flex flex-col lg:grid grid-cols-2 my-8 gap-8"
      data-aos="zoom-in"
    >
      <a href={liveUrl} rel="noreferrer" target="_blank">
        <img
          src={image}
          alt={alt}
          className="rounded-xl crusor-pointer cursor-pointer duration-300 ease-in-out hover:shadow-xl"
        />
      </a>
      <div className="flex flex-col justify-center gap-3 lg:gap-2 mt-5 px-6">
        <h2 className="text-3xl font-semibold text-left lg:text-center my-2">
          {name}
        </h2>
        <p className="text-gray-dark-text text-lg">{explanation}</p>
        <ProjectTech techs={tech} />
        <ViewProject gitUrl={gitHubUrl} livUrl={liveUrl} />
      </div>
    </div>
  )
}
