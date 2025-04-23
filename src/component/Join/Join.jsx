import React, { useRef } from 'react'
import "./Join.css"
import emailjs from '@emailjs/browser';

const Join = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m9k6y6a', 'template_xskwpof', form.current, {
        publicKey: '8WLJ6AHqrJQSAzktd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='join' id='join us'>
      <div className="left-j">
        <hr />
        <div>
            <span className='stroke-text'>ready to</span>
            <span> level up</span>
        </div>
        <div>
            <span>your body</span>
            <span className='stroke-text'> with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} action="" onSubmit={sendEmail} classname='email-container'>
          <input type="email" name='user_email' placeholder='enter Email' />
          <button type='submit' className='btn btn-join'>Join now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
