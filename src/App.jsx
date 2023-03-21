import { React, useState } from 'react'
import Home from './routes/Home'
import Menu from './routes/Menu'
import Drinks from './routes/Drinks'
import About from './routes/About'
import ShoppingCart from './routes/ShoppingCart'
import CheckOut from './routes/CheckOut'
import MenuData from './components/MenuList'
import drinksData from './components/drinksData'

import {Route, Routes} from 'react-router-dom'


function App() {
  const {menuItems} = MenuData;
  const {juiceItems} = drinksData;
  const {softDrinks} = drinksData;

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

  //format currency
  const Rand = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
});

  return (
    <Routes>
       <Route path="/" element={<Home cartItems={cartItems}/>}/>
        <Route path="/menu" element={<Menu menuItems={menuItems}  cartItems={cartItems} handleAddItem={handleAddItem} juiceItems={juiceItems} Rand={Rand} /> } />
       <Route path="/about"  element={<About  cartItems={cartItems}/>} />
      <Route path="drinks" element={<Drinks juiceItems={juiceItems} softDrinks={softDrinks} menuItems={menuItems} handleAddItem={handleAddItem} cartItems={cartItems} Rand={Rand}/>}/>
      <Route path="/cart" element={<ShoppingCart  menuItems={menuItems} cartItems={cartItems} handleAddItem={handleAddItem}  handleRemoveItem={handleRemoveItem} Rand={Rand}/>}/>
      <Route path="checkout" element={<CheckOut  menuItems={menuItems} cartItems={cartItems}/>}/>
    </Routes>
  )
}

export default App