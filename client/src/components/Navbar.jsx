import React, { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Sidebar from './Sidebar';

const Navbar = ({activeMenu}) => {
  const [open, setOpen]= useState(false)

  return (
    <div className='flex bg-white borser border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30'>
      <button className='block lg:hidden text-black'
      onClick={()=>setOpen(!open)}>
        {open ? (
          <HiOutlineX className='text-2xl'/>
        ):(
          <HiOutlineMenu className='text-2xl' />
        )}
      </button>
      <h2 className='text-lg font-medium text-black'>Expense Tracker</h2>
      {open && (
        <div className='fixed top-[61px] -ml-4 bg-white'>
          <Sidebar activeMenu= {activeMenu}/>
        </div>
      )}
    </div>
  )
}

export default Navbar