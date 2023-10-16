type Props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Hamburger({ setIsOpen, isOpen }: Props) {
  return (
    <div className=" z-50 fixed right-8 top-6">
      <button
        id="menu-btn"
        type="button"
        className={` hamburger md:hidden focus:outline-none ${
          isOpen && "open"
        } `}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </div>
  )
}

export default Hamburger

/* 

 */
