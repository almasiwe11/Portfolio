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
      emptyIcon: AiFillHome,
      fullIcon: AiOutlineHome,
    },
    {
      path: "/projects",
      hover: "projects",
      emptyIcon: BsBriefcase,
      fullIcon: BsBriefcaseFill,
    },
    {
      hover: "contact",
      emptyIcon: GoMail,
      fullIcon: GoMail,
    },
  ]
  return (
    <div className="fixed flex-center left-12 h-screen flex-center w-14">
      <div className="flex flex-col gap-10 w-full bg-gray rounded-full">
        {nav.map((icon) => (
          <IconLink key={icon.hover} icon={icon} />
        ))}
      </div>
    </div>
  )
}
