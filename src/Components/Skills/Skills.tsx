import { skills } from "../../Skills/Skills"
import SkillCard from "./SkillCard"
export default function Skills() {
  const allSkills = Object.values(skills)

  return (
    <div className="bg-black text-white py-16">
      <h1 className="text-center text-3xl text-white mb-8">Skills</h1>
      <div className=" max-w-[42rem] mx-auto w-[90%] grid grid-cols-3 gap-2">
        {allSkills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}
