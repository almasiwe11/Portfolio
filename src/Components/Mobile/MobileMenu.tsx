import { nav } from "../NavBar/Nav"
import IconLink from "../NavBar/IconLink"
import { useEffect } from "react"

export default function MobileMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

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
              setIsOpen={setIsOpen}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
