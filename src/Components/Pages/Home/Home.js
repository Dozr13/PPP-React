import React, {useLayoutEffect} from 'react'
import Landing from '../../Landing/Landing';
import {FaFilePdf} from "react-icons/fa";


import SocialLinks from '../../SocialLinks/SocialLinks'

import './Home.scss'

function Home() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});


  return (
    <div>
      <div className="App" style={{position: 'relative', overflow: 'hidden'}}>
        <Landing />
      </div>
    <main id='home-container'>

      <section id='intro'>
        <h2 className='page-title text-margin'>Allow me to introduce myself</h2>
        <div className='img-container'>
          <img className='intro-img' src={process.env.PUBLIC_URL + '/img/self.jpeg'} alt='Wade Pate' />
        </div>
      </section>

      <section id='intro-container'>
        <p className='intro-text'>
          My name is Wade and I'm a dedicated and driven developer that focuses on pristine functionality and logic on the backend while ensuring an outstanding UI/UX experience.
          I love learning new things, putting my all into anything I do.

        <br/>
        <br/>

          I'm fluent in Web Development languages, specifically React, JavaScript, CSS, Node.js, PostgreSQL, Redux, and Context.
          I'm currently focusing on adding C# as well as Java to my mental database.
          <br/>
          <br/>
          I'm also quite knowledgeable when it comes to Adobe Photoshop as well as Illustrator and I have Creative Cloud so I'm willing to learn any other skills.
        </p>
      </section>

      <section id='get-to-know-me'>
        <div id='home-social-container'>
          <h3 className='sub-header underline'>
            Find me on
          </h3>
          <div className='social-links'>
            <SocialLinks />
          </div>
        </div>

        <div id='home-resume-container'>
          <a href='https://docs.google.com/document/d/1vPKxhWEvZaZPhgv4o_l1R4xF3BZ2F7BKPkTJD4-pz38/edit?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          > 
            <h3 className='sub-header underline'>
              View my Resume
            </h3>
            <div className='resume-link'>
              <FaFilePdf color='white' size='2.5em' />
            </div>
          </a>
        </div>
      </section>
    </main>
    </div>
  )
}

export default Home
