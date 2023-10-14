import { useLocation } from "react-router"
import { IconType } from "react-icons"

type Props = {
  index: number
  EmptyIcon: IconType
  FullIcon: IconType
  len: number
  path?: string
}
export default function Icons({
  index,
  EmptyIcon,
  FullIcon,
  len,
  path,
}: Props) {
  const location = useLocation()
  let active = false
  if (location.pathname === path) active = true
  return (
    <div
      className={`w-full flex-center cursor-pointer ${
        index === 0 || index === len - 1 ? "rounded-full" : "rounded-lg"
      } ${
        active && "bg-white"
      } duration-300 ease-in-out hover:bg-zinc-500 p-2 group`}
    >
      {active ? (
        <FullIcon className="text-orange h-5 w-5 group-hover:text-orange duration-300 ease-in-out" />
      ) : (
        <EmptyIcon className="text-white h-5 w-5 group-hover:text-orange duration-300 ease-in-out" />
      )}
    </div>
  )
}
