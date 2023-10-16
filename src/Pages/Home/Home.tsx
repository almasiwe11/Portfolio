import { useRef, useEffect, useState } from "react"
import Hero from "../../Components/Hero/Hero"
import Skills from "../../Components/Skills/Skills"
import Projects from "../../Components/Projects/Projects"
import About from "../../Components/About/About"
import { useLocation } from "react-router"
import Footer from "../../Components/Footer/Footer"

export default function Home({
  animate,
  setAnimate,
}: {
  animate: boolean
  setAnimate: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const skillsRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()
  const [aboutFirst, setAboutFirst] = useState(false)
  useEffect(() => {
    if (location.pathname === "/") {
      scrollRef.current?.scrollIntoView()
    }
  }, [location.pathname])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const skill = entries.find((enty) => enty.target.id === "skills")

      if (skill?.isIntersecting) {
        setAboutFirst(true)
      }

      if (!skill?.isIntersecting) {
        setAboutFirst(false)
      }
    })

    observer.observe(skillsRef.current!)
  }, [])

  return (
    <>
      <div className="h-screen" ref={scrollRef}>
        <div className="h-full">
          <Hero animate={animate} setAnimate={setAnimate} />
        </div>
      </div>
      <Projects />

      <div className="relative z-40">
        <Skills />
        <div
          className="absolute -bottom-1 w-full h-2"
          ref={skillsRef}
          id="skills"
        ></div>
      </div>
      <div className="h-screen">
        <About aboutFirst={aboutFirst} />
      </div>
      {/* <Footer showFooter={showFooter} /> */}
    </>
  )
}
