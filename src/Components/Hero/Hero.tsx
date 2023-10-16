import Loader from "./Loader"
import useAnimate from "../../Hooks/useAnimate"

function Hero({
  animating,
  setAnimate,
}: {
  animating: boolean
  setAnimate: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { blurStyle, numberLoaderStyle, load } = useAnimate({
    animating,
    setAnimate,
  })
  return (
    <>
      <section
        className="h-screen w-full bg-black font-inter fixed -z-40"
        style={blurStyle}
      >
        <div className="wrapper h-full flex items-center">
          <h1 className="text-3xl sm:text-4xl med:text-5xl md:text-[3.4rem] lg:text-7xl 2xl:text-8xl  text-white capitalize">
            <span className={`${animating ? "first" : ""} `}>
              Hi, I&rsquo;m <span className="text-orange">Almas</span> <br />
            </span>
            <span className={`${animating ? "second" : ""} `}>
              A passionate <br />
            </span>
            <span className={`${animating ? "third" : ""} text-orange `}>
              front-end developer{" "}
            </span>{" "}
            <br />
            <span className={`${animating ? "fourth" : ""} `}>
              with limitless potential.
            </span>
          </h1>
        </div>
      </section>
      {animating && (
        <Loader load={load} numberLoaderStyle={numberLoaderStyle} />
      )}
    </>
  )
}

export default Hero
