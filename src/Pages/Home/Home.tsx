import { useRef } from "react"
import Hero from "../../Components/Hero/Hero"
import Skills from "../../Components/Skills/Skills"
import Projects from "../../Components/Projects/Projects"
import About from "../../Components/About/About"
import useObserver from "../../Hooks/useObserver"

export default function Home({
  animate,
  setAnimate,
}: {
  animate: boolean
  setAnimate: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const skillsRef = useRef<HTMLDivElement | null>(null)

  const { aboutFirst } = useObserver({ skillsRef })

  return (
    <>
      <div className="h-screen">
        <div className="h-full">
          <Hero animating={animate} setAnimate={setAnimate} />
        </div>
      </div>
      <Projects />

      <div className="relative z-30">
        <Skills />
        <div
          className="absolute -bottom-[300px] w-full h-[19.5rem] "
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
