import { TechType } from "../../Types/Types"

type Props = {
  skill: TechType
}

export default function SkillCard({ skill }: Props) {
  const { Icon, name } = skill
  //
  return (
    <div className="card cursor-pointer flex flex-col gap-3 justify-center items-center">
      <span className="">
        <Icon
          className={`${
            name === "styled components"
              ? "h-14 w-14 mt-1"
              : name === "node JS"
              ? "w-11 h-11"
              : "h-8 w-8"
          }`}
        />
      </span>
      <span
        className={`text-xl max-w-xs capitalize text-center w-32 ${
          name === "styled components" && "-mt-5"
        } ${name === "node JS" && "-mt-3"}`}
      >
        {name}
      </span>
    </div>
  )
}
