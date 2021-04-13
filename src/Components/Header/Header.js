import React, {useState, useEffect} from 'react'
import {ReactComponent as Logo} from '../../Img/logo-stamp.svg'
import {Link} from 'react-router-dom'



import './Header.scss'

function Header() {
  const [navMenu, setNavMenu] = useState(false);


  return (
    <nav id='header'>
      <section className='header-content'>
        <section className='logo-container'>
          <Link to='/'>
            <Logo className='logo' />
          </Link>
        </section>

        <section className='link-container'>
          <ul className='link-list'>
            <Link to='/' className='page-link'>Home</Link>
            <Link to='/about' className='page-link'>About</Link>
            <Link to='/blog' className='page-link'>Blog</Link>
            <Link to='/projects' className='page-link'>Projects</Link>
            <Link to='/contact' className='page-link'>Contact</Link>
          </ul>
        </section>
      </section>
    </nav>
  )
}

export default Header
