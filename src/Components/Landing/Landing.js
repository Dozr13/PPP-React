import React, {useState, useEffect} from 'react'
import {ReactComponent as Logo} from '../../Img/title-logo.svg'
import {Link} from 'react-router-dom'
import Type from './Type'



import './Landing.scss'

function Landing() {
  const [navMenu, setNavMenu] = useState(false);

  const myName = <p className='my-name' style={{color: '#043363', marginTop: '.4rem', fontSize: '4rem'}}>Wade Pate</p>;

  return (
    <h1>
      <nav id='header'>
        <section className='header-content'>
          <section className='logo-container'>
            <Logo className='logo' alt='Brand Logo' />
            <div className='welcome-msg-container'>
              <h4 className='welcome-msg'>
                Hi!
                <br/>
                My name is
                {myName}
                and I'm a
              </h4>
              <br/>
              <div className='typewriter' style={{padding: 10, textAlign: 'center'}}>
                <Type />
              </div>
            </div>
          </section>
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
      </nav>
    </h1>
  )
}

export default Landing
