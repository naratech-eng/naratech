import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import HamburgerIcon from './HamburgerIcon';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex justify-between items-center px-4 py-3 md:py-0 md:px-8">
      <HamburgerIcon open={isOpen} setOpen={setIsOpen} />
      
      {/* <button
        type="button"
        className="md:hidden block"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 6H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 6H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 6H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            />
          )}
        </svg>
      </button> */}
      {/* <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block md:flex md:items-center`}
      >
        <a href="#" className="block md:inline-block px-3 py-2">
          Home
        </a>
        <a
          href="#"
          className="block md:inline-block px-3 py-2 mt-1 md:mt-0 md:ml-2"
        >
          About
        </a>
        <a
          href="#"
          className="block md:inline-block px-3 py-2 mt-1 md:mt-0 md:ml-2"
        >
          Contact
        </a>
      </div> */}
      <nav className={`${
          isOpen ? 'block' : 'hidden'
        } md:block md:flex md:items-center`}>
        <NavLink to='/' className= ' hover:text-darkGrayishBlue p-2 hover:underline hover:underline-offset-2 '> Home </NavLink>
        <NavLink to='services' className= ' hover:text-darkGrayishBlue p-2 hover:underline hover:underline-offset-2 '> Services </NavLink>
        <NavLink to='solutions' className= ' hover:text-darkGrayishBlue p-2 hover:underline hover:underline-offset-2 '> Solutions </NavLink>
        <NavLink to='deals' className= ' hover:text-darkGrayishBlue p-2 hover:underline hover:underline-offset-2 '> Deals </NavLink>
        <NavLink to='about' className= ' hover:text-darkGrayishBlue p-2 hover:underline hover:underline-offset-2 '> About Us</NavLink>
      </nav>
    </div>
  );
}

export default MobileMenu;