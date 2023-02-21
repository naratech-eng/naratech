import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react'

const ThemeSwitch = () => {

  const [theme, setTheme] = useState(null);

  useEffect(()=>{
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      // document.documentElement.classList.add('dark')
      setTheme('dark')
      
    } else {
      // document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  },[])
  
  useEffect(()=>{
    
    // document.querySelector('html').setAttribute('data-theme', theme);
    if (theme === 'dark'){
      document.querySelector('html').setAttribute('data-theme', 'dark');
    }else{
      
      document.querySelector('html').setAttribute('data-theme', 'light');
    }

  },[theme])

  const switchTheme = ()=>{
    setTheme(theme === 'dark' ? 'light' : 'dark');

  }

  return (
    <>
      <button className="switch-mode rounded-full bg-slate-200 p-3" onClick={switchTheme} >
        {theme === 'light' ? <MoonIcon className='h-8 w-8'/> : <SunIcon className='h-8 w-8' /> }
        
        
      </button>
    </>
  )
}

export default ThemeSwitch