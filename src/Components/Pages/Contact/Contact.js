import React, {useState, useLayoutEffect} from 'react'

import './Contact.scss'

function Contact() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sub, setSub] = useState('')
  const [msg, setMsg] = useState('')





  return (
    <div id='contact'>
      <section className='contact-container'>
        <div className='page-title'>
          <h2>Contact Me</h2>
        </div>

        <section className='contact-form'>
          <form className='form-flex'>
            <input 
              className='form-input' 
              placeholder='Name' 
              type='text' 
              onChange={e => setName({name: e.target.value})} 
              />
            <input 
              className='form-input' 
              placeholder='Email' 
              type='text' 
              onChange={e => setEmail({email: e.target.value})} 
              />
            <input 
              className='form-input' 
              placeholder='Subject' 
              type='text' 
              onChange={e => setSub({sub: e.target.value})} 
            />
            <input 
              className='form-input' 
              placeholder='Message' 
              type='text' 
              onChange={e => setMsg({msg: e.target.value})} 
              />
            <button 
              className='submit-btn' 
              type='submit'
              >
              Submit
            </button>
          </form>
        </section>
      </section>
      
    </div>
  )
}

export default Contact
