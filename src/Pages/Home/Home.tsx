import Hero from "../../Components/Hero/Hero"
import Projects from "../Projects/Projects"

export default function Home({
  animate,
  setAnimate,
}: {
  animate: boolean
  setAnimate: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <>
      <div className="h-screen">
        <Hero animate={animate} setAnimate={setAnimate} />
      </div>
      <Projects />
    </>
  )
}
