import { useRef, useEffect, useState } from "react"
import Hero from "../../Components/Hero/Hero"
import Skills from "../../Components/Skills/Skills"
import Projects from "../../Components/Projects/Projects"
import About from "../../Components/About/About"
import { useLocation } from "react-router"

export default function Home({
  animate,
  setAnimate,
}: {
  animate: boolean
  setAnimate: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const layerRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()
  const [footerFirst, setFooterFirst] = useState(false)
  useEffect(() => {
    if (location.pathname === "/") {
      scrollRef.current?.scrollIntoView()
    }
  }, [location.pathname])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]

      if (!entry.isIntersecting) {
        setFooterFirst(true)
      }
      if (entry.isIntersecting) {
        setFooterFirst(false)
      }
    })

    observer.observe(layerRef.current!)
  }, [])

  return (
    <>
      <div className="h-screen" ref={scrollRef}>
        <div ref={layerRef} className=" h-full">
          <Hero animate={animate} setAnimate={setAnimate} />
        </div>
      </div>
      <Projects />
      <Skills />
      <div className="h-screen">
        <About footerFirst={footerFirst} />
      </div>
    </>
  )
}
