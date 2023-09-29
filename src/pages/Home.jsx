import React from 'react'
import { Navbar,Blog,Footer, SliderComponent } from "../Components"

const Home = ({blogs}) => {
  return (
    
    <div className=' bg-gray-200'>
       <Navbar/>
       <SliderComponent/>
    <Blog blogs={blogs?blogs:""}/>
    <Footer/>
    </div>
  )
}

export default Home
