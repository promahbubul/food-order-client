import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci';
import logo from '../../assets/images/'


const Navbar = () => {
    const NavLinks = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/signin">Sign In</NavLink></li>

    </>
    return (

        <>
            <div className="navbar bg-[#0D0D0D] text-white">
                <div>
                    <NavLink to={'/'}><img src='' /></NavLink>
                </div>
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu text-black-1 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {NavLinks}

                        </ul>
                    </div>

                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="relative items-center  flex flex-row">
                        <input className=' bg-[#0D0D0D] border rounded-full border-primary-2 text-white px-4 py-2' type="text" name="search" id="search" placeholder='Search...' />
                        <CiSearch className='relative right-7 text-lg text-white ' />
                    </div>
                </div>
            </div>
        </>
  )
}

export default Navbar