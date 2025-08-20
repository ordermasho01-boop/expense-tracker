import React, { useContext } from 'react'
import Navbar from '../Navbar'

import Sidebar from '../Sidebar'
import { useAuth } from '../../contexts/userContext'



const DashboardLayout = ({children, activeMenu}) => {
    const {user} = useAuth()
    
  return (
    <div>
        <Navbar activeMenu={activeMenu}/>
        {user && (
            <div className="flex">
                <div className=''>
                    <Sidebar activeMenu={activeMenu}/>
                </div>
                <div className='grow mx-5 '>{children}</div>
            </div>
        )}
    </div>
  )
}

export default DashboardLayout