import '../Styles/Menu.css'
import {React, useState} from 'react'
import { Link } from "react-router-dom"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Drinks = ({juiceItems, softDrinks, cartItems,handleAddItem, Rand}) => {
    const [isShown, setIsShown]=useState(false);

    const [formData, setFormData]= useState({drinkType: ""})

    //Set Form data
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    // Loop through list of juice types
    const juiceList = juiceItems.map( item =>{
        return (
          <div 
            className='menu--item'
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
          <img className='menu--image' src={item.imgUrl}/>
          <h2>{item.name}</h2>
          <p>{Rand.format(item.price)}</p> 
          <button className='btn' onClick={() =>handleAddItem(item)}>Add to cart</button>
          {isShown && cartItems.length >0 &&(
          <Link to="/cart"
         className="btn btn-light">Go to cart</Link>    
      )}
        </div>
        )
      })

          // Loop through list of juice types
    const softDrinkList = softDrinks.map( item =>{
        return (
          <div 
            className='menu--item'
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
          <img className='menu--image' src={item.imgUrl}/>
          <h2>{item.name}</h2>
          <p>{Rand.format(item.price)}</p> 
          <button className='btn' onClick={() =>handleAddItem(item)}>Add to cart</button>
          {isShown && cartItems.length >0 &&(
          <Link to="/cart"
         className="btn btn-light">Go to cart</Link>    
      )}
        </div>
        )
      })


    return (
        <><Navbar size={cartItems.length}/>
        <div className='menu'>
        <h1 className='menuTitle'>Get something to drink</h1> 
        <form className='forms'>
        <div>
        <input type="radio" id="fruit-juice" name="drinkType" value="fruit-juice" onChange={handleChange}/>
        <label htmlFor='dine-in'>Fruit Juice</label> 
        <br/> 
        <input type="radio" id="soft-drink" name="drinkType" value="soft-drink" onChange={handleChange}/>
        <label htmlFor='soft-'>Soft Drinks</label> 
        </div>
        <div>
         </div>
        </form>
                
        <Link to="/menu"
         className="btn">Go to Menu</Link>
         

        {formData.drinkType === "fruit-juice" &&(
          <div className='menuList'>
            {juiceList}
        </div>)}
        {formData.drinkType === "soft-drink" &&(
          <div className='menuList'>
            {softDrinkList}
        </div>)}
      </div>
      </>
      )
}

export default Drinks