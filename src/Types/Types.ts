import { IconType } from "react-icons"

type NavType = {
  path?: string
  EmptyIcon: IconType
  FullIcon: IconType
  hover: string
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
}

export type { NavType, TechType, SkillsType }
