import React, {useLayoutEffect} from 'react';
import emailjs from 'emailjs-com'
import apiKeys from '../../../secret/apikeys'

import './Contact.scss'

function Contact() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});



  const onSubmit = (e) => {
  e.preventDefault()
  emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
  .then((result) => {
  alert(`Message Sent, I'll get back to you shortly`, result.text);
  },
  error => {
  alert( 'An error occurred, Please try again', error.text)
  })
}

  return (
    <div id='contact'>
      <section className='contact-container'>
        <div className='page-title'>
          <h2>Contact Me</h2>
        </div>

        <section className='contact-form'>
          <form className='form-flex' onSubmit={onSubmit}>
            <input className='form-input' name='name' type="text" placeholder="Your Name" />
            <input className='form-input' name='email' type="text" placeholder="Email" />
            <input className='form-input' name='phone' type="tel" placeholder="Mobile number" />
            <input className='form-input' name='subject' type="text" placeholder="Subject" />
            <textarea className='form-textarea' name='message' placeholder='Message' />
            <input className='submit-btn' type="submit" />
          </form>
        </section>
      </section>
      
    </div>
  )
}

export default Contact
