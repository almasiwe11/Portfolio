import IconLink from "./IconLink"
import { nav } from "./Nav"

export default function NavBar() {
  return (
    <div className="hidden md:flex">
      <div className="z-50 fixed flex-center md:left-5 lg:left-12 h-screen  navbar ">
        <div className="flex flex-col gap-6 w-full bg-gray-main rounded-full items-center p-2">
          {nav.map((icon, i) => (
            <IconLink key={icon.hover} icon={icon} index={i} len={nav.length} />
          ))}
        </div>
      </div>
    </div>
  )
}
