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
              Where users can keep track of their personal finances and budget costs.
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
              A simple mock-up for a checkout cart, created with React and no Database
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
              Git-React Comps is a group project where you can upload and retrieve Component designs.
            </p>
            <img className='project-image' src={process.env.PUBLIC_URL + '/img/GRC.png'} alt='Git-React Comps app' />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Projects
