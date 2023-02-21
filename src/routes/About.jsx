import '../Styles/About.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from 'react';


const About = ({cartItems}) => {
  return (
    <div className='aboutUs'>
      <Navbar size={cartItems.length}/>
        <img className='backImg' src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
  <div className='about'>
    <div className='left'>
      <h1>About Us</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
     
     <div className='right'>
     <div className="form">
            <h1 className="contact-heading"> Contact Us</h1>
            <form >
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