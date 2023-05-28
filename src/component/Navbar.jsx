import React from 'react';
import { useState } from 'react';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className=' justify-between' >
      <div>
      <div className='  flex flex-row justify-between items-center'>
        <Link to="/">
        <div className=' flex flex-row justify-start items-center'>
          <img src={Logo} alt="Logo" className='w-12 h-12' />
          <h1 className='pl-7 max-md:pl-2 text-lg font-bold text-lime-300 uppercase hover:underline underline-offset-8'>Strengthy</h1>
        </div>
        </Link>
        <div className=' max-sm:hidden'>
          <Link to='/' className='text-lime-300 pr-8 text-lg font-semibold hover:underline underline-offset-8'> Home </Link>
          <a href="#exercise" className='text-lime-300 pl-8 text-lg font-semibold hover:underline underline-offset-8'>Exercise</a>
        </div>
        <div className=' max-sm:hidden'>
          <p className='text-lime-300 pr-8 text-lg font-semibold hover:underline underline-offset-8'><a href="tel:+2349067591527">Contact</a></p>
        </div>
      </div>
      </div>
      <div className=' lg:hidden md:hidden max-lg:hidden max-md:hidden ml-4  relative max-md:bottom-10 max-sm:pl-24 max-sm:flex'>
        { toggle ?
        <RiCloseLine color='#bef264' size={27} onClick={() => setToggle(false)} className='relative left-40' />:
        <RiMenu3Line color='#bef264' size={27} onClick={() => setToggle(true)} className='relative left-40'/>
        }
        {
          toggle && (
            <div className='flex flex-col justify-center bg-black min-h-screen w-full'>
              <div className='flex flex-col'>
                <Link to='/' className='text-lime-300 text-base font-medium hover:underline underline-offset-8'> Home </Link>
               <p className='text-lime-300 text-lg font-semibold hover:underline underline-offset-8'><a href="#exercise" >Exercise</a></p>
              </div>
              <div className=' '>
                <p className='text-lime-300 text-base font-semibold hover:underline underline-offset-8'><a href="tel:+2349067591527">Contact</a></p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
