import { ProjectType } from "./ProjectData"
import ViewProject from "./ViewProject"

type Props = {
  project: ProjectType
}

export default function FeaturedProject({ project }: Props) {
  const { image, gitHubUrl, liveUrl, name, explanation } = project

  return (
    <div className="col-span-2 grid-cols-2">
      <img src={image} alt="" />
      <div>
        <ViewProject gitUrl={gitHubUrl} livUrl={liveUrl} />
      </div>
    </div>
  )
}
