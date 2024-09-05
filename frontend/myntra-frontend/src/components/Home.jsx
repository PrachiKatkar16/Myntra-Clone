import React from 'react'
import Navbar from './Navbar'
import FirstSlider from './FirstSlider'
import Footer from './Footer'
import ShopByCategory from './ShopByCategory'

function Home() {
  return (
    <div>
      <Navbar/>
      <FirstSlider/>
      <ShopByCategory/>
      <Footer/>
    </div>
  )
}

export default Home