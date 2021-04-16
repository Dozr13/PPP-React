import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../Img/logo-stamp.svg'


import useView from '../../Hooks/useView'

import './NavBar.scss'

function NavBar() {
  const {width} = useView();
  const breakpoint = 408;

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const mobile = () => {
    return (
      <nav id='mob-nav'>
        <section  className='navbar-logo-container'>
          <Link to='/'>
            <Logo className='navbar-logo' />
          </Link>
        </section>

  // TODO  FORMAT THIS PROPERLY
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}
          />
        </div>
      </nav>
    )
  }


  const desktop = () => {
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



  return width < breakpoint ? mobile() : desktop()
}

export default NavBar
