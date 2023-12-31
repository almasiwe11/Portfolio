import { useRef, useEffect } from "react"
import ProjectGrid from "./ProjectGrid"
import { useLocation } from "react-router"

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === "/projects") {
      scrollRef.current?.scrollIntoView()
    }
  }, [location.pathname])
  return (
    <div className=" bg-gray-light font-inter py-16 z-30" ref={scrollRef}>
      <div className="wrapper">
        <h1 className="text-black text-3xl uppercase w-full text-center mb-12 ">
          Projects
        </h1>
        <ProjectGrid />
      </div>
    </div>
  )
}
