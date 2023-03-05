import React from 'react'
import { NavLink } from 'react-router-dom';

const DesktopMenu = () => {
  return (
    <div>
      <nav className='flex justify-end space-x-2 max-lg:hidden text-lg'>
        <NavLink to='/' className= ' hover:text-darkGrayishBlue p-2 hover:underline hover:underline-offset-2 '> Home </NavLink>
        <NavLink to='services' className= ' hover:text-darkGrayishBlue p-2 hover:underline hover:underline-offset-2 '> Services </NavLink>
        <NavLink to='solutions' className= ' hover:text-darkGrayishBlue p-2 hover:underline hover:underline-offset-2 '> Solutions </NavLink>
        <NavLink to='deals' className= ' hover:text-darkGrayishBlue p-2 hover:underline hover:underline-offset-2 '> Deals </NavLink>
        <NavLink to='about' className= ' hover:text-darkGrayishBlue p-2 hover:underline hover:underline-offset-2 '> About Us</NavLink>
      </nav>
    </div>
  )
}

export default DesktopMenu;