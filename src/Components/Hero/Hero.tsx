import { useEffect, useState } from "react"
import ProgressBar from "./ProgressBar"
import Loader from "./Loader"

function Hero() {
  const [load, setLoad] = useState(0)

  useEffect(() => {
    let requestId: number
    let currentLoad = 0
    let startTime

    function animate(timestamp) {
      if (!startTime) {
        startTime = timestamp
      }

      const elapsedTime = timestamp - startTime

      if (currentLoad < 100) {
        currentLoad += 0.44
        setLoad(currentLoad)
        requestId = requestAnimationFrame(animate)
      }
      console.log("time", elapsedTime)
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
            <span className="first">
              Hi, I&rsquo;m <span className="text-orange">Almas</span> <br />
            </span>
            <span className="second">
              A passionate <br />
            </span>
            <span className="text-orange third">front-end developer </span>{" "}
            <br />
            <span className="fourth">with limitless potential.</span>
          </h1>
        </div>
      </section>
      <Loader load={load} numberLoaderStyle={numberLoaderStyle} />
    </>
  )
}

export default Hero
