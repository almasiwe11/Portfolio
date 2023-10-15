import { useEffect, useState } from "react"
import Loader from "./Loader"

function Hero({
  animate,
  setAnimate,
}: {
  animate: boolean
  setAnimate: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [load, setLoad] = useState(0)

  useEffect(() => {
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
          console.log("why")
        }, 3800)
      }
    }

    animate()

    return () => {
      cancelAnimationFrame(requestId)
    }
  }, [setAnimate])

  const imageBlur = animate ? (100 - load) / 1 : 0

  const blurStyle = {
    filter: `blur(${imageBlur}px)`,
  }

  const numberLoaderStyle = {
    opacity: `${(100 - load) / 1}%`,
  }

  return (
    <>
      <section
        className="h-screen w-full bg-black font-inter fixed -z-10"
        style={blurStyle}
      >
        <div className="wrapper h-full flex items-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl  text-white capitalize">
            <span className={`${animate ? "first" : ""} `}>
              Hi, I&rsquo;m <span className="text-orange">Almas</span> <br />
            </span>
            <span className={`${animate ? "second" : ""} `}>
              A passionate <br />
            </span>
            <span className={`${animate ? "third" : ""} text-orange `}>
              front-end developer{" "}
            </span>{" "}
            <br />
            <span className={`${animate ? "fourth" : ""} `}>
              with limitless potential.
            </span>
          </h1>
        </div>
      </section>
      {animate && <Loader load={load} numberLoaderStyle={numberLoaderStyle} />}
    </>
  )
}

export default Hero
