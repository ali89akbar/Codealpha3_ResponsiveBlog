import React from 'react'
import {  Navbar,Footer, Contents } from '../Components'


const Content = ({blogs}) => {

  return (
    <div className="pt-0  bg-gray-200">
          <Navbar/>
    <Contents blogs={blogs}/>
    <Footer/>
    </div>
  )
}

export default Content
