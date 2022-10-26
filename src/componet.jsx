import React from 'react'
import "./scss/main.scss"
import { Link } from "react-router-dom"

const componet = () => {
  return (
    <>
    <section className='Home'>
        <Link title='Landing Page' className='LandingPage' target='_blank' to={"/plywood"}>Landing Page</Link>
        <Link title='Crypto App' className='LandingPage' target='_blank' to={"/Crypto"}>Crypto App</Link>

    </section>
    </>
  )
}

export default componet