import { useState } from "react"
import { Outlet } from "react-router"
import NavBar from "./NavBar/NavBar"
import Hamburger from "./Hamburger"
import MobileMenu from "./Mobile/MobileMenu"

export default function AppLayout() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="">
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      {/*  */}
      <NavBar />
      <Outlet />
    </div>
  )
}
