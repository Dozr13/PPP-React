import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";


import './SocialLinks.scss'


function SocialLinks() {
  return (
    <div className="social-container">
      <a href="https://github.com/Dozr13"
         className="github social"
         target='_blank'
         rel='noopener noreferrer'
        >
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a href="https://www.linkedin.com/in/wadejp8/"
         className="linkedIn social"
         target='_blank'
         rel='noopener noreferrer'
        >
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
      <a href="https://www.twitter.com/wadejp8" 
         className="twitter social"
         target='_blank'
         rel='noopener noreferrer'
        >
        <FontAwesomeIcon icon={faTwitter} size="3x" />
      </a>
    </div>
  )
}

export default SocialLinks
