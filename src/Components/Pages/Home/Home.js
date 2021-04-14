import React from 'react'

import SocialLinks from '../../SocialLinks/SocialLinks'

function Home() {
  return (
    <main id='main-container'>
      <section className='text-container'>
        <div className='home-intro'>
          <h2>Allow me to introduce myself</h2>
        <br/>
          <p>
            My name is Wade and I love programming. I've always had a huge drive for tech and I'm truly passionate about code! Yada Yada Yada Edit
          </p>
        </div>

        <br/>

        <h4>
          I'm fluent in Web Development languages, specifically React, JavaScript, CSS, Node.js, PostgreSQL and more.
        </h4>
      </section>

      <br/>


      <section className='home-social-container'>
        <h3 className='social-header'>
          FIND ME ON
        </h3>
        <SocialLinks />
      </section>
      


    </main>
  )
}

export default Home
