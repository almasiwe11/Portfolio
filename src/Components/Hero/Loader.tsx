import ProgressBar from "./ProgressBar"

type Props = {
  numberLoaderStyle: { opacity: string }
  load: number
}
export default function Loader({ numberLoaderStyle, load }: Props) {
  return (
    <div
      className="fixed left-[50%] top-[50%] text-white  z-10 translate-y-[-50%] translate-x-[-50%] font-bold text-3xl flex flex-col items-center gap-3"
      style={numberLoaderStyle}
    >
      <span>{Math.round(load)}%</span>
      <ProgressBar load={load} />
    </div>
  )
}
