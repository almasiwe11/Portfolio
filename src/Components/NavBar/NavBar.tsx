import { AiOutlineHome } from "react-icons/ai"
import { AiFillHome } from "react-icons/ai"
import { BsBriefcase } from "react-icons/bs"
import { BsBriefcaseFill } from "react-icons/bs"
import { GoMail } from "react-icons/go"
import { NavType } from "../../Types/Types"
import IconLink from "./IconLink"

export default function NavBar() {
  const nav: NavType[] = [
    {
      path: "/",
      hover: "home",
      EmptyIcon: AiOutlineHome,
      FullIcon: AiFillHome,
    },
    {
      path: "/projects",
      hover: "projects",
      EmptyIcon: BsBriefcase,
      FullIcon: BsBriefcaseFill,
    },
    {
      hover: "contact",
      EmptyIcon: GoMail,
      FullIcon: GoMail,
    },
  ]
  return (
    <div className="fixed flex-center left-12 h-screen flex-center ">
      <div className="flex flex-col gap-6 w-full bg-gray-main rounded-full items-center p-2">
        {nav.map((icon, i) => (
          <IconLink key={icon.hover} icon={icon} index={i} len={nav.length} />
        ))}
      </div>
    </div>
  )
}
