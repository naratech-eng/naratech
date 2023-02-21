import React from 'react'
import { NavLink, Outlet} from 'react-router-dom';
import logo from '../../assets/logo/transparent_logo_naratech.png'
import '../../index.css';

import ThemeSwitch from '../ThemeSwitch';

const Navbar = () => {
  
  return (
    <>
      <div className="navbarx ">
        
          
        <header className="navbar-container">
          <div className="logo ">
            <img src={logo} width='250px' alt='Naratech Logo'/>
          </div>
          <nav className='flex justify-end space-x-8 max-lg:hidden text-lg'>
            <NavLink to='/' className= ' hover:text-darkGrayishBlue p-2 hover:underline hover:underline-offset-2 '> Home </NavLink>
            <NavLink to='services' className= ' hover:text-darkGrayishBlue p-2 hover:underline hover:underline-offset-2 '> Services </NavLink>
            <NavLink to='solutions' className= ' hover:text-darkGrayishBlue p-2 hover:underline hover:underline-offset-2 '> Solutions </NavLink>
            <NavLink to='deals' className= ' hover:text-darkGrayishBlue p-2 hover:underline hover:underline-offset-2 '> Deals </NavLink>
            <NavLink to='about' className= ' hover:text-darkGrayishBlue p-2 hover:underline hover:underline-offset-2 '> About Us</NavLink>
          </nav>
          <div className="flex space-x-4 items-center">
            <button className='btn btn-secondary block text-2xl '> Hire Us</button>
            <ThemeSwitch />

          </div>
        </header>
        
        
        <main>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default Navbar