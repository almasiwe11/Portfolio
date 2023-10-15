import { FaReact } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"
import { DiSass } from "react-icons/di"
import { AiFillHtml5 } from "react-icons/ai"
import { FaCss3 } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5"
import { TbBrandRedux } from "react-icons/tb"
import { SiStyledcomponents } from "react-icons/si"
import { BsGithub } from "react-icons/bs"
import { BiGitBranch } from "react-icons/bi"
import { FaNode } from "react-icons/fa"
import { SkillsType } from "../Types/Types"

const skills: SkillsType = {
  react: {
    name: "react",
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
    name: "SASS",
    Icon: DiSass,
    color: "#CD6799 ",
  },
  html: {
    name: "HTML",
    Icon: AiFillHtml5,
    color: "#FF5733",
  },
  css: {
    name: "CSS",
    Icon: FaCss3,
    color: "#2965f1",
  },
  js: {
    name: "Javascript",
    Icon: IoLogoJavascript,
    color: "orange",
  },
  redux: {
    name: "redux toolkit",
    Icon: TbBrandRedux,
    color: "orange",
  },
  node: {
    name: "node JS",
    Icon: FaNode,
    color: "orange",
  },
  git: {
    name: "Git",
    Icon: BiGitBranch,
    color: "orange",
  },
  github: {
    name: "GitHub",
    Icon: BsGithub,
    color: "orange",
  },
  styled: {
    name: "styled components",
    Icon: SiStyledcomponents,
    color: "orange",
  },
}
export { skills }
