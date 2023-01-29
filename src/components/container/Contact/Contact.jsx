import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { motion } from 'framer-motion';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_txyn3kz', 'template_3uc58je', form.current, 'uw7y3fzcHjBEdWbKA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("details sent");
  };
  return (
    <section id="contact">
      <div className="container" id="contact">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [ -50, 0 ], opacity: 1 }}
          className="title"
        >
          <span>get in touch</span>
          <h1>Contact Me</h1>
        </motion.div>
        <div className="contact_form">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [ -150, 0 ], opacity: 1 }}
            transition={{ duration: 1 }}
            className='contact_left_container'>
            <h3>Just Say Hi</h3>
            <p className='contact_text'>If u are already here means you have really spent some time on my portfolio, So if you do like my work, please do reach out to me.
              I am looking for a new role and would  appreciate your support.Thankyou in advance for any advice
              or opportunities you can provide.</p>
            {contacts.map(contact => {
              return (
                <div className='contact_left' key={contact.id}>
                  <div className="icon">
                    {contact.icon}
                  </div>
                  <p>{contact.infoText}</p>
                </div>
              )
            })}

            {/* <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {socialIcon}
              </div>
            )
          })}
          </div> */}
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [ 150, 0 ], opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact_right"

          >
            <h3>Get In Touch</h3>
            <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <input type="text" placeholder='First Name' name='name' className="row" />
              <input type="text" placeholder='Last name' className="row"/>
            </div>
            <div className="row">
              <input type="text" placeholder='Phone' />
              <input type="email" placeholder='Email' name='email' />
            </div>
            <div className="row">
              <textarea placeholder='message' name='message'></textarea>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              
            >
              {/* <a href="https://google.com">Send</a> */}
              <button className="btn" type="submit" onClick={()=>{
                console.log("clicked")
              }} >Send</button>
            </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact;