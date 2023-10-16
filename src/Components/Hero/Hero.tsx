import { useEffect, useState } from "react"
import Loader from "./Loader"

function Hero({
  animating,
  setAnimate,
}: {
  animating: boolean
  setAnimate: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [load, setLoad] = useState(0)

  useEffect(() => {
    if (animating) {
      document.body.style.overflow = "hidden"
    }
    let requestId: number
    let currentLoad = 0
    function animate() {
      if (currentLoad < 100) {
        currentLoad += 0.44
        setLoad(currentLoad)
        requestId = requestAnimationFrame(animate)
      } else {
        setTimeout(() => {
          setAnimate(false)
        }, 3800)
      }
    }
    setTimeout(() => {
      document.body.style.overflow = "auto"
      document.body.style.overflowX = "hidden"
    }, 5300)
    animate()

    return () => {
      cancelAnimationFrame(requestId)
    }
  }, [setAnimate, animating])

  const imageBlur = animating ? (100 - load) / 1 : 0

  const blurStyle = {
    filter: `blur(${imageBlur}px)`,
  }

  const numberLoaderStyle = {
    opacity: `${(100 - load) / 1}%`,
  }

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
