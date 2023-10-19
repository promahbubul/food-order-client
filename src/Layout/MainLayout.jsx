import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const MainLayout = () => {
    return (
        <div className='bg-[#0D0D0D]'>
            <Navbar />
            <Outlet />
        </div>

    )
}

export default MainLayout