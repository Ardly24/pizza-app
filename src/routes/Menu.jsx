import '../Styles/Menu.css'
import {React, useState} from 'react'
import MenuItem from '../components/MenuItem'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Menu = ({cartItems,menuItems,handleAddItem}) => {

  const menuList = menuItems.map( item =>{
    return (
      <div className='menu--item'>
      <img className='menu--image' src={item.imgUrl}/>
      <h2>{item.name}</h2>
      <p>R {item.price}</p> 
     <button className='btn' onClick={() =>handleAddItem(item)}>Add to cart</button>
    </div>
    )
    // <
    //   MenuItem 
    //    key={item.id}
    //    {...item}
    //  />
  })
  return (
    <><Navbar size={cartItems.length}/>
    <div className='menu'>
    <h1 className='menuTitle'>Our Menu</h1> 
    <div className='menuList'>
           {menuList}
    </div>
  </div>
<Footer />
  </>
  )
}

export default Menu