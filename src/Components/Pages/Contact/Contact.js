import React, {useState, useLayoutEffect} from 'react';
import emailjs from 'emailjs-com'
import apiKeys from '../../../secret/apikeys'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Contact.scss'


function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [msg, setMsg] = useState('')

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});


  const handleChange = (e) => {
    e.preventDefault()
    e.target.name === 'name'
    ? setName(e.target.value)
    : e.target.name==='email' 
    ? setEmail(e.target.value)
    : e.target.name === 'phone'
    ? setPhone(e.target.value)
    : e.target.name === 'subject'
    ? setSubject(e.target.value)
    : e.target.name === 'msg' 
    ? setMsg(e.target.value)
    : console.log('error')
  }


    const onSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
    .then((result) => {
      toast.success(`Message Sent, I'll get back to you shortly`, result.text);
      setName('')
      setEmail('')
      setPhone('')
      setSubject('')
      setMsg('')
    },
    error => {
      toast.error(`Hmm, an error occurred, feel free to try again!`, error.text)
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
            <input className='form-input' name='name' type="text" required value={name} onChange={(e) => handleChange(e)} placeholder="Your Name" />
            <input className='form-input' name='email' type="text" required value={email} onChange={(e) => handleChange(e)} placeholder="Email" />
            <input className='form-input' name='phone' type="tel" value={phone} onChange={(e) => handleChange(e)} placeholder="Mobile number" />
            <input className='form-input' name='subject' type="text" required value={subject} onChange={(e) => handleChange(e)} placeholder="Subject" />
            <textarea className='form-textarea' name='msg' required value={msg} onChange={(e) => handleChange(e)} placeholder='Message' />

            <button className='submit-btn' type="submit">
              Submit
            </button>
            <ToastContainer />
          </form>
        </section>
      </section>
      
    </div>
  )
}

export default Contact
