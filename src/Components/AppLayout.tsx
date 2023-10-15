import { Outlet } from "react-router"
import NavBar from "./NavBar/NavBar"

export default function AppLayout() {
  return (
    <div className="">
      <NavBar />
      <Outlet />
    </div>
  )
}
