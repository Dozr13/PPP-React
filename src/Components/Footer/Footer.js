import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import './Footer.scss'


function Footer() {
  let date = new Date()
  let year = date.getFullYear()

  return (
    <footer id='footer'>
      {/* <div className='footer-left'>
        <h3>
          Designed and Developed by 
          <strong> Wade Pate </strong>
          and Pate's Programming
        </h3>
      </div> */}
      
      <div className='footer-left footer-mid'>
        <span>Copyright &#169; {year} Pate's Programming</span>
      </div>

      <div className='footer-right'>
        <a href="https://github.com/Dozr13"
          className="github social-footer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/wadejp8/"
          className="linkedIn social-footer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.twitter.com/wadejp8" 
          className="twitter social-footer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
