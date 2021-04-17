import React from 'react'
import {ReactComponent as Logo} from '../../../Img/logo-stamp.svg';


function About() {
  return (
    <section id='about'>
      {/* <section className='page-logo-container'>
        <div className='page-logo'>
          <Logo className='logo' />
        </div>
      </section> */}
      <h2 style={{fontSize: '2.5rem'}}>Get to know me!</h2>
      <p>As you probably noticed on the previous page, my name is Wade! I live in North Dakota </p>

    </section>
  )
}

export default About
