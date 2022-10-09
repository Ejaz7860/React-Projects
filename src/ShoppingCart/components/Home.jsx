import React from 'react'
import { useState } from 'react'
import Announcement from '../Pages/Announcement'
import Slider from '../Pages/Slider'
import Navbar from './Navbar'

const Home = () => {
  const[data, setData] = useState(0);
  return (
    <>
    <Announcement/>
    <Navbar />
    <Slider />
    </>
  )
}

export default Home