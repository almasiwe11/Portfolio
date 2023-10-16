import { useEffect, useState } from "react"
import { useLocation } from "react-router"

export default function useObserver({
  skillsRef,
}: {
  skillsRef: React.MutableRefObject<HTMLDivElement | null>
}) {
  const location = useLocation()
  const [aboutFirst, setAboutFirst] = useState(false)
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0)
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    if (location.pathname === "/") {
      window.scrollTo(0, 0)
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skillsRef.current!])
  return { aboutFirst }
}
