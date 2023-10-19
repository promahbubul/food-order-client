import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const MainLayout = () => {
    return (
        <div className='bg-[#0D0D0D] md:text-white '>
            <div className='max-w-6xl mx-auto'>
            <Navbar />
                <Outlet />
            </div>
        </div>

    )
}

export default MainLayout