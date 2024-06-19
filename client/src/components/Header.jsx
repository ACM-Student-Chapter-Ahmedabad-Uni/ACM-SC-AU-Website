import React from 'react'
import acm_logo from "../assets/acm_logo.jpg"


const Header = () => {
  return (
    <div className='flex justify-between items-center w-full bg-[#f3eeea] h-20'>
        <div className=' w-30 h-auto flex flex-wrap items-center'>
            <img src={acm_logo} className='p-2 m-2 w-16 h-16'></img>
            <h1 className='font-bold'>Ahmedabad University</h1>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Header