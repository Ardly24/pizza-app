import { React, useState } from 'react'
import Home from './routes/Home'
import Menu from './routes/Menu'
import About from './routes/About'
import ShoppingCart from './routes/ShoppingCart'
import MenuData from './components/MenuList'

import {Route, Routes} from 'react-router-dom'

function App() {
  const {menuItems} = MenuData;
  const [cartItems, setCartItems] =useState([])

  const handleAddItem =(product) =>{
    const ItemExist = cartItems.find((item) => item.id === product.id);
    if(ItemExist){
      setCartItems(cartItems.map((item) => item.id === product.id ?
      {...ItemExist, quantity: ItemExist.quantity +1} : item)
      );
    }
      else{
        setCartItems([...cartItems,{...product, quantity:1}]);
      }
  }

  const handleRemoveItem =(product) =>{
    const ItemExist = cartItems.find((item) => item.id === product.id);
    if(ItemExist.quantity === 1){
      setCartItems(cartItems.filter((item) =>  item.id !== product.id))
    } else{
      setCartItems(
        cartItems.map((item) => 
        item.id ===product.id ?
        {...ItemExist, quantity: ItemExist.quantity -1} : item))
    }

  }

  return (
    <Routes>
       <Route path="/" element={<Home cartItems={cartItems}/>}/>
        <Route path="/menu" element={<Menu menuItems={menuItems}  cartItems={cartItems} handleAddItem={handleAddItem} /> } />
       <Route path="/about"  element={<About  cartItems={cartItems}/>} />
      <Route path="/cart" element={<ShoppingCart  menuItems={menuItems} cartItems={cartItems} handleAddItem={handleAddItem}  handleRemoveItem={handleRemoveItem}/>}/>
    </Routes>
  )
}

export default App