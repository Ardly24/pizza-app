import '../Styles/Navbar.css'
import logo from '../assets/pizza--logo.png'
import {TiShoppingCart} from 'react-icons/ti'

import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import {FaBars,FaTimes } from 'react-icons/fa'

export default function Navbar(props){
    const [click, setClick]= useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor]=useState(false)
    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true)
        }else{
           setColor(false)
        }
    }

  window.addEventListener("scroll", changeColor);
    return(
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/pizza-app">
            <img className='logo' src={logo}/>
           </Link>

        <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li>
                <Link to="/pizza-app">Home</Link>
            </li>
            <li>
                <Link to="/menu">Menu</Link>
            </li>

            <li>
                <Link to="/about">About</Link>
            </li>
            
            <li>
                <Link to="/cart"><TiShoppingCart size='1.5rem'/></Link>
                <span className='items-count'>{props.size}</span>
            </li>
            
        </ul>

        <div className='hamburger' onClick={handleClick}>
            {click? (<FaTimes  size={20} style={{color: "#fff"}}/>):
              (<FaBars  size={20} style={{color: "#fff"}}/>)
              }
        </div>
       
        </div>
    )
}