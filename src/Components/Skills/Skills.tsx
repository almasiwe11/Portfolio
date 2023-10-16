import { useEffect } from "react"
import { skills } from "../../Skills/Skills"
import SkillCard from "./SkillCard"
export default function Skills() {
  const allSkills = Object.values(skills)

  useEffect(() => {
    const grid = document.querySelector(".gg") as HTMLElement
    if (grid) {
      document.addEventListener("mousemove", (e) => {
        grid.style.setProperty("--x", e.x + "px")
        grid.style.setProperty("--y", e.y + "px")
      })
    }
  }, [])

  return (
    <div className="bg-black z-30 text-white py-16">
      <h1 className="text-center text-3xl text-white mb-8">Skills</h1>
      <div className="grid-container z-10">
        <div className="gg max-w-[42rem] z-10 mx-auto w-[90%] grid grid-cols-3">
          {allSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}
