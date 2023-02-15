import React from 'react'
import { createBrowserRouter, createRoutesFromElements, NavLink, Outlet, Route, RouterProvider } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <>
      <div className="navbar">
        <header className="">
          <nav>
            <NavLink to='/'> Home </NavLink>
            <NavLink to='services'> Services </NavLink>
            <NavLink to='solutions'> Solutions </NavLink>
            <NavLink to='deals'> Deals </NavLink>
            <NavLink to='about'> About </NavLink>
          </nav>
        </header>
        
        <main>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default Navbar