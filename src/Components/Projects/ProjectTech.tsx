import { TechType } from "../../Types/Types"

type Props = {
  techs: TechType[]
}

export default function ProjectTech({ techs }: Props) {
  return (
    <div className="flex gap-3 mt-3">
      {techs.map((tech, i) => {
        const { Icon } = tech
        const iconStyle = {
          color: tech.color,
        }
        return (
          <Icon
            key={i}
            style={iconStyle}
            className="h-6 w-6 cursor-pointer duration-300 ease-in-out hover:scale-110"
          />
        )
      })}
    </div>
  )
}
