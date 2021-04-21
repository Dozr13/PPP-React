import React, {useLayoutEffect} from 'react'
import Landing from '../../Landing/Landing';


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

      <section id='about-me-container'>
        <p className='about-summary'>
          My name is Wade and I'm a dedicated and driven developer that focuses on pristine functionality and logic on the backend while ensuring an outstanding UI/UX experience.
          I love learning new things, putting my all into anything I do.
        </p>
        <p className='skill-list'>
          I'm fluent in Web Development languages, specifically React, JavaScript, CSS, Node.js, PostgreSQL, Redux, and Context.
          I'm currently focusing on adding C# as well as Java to my mental db.
          <br/>
          <br/>
          I'm also quite knowledgeable when it comes to Adobe Photoshop as well as Illustrator and I have Creative Cloud so I'm willing to learn any other skills.
        </p>
      </section>

      <section id='home-social-container'>
        <h3 className='social-header underline'>
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
