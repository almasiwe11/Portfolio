import Button from "../../Components/Button"
import { BsGithub } from "react-icons/bs"

type Props = {
  gitUrl: string
  livUrl: string
}

export default function ViewProject({ gitUrl, livUrl }: Props) {
  return (
    <div className="mt-4 gap-2 flex w-max ml-24">
      <Button linkTo={gitUrl} className="bg-black text-white" Icon={BsGithub} />
      <Button text="view site" linkTo={livUrl} className="border-black" />
    </div>
  )
}
