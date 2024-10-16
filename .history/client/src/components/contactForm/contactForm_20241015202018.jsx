import React from 'react'

const contactForm = () => {
  return (
    <div className='container'>
        <div className='wrap'>
            <h1>Contact Form</h1>
            <p> Feel free to reach out to us for any questions! </p>
        </div>
        <form>
            <div>Email Me 🚀</div>
            <input placeholder="Your Email" name="user_email" />
            <input placeholder="Your Name" name="user_name" />
            <textarea placeholder="Message" name="message" rows={8} ></textarea>
            <input type="text" />
        </form>
      
    </div>
  )
}

export default contactForm
