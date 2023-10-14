import { useEffect, useState } from "react"
import ProgressBar from "./ProgressBar"

function Hero() {
  const [load, setLoad] = useState(0)

  useEffect(() => {
    let requestId: number
    let currentLoad = 0

    function animate() {
      if (currentLoad < 100) {
        currentLoad += 0.44
        setLoad(currentLoad)
        requestId = requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      cancelAnimationFrame(requestId)
    }
  }, [])

  const imageBlur = (100 - load) / 1

  const blurStyle = {
    filter: `blur(${imageBlur}px)`,
  }

  const numberLoaderStyle = {
    opacity: `${(100 - load) / 1}%`,
  }

  return (
    <>
      <section
        className="h-screen w-full bg-black font-inter"
        style={blurStyle}
      >
        <div className="wrapper h-full flex items-center">
          <h1 className="text-8xl  text-white capitalize">
            Hi, I am <span className="text-orange">Almas</span>, <br /> A
            passionate <br />{" "}
            <span className="text-orange">front-end developer </span> <br />{" "}
            with limitless potential.
          </h1>
        </div>
      </section>
      <div
        className="fixed left-[50%] top-[50%] text-white  z-10 translate-y-[-50%] translate-x-[-50%] font-bold text-3xl flex flex-col items-center gap-3"
        style={numberLoaderStyle}
      >
        <span>{Math.round(load)}%</span>
        <ProgressBar load={load} />
      </div>
    </>
  )
}

export default Hero
