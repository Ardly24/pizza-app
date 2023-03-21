import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'


const Home = ({cartItems}) => {
  return (
    <div>
     <Navbar  size={cartItems.length}/>
     <HeroImg/>
     <Footer/>
    </div>
  )
}

export default Home