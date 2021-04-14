import React from 'react'
import {Link} from 'react-router-dom'

import './navbar.scss'

function NavBar() {
  return (
    <div id='navbar'>
      <nav className='link-container'>
        <ul className='link-list'>
          <Link to='/' className='page-link'>Home</Link>
          <Link to='/about' className='page-link'>About</Link>
          <Link to='/projects' className='page-link'>Projects</Link>
          <Link to='/blog' className='page-link'>Blog</Link>
          <Link to='/contact' className='page-link'>Contact</Link>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
