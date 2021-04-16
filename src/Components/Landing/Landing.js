import React, {useState, useEffect} from 'react'
import {ReactComponent as Logo} from '../../Img/logo-stamp.svg'
import Type from './Type'

import Particles from 'react-particles-js';
import particlesConfig from '../../config/particlesConfig';

import NavBar from '../NavBar/NavBar';


import './Landing.scss'

function Landing() {
  const [navMenu, setNavMenu] = useState(false);

  const myName = <p style={{color: '#043363', height: '25%', marginTop: '-10px', fontSize: '4rem', fontWeight: 700, textAlign: 'center', overflow: 'hidden'}}>Wade Pate</p>;

  return (
    <div id='landing'>
      <div className='particles' style={{position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>

      <section id='logo-container'>
        <Logo className='logo' alt='Brand Logo' />
      </section>

      <section id='welcome-msg-container'>
        <h3 className='welcome'>
          Welcome!
        </h3>
        <h4 className='welcome-msg'>
          My name is
        </h4>
          {myName}
        <h4 className='welcome-msg'>
          and I'm a
        </h4>
        <div className='typewriter' style={{padding: 10, textAlign: 'center'}}>
          <Type />
        </div>
      </section>
    </div>
  )
}

export default Landing
