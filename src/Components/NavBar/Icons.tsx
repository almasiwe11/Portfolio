import { useLocation } from "react-router"
import { IconType } from "react-icons"

type Props = {
  index: number
  EmptyIcon: IconType
  FullIcon: IconType
  len: number
  path?: string
  mobile?: boolean
}
export default function Icons({
  index,
  EmptyIcon,
  FullIcon,
  len,
  path,
  mobile,
}: Props) {
  const location = useLocation()
  let active = false
  if (location.pathname === path) active = true
  return (
    <div
      className={` flex-center cursor-pointer  ${
        index === 0 || (index === len - 1 && mobile)
          ? "rounded-full"
          : "rounded-lg"
      } ${active && !mobile ? "bg-white" : "bg-transparent"} ${
        mobile ? "w-12" : "w-full"
      } duration-300 ease-in-out hover:bg-zinc-500 p-2 group`}
    >
      {active ? (
        <FullIcon
          className={`text-orange lg:h-5 lg:w-5 w-6 h-6 group-hover:text-orange duration-300 ease-in-out`}
        />
      ) : (
        <EmptyIcon
          className={`text-white lg:h-5  lg:w-5 w-6 h-6 group-hover:text-orange duration-300 ease-in-out`}
        />
      )}
    </div>
  )
}
