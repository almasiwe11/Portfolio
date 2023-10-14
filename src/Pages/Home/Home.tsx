import Hero from "../../Components/Hero/Hero"

export default function Home({
  animate,
  setAnimate,
}: {
  animate: boolean
  setAnimate: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <>
      <Hero animate={animate} setAnimate={setAnimate} />
    </>
  )
}
