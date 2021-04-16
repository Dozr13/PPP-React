import React from 'react'
import Landing from '../../Landing/Landing';


import SocialLinks from '../../SocialLinks/SocialLinks'

import './Home.scss'

function Home() {
  return (
    <div>

    <div className="App" style={{position: 'relative', overflow: 'hidden'}}>
    <Landing />
  </div>
    <main id='home-container'>

      <section id='intro'>
        <h2 className='intro-header'>Allow me to introduce myself</h2>
        <img className='intro-img' src={process.env.PUBLIC_URL + '/img/self.jpeg'} />
      </section>

      <section id='about-me-container'>
        <p className='about-summary'>
          My name is Wade and I'm a dedicated and driven developer that focuses on pristine functionality and logic on the backend while ensuring an outstanding UI/UX experience.
          I love learning new things, putting my all into anything I do.
        </p>
        <h4 className='skill-list'>
          I'm fluent in Web Development languages, specifically React, JavaScript, CSS, Node.js, PostgreSQL, Redux, and Context.
          I'm currently focusing on adding C# as well as Java to my mental db.
        </h4>
      </section>

      <section id='home-social-container'>
        <h3 className='social-header'>
          FIND ME ON
        </h3>
        <div className='social-links'>
          <SocialLinks />
        </div>
      </section>
    </main>
    </div>
  )
}

export default Home
