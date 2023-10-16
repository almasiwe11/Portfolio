import { useRef, useEffect } from "react"
import artDes from "/art.jpg"
import artMb from "/art-mobile.jpg"
import artTb from "/art-tablet.jpg"
import { useLocation } from "react-router"
import RespImage from "../RespImage"
import Button from "../Button"

export default function About({ aboutFirst }: { aboutFirst?: boolean }) {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === "/projects") {
      scrollRef.current?.scrollIntoView()
    }
  }, [location.pathname])
  return (
    <div
      className={`bg-gray-light py-32 lg:py-24 lg:h-screen fixed top-0 w-full h-full  ${
        aboutFirst ? "z-20" : "-z-50"
      }`}
      ref={scrollRef}
    >
      <div className="wrapper">
        <h1 className="text-3xl font-bold text-black text-center lg:mb-16">
          About Me
        </h1>
        <div className=" flex flex-col lg:grid lg:grid-cols-2 gap-5 md:gap-10">
          <RespImage
            mobile={artMb}
            desktop={artDes}
            tablet={artTb}
            alt="Guy typing on a laptop"
            style="rounded-xl hidden lg:block"
          />
          <div className="flex flex-col gap-4 justify-center text-base lg:text-lg">
            <span>
              I am a passionate front-end developer hailing from the picturesque
              land of Kazakhstan. My journey in web development has been
              characterized by a relentless pursuit of excellence. With every
              line of code I write, I strive to improve myself and create
              beautiful and perfectly functional projects.
            </span>
            <span className="">
              Driven by a strong work ethic and a commitment to
              self-improvement, I embrace every coding challenge as an
              opportunity to grow. I thrive on solving complex problems and have
              a knack for turning ideas into polished, functional web
              applications.
            </span>
            <Button
              linkTo="mailto:awakenedduck@gmail.com"
              className="ml-0 xl:ml-48 self-start z-50 border-black"
              text="Hire Me"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
