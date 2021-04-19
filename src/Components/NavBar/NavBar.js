import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../Img/logo-stamp.svg';

import useView from '../../Hooks/useView'

import './NavBar.scss'

function NavBar() {
  const {width} = useView();
  const breakpoint = 408;

  const [click, setClick] = useState(false)
  const [navbar, setNavbar] = useState(false)


  // const disableScroll = () => {
  //   let x = window.scrollX;
  //   let y = window.scrollY;
  //   window.onscroll = function(){window.scrollTo(x,y)}
  // }
  const handleClick = () => setClick(!click)


  const closeMobileMenu = () => setClick(false)
  
  
  const changeBackground = () => window.scrollY >= 40 ? setNavbar(true) : setNavbar(false)
  

  window.addEventListener('scroll', changeBackground)

  const mobile = () => {
    return (
      <div className={navbar ? 'navbar active' : 'navbar'} >
          
        <section className='nav-logo'>
          <Logo alt='Brand Logo' />
        </section>

        <section className='menu-icon' onClick={handleClick}>
          <i className={click 
            ? 'fas fa-times' 
            : 'fas fa-bars'
          } 
          />
        </section>

        <ul className={click 
          ? 'nav-menu active' 
          : 'nav-menu'
        }>
          <li className='nav-home'>
            <Link to='/' 
              className='nav-link' 
              onClick={closeMobileMenu}>
                <i className="fas fa-home"> Home</i>
            </Link>
          </li>
          <li className='nav-about'>
            <Link to='/about' 
              className='nav-link' 
              onClick={closeMobileMenu}>
                <i className="fas fa-info-circle"> About</i>
            </Link>
          </li>            
          <li className='nav-projects'>
            <Link to='/projects' 
              className='nav-link' 
              onClick={closeMobileMenu}>
                <i className="fas fa-project-diagram"> Projects</i>
            </Link>
          </li>            
          {/* <li className='nav-blog'>
            <Link to='/blog' 
              className='nav-link' 
              onClick={closeMobileMenu}>
                <i className="fab fa-blogger-b"> Blog</i>
            </Link>
          </li>             */}
          <li className='nav-contact'>
            <Link to='/contact' 
              className='nav-link' 
              onClick={closeMobileMenu}>
                <i className="fas fa-paper-plane"> Contact</i>
            </Link>
          </li>
        </ul>
    </div>
    )
  }
  
  
  const desktop = () => {
    return (
      <div id='navbar'>
        <nav className='link-container'>
          <ul className='link-list'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='/projects' className='nav-link'>Projects</Link>
            <Link to='/blog' className='nav-link'>Blog</Link>
            <Link to='/contact' className='nav-link'>Contact</Link>
          </ul>
        </nav>
      </div>
    )
  }



  return width < breakpoint ? mobile() : desktop()
}

export default NavBar
