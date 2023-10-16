import { IconType } from "react-icons"

type NavType = {
  path?: string
  EmptyIcon: IconType
  FullIcon: IconType
  hover: string
  openNew?: string
}

type TechType = {
  name: string
  Icon: IconType
  color: string
}

type SkillsType = {
  react: TechType
  tailwind: TechType
  ts: TechType
  sass: TechType
  html: TechType
  css: TechType
  js: TechType
  redux: TechType
  github: TechType
  git: TechType
  styled: TechType
  node: TechType
}

export type { NavType, TechType, SkillsType }
