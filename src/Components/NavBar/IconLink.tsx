import { Link } from "react-router-dom"
import { NavType } from "../../Types/Types"
import Icons from "./Icons"

type Props = {
  icon: NavType
  index: number
  len: number
}
export default function IconLink({ icon, index, len }: Props) {
  const { FullIcon, EmptyIcon, hover } = icon
  const path = icon.path

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
      ) : (
        <>
          <Icons
            EmptyIcon={EmptyIcon}
            index={index}
            FullIcon={FullIcon}
            len={len}
          />
        </>
      )}
    </>
  )
}
