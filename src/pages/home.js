import React, { useState } from 'react';
import Router from 'next/router';
import home from '@assets/sam.webp';

export default function Home() {
  const [school, setSchool] = useState('');
  const [brand, setBrand] = useState('');
  const [length, setLength] = useState('');
  const [weight, setWeight] = useState('');


  const router = Router;


  const handleFindHomes = () => {
    if (school.trim() !== '') {
      router.push(`/schoolmap?school=${school}`);
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen text-white font-bold">
      <div 
        className='w-full flex flex-grow flex-col space-y-12 md:space-y-4 justify-between items-center py-24' 
        style={{ 
          backgroundImage: `url(${home.src})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* titles */}
        <div className='text-md sm:text-3xl md:text-4xl flex flex-col space-y-1 sm:space-y-3 md:space-y-6 text-center items-center'>
          <h1 className='animate-fade-down animate-duration-1000'> The First Online Marketplace for Poles. </h1>
        </div> 

        {/* school search bar, passes string to Geocoder API for Google Map search */}
        <div className='flex bg-white h-10 md:h-12 w-3/4 md:w-1/2 rounded-lg md:rounded-2xl animate-fade-down animate-duration-500 animate-delay-1000'>
          <input 
            className={`h-full w-5/6 rounded-l-lg md:rounded-l-2xl px-4 text-black outline-none text-xs sm:text-sm lg:text-base`} 
            placeholder=""
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === 'Return') {
                handleFindHomes();
              }
            }}
          />
          <button 
            onClick={handleFindHomes} 
            className='bg-red-500 h-full w-1/4 flex items-center justify-center rounded-r-lg md:rounded-r-2xl hover:bg-red-600 transition ease-in-out duration-300 text-xs sm:text-sm lg:text-base'
          >
            Swap!
          </button>
        </div>

      </div>

      <div className='bg-gray-200 w-full items-center md:items-stretch flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-6 lg:space-x-12 justify-center px-4 py-10'>
        {/* {infoCards.map((card, index) => (
          <div key={index} className={`bg-white text-black h-auto w-64 md:w-80 rounded-2xl flex flex-col items-start space-y-4 p-4 md:p-6 shadow-2xl animate-flip-down animate-duration-1200 animate-delay-${card.delay}`}>
            <h1 className='text-sm md:text-xl lg:text-2xl'> {card.heading} </h1>
            <p className='text-sm md:text-sm lg:text-base font-normal'> {card.description} </p>
          </div>
        ))} */}
      </div>
    </div>
  );
}
