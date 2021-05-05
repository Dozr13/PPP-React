import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import useView from '../../Hooks/useView'

import './Footer.scss'



function Footer() {
  const {width} = useView();
  const breakpoint = 960;

  let date = new Date()
  let year = date.getFullYear()


  const footerLinks = () => {
    return (
      <div className='footer-right'>
      <a href="https://github.com/Dozr13"
        className="github social-footer"
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon 
          icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/wadejp8/"
        className="linkedIn social-footer"
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.twitter.com/wadejp8" 
        className="twitter social-footer"
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
    )
  }

  const mobile = () => {
    return <footer id='footer'>
      <div className='footer-left'>
        <span>
          Copyright &#169; {year}
        <br/>
          Pate's Programming
        </span>
      </div>
      {footerLinks()}
    </footer>
  }




  const desktop = () => {
    return (
      <footer id='footer'>
        <div className='footer-left' style={{overflow: 'hidden'}}>
          <span>
            Copyright &#169; {year} 
          <br/>
            Pate's Programming
          </span>
        </div>
        <div className='footer-mid'>
          <h3 className='footer-text'>
            Designed and Developed by
          <br/>
            Wade Pate and Pate's Programming
          </h3>
        </div>
        {footerLinks()}
      </footer>
    )
  }

  return width < breakpoint ? mobile() : desktop()
}

export default Footer
