import React from 'react'

function Home() {
  return (
    <main>
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

      <h3>
        FIND ME ON
      </h3>

      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/Dozr13"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>

        <li className="social-icons">
          <a
            href="https://twitter.com/Soumyajit4419"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>

        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/soumyajit4419/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>

        <li className="social-icons">
          <a
            href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>



    </main>
  )
}

export default Home
