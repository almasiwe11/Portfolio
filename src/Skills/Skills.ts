import { FaReact } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"
import { DiSass } from "react-icons/di"
import { SkillsType } from "../Types/Types"

const skills: SkillsType = {
  react: {
    name: "reat",
    Icon: FaReact,
    color: "#61DAFB",
  },
  tailwind: {
    name: "taiwlind",
    Icon: SiTailwindcss,
    color: "#38B2AC",
  },
  ts: {
    name: "typescript",
    Icon: SiTypescript,
    color: "#007ACC ",
  },
  sass: {
    name: "sass",
    Icon: DiSass,
    color: "#CD6799 ",
  },
}

export { skills }
