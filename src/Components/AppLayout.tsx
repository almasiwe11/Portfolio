import { Outlet } from "react-router"
import NavBar from "./NavBar/NavBar"

export default function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
