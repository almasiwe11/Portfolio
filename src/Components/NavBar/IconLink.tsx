import { Link } from "react-router-dom"
import { NavType } from "../../Types/Types"
import Icons from "./Icons"

type Props = {
  icon: NavType
  index: number
  len: number
}
export default function IconLink({ icon, index, len }: Props) {
  const { FullIcon, EmptyIcon } = icon
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
          />
        </Link>
      ) : openNew ? (
        <a href={openNew} className="animate-bounce">
          <Icons
            EmptyIcon={EmptyIcon}
            index={index}
            FullIcon={FullIcon}
            len={len}
          />
        </a>
      ) : (
        ""
      )}
    </>
  )
}
