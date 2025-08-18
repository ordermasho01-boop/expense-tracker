import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='flex flex-row '>
        <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
            <h2 className='text-lg font-medium text-black'>Expense Tracker</h2>
            {children}
        </div>
        <div>
            <img src="/banner.jpg" alt="" className='hidden md:inline-block w-[60vw] h-screen object-cover' />
        </div>
    </div>
  )
}

export default AuthLayout