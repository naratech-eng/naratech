import React from 'react'
import './../index.css';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'


const Card = ({ title,icon,icon_alt, description1, description2, description3 }) => {
  return (
    // <div className="cards">
    //   <div className="card__bg" ></div>
    //   {/* <img className="card__bg" src={image} alt="Card image" /> */}
    //   <div className="card__content">
    //     <h2 className="card__title">{title}</h2>
    //     <p className="card__description">{description}</p>
    //   </div>
    // </div>
    <div className="shadow-lg rounded-xl hover:filter transition ease-in-out delay-150 bg-[#cce3f321] hover:-translate-y-1 hover:scale-105 hover:bg-[#a5d0ee21] hover:bg-opacity-75  duration-300">
      {/* <img class="w-full h-56 object-cover" src={image} alt="Card image" /> */}
      <div className=" inset-0 px-8 py-4  ">
        <h2 className="flex text-lg p-2 font-bold justify-start items-center"><img src={icon} alt={icon_alt} className="flex-shrink-0 mr-4 p-2" /> {title}</h2>
        <div className=" flex flex-col  inset-0 p-0">
          <p className=" flex justify-self-start items-center leading-6 p-0 mb-2 mt-3"><CheckBadgeIcon color='#407BFF' width="32px" className='flex-shrink-0 mr-4 p-0' />{description1}</p>
          <p className="flex justify-self-start items-center leading-6 p-0 mb-2 mt-3"><CheckBadgeIcon color='#407BFF' width="32px" className='flex-shrink-0 mr-4 p-0'/>{description2}</p>
          <p className="flex justify-self-start items-center leading-6 p-0 mb-2 mt-3"><CheckBadgeIcon color='#407BFF' width="32px" className='flex-shrink-0 mr-4 p-0'/>{description3}</p>
        </div>
      </div>
    </div>

  );
}

export default Card;