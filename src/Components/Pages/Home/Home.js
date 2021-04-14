import React from 'react'

import { IconContext } from "react-icons";
import {FaGithub, FaLinkedin} from 'react-icons/fa';

function Home() {
  return (
    <main id='main-container'>
      <h2>
        Allow me to introduce myself
      </h2>

      <br/>

      <p>
        I love programming. I've always had a huge drive for tech and I'm truly passionate about code! Yada Yada Yada Edit
      </p>

      <br/>

      <h4>
        I'm fluent in Web Development languages, specifically React, JavaScript, CSS, Node.js, PostgreSQL and more.
      </h4>

      <br/>

      <h3>
        FIND ME ON
      </h3>

      <ul className="social-links-list">
        <li className="social-icons">
          <a
            href="https://github.com/Dozr13"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <IconContext.Provider value={{ color: "black", size: '5em' }}>
              <div>
                <FaGithub />
              </div>
            </IconContext.Provider>
          </a>
        </li>

        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/wadejp8/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <IconContext.Provider value={{ color: "blue", size: '5em' }}>
              <div>
                <FaLinkedin />
              </div>
            </IconContext.Provider>
          </a>
        </li>
      </ul>
      


    </main>
  )
}

export default Home
