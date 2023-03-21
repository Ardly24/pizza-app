import '../Styles/Menu.css'
import {React, useState} from 'react'
import { Link } from "react-router-dom"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Menu = ({cartItems,menuItems,handleAddItem, Rand}) => {
  const [isShown, setIsShown] = useState(false);


  const menuList = menuItems.map( item =>{
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
    <h1 className='menuTitle'>Our Menu</h1> 
    <div>
    <Link to="/drinks"
         className="btn">Go to drinks</Link>
         </div>
    <div className='menuList'>
           {menuList}
    </div>
  </div>
<Footer />
  </>
  )
}

export default Menu