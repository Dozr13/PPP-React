import React, {useLayoutEffect} from 'react'

import './Projects.scss'

function Projects() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div id='projects'>
      <section className='page-title'>
        <h2>Some of my Projects!</h2>
      </section>

      <section className='project-list'>
        <div className='project-container'>
          <a target='_blank' rel='noreferrer' href='https://billtrax.org/' >
            <p className='project-title underline'>
              BillTrax
            </p>
            <p className='project-summary'>
              This site was built for ease of access for users to keep track of and properly manage their personal finances.
              <br/>
              Built as a personal project for DevMountain boot camp. Uses React, Node, Express, Axios, Bcrypt, React Context, React Portal, and SASS.
            </p>
            <img className='project-image' src={process.env.PUBLIC_URL + '/img/BillTrax.png'} alt='BillTrax app' />
          </a>
        </div>
        <div className='project-container'>
          <a target='_blank' rel='noreferrer' href='https://github.com/Dozr13/lorem-cakes'>

            <p className='project-title underline'>
              Lorem Cakes
            </p>
            <p className='project-summary'>
              This page is a simple mock-up for a checkout cart, with some intricate JavaScript and React Components.
              <br/>
              Built with NoDB, plans to turn into a full site for a bakery owner.
            </p>
            <img className='project-image' src={process.env.PUBLIC_URL + '/img/LoremCakes.png'} alt='Lorem Cakes app' />
          </a>
        </div>
        <div className='project-container'>
          <a target='_blank' rel='noreferrer' href='https://github.com/GitReactComponents'>
            <p className='project-title underline'>
              G.R.C.
            </p>
            <p className='project-summary'>
              Git-React Comps is a site where you can easily upload and retrieve React Component designs for projects.
              <br/>
              Built as a group project at DevMountain boot camp. Uses React, Node, Express, React-Hook-Form, Codepen, Stripe, StyledComponents, AWS, and SASS.
            </p>
            <img className='project-image' src={process.env.PUBLIC_URL + '/img/GRC.png'} alt='Git-React Comps app' />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Projects
