import ProjectGrid from "./ProjectGrid"

export default function Projects() {
  return (
    <div className=" bg-gray-light font-inter py-16">
      <div className="wrapper">
        <h1 className="text-black text-3xl uppercase w-full text-center mb-12">
          Projects
        </h1>
        <ProjectGrid />
      </div>
    </div>
  )
}
