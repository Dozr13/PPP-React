import React from 'react'
import './Footer.scss'


function Footer() {
  let date = new Date()
  let year = date.getFullYear()

  return (
    <section id='footer'>
      <div className='footer-left'>
        <h3>
          Designed and Developed by 
          <strong>Wade Pate</strong>
          / Pate's Programming
        </h3>
      </div>
      
      <div className='footer-mid'>
        <h3>Copyright &#169; {year} WP</h3>
      </div>

      <div className='footer-right'>
        <ul className='social-icon-links'>

        </ul>
      </div>
    </section>
  )
}

export default Footer
