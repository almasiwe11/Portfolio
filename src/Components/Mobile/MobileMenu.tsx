import { nav } from "../NavBar/Nav"
import IconLink from "../NavBar/IconLink"

export default function MobileMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`menu md:hidden z-40 w-full fixed inset-0 ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="flex-center w-full">
        <div className="flex flex-col gap-4">
          {nav.map((icon, i) => (
            <IconLink
              key={icon.hover}
              icon={icon}
              index={i}
              len={nav.length}
              mobile={true}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
