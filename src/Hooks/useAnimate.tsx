import { useEffect, useState } from "react"

type Props = {
  setAnimate: React.Dispatch<React.SetStateAction<boolean>>
  animating: boolean
}
export default function useAnimate({ animating, setAnimate }: Props) {
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
    }, 5100)
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
  return { blurStyle, numberLoaderStyle, load }
}
