import ProjectGrid from "./ProjectGrid"

export default function Projects() {
  return (
    <div className="h-screen bg-white font-inter py-16">
      <div className="wrapper">
        <h1 className="text-black text-3xl uppercase w-full text-center">
          Projects
        </h1>
        <ProjectGrid />
      </div>
    </div>
  )
}
