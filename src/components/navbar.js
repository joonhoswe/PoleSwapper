import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade as Hamburger } from 'hamburger-react';
import Login from './login';
import Link from 'next/link';
import notLoggedIn from '@assets/notLoggedIn.png';
import Image from 'next/image';
import { useAuth0 } from "@auth0/auth0-react"; 

export default function Navbar() {

  const { isAuthenticated } = useAuth0();

  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const sidebarVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" }
  };

  return (
    <div className="flex items-center justify-between w-full h-14 sticky top-0 z-50 text-black bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <div className='items-center justify-between w-full h-14 px-4 hidden md:flex'>
        
        <div className="flex items-center justify-center space-x-6">
        <p> Logo </p>
        </div>
        
        <div className='flex flex-row space-x-2'>
          <Login />

          {/* profile pic or default for not signed in */}
          {
            isAuthenticated ? (
              <></>
            ) : (
              <Image src={notLoggedIn} alt='Not Logged In' className='w-6 h-6' />
            )
          }
        </div>

      </div>

      <div className='flex items-center justify-between w-full h-14 px-4 md:hidden'>

        <p className=''> Logo </p>
        {/* Mobile NavBar Icon */}
        <div className='flex flex-row space-x-0.5 items-center justify-center'>
          <Login />
          <Hamburger rounded size={24} duration={0.4} distance='lg' hideOutline={false} onToggle={toggleMenu} />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              transition={{ duration: 0.4 }}
              className="z-20 pt-12 pb-28 absolute top-full right-0 h-screen w-1/3 bg-white flex flex-col justify-between"
            >
              <div className='flex flex-col space-y-6'>
                  <button> </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence> 
      </div>
    </div>
  );
};
