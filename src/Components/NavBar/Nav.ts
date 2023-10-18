import { AiOutlineHome } from "react-icons/ai"
import { AiFillHome } from "react-icons/ai"
import { BsBriefcase } from "react-icons/bs"
import { BsBriefcaseFill } from "react-icons/bs"
import { GoMail } from "react-icons/go"
import { BsFillPersonFill } from "react-icons/bs"
import { BsPerson } from "react-icons/bs"
import { NavType } from "../../Types/Types"

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
    path: "/about",
    hover: "about",
    EmptyIcon: BsPerson,
    FullIcon: BsFillPersonFill,
  },
  {
    hover: "contact",
    EmptyIcon: GoMail,
    FullIcon: GoMail,
    openNew: "mailto:almasthedeveloper@gmail.com",
  },
]

export { nav }
