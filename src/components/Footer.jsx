import React from 'react'
import '../Styles/Footer.css'

import {BsFacebook,BsTwitter,BsLinkedin} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'

const Footer = () => {
    return(
        <div className="footer">
            <div className='socialMedia-icons'>
            <BsFacebook className='icon'/>
            <BsTwitter className='icon'/>
            <BsLinkedin className='icon'/>
            <RiInstagramFill className='icon'/>
            </div>   
            <p> &copy; 2023 ardlightpizza.com</p>
        </div>
    )
}

export default Footer;