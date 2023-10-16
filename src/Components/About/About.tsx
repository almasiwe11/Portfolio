import { useRef, useEffect } from "react"
import art from "/art.jpg"
import { useLocation } from "react-router"

export default function About({ footerFirst }: { footerFirst?: boolean }) {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === "/projects") {
      scrollRef.current?.scrollIntoView()
    }
  }, [location.pathname])
  return (
    <div
      className={`bg-white py-24 lg:h-screen fixed inset-0  ${
        footerFirst ? "-z-20" : "-z-50"
      }`}
      ref={scrollRef}
    >
      <div className="wrapper">
        <h1 className="text-3xl font-bold text-black text-center mb-16">
          About Me
        </h1>
        <div className=" flex flex-col md:flex-row gap-5 md:gap-10">
          <img src={art} alt="Guy tping on a laptop" className="rounded-xl" />
          <div className="flex flex-col gap-4 justify-center text-base lg:text-lg">
            I am a passionate front-end developer hailing from the picturesque
            land of Kazakhstan. My journey in web development has been
            characterized by a relentless pursuit of excellence. With every line
            of code I write, I strive to improve myself and create beautiful and
            perfectly functional projects.
            <span className="">
              Driven by a strong work ethic and a commitment to
              self-improvement, I embrace every coding challenge as an
              opportunity to grow. I thrive on solving complex problems and have
              a knack for turning ideas into polished, functional web
              applications.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
