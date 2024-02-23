import React from 'react'

import main_hero from '../assets/hero/hero_main.svg';

import '../index.css';
const Hero = () => {
  return (
    <>
      <div className="hero-section bg-blend-lighten bg-herox bg-no-repeat h-[750px] 3xl:h-[900px] -mt-[8rem] flex flex-col  ">
        <div className="hero-content flex flex-wrap flex-row justify-between items-start mx-auto container mt-[12rem] relative">
          <div className=" prose z-10 ">
            <h1 className="text-6xl max-w-2xl ">
            Cutting-Edge Software Solutions
            </h1>
            <button className='btn btn-outline btn-primary'>Learn More</button>
          </div>
          <div className="absolute top-0 -right-[1rem] z-0 3xl:w-[70%] xl:w-[60%] ">
            <img src={main_hero} alt="hero for naratech" className="w-[100%]" />
            
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Hero;