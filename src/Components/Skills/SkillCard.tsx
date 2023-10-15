import { TechType } from "../../Types/Types"

type Props = {
  skill: TechType
}

export default function SkillCard({ skill }: Props) {
  const { Icon, name } = skill
  return (
    <div className="card border cursor-pointer border-gray-main rounded-xl p-8 flex flex-col gap-3 justify-center items-center">
      <span className="">
        <Icon className="h-7 w-7" />
      </span>
      <span className="text-xl capitalize text-center">{name}</span>
    </div>
  )
}
