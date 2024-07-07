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

      <div className='bg-gray-200 min-h-[40vh] h-auto w-full flex items-center justify-center p-10 text-black'>
          <div className='bg-white rounded-md h-full w-full flex flex-col space-y-4 items-center justify-center'>
              <h1 className='text-black font-bold'> How it Works </h1>
              <p> Filter by brand, length, and weight, then search for all available poles. </p>
           </div>
      </div>
      
    </div>
  );
}
