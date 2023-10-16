import { Link, useLocation } from "react-router-dom"
import { NavType } from "../../Types/Types"
import Icons from "./Icons"

type Props = {
  icon: NavType
  index: number
  len: number
  mobile?: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}
export default function IconLink({
  icon,
  index,
  len,
  mobile = false,
  setIsOpen,
}: Props) {
  const { FullIcon, EmptyIcon, hover } = icon
  const path = icon.path
  const openNew = icon.openNew

  const location = useLocation()
  let active = false
  if (location.pathname === path) active = true

  return (
    <>
      <Link
        to={path ? path : openNew!}
        className={` flex items-center ${mobile && "w-36 py-1 pl-2"} ${
          active && mobile && "bg-white rounded-full text-black "
        } ${!path && "animate-bounce"} `}
        onClick={() => {
          if (setIsOpen) setIsOpen(false)
        }}
      >
        <Icons
          EmptyIcon={EmptyIcon}
          index={index}
          FullIcon={FullIcon}
          len={len}
          path={path}
          mobile={mobile}
        />
        {mobile && (
          <span
            className={` capitalize text-lg ${
              active && mobile ? "text-black" : "text-white"
            }`}
          >
            {" "}
            {hover}{" "}
          </span>
        )}
      </Link>
    </>
  )
}
