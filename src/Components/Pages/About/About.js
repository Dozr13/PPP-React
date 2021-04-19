import React, {useLayoutEffect} from 'react'

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
          I'm a Web Developer that absolutely loves learning new things, I'm extremely dedicated to being the best me everything I do and strive to help others. I'm very blessed to have an amazing wife and lovely daughter who have always been there and I would do anything for. We currently live in North Dakota due to my previous line of work in the Oil and Gas industry, but I've held such a passion for code since High School but never truly pursued it for a career. Instead I dabbled on the side and read many books taking any opportunity I could to deepen my knowledge and understanding of computer language.
          <br/>
          <br/>
          My family and I are eager to relocate...
          {/* <br/>
          <br/>
          Right now we're looking to move to Salt Lake City, Utah but other options are 100% available for discussion! */}
        </p>
        <h3 className='page-title'>
          My Goals
        </h3>
      <br/>
        <p className='text-description'>
          I like to think my goals are rather simple but here's the run down and I'll let you be the judge!
        </p>
      <br/>
        <ul className='goal-list'>
          <li className='goal'>To become a valued asset to the company I'm representing</li>
          <hr/>
          <li className='goal'>Always put my best effort into a project or finding solutions</li>
          <hr/>
          <li className='goal'>Create amazing UI/UX results for users</li>
          <hr/>
          <li className='goal'>Making things easier for people and helping them however possible</li>
          <hr/>
          <li className='goal'>Build a solid foundation for myself in the company I'm with</li>
        </ul>
      </section>
    </div>
  )
}

export default About
