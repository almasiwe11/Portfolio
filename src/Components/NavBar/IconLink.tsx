import { Link } from "react-router-dom"
import { NavType } from "../../Types/Types"
import Icons from "./Icons"

type Props = {
  icon: NavType
  index: number
  len: number
  mobile?: boolean
}
export default function IconLink({ icon, index, len, mobile = false }: Props) {
  const { FullIcon, EmptyIcon, hover } = icon
  const path = icon.path
  const openNew = icon.openNew

  return (
    <>
      {path ? (
        <Link to={path} className="w-full ">
          <Icons
            EmptyIcon={EmptyIcon}
            index={index}
            FullIcon={FullIcon}
            len={len}
            path={path}
            mobile={mobile}
          />
          {mobile && <span className="text-white"> {hover} </span>}
        </Link>
      ) : openNew ? (
        <a href={openNew} className="animate-bounce">
          <Icons
            EmptyIcon={EmptyIcon}
            index={index}
            FullIcon={FullIcon}
            len={len}
            mobile={mobile}
          />
        </a>
      ) : (
        ""
      )}
    </>
  )
}
