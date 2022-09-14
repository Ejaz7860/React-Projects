import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar/Navbar"

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Dashboard