import React, {useLayoutEffect} from 'react'
import {GrDocumentText} from 'react-icons/gr'

import './About.scss'


function About() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div id='about'>
      <section id='about-container'>
        <div className='page-title'>
          <h2>Who is Wade?</h2>
        </div>

      <br/>
        <p className='current-description'>
          I'm a Web Developer that absolutely loves learning new things, I'm extremely dedicated to being the best me in everything I do and strive to help others. 
          <br/>
          <br/>
          I'm very blessed to have an amazing wife and lovely daughter who have always been there and that I would do anything for. We currently live in North Dakota due to my previous line of work in the Oil and Gas industry, but I've held such a passion for code since High School but never truly pursued it for a career.
          <br/>
          <br/>
          Instead I dabbled on the side and read many books taking any opportunity I could to deepen my knowledge and understanding of computer language.
          <br/>
          <br/>
          I completed DevMountain boot camp on April 2nd, 2021 and I'm eager to put all of my verified skills into action and continue gaining incredible knowledge in the industry which I truly love!
        </p>
        <br/>
        <section className='resume-container'>
          <a 
            className='resume'
            href='https://docs.google.com/document/d/1vPKxhWEvZaZPhgv4o_l1R4xF3BZ2F7BKPkTJD4-pz38/edit?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            Checkout my resume!
            <GrDocumentText className='resume-icon' />
          </a>
        </section>
        <h3 className='page-title'>
          Goals
        </h3>
      <br/>
        <p className='text-description'>
          Setting goals is a key towards further development in ones self.
        </p>
      <br/>
        <ul className='goal-list'>
          <li className='goal'>To become a valued asset to the company I'm representing</li>
          <hr/>
          <li className='goal'>Always put my best effort into a project and finding solutions</li>
          <hr/>
          <li className='goal'>Create amazing UI/UX results for users</li>
          <hr/>
          <li className='goal'>Making things easier for people and helping them however possible</li>
          <hr/>
          <li className='goal'>To build a solid foundation for company as well as self</li>
        </ul>
      </section>
    </div>
  )
}

export default About
