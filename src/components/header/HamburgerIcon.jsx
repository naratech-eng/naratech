import React from 'react'

const HamburgerIcon = ({ open, setOpen }) => {
  return (
    <div>
      <button className="hamburger flex flex-col cursor-pointer w-8 h-8 transition-all relative border justify-center items-center" onClick={() => setOpen(!open)}>
        <span className="line "></span>
        <span className="line "></span>
        <span className="line "></span>
      </button>
    </div>
  );
}

export default HamburgerIcon;