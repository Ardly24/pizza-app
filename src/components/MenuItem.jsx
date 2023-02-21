import '../Styles/Menu.css'
import React from 'react'


const MenuItem = (menuItem, handleAddItem) => {
  const{name, imgUrl,price}=menuItem
  return (
    <div className='menu--item'>
      <img className='menu--image' src={imgUrl}/>
    <h2>{name}</h2>
    <p>R {price}</p> 
    <button className='btn' onClick={() =>handleAddItem(item)}>Add to cart</button>
    </div>
  )

}
export default MenuItem

