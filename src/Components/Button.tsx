import { IconType } from "react-icons"
import { FiArrowUpRight } from "react-icons/fi"

type Props = {
  text?: string
  linkTo: string
  className?: string
  Icon?: IconType
}

export default function Button({ text, linkTo, className, Icon }: Props) {
  return (
    <a
      className={`${className} rounded-full  group p-2.5 px-5  duration-300 ease-in-out border cursor-pointer capitalize flex-center `}
      href={linkTo}
      rel="noreferrer"
      target="_blank"
    >
      <div className="">
        {Icon && <Icon className="h-6 w-6" />}
        <span>{text}</span>
      </div>

      <FiArrowUpRight className="ml-2 h-4 w-4 group-hover:ml-5 group-hover:rotate-45 duration-300 ease-in-out" />
    </a>
  )
}
