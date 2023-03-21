import '../Styles/About.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {React, useRef} from 'react';
import emailjs from '@emailjs/browser';
import {MdOutlineLocationOn, MdOutlineEmail} from 'react-icons/md'
import {AiOutlineClockCircle,AiOutlinePhone } from 'react-icons/ai'

const About = ({cartItems}) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kzdxi1t', 'template_nlvpg2s', form.current, 'sJYfdO-AY49sTRP9S')
      .then((result) => {
          console.log(result.text);
          alert("message sent")
          form.current.reset();

      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='aboutUs'>
      <Navbar size={cartItems.length}/>
        <img className='backImg' src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
  <div className='about'>
    <div className='left'>
      <h1>About Us</h1>
      <p>Ardlight's Pizzeria is a family restaurant based in  Roodeport, Johannesburg, which has been around since 2017. We strive for consistent quality in the preparation of fresh flavourful delicious pizza. Family owned, family run, your home away from home!</p><br/>

       <div className='info'>
       <a href="tel:+27813399459"><AiOutlinePhone color='gray'/>  +27 813-399-459</a> <br/>
       <a className="google--link" href='https://www.google.com/maps/dir//clearwater+mall/@-26.1275417,27.8346194,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x1e959fedad33971b:0x922bd56169f1057c!2m2!1d27.9046597!2d-26.1275586'>
        <MdOutlineLocationOn color='gray'/> View on google map</a><br/>
        <a href = "mailto: ardlightg@gmail.com"><MdOutlineEmail color='gray' /> ardlightg@gmail.com</a><br/>
        <p><AiOutlineClockCircle color='gray'/> Everyday from 6:30am to 9:30pm</p>
      </div>
      </div>
      
     
     <div className='right'>
     <div className="form">
            <h1 className="contact-heading"> Contact Us</h1>
            <form className='contactForm'ref={form} onSubmit={sendEmail}>
                <label>Your Name</label>
                <input type="text" name="user_name" />

                <label>Email</label>
                <input type="email" name="user_email" />

                <label>Message</label>
                <textarea name="message" rows="4" placeholder="Type your message here"/>
                <button className="btn">Send</button>
            </form> 

        </div>

        </div>
     </div>
     <Footer />
     </div>

  )
}

export default About