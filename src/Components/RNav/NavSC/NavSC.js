import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from "./NavEl";


const NavSC = ({toggle}) => {
  return (
    <>
      <Nav>

        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to='/' activeStyle={{
            fontWeight: 'bold',
            color: 'blue'
          }}>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle={{
            fontWeight: 'bold',
            color: 'blue'
          }}>
            About
          </NavLink>
          <NavLink to='/projects' activeStyle={{
            fontWeight: 'bold',
            color: 'blue'
          }}>
            Projects
          </NavLink>
          <NavLink to='/contact' activeStyle={{
            fontWeight: 'bold',
            color: 'blue'
          }}>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default NavSC