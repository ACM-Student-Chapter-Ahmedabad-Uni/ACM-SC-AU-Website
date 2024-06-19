import React from 'react'
import acm_logo from "../assets/acm_logo.jpg"
import { Link } from 'react-router-dom'
import Gallery from './Gallery'


const Header = () => {
  return (
    <div className='flex justify-between items-center w-full bg-[#f3eeea] h-20'>
        <div className=' w-30 h-auto flex flex-wrap items-center m-4'>
            <img src={acm_logo} className='p-1 m-2 w-16 h-16'></img>
            <h1 className='text-xl'>Ahmedabad University</h1>
        </div>
        <div className='p-2 m-4 text-lg'>
          <Link to="/" className='mx-4'>About Us</Link>
          <Link to="/gallery" className='mr-4'>Gallery</Link>
          <Link to="/team" className='mr-4'>Team</Link>
          <Link to="/events">Events</Link>
        </div>
    </div>
  )
}

export default Header