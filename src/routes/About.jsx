import '../Styles/About.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from 'react';
import {FaDirections} from 'react-icons/fa'
import {AiOutlineClockCircle,AiOutlinePhone } from 'react-icons/ai'

const About = ({cartItems}) => {
  return (
    <div className='aboutUs'>
      <Navbar size={cartItems.length}/>
        <img className='backImg' src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
  <div className='about'>
    <div className='left'>
      <h1>About Us</h1>
      <p>Ardlight's Pizzeria is a family restaurant based in  Roodeport, Johannesburg, which has been around since 2017. We strive for consistent quality in the preparation of fresh flavourful delicious pizza. Family owned, family run, your home away from home!</p><br/>

       <div className='info'>
        <AiOutlinePhone /> <p>+27 813 399 459</p> <br/>
        <FaDirections /> <p>Directions</p><br/>
        <AiOutlineClockCircle /> <p>Open Now</p>
      </div>
      </div>
      
     
     <div className='right'>
     <div className="form">
            <h1 className="contact-heading"> Contact Us</h1>
            <form className='contactForm'>
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