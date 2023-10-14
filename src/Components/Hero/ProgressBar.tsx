type Props = {
  load: number
}

export default function ProgressBar({ load }: Props) {
  const ProgressBarValue = {
    width: `${load}%`,
  }
  return (
    <div className="w-48 relative h-2 rounded-full border border-orange">
      <div
        className="bg-orange rounded-full h-full"
        style={ProgressBarValue}
      ></div>
    </div>
  )
}
