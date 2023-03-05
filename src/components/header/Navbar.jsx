import React, { useEffect, useState } from 'react'
import { NavLink, Outlet} from 'react-router-dom';
import logo from '../../assets/logo/transparent_logo_naratech.png'
import '../../index.css';

import ThemeSwitch from '../ThemeSwitch';
import DesktopMenu from './DesktopMenu';
import HamburgerIcon from './HamburgerIcon';
import MobileMenu from './MobileMenu';

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);
    

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
      mediaQuery.addListener(handleMediaQueryChange);
      return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
      };
    }, []);
    
  return (
    <>
      <div className="navbarx ">
        
          
        <header className="navbar-container">
          <div className="logo ">
            <img src={logo} width='250px' alt='Naratech Logo'/>
          </div>
          {isMobile? <MobileMenu/> : <DesktopMenu/>}
          
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