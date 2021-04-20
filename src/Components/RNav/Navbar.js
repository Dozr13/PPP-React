import React, { useState } from 'react'
import NavSC from './NavSC/NavSC'
import Topbar from './Topbar/Topbar'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)


  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <Topbar isOpen={isOpen} toggle={toggle} />
      <NavSC toggle={toggle} />
    </>
  )
}

export default Navbar
