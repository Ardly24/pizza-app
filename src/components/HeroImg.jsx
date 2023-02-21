import '../Styles/HeroImg.css'
import React from 'react'
import PizzaImg from '../assets/pizza.jpeg'
import { Link } from "react-router-dom"

const HeroImg = () => {
  return(
    <div className="hero">
        <div className="mask">
            <img className="into-img"
              src={PizzaImg} alt="IntroImg"/>
        </div>

    <div className="content">
         <h1>Ardlight's Pizzeria</h1>
         <p>Best Flavors Found In Every Round</p>
         <div>
          <Link to="/menu"
           className="btn">Place Order</Link>  
        </div>
      </div>
    </div>
)
}

export default HeroImg